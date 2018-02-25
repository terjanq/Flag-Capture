# Mario in Maze &ndash; *Write-up by @terjanq*

## Description

In the problem, we were given the `N × M matrix`, filled with some values, i.e. `chocolate tastiness values`. Mario starts from the point `(1, 1)` and goes to the point `(n, m)` moving either in `south` or `east` direction, eating each chocolate collected on the path. Our goal is to maximize the tastiness Mario can achieve.  
But there is one restriction, Mario must visit each of the given `checkpoints`, i.e. following `J` points.  

All the communication with the server goes through `TCP protocol`, using tools like `nc ip port`.



## Solution

Without this restriction, it is a school problem for use of **Dynamic Programming** method. To each point `(i, j)` Mario can arrive from either `(i-1, j)` or `(i, j-1)` point, so the maximum tastiness Mario can achieve in `(i, j)` is defined as: 
```cpp
arr[i][j] = max( arr[i-1][j], arr[i][j-1] ) + arr[i][j]
```

We can notice, that the the path through checkpoints is unambiguous, i.e. the order of which Mario can visit `J` checkpoints is uniquely designated. With that observation, we can apply exactly the same algorithm, but when Mario steps on the checkpoint `(I, J)` we crop the `Array` to the new one of size `(N - I + 1) × (M - J + 1)` with new starting point:  `(I, J)`. From now on we repeat the algorithm for each visited checkpoint.    
The time complexity of this solution is `O(N × M)`.  


## Code

As, I am not too proficient with Python yet I've just wrote a simple program in C++ and redirected the input. 

Full code of [mario_in_maze.cpp] is as below:

```cpp
#include <iostream>

using namespace std;

int main(){
	
	int n, m, J, a, b;
	cin >> n >> m;

	int arr[n+7][m+7];
	bool checkpoints[n+7][m+7];

	for(int i=0; i < n+7; i++)
		for(int j=0; j < n+8; j++)
			checkpoints[i][j] = arr[i][j] = 0;

	for(int i=1; i<=n; i++)
		for(int j=1; j<=m; j++)
			cin >> arr[i][j];
		
	cin >> J;

	for(int i=0; i<J; i++){
		cin >> a >> b;
		checkpoints[a][b] = 1;
	}

	int startJ = 1, startI = 1;

	for(int i=1; i<=n; i++)
		for(int j=startJ; j<=m; j++){
			if(i == startI) 
					arr[i][j] += arr[i][j-1];
			else
				if(j == startJ)
					arr[i][j] += arr[i-1][j];
				else	
					arr[i][j] = max(arr[i-1][j], arr[i][j-1]) + arr[i][j];

			if(checkpoints[i][j]){
				startJ = j;
				startI = i;
			}
		}

	cout << arr[n][m];
	
	return 0;
}
```

## Flag
After completing the ten levels, we are given the flag: **xiomara{recursion_is_better_than_iteration}**

[mario_in_maze.cpp]: <./mario_in_maze.cpp>
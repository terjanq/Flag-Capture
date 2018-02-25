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
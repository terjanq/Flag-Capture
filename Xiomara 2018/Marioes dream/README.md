# Mario's dream &ndash; *Write-up by @terjanq*

## Description

In this challenge we were asked to determine the number of all solutions of the equation: `p xor x > x` for given `x`, where `p < x`. We are also given the integer `t` which is a number of test-cases.  
The author's intention was to solve it within time of `O(t x logx)`. However, the next test-case was only given after successful answer for previous one, so the time was determined by the connection delay, not by algorithm.  

## Solution

Apart from this issue, I quickly invented an algorithm working within expected time complexity and even quicker implemented the solution.  
If we know how the `xor` operation works, the solution is super easy. Here are four observations leading to an algorithm:  
- The binary representation of `p` must be 1 bit shorter than x.
- We can put either `0` or `1` for each position in `p` where the corresponding bit in `x` is set to `0`.  
- In order to ''change'' `1` in `x` to `0` in `p` at corresponding positions we have to set at least one empty bit to `1` at the left.
- If we ''change'' the bit `0` to `1`, every bit at the right can be either `1` or `0` so the results increases of `2^i`  where `i` is the position of examined bit (from left to right, starting with 0).  

So the algorithm is to iterate over each bit of `x`, and if it is `0` we add to result `2^i`. 


## Code

Here is an algorithm written in Python

```python
def countSol(number):
	binary = int2b(number)[::-1] #convert to binary, and do a reverse
	result = 0
	for i, x in enumerate(binary):
		if x == '0':
			result += 2**i

	return result
```

Full code of [marioes_dream.py] avaible in sources.

## Flag

As I mentioned early, the algorithm wasn't the main issue of the task, but the number of test-cases which made solving the task within 10 minutes ''impossible'' for big values. After a few runs, I noticed that every number in the input was less than 100 000, including test-cases, and seemed pretty random. So I kept dropping the connection until I got the input with test-cases lower than 3 000. After a few minutes the flag has arriven: **xiomara{link_lists_are_cool_btw}**!



[marioes_dream.py]: <./marioes_dream.py>
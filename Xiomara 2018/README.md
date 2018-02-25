# Xiomara 2018
*Fri, 23 Feb 2018, 18:00 CET — Sat, 24 Feb 2018, 18:00 CET*

## Standings

Place | Team | Score
---: | :---- | :---
1 | dcua | 2251
2 | T0X1CV4P0R | 2251
3 | 0x90r00t | 2251
4 | Aperi'Kube | 2251
5 | spritzers | 2151
6 | Harekaze | 2101
7 | PartOfPwnium | 2101
8 | noraneco | 2051
9 | InfoSecIITR | 1851
**10** | **catfish** | **1801**
&vellip; | | 
240 | LYL | 1

&nbsp;


## Solved
We have solved all the problems except: **Flag Locker** *(Web, 200)*, **Mario** *(Misc, 50)*, **Trash dump** *(Forensics, 100)*, **Rabbit Hole** *(Forensics, 100)*

#### Problems solved by me:
- **Flag Checker V1.0** (Web, 50)
- **Flag Checker V2.0** (Web, 150)
- **Flag Generator Software** (Web, 100)
- **Mario's Dream** (Misc, 100)
- **Mario in maze** (Misc, 150)
- **xiomara captcha** (Misc, 100)

#### Problems solved in cooperation with [@Ac3]:
- **Mario Mystery** (rev, 50)
- **Unusual Traffic** (Forensics, 100)
- **Dig_Deep** (Forensics, 150)

### Writeups
- [Mario in maze](https://github.com/terjanq/Flag-Capture/tree/master/Xiomara%202018/Mario%20in%20Maze#mario-in-maze--write-up-by-terjanq) (Misc, Algorithms)
- [Mario's dream](https://github.com/terjanq/Flag-Capture/tree/master/Xiomara%202018/Marioes%20dream#marios-dream--write-up-by-terjanq) (Misc, Algorithms)

&nbsp;

## Comment
These competitions had a lot of issues. Few tasks were designed very badly. Task description was unreadable in one particular example, i.e.
> Encrption Scheme:-
Get the Number of Alphabets in PlainText,call it size,Multiply Position of Text with Size and do mod 26.
Right Shift the PT alphabets one by one with the corresponding values & encoded with alphametic puzzle {PIQWB + FXWTK =APUAVD}.  
>  
> Flag is not wrapped in xiomara{}, while sumbitting do xiomara{flag}

Apart from that, the description was just wrong, because the given puzzle was unsolvable. 

Another thing is that one of the admins &ndash; *@drunkskunk97*, the author of the task I am going to describe, was very arrogant and unpleasant when I was asking questions about an algorithmic task. Along with that, he tried to convince me that it's completely normal to proceed 16 000 numbers where you get each number after solving the previous one. My problem was, that the connection was dropping after every 10 minutes so I wasn't able to finish calculations and he stated that the running time should be in SECONDS! Yes, you hear right &mdash; in SECONDS with 200ms delayed connection... The calculation was based on a simple math: 16 000 &times; 0.0001s *(execution time)* equals to 1.6s. And with that, he accussed me of ''bruteforcing'' the solution.    
''Hopefuly'' the challenge was vulnerable - number of test cases was probably a random number between (1, 100 000), so when I kept dropping connections long enough, I got an input with 1 940 test cases to solve, which was ''little'' enough to get the flag after few minutes.
However, the author dreamed the solution O(k&times;logn), which was even stated in the problem description, but a solution O(k&times;n) wasn't any different from the preceding one, because... each number was generated in the same way! &ndash; limited by 100 000. So, in the both cases the time complexity was determined by the delay value, not by algorithm.

Beside a questionable design of the tasks, the website was down for a good few hours and none of the admins said a word on the IRC channel during this break. Also all the servers along with the challenge descriptions have been shut down just after the competitions had ended, so it's hard to write any write-up.  

Upon these circumstances, and many more, I rate this CTF for **2/10** even though there were a few interesting problems.


#### Links
- http://xiomara.xyz/
- https://ctftime.org/event/580


[@Ac3]:<https://github.com/Acee11>
[stawrocek]:<https://github.com/stawrocek>
[terjanq]:<https://github.com/terjanq>
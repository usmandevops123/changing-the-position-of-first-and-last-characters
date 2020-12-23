var str=prompt("Enter a String");
if(str.length>=1)
{
    var fchar=str.substring(0,1);
    var lchar=str.substring(str.length-1,str.length);
    var rchar=str.substring(1,str.length-1)
}  

document.write(lchar + rchar +fchar);
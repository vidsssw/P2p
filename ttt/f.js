
var c="abcdefghijklmnopqrstuvwxyz";
var index=[]
function encode(str){
  var r=0;
  for (i of str)
  {
    r=r*c.length+c.indexOf(i)
  }
  r=String(r)
  var ans=""
  var count=0
  if((r.length)%2!=0)
  {
    r+='0'
  }
  console.log(r)
  for(i=0;i<=r.length-2;i=i+2)
  {
    var no=Number(r.substring(i,i+2))
    console.log(no)
    no+=28
    console.log(no)
    ans=ans+String.fromCharCode(no)
    console.log(ans)
  }

  return ans

}

function decode(str){
  var  no=""
  for(i of str)
  {

        n=str.charCodeAt(str.indexOf(i))
        n=n-28
        no+=String(n)

  }
  console.log(no)
  var r=""
  no=Number(no)
  while (no!=0)
  {
    r=r+c.charAt(no%c.length)
    no=Math.floor(no/c.length)
  }
  if(r=="")
  {
    r=c.charAt(0)
  }
   return r.split("").reverse().join("");
}

a=encode("hello")
console.log(a)
console.log(decode(a))

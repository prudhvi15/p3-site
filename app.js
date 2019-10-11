function largest()
{
 const str1=document.getElementById("str1").value;
 const str2=document.getElementById("str2").value;
 const long=Math.max(str1.length,str2.length);
 localStorage.str1=document.getElementById("str1").value
 localStorage.str2=document.getElementById("str2").value
 localStorage.long=Math.max(str1.length,str2.length)
 document.getElementById("result").innerHTML="The longest length is:"+localStorage.long;

}
document.getElementById("addButton").addEventListener('click',largest);
function clickCounter() {
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("count").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("count").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function valid(){
  var res=document.getElementById("fname").value;
   if(res.length==0)
  {
      document.getElementById("msg").innerHTML="*First name is empty"
      
      return false;
  }
  else if(isNaN(res)==false)
  {
      document.getElementById("msg").innerHTML="Cannot enter number in place of first name"
      
      return false;

  }
  else if(res.length==0)
  {
      document.getElementById("msg").innerHTML="*First name is empty"
      
      return false;
  }
  
  else if(res.length<3)
  {
      document.getElementById("msg").innerHTML="*First name should have minimum 3 characters"
      
      return false;
  }
  else if(res.length>20)
  {
      document.getElementById("msg").innerHTML="*First name should have minimum 3 characters"
      
      return false;

  }
  else if(isNaN(res)==false)
  {
      document.getElementById("msg").innerHTML="Cannot enter number in place of first name"
      
      return false;

  }
  
var res=document.getElementById("lname").value;
if(res.length==0)
  {
      document.getElementById("msg2").innerHTML="*Last name is empty"
      
      return false;
  }
   else if(isNaN(res)==false)
  {
      document.getElementById("msg2").innerHTML="Cannot enter number in place of last name"
      
      return false;

  }
  
  else if(res.length<3)
  {
      document.getElementById("msg2").innerHTML="*Last name should have minimum 3 characters"
      
      return false;
  }
  else if(res.length>20)
  {
      document.getElementById("msg2").innerHTML="*Last name should have minimum 3 characters"
      
      return false;

  }

  var res=document.getElementById("em").value
  var t=/^[a-z 0-9]{5,25}(@gmail.com)$/.test(res)
  if(t==false){
      document.getElementById("msg3").innerHTML="*Invalid"
      return false;
  }
  var qes=document.getElementById("ph").value;
  var f=/^[6-9]{1}[0-9]{9}$/.test(qes);
  if( f==false  )
  {
   document.getElementById("msg4").innerHTML="INVALID";
     return false;
  }
  else{
      alert("Congrats your details are correct!!!!You are directed to Online Calculator")
  }
}
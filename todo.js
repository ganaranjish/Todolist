var uname = document.getElementById("text");
var pwd = document.getElementById("pass");
var btn = document.getElementById("btn");
var error1 =document.getElementById("error1");
var error2 =document.getElementById("error2");
var outbtn=document.getElementById("outbtn");


function username(){
    if(uname.value == "admin"){
        error1.innerHTML = "Valid username";
    }
    else{
        error1.innerHTML = "Invalid username";
    }
}


function password(){
    if(pwd.value == "12345"){
        error2.innerHTML = "Valid password";
    }
    else{
        error2.innerHTML = "Invalid password";
    }
}


btn.addEventListener("click", function() {
    if(uname.value == "admin" && pwd.value == "12345"){
        window.location.href = "./dolist.html";
    }
    else if(uname.value == "" && pwd.value == ""){
        alert("Enter valid username & password");
    }
    else if(uname.value == "admin" && pwd.value == ""){
        alert("Enter valid password");
    }
    else if(uname.value == "" && pwd.value == "12345"){
        alert("Enter username");
    }
    else{
        alert(" Please enter the valid details");
    }
});

function logout(){
    window.location.href="index.html";
};

function Ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState==4&&this.status==200){
          var data = JSON.parse(this.responseText);
          myFunction(data);
        }
      };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
    Ajax();
    
    function myFunction(data){
    
      data.forEach( function (obj){
        if(obj.completed==true){  
          $('#demo').append('<input class="form-check-input" type="checkbox" disabled checked value="'+obj.id+'"/> '+obj.title +'<br/>');
        }
        else{  
          $('#demo').append('<input class="form-check-input" id="check"  onclick="check_();" type="checkbox" value="'+obj.id+'"/> '+obj.title +'<br/>');
        }
      });
      let count=0;
      let target=5;
      $('input[type="checkbox"]').on('change',function(){
        if($(this).prop('checked')==true){
        count++;
        if(count==target){
            alert(`Congrats! You have completed ${target} tasks!`);
          }
        }
        else{
          count--;
        }
      });
    }
   
    // function check_(){
    //   alert("hii");
    // }
   
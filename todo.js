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
          $('#demo').append('<input class="form-check-input" type="checkbox" disabled="true" checked value="'+obj.id+'"/> '+obj.title +'<br/>');
        }
        else{  
          $('#demo').append('<input class="form-check-input" id="check" type="checkbox" value="'+obj.id+'"/> '+obj.title +'<br/>');
        }
      });
    }
    
    
    /*$(document).ready(function(){
      
      $('body').on('change', 'input[type="checkbox"]',function(){
    
        var promise = new Promise(function(resolve, reject){
    
          var count = $('input[type=checkbox]:checked').not(':disabled').length;
          if(count==5){
              resolve("Congrats. 5 Tasks heve been Successfully Completed");
          }else{
              reject(`you have completed ${count} Tasks`);
          }
    
        });
        promise.then(function(s){
           alert(s);
          })
          .catch(function(e){
          console.log(e);
        })
      });
    })*/
    
    /*$(document).ready(function(){

        var $checkboxes = $('#check  input[type="checkbox"]');
            
        $checkboxes.change(function(){
            var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
            if(countCheckedCheckboxes==5)
            {
                window.alert("you have selected 5 todos");
            }
        });
    });*/
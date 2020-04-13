function MMonblus(){
    var password=document.getElementById("password");
    var re = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,}$/;
   // var reg=/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;

  if(password.value==""){
  document.getElementById('MMerror').innerText="请输入密码";
  }
    else if(password.value.length < 6){
       document.getElementById('MMerror').innerText="格式错误,,密码长度至少为6位";
   }

   else if(!re.test(password.value)){
       document.getElementById('MMerror').innerText="格式错误,必须包含英文字母大小写和数字";
  }
   else {
  document.getElementById('MMerror').innerText ="";
  }
}
function MMonfocu(){
  document.getElementById('MMerror').innerText ="";
}

function YHMonblus(){
    var username=document.getElementById("username");
   // var reN =/^\d{6,18}$/;
    var re = /^[a-zA-Z_]{6,18}$/;
    if(username.value==""){
        document.getElementById('YHMerror').innerText="请输入用户名";
    }
    else if(username.value.length < 6 ||username.value.length > 18){
        console.log(username.value);
        document.getElementById('YHMerror').innerText="格式错误,长度应为6-18个字符";
    }
    else if(!re.test(username.value)){

        document.getElementById('YHMerror').innerText="格式错误,只能包含英文字母和下划线";
    }
    else {
        document.getElementById('YHMerror').innerText ="";
    }
}
function YHMonfocu(){
        document.getElementById('YHMerror').innerText ="";
}

function LXDHonblus(){
    var phone=document.getElementById("phone");
    var re = /^1\d{10}$/;
    if(phone.value==""){
        document.getElementById('LXDHerror').innerText="请输入联系电话";
    }
    else if(!re.test(phone)){
        document.getElementById('LXDHerror').innerText="电话格式输入错误";
    }
    else {
        document.getElementById('LXDHerror').innerText ="";
    }
}
function LXDHonfocu(){
    document.getElementById('LXDHerror').innerText ="";
}

function DZYXonblus(){
    var email=document.getElementById("email");
    var re= /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
    if(email.value==""){
        document.getElementById('DZYXerror').innerText="请输入电子邮箱";
    }
    else if(!re.test(email.value)){
        document.getElementById("DZYXerror").innerHTML="邮箱格式不正确";
    }
    else {
        document.getElementById('DZYXerror').innerText ="";
    }
}
function DZYXonfocu(){
    document.getElementById('DZYXerror').innerText ="";
}

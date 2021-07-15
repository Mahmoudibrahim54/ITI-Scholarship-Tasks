var uName;
var uGender;
var uColor;
var firstTime = true;
var date = new Date();
date.setTime(date.getTime()+(30*24*60*60*1000));
var stringDate = date.toGMTString();
function redirect() {
  setCookie("name", uName,stringDate);
  setCookie("gender", uGender,stringDate);
  setCookie("color", uColor,stringDate);
  setCookie("visited", "0",stringDate);
  window.location.replace("info.html");
}
function saveGender(gender) {
  uGender = gender.value;
  console.log(uGender);

}
function saveName(name) {
  uName = name.value;
}

function changeColor(color) {
  uColor = color.value;
}

function getCookie(cName) {
  console.log(cName);
  if(arguments.length != 1 || typeof(arguments[0]) != "string"){
    throw new Error("please enter valid arguments")
  }
  else{
  var myInfo = document.cookie.split(";");
  for (var i = 0; i < myInfo.length; i++) {
    console.log(myInfo[i]);
    var details = myInfo[i].split("=");
    var checked = details[0].trim();
    console.log(checked+" det");
    if (cName === checked) {
      console.log("inn");
      return details[1].trim();
    }
  
  }
}
}
function hasCookie(cName) {
  if(arguments.length != 1 || typeof(arguments[0]) != "string"){
    throw new Error("please enter valid arguments")
  }
  else{

    if(getCookie(cName) !== undefined){
        return true;
    }
     return false;
  }
}

function setCookie(cName, cValue,expires) {
  if(arguments.length != 3){
    throw new Error("please enter valid arguments")
  }
  for(var i = 0 ; i < 3; i ++){
    if(typeof(arguments[i]) != "string"){
      throw new Error("please enter valid arguments")
    }
  }
  
  document.cookie = cName + "=" + cValue + ";expires=" +expires;

}
function getAllCookies(){
    return document.cookie;
}

function deleteAllCookie(){
  var expireDate = new Date();
  expireDate.setTime(expireDate.getTime()-(30*24*60*60*1000));
  var stringExpiry = expireDate.toGMTString();
  setCookie("name","",stringExpiry);
  setCookie("gender","",stringExpiry);
  setCookie("color","",stringExpiry);
  setCookie("visited","",stringExpiry);
}

function deleteCookie(cName){
  if(hasCookie(cName)){
    var expireDate = new Date();
  expireDate.setTime(expireDate.getTime()-(30*24*60*60*1000));
  var stringExpiry = expireDate.toGMTString();
  setCookie(cName,"",stringExpiry);
  }

}

function displayInfo() {
    var details = getCookie("name");
document.getElementById("name-span").innerHTML =details;
details = getCookie("gender");
document.images[0].src = "images/"+details+".jpg";
details = getCookie("color");
document.getElementById("name-span").style.color = details;
document.getElementById("visited-span").style.color = details;
details = getCookie("visited");
var inc = parseInt(details);
inc++;
setCookie("visited",inc.toString(),stringDate);
document.getElementById("visited-span").innerHTML = inc;

    
  
}

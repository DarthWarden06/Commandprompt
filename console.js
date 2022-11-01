
var input2 = document.getElementById('commandline');
MarkOnLoad(input2, input2.value.length);

var input = document.getElementById("commandline");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("commandline").click();
  }
});


function showVal() {
    const textarea = document.getElementById('commandline')
    var tmp = document.getElementById("commandline").value;
    if(tmp == ""){
      // console.log("nothing")
    }
    else{
    document.getElementById('console_content').innerHTML += (tmp + "<br/>");
   textarea.value = ''
   if(tmp == "/tp1"){
    window.location.href = "https://darthwarden06.github.io/AdriansHjemmeside1/"
  }
    if(tmp == "/tp2"){
      window.location.href = "gogogo.html"
    }
    if(tmp == "/tp3"){
      window.location.href ="startup.html"
    }
    if(tmp == "/clear")
    document.getElementById("clear").click()
    if(tmp =="/!"){
      document.getElementById("clear").click()
      document.getElementById('console_content').innerHTML += ("(/tp1) Ført videre til webiste" + "<br/>" + "(/tp2) Ført videre til legeplads 1" + "<br/>" + "(/tp3) Ført videre til legeplads 2" + "<br/>" + "(/clear) eller '-' for at cleare chatten" + "<br/>" + "(/run) for at køre et program")
    }
  
  }
  if(tmp == "/run"){
    // console.log("hej")
    window.open("nyside.html")
    setTimeout(hackerMan, 200)
   
  }
  

}

function clearMe(){
  // console.log("clearMe")
  const textarea = document.getElementById('console_content').innerHTML ='';

}
function commandList(){
  document.getElementById("clear").click()
  document.getElementById("commandline").value = '/!'
  document.getElementById("commandline").click()

}
function hackerMan(){
  document.getElementById("clear").click()
  document.getElementById("console_content").innerHTML += ("Eksempel")
}
function allowClear(){
  var myCheck = document.getElementById("myCheck")
  
  if (myCheck.checked == true){
    document.getElementById('console_content').innerHTML += ("<br/>" + "Clear on '-' is enabled" + "<br/>")
    
    input.addEventListener("keypress", function(event) { 
      if (event.key === "-") {
        event.preventDefault();
        document.getElementById("clear").click();
        document.getElementById("commandline").click();
        }
   
    }
    )

 }

 if (myCheck.checked == false){
  location.reload()

  }
}
function showSettings() {
  var showkasse = document.getElementById("settings")
  showkasse.style.display = "block"
  var showSettings = document.getElementById("settinglogo")
  showSettings.style.display = "none"
}
function closeSettings(){
  var showkasse = document.getElementById("settings")
  showkasse.style.display = "none"
  var showSettings = document.getElementById("settinglogo")
  showSettings.style.display = "block"
  // MarkOnLoad()
  
}

function MarkOnLoad(ctrl, pos) {
// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}
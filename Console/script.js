
var input = document.getElementById("commandline");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("commandline").click();
  }
});

// var clear = document.getElementById("commandline");
input.addEventListener("keypress", function(event) {
  if (event.key === "-") {
    event.preventDefault();
    document.getElementById("clear").click();
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
    if(tmp == "/clear")
    document.getElementById("clear").click()
    if(tmp =="/!"){
      document.getElementById("clear").click()
      document.getElementById('console_content').innerHTML += ("(/tp1) Ført videre til webiste" + "<br/>" + "(/tp2) Ført videre til project 2" + "<br/>" + "(/clear) eller '-' for at cleare chatten." + "<br/>")
    }
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
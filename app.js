var list = document.getElementsByTagName("LI");
for(let i=0;i < list.lenght;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement(){
    let li = document.createElement("li"); //html sayfasına li elementi oluşturuldu
    let inputValue = document.getElementById("todoInput").value ; //html deki input değeri alındı
    let t = document.createTextNode(inputValue);   //input değeri t ye yüklendi
    li.appendChild(t);  //input value > t değeri li ye yazıldı.

    if(inputValue === ''){
        alert("Boş bırakmayınız...")
    }else{
        document.getElementById("toDoList").appendChild(li);
    }
 
  document.getElementById("todoInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    

    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
} 













document.getElementById("button").addEventListener("click", newElement);

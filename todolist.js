/*Remove all button*/
let removebtn = document.getElementsByClassName("RemoveAll");
console.log(removebtn);
for (let i = 0; i < removebtn.length; i++)
  removebtn[i].addEventListener("click", function () {
    removebtn[i].parentElement.remove();
    console.log(Remove);
  });
/* close x button */
var mylist = document.getElementsByTagName("li");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}
/* closing the item*/
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
/* adding elem*/
var input = document.querySelector("#myInput");
function newElement() {
  let text = document.createTextNode(input.value);
  let li = document.createElement("li");
  let list = document.querySelector(".mylist");

  li.appendChild(text);
  list.appendChild(li);

  if (input === "") {
    alert("Write your list!");
  } else {
    document.querySelector(".mylist").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

var addnew = document.getElementById("btnadd");
addnew.addEventListener("click", newElement);

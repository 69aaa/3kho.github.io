function startSearch() {
  var input, filter, ul, li, a, i, b, dropDown;
  input = document.getElementById("mySearch");
  dropDown = document.getElementById("select");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search");
  li = ul.getElementsByTagName("a");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h1")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
    
    if (dropDown.value == "n/a") {
      continue; //if no selection, disregard everything below this line in the for loop
    }
    
    b = a.getElementsByClassName("badge");
    if ((b ? b[0].innerHTML.includes("New") : 0) && (dropDown.value == "new")) {
      li[i].style.display = "";
    } else if ((b ? b[0].innerHTML.includes("Hot") : 0) && (dropDown.value == "hot")) {
      li[i].style.display = "";
    } else if (b.length == 0) && (dropDown.value == "n/a")) {
      li[i].style.display = "";
    } else {
      console.log("this will probably break lol");
    }
  }
}

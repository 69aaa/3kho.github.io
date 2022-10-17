function startSearch() {
  var input, filter, ul, li, a, i, b, dropDown;
  input = document.getElementById("mySearch");
  dropDown = document.getElementById("select");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search");
  li = ul.getElementsByTagName("a");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h1")[0];
    b = a.getElementsByClassName("badge")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else if ((dropDown.value == "new") && (b.innerHTML == "New")) {
      li[i].style.display = "none";
    } else if ((dropDown.value == "hot") && (b.innerHTML == "Hot")) {
      li[i].style.display = "none";
    } else if (dropDown.value == "n/a") {
      li[i].style.display = "";
    }
  }
}

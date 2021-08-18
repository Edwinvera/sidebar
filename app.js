const toggle = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

toggle.addEventListener("click", function () {
  //longer
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove(".show-sidebar")
  // } else {
  //   sidebar.classList.add("show-sidebar")
  // }
  
  //shorter
  sidebar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener("click", function() {
  sidebar.classList.remove(".show-sidebar")
})
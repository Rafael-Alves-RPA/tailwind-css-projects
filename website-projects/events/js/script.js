const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

//Hamburger button listener
btn.addEventListener("click", navToggle);

//Tabs menu event Listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  // tabs.forEach((tab) => {
  //   tab.children[0].classList.remove("bg-opacity-80");
  // });

  //hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  //Activate a new tab and panel based on the target
  e.target.classList.add("rounded-full", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

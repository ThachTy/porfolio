const tabTitle = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-item");
const navbar = document.querySelector(".header__navbar");
const icon = document.querySelector(".fa-solid.fa-bars");
navbar.classList.toggle("toggle");
function handleChangeTab(titleName) {
  let contentActive = document.getElementById(titleName);
  // Remove all class contents + titles  .active-link
  tabTitle.forEach((item) => {
    item.classList.remove("active-link");
  });

  tabContents.forEach((item) => {
    item.classList.remove("active-link");
  });

  //  Add
  event.currentTarget.classList.add("active-link");

  contentActive.classList.add("active-link");
}

function handleToogle() {
  // fa-solid fa-xmark
  navbar.classList.toggle("toggle");

  if (icon.classList.value.includes("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
}

function mobileNav() {
  if (document.getElementById("mobile-navigation").style.display == "flex") {
    document.getElementById("mobile-navigation").style.display = "none";
  } else {
    document.getElementById("mobile-navigation").style.display = "flex";
  }
}

function mobileNavClose() {
  document.getElementById("mobile-navigation").style.display = "none";
}

document.getElementById("mobile-navigation-toggle").addEventListener("click", mobileNav);
document.getElementById("mobile-navigation-close").addEventListener("click", mobileNavClose);
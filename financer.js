// function openNavBar() {
// }
// function closeNavBar() {
//   let menuBarIcon = document.getElementsByClassName('menu-bars')[0];
//   let navbar = document.getElementsByTagName('nav')[0];
//   let closeIcon = document.getElementsByClassName('close-icon')[0];
// }
function menubar() {
  let menuBarIcon = document.getElementsByClassName('menu-bars')[0];
  let navbar = document.getElementsByTagName('nav')[0];
  let closeIcon = document.getElementsByClassName('close-icon')[0];
  let mainTag = document.getElementsByTagName('main')[0];
  if (menuBarIcon.style.visibility == 'visible') {
    menuBarIcon.style.visibility = "hidden";
    navbar.style.visibility = 'visible';
    closeIcon.style.visibility = 'visible';
    mainTag.style.visibility = "hidden";
  } else {
    menuBarIcon.style.visibility = "visible";
    navbar.style.visibility = "hidden";
    closeIcon.style.visibility = 'hidden';
    mainTag.style.visibility = "visible";
  }
}
// function showSublistOfProducts() {}
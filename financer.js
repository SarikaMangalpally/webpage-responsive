function openNavBar() {
  let menuBarIcon = document.getElementsByClassName('menu-bars')[0];
  let navbar = document.getElementsByTagName('nav')[0];
  let closeIcon = document.getElementsByClassName('close-icon')[0];
  menuBarIcon.style.visibility = "hidden";
  navbar.style.visibility = 'visible';
  closeIcon.style.visibility = 'visible';
}
function closeNavBar() {
  let menuBarIcon = document.getElementsByClassName('menu-bars')[0];
  let navbar = document.getElementsByTagName('nav')[0];
  let closeIcon = document.getElementsByClassName('close-icon')[0];
  menuBarIcon.style.visibility = "visible";
  navbar.style.visibility = "hidden";
  closeIcon.style.visibility = 'hidden';
}
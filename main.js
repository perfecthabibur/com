//moon====
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.headers');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun');
  if (themeToggler.classList.contains('fa-sun')) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
}
//dark====
//backtop====
 const toTop = document.querySelector(".backtop");
 window.addEventListener("scroll", () => {
   if (window.pageYOffset > 400) {
     toTop.classList.add("active");
   } else {
     toTop.classList.remove("active");
   }
 })
//backtop====
//contact====
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Error!";
  }
// handle the form submission event
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
//contact====
//messenger area start====
  const chat = document.querySelector(".chat");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
      chat.classList.add("active");
    } else {
      chat.classList.remove("active");
    }
  })    
//messenger area end====
//Google Translate====
function googleTranslateElementInit() {
 new google.translate.TranslateElement({
 pageLanguage: 'en',
 autoDisplay: 'true',
 layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
 }, 'google_translate_element');
 }
//Google Translate==

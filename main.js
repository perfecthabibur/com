$(".switch").click(function() {
  $("body").toggleClass("darkmode");
  if ($("body").hasClass("darkmode")) {
    $(".switch").attr("name", "line-md:sun-rising-loop");
  } else {
    $(".switch").attr("name", "line-md:moon-alt-loop");
  }
});

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
})(jQuery);
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
     var menuItems = document.querySelectorAll('ul li a');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            // Remove active state from all menu items
            for (var j = 0; j < menuItems.length; j++) {
                menuItems[j].classList.remove('active');
            }
            // Add active state to clicked menu item
            this.classList.add('active');
        });
    }
 
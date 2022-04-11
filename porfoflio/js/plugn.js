/* global $,head ,jquery ,alert ,console */
const projectsDiv = document.getElementById("projectsList")
const SkillsList = document.getElementById("skillsList")
const sendmsg = document.getElementById("sendmsg")
const clientName = document.getElementById("clientName").value
const clientEmail = document.getElementById("clientEmail").value
const clientMessage = document.getElementById("clientMessage").value
const subject = document.getElementById("subject").value

const projectsData = [
  {name:'e-commerce',img:'../imag/ecommerceimg.jpeg',link:'#'},
  
  {name:'social media',img:'../imag/solcia.jpg',link:'#'},
  {name:'landing page',img:'../imag/land.jpg',link:'#'}
]
const skillsIcons = [
  {name:'html5',icon:'fab fa-html5 fa-3x'},
  {name:'css3',icon:'fab fa-css3 fa-3x'},
  {name:'bootstrap',icon:'fab fa-bootstrap fa-3x'},
  {name:'sass',icon:'fab fa-sass fa-3x'},
  {name:'javascript',icon:'fab fa-js fa-3x'},
  {name:'vue',icon:'fab fa-vuejs fa-3x'},
  {name:'firebase',icon:'fas fa-server fa-3x'},
  {name:'nuxt',icon:'fab fa-vuejs fa-3x'},
]
window.addEventListener('DOMContentLoaded', (event) => {
  let result = ""
  let iconResult=""
  skillsIcons.forEach((item,index)=>{
    iconResult +=`
    <li data-aos="zoom-in"  >
    <div>
      <i class="${item.icon} fa-3x"></i>
    </div>
    ${item.name}
  </li>
    
    `
  })
  SkillsList.innerHTML = iconResult
  projectsData.forEach(item=>{
    result += `
    <div class="block col-sm-6" data-aos="zoom-in" style="background-image: url(${item.img})">
      <div class="overlay"></div>
      <div class="block--text">
        <div class="text--head">${item.name}</div>
        <div class="block--link">
        <a class="btn btn-danger" target="_blank"  href="${item.link}">visite website</a>
        </div>
      </div>
    </div>
      `
  })
  projectsDiv.innerHTML = result
});
function submitMsg () {
  console.log('send msg');
  window.open(`mailto:hossamabdalhakeem99@gmail.com?subject=${subject.val}&body=${clientMessage}`);
}
sendmsg.addEventListener("click",submitMsg)

$(window).on("load", function () {
  $("#about").height($(window).height())
  $(".loading .sk-folding-cube").fadeOut(2000, function () {
    $(".loading").fadeOut(2000);
  });
});

$(document).ready(function () {
  "use strict";
  // $("body").niceScroll()
  // $("body").niceScroll({
  //   cursorcolor: "#FFDE00",
  // });
  //    making the navbar background
  var w = $(window);

  w.scroll(function () {
    // console.log(w.scrollTop());

    if (w.scrollTop() >= 100) {
      $(".navbar-inverse").css({
        borderBottom: "2px solid #FFDE00",
        background: "transparent",
        transition: "all .2s ease-in-out",
      });
    } else {
      $(".navbar-inverse").css({
        borderBottom: "none",
        background: "none",
        transition: "all .2s ease-in-out",
      });
    }
  });

  //    end the navbar

  //    show nad hiddien the buttom of scroll top
  var sw = $(".footer .sweap");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
      sw.fadeIn(2000);
    } else {
      sw.fadeOut(2000);
    }
  });
  //    function for scroll to top
  sw.click(function () {
    $("html ,body").animate(
      {
        scrollTop: "10",
      },
      2000
    );
  });

  //     end function for scroll to top

  //    making the header view
  var head = $(".header");

  head.height($(window).height());

  $(window).resize(function () {
    head.height($(window).height());
  });

  //    starting the links
  $(".navbar-inverse .navbar-nav > li > a ").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $("#" + $(this).attr("data-val")).offset().top,
      },
      1000
    );
  });

  
});

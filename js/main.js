/** @format */

"use strict";
var header = document.querySelector("[data-header]"),
  activeClass = "active",
  scrollHeader = function () {
    100 <= window.scrollY
      ? header.classList.add(activeClass)
      : header.classList.remove(activeClass);
  },
  addEventOnScrollHeader = function () {
    window.addEventListener("scroll", scrollHeader);
  };
addEventOnScrollHeader();
var internalLinks = Array.from(document.querySelectorAll('a[href^="#"]')),
  getMenuHeight = function () {
    return document.querySelector(".header").getBoundingClientRect().height;
  },
  getTopFromElement = function (e) {
    e = e.currentTarget.getAttribute("href");
    return document.querySelector(e).offsetTop - getMenuHeight();
  },
  scrollToPosition = function (e) {
    smoothScrollTo(0, e);
  },
  scrollTo = function (e) {
    e.preventDefault();
    e = getTopFromElement(e);
    scrollToPosition(e);
  },
  addSmoothScrollEvent = function () {
    internalLinks.forEach(function (e) {
      return e.addEventListener("click", scrollTo);
    });
  };
function smoothScrollTo(e, t, o) {
  var r = window.scrollX || window.pageXOffset,
    c = window.scrollY || window.pageYOffset,
    l = e - r,
    i = t - c,
    s = new Date().getTime();
  o = void 0 !== o ? o : 400;
  function a(e, t, n, o) {
    return (e /= o / 2) < 1
      ? (n / 2) * e * e * e * e + t
      : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
  }
  var d = setInterval(function () {
    var e = new Date().getTime() - s,
      t = a(e, r, l, o),
      n = a(e, c, i, o);
    o <= e && clearInterval(d), window.scroll(t, n);
  }, 1e3 / 60);
}
addSmoothScrollEvent();
var btnMobile = document.querySelector("[data-mobile-button]"),
  menu = document.querySelector("[data-menu]"),
  html = document.documentElement,
  openMenu = function () {
    menu.classList.add(activeClass),
      btnMobile.classList.add(activeClass),
      setTimeout(function () {
        return html.addEventListener("click", closeMenu);
      });
  },
  closeMenu = function e() {
    menu.classList.remove(activeClass),
      btnMobile.classList.remove(activeClass),
      setTimeout(function () {
        return html.removeEventListener("click", e);
      });
  },
  addMenuEvent = function () {
    btnMobile.addEventListener("click", openMenu);
  };
addMenuEvent();
var sections = document.querySelectorAll("section[id]"),
  scrollActive = function () {
    var o = window.pageYOffset;
    sections.forEach(function (e) {
      var t = e.offsetHeight,
        n = e.offsetTop - 200,
        e = e.getAttribute("id");
      n < o && o <= n + t
        ? document
            .querySelector(".menu li a[href*=" + e + "]")
            .classList.add(activeClass)
        : document
            .querySelector(".menu li a[href*=" + e + "]")
            .classList.remove(activeClass);
    });
  },
  addScrollSectionEvent = function () {
    window.addEventListener("scroll", scrollActive);
  };
scrollActive(), addScrollSectionEvent();



/* Botão de voltar para cima */
var backToTopButton = document.getElementById("back-to-top-btn");

// Adiciona um ouvinte de evento de rolagem para mostrar ou ocultar o botão
window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Adiciona um ouvinte de evento de clique para rolar suavemente para o topo
backToTopButton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Download App
 document.getElementById("downloadLink").addEventListener("click", function () {

 });
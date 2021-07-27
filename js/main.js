$(function () {
  $(".offcanvas-header").hide();
  $("#btnOffcanvasRight").hide();

  $(".dropdown").mouseenter(function () {
    $(".dropdown-menu").addClass("show");
  });
  $("nav").mouseleave(function () {
    $(".dropdown-menu").removeClass("show");
  });

  $(window).on("orientationchange", function (event) {
    location.reload();
  });

  menuResponsive();

  changeNavBar();
  getYear();
  scrollTop();
  console.log($(window).height());
});

// ----------------------menuResponsive open right to left------------------

const menuResponsive = () => {
  if ($(window).width() < 1024) {
    $("#offcanvas-body").addClass("offcanvas-body");
    $("#btnOffcanvasRight").show();
    $("#offcanvasRight").addClass("offcanvas offcanvas-end");
    $("#offcanvasRight").css({ visibility: "hidden" });
    $(".offcanvas-header").show();
  } else if ($(window).width() >= 1024) {
    $("#btnOffcanvasRight").hide();
    $(".offcanvas-header").hide();
    $("#offcanvasRight").removeClass("offcanvas offcanvas-end");
    $("#offcanvasRight").css({ visibility: "visible" });
    $("#offcanvas-body").removeClass("offcanvas-body");
  }

  $(window).resize(function () {
    if ($(window).width() < 1024) {
      $("#offcanvas-body").addClass("offcanvas-body");
      $("#btnOffcanvasRight").show();
      $("#offcanvasRight").addClass("offcanvas offcanvas-end");
      $("#offcanvasRight").css({ visibility: "hidden" });
      $(".offcanvas-header").show();
    } else if ($(window).width() >= 1024) {
      $("#btnOffcanvasRight").hide();
      $(".offcanvas-header").hide();
      $("#offcanvasRight").removeClass("offcanvas offcanvas-end");
      $("#offcanvasRight").css({ visibility: "visible" });
      $("#offcanvas-body").removeClass("offcanvas-body");
    }
  });
};

// --------------------changeNavBar change size navBar for scroll--------------
const changeNavBar = () => {
  if ($(window).height() > 520) {
    let Y = 300;
    $(window).scroll(function (e) {
      e.preventDefault();
      if (window.scrollY > Y) {
        $(".navBar").css({ height: `10vh` });
        $(".dropdown-menu").css({ top: "3.7rem" });
        $("#logo").css({ height: "2.6rem", width: "2.6rem" });
      } else {
        $(".navBar").css({ height: `15vh` });
        $(".dropdown-menu").css({ top: "5rem" });
        $("#logo").css({ height: "4rem", width: "4rem" });
      }
    });
  }
};

// -------------------getYear for copyRight------------------
const getYear = () => {
  let date = new Date().getFullYear();
  $(".year").text(date);
};

// -------------------scrollTop----------------
const scrollTop = () => {
  let Y = 200;
  $(window).scroll((e) => {
    e.preventDefault();
    if (this.scrollY > Y) {
      $("#scrollTop").css({ visibility: "visible" });
      $("#scrollTop").click(() => {
        $(this).scrollTop(0);
      });
    } else {
      $("#scrollTop").css({ visibility: "hidden" });
    }
  });
};

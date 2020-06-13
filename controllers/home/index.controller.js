app.controller("pagescontroller", function ($scope, getContentTheme) {


  $(document).ready(function(){
    $('.parallax').parallax();
  });
    
  this.fade = {
    slides: [
      "http://lorempixel.com/560/400/sports/1",
      "http://lorempixel.com/560/400/sports/2",
      "http://lorempixel.com/560/400/sports/3",
    ],
  };

  const s = $scope;
  s.textoscope = " holaaa";

  $scope.records = [
    "Alfreds Futterkiste",
    "Berglunds snabbköp",
    "Centro comercial Moctezuma",
    "Ernst Handel",
  ];
  s.textoPage = "";

  s.getTemas = getContentTheme.getTemas((res) => {
      s.temas = res;
  });
  console.log(getContentTheme)
});
app.service("getContentTheme", function ($http) {
  this.getTemas = (res) => {
    $http({
      url: "http://localhost:3000/get_temas",
      method: "get",
    }).then((data) => {
      console.log(data);
      res(data.data);
    });
  };
});



// var mySwiper = new Swiper(".swiper-container", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,
//   slidesPerView: 3,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // // And if we need scrollbar
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// });
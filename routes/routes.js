app.config(['$routeProvider', function ($routeProvider){
    $routeProvider.when('/',{
       templateUrl:'../../controllers/home/index.html',
        controller: 'pagescontroller'
    })
  }])
  
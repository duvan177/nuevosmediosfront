app.controller('navController',function($scope){
    const s = $scope;
    s.search = "";
    s.$watch('search',(newVal,oldVal)=>{
        if(newVal != oldVal){
            // console.log(newVal)
        }
    })
})
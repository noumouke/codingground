app.directive("myDirective",function(){
    return {
        restrict:"EA",
        scope:{
            name:"=info",
            allName:"&all",
        },
        templateUrl:"template.html"
        
        
    };
});

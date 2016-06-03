//var societe ="softTeam";
app.controller("myControl", function($scope) {
  //  var self = this;
    $scope.firstName = "Noumouke";
    $scope.lastName = "Kouyate";
    //$scope.societe="123";
    //this.societe = $scope.societe;
    $scope.name = function(){
        $scope.societe="fluent";
        return this.firstName + " " + this.lastName; //+"@"+ this.societe + " au dessus " + self.societe;
    };
});


app.controller("parent", function($scope) {
    $scope.yourName = "papis";
});
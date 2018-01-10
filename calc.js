var app=angular.module("calc",[]);
app.controller("calculate",function($scope){
$scope.num1=0;
$scope.num2=0;
$scope.sum=function(num1,num2){
	return parseInt(num1)+parseInt(num2);
}
$scope.sub=function(num1,num2){
	return parseInt(num1)-parseInt(num2);
}
$scope.mul=function(num1,num2){
	return parseInt(num1)*parseInt(num2);
}
$scope.div=function(num1,num2){
	return parseInt(num1)/parseInt(num2);
}});
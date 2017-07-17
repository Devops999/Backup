/**
 * 
 */

app.factory('UserService',function($http){
 var userService={}
 userService.registerUser=function(user){
	 return $http.post("http://localhost:8480/Collabs_Back/registration",user)
 }
 userService.login=function(user){
	 return $http.post("http://localhost:8480/Collabs_Back/login",user)
 }
 userService.logout=function(){
	 return $http.get("http://localhost:8480/Collabs_Back/logout")
 }
 return userService;
 
})
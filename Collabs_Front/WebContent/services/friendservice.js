/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={};
	
	friendService.suggestUsers=function()
	{
		return $http.get("http://localhost:8480/Collabs_Back/suggesteduserslist")
	}
	friendService.sendFriendRequest=function(toUsername){
		return $http.get("http://localhost:8480/Collabs_Back/friendrequest/"+toUsername)
	}
	return friendService;
})
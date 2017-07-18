/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	
	friendService.listOfSuggestedUsers=function()
	{
		return $http.get("http://localhost:8480/Collabs_Back/suggestedUsersList")
	}
	
	friendService.sendFriendRequest=function(toUsername){
		return $http.get("http://localhost:8480/Collabs_Back/friendrequest/"+toUsername)
	}
	
	friendService.getPendingRequest=function(){
		return $http.get("http://localhost:8480/Collabs_Back/pendingrequests")
	}
	
	friendService.acceptOrReject=function(fromId,status){
		return $http.put("http://localhost:8480/Collabs_Back/updatependingrequest"+fromId+"/"+status)
	}
	
	
	friendService.getFriendList=function(){
		return $http.get("http://localhost:8480/Collabs_Back/viewfriends")
	}
	return friendService;
})
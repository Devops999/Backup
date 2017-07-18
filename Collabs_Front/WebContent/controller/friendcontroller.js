/**
 * 
 */
app.controller('FriendController',function($scope,$location,FriendService){
	function suggestUsers(){
		$scope.suggestUsers=FriendService.listOfSuggestedUsers().then(function(response){
			$scope.suggestedUsers=response.data;
			/*$scope.user=response.data;*/
			console.log(response.data)
			
		},function(response){
			console.log(response.status);
		})
		
	}
	$scope.friendrequest=function(toUsername){
		FriendService.sendFriendRequest(toUsername).then(function(response){
			alert("Friendrequest to'+toUsername +' has been sent successfully..")
			suggestUsers()
			$location.path('/suggestedusers')
		},function(response){
			console.log(response.status);
		})
	}
	
	
	function pendingRequest(){
		$scope.pendingRequest=FriendService.getPendingRequests().then(function(response){
		$scope.pendingRequest=response.data
		$scope.message=response.data.message
		},
		function(response){
			$window.alert("fetching Data failed.Chaeck consoole for errors")
			conole.log(response.status);
		
		})
	}
		
		function viewFriendList(){
			$scope.friends=FriendService.getFriendList().then(function(response){
					$scope.friends=response.data
					console.log(response.data);
		},
		function(response){
			$window.alert("failed to fetch FriendList.read the console for detail")
			console.log(response.status);
		
					})
		}
	 suggestUsers();
	 pendingRequests();
	 viewFriendList();
	})
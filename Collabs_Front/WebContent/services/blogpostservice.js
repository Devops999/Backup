/**
 * 
 */
app.factory('BlogPostService',function($http){
	var blogPostService={}
	
	blogPostService.saveBlog=function(blogPost){
		return $http.post("http://localhost:8480/Collabs_Back/saveblogpost",blogPost)
	}
	
	blogPostService.blogsApproved=function(){
		return $http.get("http://localhost:8480/Collabs_Back/listofblogs/"+true)
	}
	blogPostService.blogsWaitingForApproval=function(){
		return $http.get("http://localhost:8480/Collabs_Back/listofblogs/"+false)
	}
	blogPostService.getBlogPost=function(id){
		return $http.get("http://localhost:8480/Collabs_Back/getblogpost/"+id)
	}
	blogPostService.updateBlogPost=function(blogPost){
		return $http.put("http://localhost:8480/Collabs_Back/updateblogpost",blogPost)
	}
	blogPostService.addComment=function(blogComment){
		return $http.post("http://localhost:8480/Collabs_Back/addblogcomment",blogComment)
	}
	blogPostService.getBlogComments=function(blogId){
		return $http.get("http://localhost:8480/Collabs_Back/getblogcomments/"+blogId)
	}
	return blogPostService;
})
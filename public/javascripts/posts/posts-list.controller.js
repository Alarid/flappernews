// Main Controller
angular
	.module('flapperNews')
	.controller('PostsListCtrl', [
		'$scope',
		'posts',
		'auth',
		function($scope, posts, auth) {
			$scope.posts = posts.posts;
			$scope.isLoggedIn = auth.isLoggedIn;
			$scope.sortOrder = 'upvotes';
			$scope.reverse = false;
			$scope.showNewPostForm = false;

			$scope.addPost = function() {
				if (!$scope.title || $scope.title === '') return;
				posts.create({
					title: $scope.title,
					link: $scope.link,
					upvotes: 0,
					comments: []
				});
				$scope.title = '';
				$scope.link = '';
				$scope.showNewPostForm = false;
			}

			$scope.incrementUpvotes = function(post) {
				posts.upvote(post);
			}

			$scope.incrementDownvotes = function(post) {
				posts.downvote(post);
			}
		}
	]);
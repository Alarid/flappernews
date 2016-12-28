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
			}

			$scope.incrementUpvotes = function(post) {
				posts.upvote(post);
			}
		}
	]);
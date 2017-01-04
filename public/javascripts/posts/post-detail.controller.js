// Posts Controller
angular
	.module('flapperNews')
	.controller('PostDetailCtrl', [
		'$scope',
		'$state',
		'posts',
		'post',
		'auth',
		function ($scope, $state, posts, post, auth) {
			$scope.post = post;
			$scope.isLoggedIn = auth.isLoggedIn;

			$scope.addComment = function() {
				if (!$scope.body || $scope.body === '') return;
				posts.comment(post,{
					body: $scope.body,
					upvotes: 0
				}).success(function(comment) {
					$scope.post.comments.push(comment);
				});
				$scope.body = '';
			};

			$scope.incrementUpvotes = function(comment) {
				posts.upvoteComment(post, comment);
			};

			$scope.backToHome = function() {
				$state.go('home');
			}
		}
	]);
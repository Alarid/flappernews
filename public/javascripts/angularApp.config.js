// Router config
angular
	.module('flapperNews')
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: '/home.html',
					controller: 'PostsListCtrl',
					resolve: {
						postPromise: ['posts', function(posts) {
							return posts.getAll();
						}]
					}
				})
				.state('posts', {
					url: '/posts/{id}',
					templateUrl: '/posts.html',
					controller: 'PostDetailCtrl',
					resolve: {
						post: ['$stateParams', 'posts', function($stateParams, posts) {
							return posts.get($stateParams.id);
						}]
					}
				})
				.state('login', {
					url: '/login',
					templateUrl: '/login.html',
					controller: 'AuthCtrl',
					onEnter: ['$state', 'auth', function($state, auth) {
						if (auth.isLoggedIn())
							$state.go('/home');
					}]
				})
				.state('register', {
					url: '/register',
					templateUrl: '/register.html',
					controller: 'AuthCtrl',
					onEnter: ['$state', 'auth', function($state, auth) {
						if (auth.isLoggedIn())
							$state.go('/home');
					}]
				});

			$urlRouterProvider.otherwise('home');
		}
	]);
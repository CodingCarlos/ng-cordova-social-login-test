(function(){

	angular.module("app")
		.factory("home", homeService);

	function homeService($timeout, $cordovaOauth, api) {

		var home = {
			data: [],
			get: get,
			login: login
		};

		return home;

		function get() {

			// Uncomment the following lines to perform a server call
			// api.get(api.URL + '/home', funtion(data) {
			// 	home.data = data;
			// });

			// Fake a server call
			$timeout(fakeData, 400)
		}

		function login() {
			console.log('login');
			$cordovaOauth.twitter('ImgnjIwFsLNu2h5m7RFqZKzCU', 'TK4Nqrepqpmyt3k1yvqT2pwZyPhB9Oj0X330bUlvxttCHGquDx')
				.then(function(result) {
					console.log('Logged in via oAuth!!!');
					console.log(result)
				}, function(error) {
					console.error('Error while login:');
					console.error(error);
				});
		}


		/* IMPORTANT:
		 * 
		 * IN PRODUCTION APPS REMOVE THIS FUNCTION
		 */
		function fakeData() {
			home.data.push({txt: 'this'});
			home.data.push({txt: 'is'});
			home.data.push({txt: 'dummy'});
			home.data.push({txt: 'data'});
		}

	}
	
})();
angular.module('authorization', [])

.run(['$rootScope','$window', function ($rootScope, $window) {		
	$rootScope.isLoggedIn = false;
	$rootScope.ventana = $window;
	$rootScope.facebookLogin= function () {		
		var url = 'http://localhost:1337/auth/facebook',
			width = 800,
			height = 600,
			top = (window.outerHeight - height) / 2,
			left = (window.outerWidth - width)  / 2;
		    $rootScope.ventana.open(url, 'facebook_login', 'width=' + width + ',height=' + height + ',scrollbars=0,top=' + top + ',left=' +left);			    
	};

	$rootScope.ventana.addEventListener('message', function(event) {		
		if (event.origin !== 'http://localhost:1337') return ;
		$rootScope.isLoggedIn = true;
		$rootScope.$apply();
		document.write("<h2> TokenJWT: </h2>" + event.data.token);					
		document.write("<h2> eMail: </h2>" + event.data.email);
	});

}]);
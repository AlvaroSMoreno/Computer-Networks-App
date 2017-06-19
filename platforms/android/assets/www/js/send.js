matricula = -1;

//http://lfserv.duckdns.org:80/api/position
//{matricula,lat,long}

function send() {
	var usr = document.getElementById('uname').value;
	var pass = document.getElementById('psw').value;
	var credentials = {user:usr, password:pass};

	//navigator.geolocation.getCurrentPosition(onSuccess);
	document.getElementById('uname').value = '';
	document.getElementById('psw').value = '';

	$.post('http://lfserv.duckdns.org:80/api/login', credentials,
		function(data,success){
			if(!data.status){
				//console.log(JSON.stringify(data) + "\n" + data.status);
				//alert('Haciendo login!')
				$('#loginbody').load('html/redes.html');
				matricula = data.user;
			}
		});

		setInterval(pos,10000);
	}

	function pos ()
	{
		navigator.geolocation.getCurrentPosition(onSuccess);
	}

	function onSuccess(position) {
		/*alert('Latitude: '          + position.coords.latitude          + '\n' +
					'Longitude: '         + position.coords.longitude + '\n');*/
		var datos = {matricula:matricula, lat:position.coords.latitude, long: position.coords.longitude};
		$.post('http://lfserv.duckdns.org:80/api/position', datos, function(){});
	}

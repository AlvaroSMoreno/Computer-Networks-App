function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

function loadMap(){
	$("#contentArea").load("html/map.html");
    closeNav();
}

function loadPay()
{
	$("#contentArea").load("html/pay.html");
	closeNav();
}

function loadInfo()
{
	var datos;
	$("#contentArea").load("html/info.html");
	$.get('http://lfserv.duckdns.org:80/api/saldo?matricula='+ matricula,
		function(data,success){
			console.log(data);
			if(!data.status){
				var matricula = data.matricula;
				var nombre = data.nombre;
				var saldo = data.saldo;
				//datos = [ndef.textRecord(JSON.stringify({nom:nombre, mat = matricula}))];
				document.getElementById("imagen").src="http://micampus.mxl.cetys.mx/fotos/0"+matricula+".jpg";
				document.getElementById("matricula").innerHTML = '<h1>'+matricula+'</h1>';
				document.getElementById("nombre").innerHTML = '<h3>'+nombre+'</h3>';
				document.getElementById("saldo").innerHTML = "$"+saldo;
			}
			else{
				document.getElementById("imagen").src="zorro.png";
				document.getElementById("matricula").innerHTML = "matricula";
				document.getElementById("nombre").innerHTML = "Nombre";
				document.getElementById("saldo").innerHTML = "Saldo";
			}
		});
		//alert(datos[0]);
		//nfc.share(datos);
	closeNav();
}

function stop_sharing_data()
{
	//nfc.unshare();
}

function loadChat()
{
	$("#contentArea").load("html/chat.html");
	closeNav();
}

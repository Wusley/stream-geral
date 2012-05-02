
	var stream = require('stream');
	
	//comparando que os metodos stdin e stdout são o mesmo que o stream
	//stdin 	= escrita
	//stdout 	= leitura
	console.log(process.stdin instanceof stream.Stream);
	console.log(process.stdout instanceof stream.Stream);

	//metodo resume() para seguir adiante
	process.stdin.resume();
	
	//setar o que está sendo capturado para codificação utf-8
	process.stdin.setEncoding('utf8');
	
	//evento escrita
	process.stdin.on('data',function(chunk){
		
		console.log("Dados de entrada: " + chunk);
		
	});

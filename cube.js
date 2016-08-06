var enable_cube = false;

function cubeOptionsClick(){
	if((document.getElementById('cube_options').checked&& !enable_cube)||(!document.getElementById('cube_options').checked&&enable_cube)){
		enable_cube = !enable_cube;
		if(enable_cube){
			matA = IDENTITY9;
			matB = IDENTITY9;
			resizeMatA(9,9,true,true);
			resizeMatB(9,9,true,true);
			$('#matAcont').append('<center> <button onclick="matARotateAClock()">Rotate Anticlockwise </button> <button onclick="matARotateClock()">Rotate Clockwise </button> <select id="matA_perm_select" onchange="matASetPerm()"> <option value=" "></option><option value="Aa">Aa</option><option value="Ab">Ab</option><option value="E">E</option><option value="Ua">Ua</option><option value="Ub">Ub</option><option value="H">H</option><option value="Z">Z</option><option value="Ja">Ja</option><option value="Jb">Jb</option><option value="T">T</option><option value="Ra">Ra</option><option value="F">F</option><option value="Ga">Ga</option><option value="Gb">Gb</option><option value="Gc">Gc</option><option value="Gd">Gd</option><option value="V">V</option><option value="Na">Na</option><option value="Nb">Nb</option><option value="Y">Y</option></select> </center>')
			$('#matBcont').append('<center> <button onclick="matBRotateAClock()">Rotate Anticlockwise </button> <button onclick="matBRotateClock()">Rotate Clockwise </button> <select id="matB_perm_select" onchange="matBSetPerm()"> <option value=" "></option><option value="Aa">Aa</option><option value="Ab">Ab</option><option value="E">E</option><option value="Ua">Ua</option><option value="Ub">Ub</option><option value="H">H</option><option value="Z">Z</option><option value="Ja">Ja</option><option value="Jb">Jb</option><option value="T">T</option><option value="Ra">Ra</option><option value="F">F</option><option value="Ga">Ga</option><option value="Gb">Gb</option><option value="Gc">Gc</option><option value="Gd">Gd</option><option value="V">V</option><option value="Na">Na</option><option value="Nb">Nb</option><option value="Y">Y</option></select> </center>')
			$('#calculate').after('<center id="reverse_order"><button onclick="reverseorder()">Reverse Order</button></center>');
		}else{
			matA = IDENTITY3;
			matB = IDENTITY3;
			resizeMatA(3,3,true,true);
			resizeMatB(3,3,true,true);
			$('#matAcont > center').remove();
			$('#matBcont > center').remove();
			$('#reverse_order').remove();
		}

	}
}

function matARotateAClock() {
	matA = math.multiply(math.matrix(PLL_SCOPE.Up),matA)._data;
	resizeMatA(matA.length,matA[0].length,true);
}

function matARotateClock(){
	matA = math.multiply(math.matrix(PLL_SCOPE.U),matA)._data;
	resizeMatA(matA.length,matA[0].length,true);
}


function matBRotateAClock() {
	matB = math.multiply(math.matrix(PLL_SCOPE.Up),matB)._data;
	resizeMatB(matA.length,matB[0].length,true);
}

function matBRotateClock(){
	matB = math.multiply(math.matrix(PLL_SCOPE.U),matB)._data;
	resizeMatB(matA.length,matB[0].length,true);
}

function matBSetPerm(){
	if(document.getElementById('matB_perm_select').value!==" "){
		matB = PLL_SCOPE[document.getElementById('matB_perm_select').value];
		resizeMatB(9,9,true);
	}
}

function matASetPerm() {
	if(document.getElementById('matA_perm_select').value!==" "){
		matA = PLL_SCOPE[document.getElementById('matA_perm_select').value];
		resizeMatA(9,9,true);
	}
}

function reverseorder(){
	var string_array = document.getElementById('input').value.split("*").reverse();
	console.log(string_array);
	var return_string = "";
	for(var i = 0; i<string_array.length;i++){
		return_string = return_string + "*" + string_array[i];
	}
	document.getElementById('input').value = return_string.substring(1);
}
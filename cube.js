var enable_cube = false;

function cubeOptionsClick(){
	if((document.getElementById('cube_options').checked&& !enable_cube)||(!document.getElementById('cube_options').checked&&enable_cube)){
		enable_cube = !enable_cube;
		if(enable_cube){
			matA = IDENTITY9;
			matB = IDENTITY9;
			resizeMatA(9,9,true,true);
			resizeMatB(9,9,true,true);
			$('#matAcont').append('<center> <button onclick="matARotateAClock()">Rotate Anticlockwise </button> <button onclick="matARotateClock()">Rotate Clockwise </button> </center>')
			$('#matBcont').append('<center> <button onclick="matBRotateAClock()">Rotate Anticlockwise </button> <button onclick="matBRotateClock()">Rotate Clockwise </button> </center>')
		}else{
			matA = IDENTITY3;
			matB = IDENTITY3;
			resizeMatA(3,3,true,true);
			resizeMatB(3,3,true,true);
			$('#matAcont > center').remove();
			$('#matBcont > center').remove();
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


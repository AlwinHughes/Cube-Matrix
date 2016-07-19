var matAwidth;
var matAheight;
var matBwidth;
var matBheight;

var matA;
var matB;

function createMatrix(){
	matAwidth = parseInt(document.getElementById('matAwidth').value);
	matAheight = parseInt(document.getElementById('matAheight').value);
	matBwidth = parseInt(document.getElementById('matBwidth').value);
	matBheight = parseInt(document.getElementById('matBheight').value);

	matA = [];
	matB = [];

	if(matAwidth == matBheight){
		console.log("can be multiplied");
	}

	for(var i = 0; i<matAheight; i++){
		matA.push(new Array(matAwidth))
		for(var j = 0; j<matAwidth;j++){
			if(matAheight===matAwidth&&i===j){
				matA[i][j] = 1;
			}else{
				matA[i][j] = 0;
			}
		}	
	}
	console.log("matA");
	console.log(matA);

	for(var i = 0; i<matBheight; i++){
		matB.push(new Array(matBwidth))
		for(var j = 0; j<matBwidth;j++){
			if(matBheight===matBwidth&&i===j){
				matA[i][j] = 1;
			}else{
				matB[i][j] = 0;
			}
		}	
	}
	console.log("matB = ");
	console.log(matB);

}

function makeIdentityRow (argument) {
	// body...
}

function displayMatrix (matrix) {
	
}
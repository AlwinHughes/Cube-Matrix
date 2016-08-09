var enable_cube = false;
var hilight_non_zero = false;

function cubeOptionsClick(){
	if((document.getElementById('cube_options').checked&& !enable_cube)||(!document.getElementById('cube_options').checked&&enable_cube)){
		enable_cube = !enable_cube;
		if(enable_cube){
			matA = IDENTITY9;
			matB = IDENTITY9;
			resizeMatA(9,9,true,true);
			matAheight = 9;
			matAwidth = 9;
			resizeMatB(9,9,true,true);
			matBheight = 9;
			matBwidth = 9;
			$('#matAcont').append('<center> <button onclick="matARotateAClock()">Rotate Anticlockwise </button> <button onclick="matARotateClock()">Rotate Clockwise </button> <select id="matA_perm_select" onchange="matASetPerm()"> <option value=" "></option><option value="Aa">Aa</option><option value="Ab">Ab</option><option value="E">E</option><option value="Ua">Ua</option><option value="Ub">Ub</option><option value="H">H</option><option value="Z">Z</option><option value="Ja">Ja</option><option value="Jb">Jb</option><option value="T">T</option><option value="Ra">Ra</option><option value="F">F</option><option value="Ga">Ga</option><option value="Gb">Gb</option><option value="Gc">Gc</option><option value="Gd">Gd</option><option value="V">V</option><option value="Na">Na</option><option value="Nb">Nb</option><option value="Y">Y</option></select> </center>')
			$('#matBcont').append('<center> <button onclick="matBRotateAClock()">Rotate Anticlockwise </button> <button onclick="matBRotateClock()">Rotate Clockwise </button> <select id="matB_perm_select" onchange="matBSetPerm()"> <option value=" "></option><option value="Aa">Aa</option><option value="Ab">Ab</option><option value="E">E</option><option value="Ua">Ua</option><option value="Ub">Ub</option><option value="H">H</option><option value="Z">Z</option><option value="Ja">Ja</option><option value="Jb">Jb</option><option value="T">T</option><option value="Ra">Ra</option><option value="F">F</option><option value="Ga">Ga</option><option value="Gb">Gb</option><option value="Gc">Gc</option><option value="Gd">Gd</option><option value="V">V</option><option value="Na">Na</option><option value="Nb">Nb</option><option value="Y">Y</option></select> </center>')
			$('#calculate').after('<center id="reverse_order"><button onclick="reverseorder()">Reverse Order</button></center>');
			$('#hilight_non_zero').css({"display":"block"});
			if(hilight_non_zero){
				checkNonZeroA();
				checkNonZeroB();
				checkNonZeroANS();
			}
		}else{
			matA = IDENTITY3;
			matB = IDENTITY3;
			matAwidth = 3;
			matAheight = 3;
			matBwidth = 3;
			matBheight = 3;
			resizeMatA(3,3,true,true);
			resizeMatB(3,3,true,true);
			$('#matAcont > center').remove();
			$('#matBcont > center').remove();
			$('#reverse_order').remove();
			$('#hilight_non_zero').css({"display":"none"});
			resetNonZero();
		}

	}
}

function matARotateAClock() {
	matA = math.multiply(math.matrix(PLL_SCOPE.Up),matA)._data;
	resizeMatA(matA.length,matA[0].length,true);
	checkNonZeroA();
}

function matARotateClock(){
	matA = math.multiply(math.matrix(PLL_SCOPE.U),matA)._data;
	resizeMatA(matA.length,matA[0].length,true);
	checkNonZeroA();
}


function matBRotateAClock() {
	matB = math.multiply(math.matrix(PLL_SCOPE.Up),matB)._data;
	resizeMatB(matA.length,matB[0].length,true);
	checkNonZeroB();
}

function matBRotateClock(){
	matB = math.multiply(math.matrix(PLL_SCOPE.U),matB)._data;
	resizeMatB(matA.length,matB[0].length,true);
	checkNonZeroB();
}

function matBSetPerm(){
	if(document.getElementById('matB_perm_select').value!==" "){
		matB = PLL_SCOPE[document.getElementById('matB_perm_select').value];
		resizeMatB(9,9,true);
		checkNonZeroB();
	}
}

function matASetPerm() {
	if(document.getElementById('matA_perm_select').value!==" "){
		matA = PLL_SCOPE[document.getElementById('matA_perm_select').value];
		resizeMatA(9,9,true);
		checkNonZeroA();
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

function nonZeroClick() {
	hilight_non_zero = !hilight_non_zero;
	if(hilight_non_zero){
		checkNonZeroA();
		checkNonZeroB();
		checkNonZeroANS();
	}else{
		resetNonZero();
	}
}

function checkNonZeroA() {
	console.log("check non zero");
	for(var i = 0; i<matAheight;i++){
		for(var j = 0; j<matAwidth;j++){
			if($('#A_row_'+i+' #A_col_'+j+' input:first').val() !=0){
				$('#A_row_'+i+' #A_col_'+j+' input:first').addClass('nonzero');
			}else{
				$('#A_row_'+i+' #A_col_'+j+' input:first').removeClass('nonzero');
			}
		}
	}
}
function checkNonZeroB(){
	for(var i = 0; i<matBheight;i++){
		for(var j = 0; j<matBwidth;j++){
			if($('#B_row_'+i+' #B_col_'+j+' input:first').val() !=0){
				$('#B_row_'+i+' #B_col_'+j+' input:first').addClass('nonzero');
			}else{
				$('#B_row_'+i+' #B_col_'+j+' input:first').removeClass('nonzero');
			}
		}
	}
}
function checkNonZeroANS(){
	for(var i = 0; i<matBheight;i++){
		for(var j = 0; j<matBwidth;j++){
			if($('#ANS_row_'+i+' #ANS_col_'+j).html() !=0){
				$('#ANS_row_'+i+' #ANS_col_'+j).addClass('nonzero');
			}else{
				$('#ANS_row_'+i+' #ANS_col_'+j).removeClass('nonzero');
			}
		}
	}
}

function resetNonZero() {
	for(var i = 0; i<matAheight;i++){
		for(var j = 0; j<matAwidth;j++){
			$('#A_row_'+i+' #A_col_'+j+' input:first').removeClass('nonzero');	
		}
	}

	for(var i = 0; i<matBheight;i++){
		for(var j = 0; j<matBwidth;j++){
			$('#B_row_'+i+' #B_col_'+j+' input:first').removeClass('nonzero');			
		}
	}

	for(var i = 0; i<matANSheight;i++){
		for(var j = 0; j<matANSwidth;j++){
			$('#ANS_row_'+i+' #ANS_col_'+j).removeClass('nonzero');			
		}
	}	
}

function createPermutationMatFromIDMat(IDMat) {
	var PMat = Array(IDMat.length);
	for(var i = 0; i<IDMat.length;i++){
		PMat[i].push(Array(IDMat.length));
		for(var j = 0; j<IDMat.length;j++){
			if(j = IDMat[j]+i){
				Pmat[i][j] = 1;
			}else{
				Pmat[i][j] = 0;
			}
		}
	}
}
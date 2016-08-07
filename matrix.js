var matAwidth;
var matAheight;
var matBwidth;
var matBheight;
var matANSwidth;
var matANSheight;

var matA;
var matB;
var matANS;

var cur_num_A_row = 0;
var cur_num_A_col = 0;

var cur_num_B_row = 0;
var cur_num_B_col = 0;

var cur_num_ANS_row = 0;
var cur_num_ANS_col = 0;

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

	for(var i = 0; i<matBheight; i++){
		matB.push(new Array(matBwidth))
		for(var j = 0; j<matBwidth;j++){
			if(matBheight===matBwidth&&i===j){
				matB[i][j] = 1;
			}else{
				matB[i][j] = 0;
			}
		}	
	}
	displayMatrix();

}


function resizeMatA(height,width,force_update_data,rest) {
	if(rest){
		$('#matA').empty();
		cur_num_A_row = 0;
		cur_num_A_col = 0;	
	}
	if(cur_num_A_row<=height){
		for(var i = cur_num_A_row; i<height;i++){
			$('#matA').append("<tr id='A_row_"+i+"'></tr>");	
		}	
	}else if(cur_num_A_row>height){
		for(var i = cur_num_A_row-1; i>height-1;i--){
			$('#A_row_'+i).remove();
		}
	}
	cur_num_A_row = height;
	if(cur_num_A_col<width){
		for(var i = 0; i<height;i++){
			if($('#A_row_'+i +' > td').length<width+1){
				var num_of_rows = $('#A_row_'+i +' > td').length;
				for(var j = num_of_rows; j<width;j++){
					$('#A_row_'+i).append("<td id='A_col_"+j+"'>"+"<input type='number' " +( enable_cube ? "class='matrix_value'":"") +" onblur='matAupdate(this)' value ='"+matA[i][j]+"'></td>");
				}
			}
		}
	}else if(cur_num_A_col+1>width){
		for(var i = 0; i<height;i++){
			if($('#A_row_'+i).children().length>width){
				for(var j = $('#A_row_'+i+' > td').length-1; j>width-1;j--){
					$('#A_col_'+j).remove();
				}
			}
		}
	}
	cur_num_A_col = width-1;
	if(force_update_data&&!rest){
		for(var i = 0; i<height;i++){
			for(var j = 0; j<width;j++){
				$('#A_row_'+i+' > #A_col_'+j+' > input')[0].value = matA[i][j];
			}
		}
	}

}

function resizeMatB (height,width,force_update_data,rest) {
	if(rest){
		$('#matB').empty();
		cur_num_B_row = 0;
		cur_num_B_col = 0;	
	}
	if(cur_num_B_row<height){
		for(var i = cur_num_B_row; i<height;i++){
			$('#matB').append("<tr id='B_row_"+i+"'></tr>");	
		}	
	}else if(cur_num_B_row>height){
		for(var i = cur_num_B_row-1; i>height-1;i--){
			$('#B_row_'+i).remove();
		}
	}

	cur_num_B_row = height;
	if(cur_num_B_col<width){
		for(var i = 0; i<height;i++){
			if($('#B_row_'+i +' > td').length<width+1){
				var num_of_rows = $('#B_row_'+i +' > td').length;
				for(var j = num_of_rows; j<width;j++){
					$('#B_row_'+i).append("<td id='B_col_"+j+"'>"+"<input type='number' " +( enable_cube ? "class='matrix_value'":"") +" onblur='matBupdate(this)' value ="+matB[i][j]+"></td>");
				}
			}
		}
	}else if(cur_num_B_col+1>width){
		for(var i = 0; i<height;i++){
			if($('#B_row_'+i).children().length>width){
				for(var j = $('#B_row_'+i+'> td').length-1; j>width-1;j--){
					$('#B_col_'+j).remove();
				}
			}
		}
	}
	cur_num_B_col = width-1;
	if(force_update_data&&!rest){
		for(var i = 0; i<height;i++){
			for(var j = 0; j<width;j++){
				$('#B_row_'+i+' > #B_col_'+j+' > input')[0].value = matB[i][j];
			}
		}
	}
}

function displayMatrix () {
	if(cur_num_A_row!==matAheight||cur_num_A_col!==matAwidth||cur_num_B_row!==matBheight||cur_num_B_col!==matBwidth){
		//mat A
		resizeMatA(matAheight,matAwidth,false);

		//matB
		resizeMatB(matBheight,matBwidth,false);
	}
}

function matAupdate(element){
	var pos = Array(2);
	pos[1] = element.parentElement.id.split("_")[2];
	pos[0] = element.parentElement.parentElement.id.split("_")[2];
	matA[pos[0]][pos[1]] = parseFloat(element.value);
	if(hilight_non_zero){
		checkNonZeroA()
	}
}

function matBupdate(element){
	var pos = Array(2);
	pos[1] = element.parentElement.id.split("_")[2];
	pos[0] = element.parentElement.parentElement.id.split("_")[2];
	matB[pos[0]][pos[1]] = parseFloat(element.value);
	if(hilight_non_zero){
		checkNonZeroB()
	}
}

function calculate(){
	var scope={
		A: {},
		B: {},
		D: 1,
		C: 1
	}
	if(enable_cube){
		scope = PLL_SCOPE;
	}
	scope.A = math.matrix(matA);
	scope.B = math.matrix(matB);
	var input = document.getElementById('input').value;
	if(input.includes("B^-")||input.includes("B^(-")){
		scope.D = math.inv(scope.B);
		input = input.replace("B^-","D^")
	}
	if(input.includes("A^-")||input.includes("A^(-")){
		scope.C = math.inv(scope.A)
		input = input.replace("A^-","C^")
	}
	matANS = math.eval(input,scope);
	if(typeof matANS.size !=='function'){
		matANS = math.matrix(matANS);
	}
	matANSheight = matANS.size()[0];
	matANSwidth = matANS.size()[1];

	if(cur_num_ANS_row<matANSheight){
		for(var i = cur_num_ANS_row; i<matANSheight;i++){
			$('#matANS').append("<tr id='ANS_row_"+i+"'></tr>");	
		}	
	}else if(cur_num_ANS_row>matANSheight){
		for(var i = cur_num_ANS_row-1; i>matANSheight-1;i--){
			$('#ANS_row_'+i).remove();
		}
	}
	cur_num_ANS_row = matANSheight;
	if(cur_num_ANS_col<matANSwidth){
		for(var i = 0; i<matANSheight;i++){
			if($('#ANS_row_'+i +' > td').length<matANSwidth+1){
				var num_of_rows = $('#ANS_row_'+i +' > td').length;
				for(var j = num_of_rows; j<matANSwidth;j++){
					$('#ANS_row_'+i).append("<td id='ANS_col_"+j+"'>"+matANS._data[i][j]+"</td>");
				}
			}
		}
	}else if(cur_num_ANS_col+1>matANSwidth){
		for(var i = 0; i<matANSheight;i++){
			if($('#ANS_row_'+i).children().length>matANSwidth){
				for(var j = $('#ANS_row_'+i+' > td').length-1; j>matANSwidth-1;j--){
					$('#ANS_col_'+j).remove();
				}
			}
		}
	}
	for(var i = 0; i<matANSheight;i++){
		for(var j = 0; j<matANSwidth;j++){
			$("#ANS_row_"+i+" #ANS_col_"+j).text(matANS._data[i][j]);
		}
	}
	cur_num_ANS_col = matANSwidth-1;
	checkNonZeroANS();
}

function setAToAnswer(){
	matA = matANS._data;
	resizeMatA(matANS.size()[0],matANS.size()[1],true);
}

function setBToAnswer() {
	matB = matANS._data;
	resizeMatB(matANS.size()[0],matANS.size()[1],true);
}
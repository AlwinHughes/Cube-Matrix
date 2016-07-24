var matAwidth;
var matAheight;
var matBwidth;
var matBheight;

var matA;
var matB;

var cur_num_A_row = 0;
var cur_num_A_col = 0;

var cur_num_B_row = 0;
var cur_num_B_col = 0;

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
				matB[i][j] = 1;
			}else{
				matB[i][j] = 0;
			}
		}	
	}
	console.log("matB = ");
	console.log(matB);

	displayMatrix();

}

function displayMatrix () {
	if(cur_num_A_row!==matAheight||cur_num_A_col!==matAwidth||cur_num_B_row!==matBheight||cur_num_B_col!==matBwidth){
		//mat A
		if(cur_num_A_row<matAheight){
			for(var i = cur_num_A_row; i<matAheight;i++){
				$('#matA').append("<tr id='A_row_"+i+"'></tr>");	
			}	
		}else if(cur_num_A_row>matAheight){
			for(var i = cur_num_A_row-1; i>matAheight-1;i--){
				$('#A_row_'+i).remove();
			}
		}
		cur_num_A_row = matAheight;
		if(cur_num_A_col<matAwidth){
			for(var i = 0; i<matAheight;i++){
				if($('#A_row_'+i +' > td').length<matAwidth+1){
					var num_of_rows = $('#A_row_'+i +' > td').length;
					for(var j = num_of_rows; j<matAwidth;j++){
						$('#A_row_'+i).append("<td id='A_col_"+j+"'>"+"<input type='number' onblur='matAupdate(this)' value ='"+matA[i][j]+"'></td>");
					}
				}
			}
		}else if(cur_num_A_col+1>matAwidth){
			console.log("remove colom")
			for(var i = 0; i<matAheight;i++){
				if($('#A_row_'+i).children().length>matAwidth){
					for(var j = $('#A_row_'+i+' > td').length-1; j>matAwidth-1;j--){
						$('#A_col_'+j).remove();
					}
				}
			}
		}
		cur_num_A_col = matAwidth-1;

		//matB
		if(cur_num_B_row<matBheight){
			for(var i = cur_num_B_row; i<matBheight;i++){
				$('#matB').append("<tr id='B_row_"+i+"'></tr>");	
			}	
		}else if(cur_num_B_row>matBheight){
			for(var i = cur_num_B_row-1; i>matBheight-1;i--){
				$('#B_row_'+i).remove();
			}
		}
		cur_num_B_row = matBheight;
		if(cur_num_B_col<matBwidth){
			for(var i = 0; i<matBheight;i++){
				if($('#B_row_'+i +' > td').length<matBwidth+1){
					var num_of_rows = $('#B_row_'+i +' > td').length;
					for(var j = num_of_rows; j<matBwidth;j++){
						$('#B_row_'+i).append("<td id='B_col_"+j+"'>"+"<input type='number' onblur='matBupdate(this)' value ="+matB[i][j]+"></td>");
					}
				}
			}
		}else if(cur_num_B_col+1>matBwidth){
			for(var i = 0; i<matBheight;i++){
				if($('#B_row_'+i).children().length>matBwidth){
					for(var j = $('#B_row_'+i+'> td').length-1; j>matBwidth-1;j--){
						$('#B_col_'+j).remove();
					}
				}
			}
		}
		cur_num_B_col = matBwidth-1;

	}
}

function matAupdate(element){
	var pos = Array(2);
	pos[1] = element.parentElement.id.split("_")[2];
	pos[0] = element.parentElement.parentElement.id.split("_")[2];
	matA[pos[0]][pos[1]] = parseFloat(element.value);
	console.log(matA);
}

function matBupdate (element) {
	var pos = Array(2);
	pos[1] = element.parentElement.id.split("_")[2];
	pos[0] = element.parentElement.parentElement.id.split("_")[2];
	matB[pos[0]][pos[1]] = parseFloat(element.value);
}
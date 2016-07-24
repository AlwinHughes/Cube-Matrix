var matAwidth;
var matAheight;
var matBwidth;
var matBheight;

var matA;
var matB;

var cur_num_A_row = 0;
var cur_num_A_coll = 0;

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
				matA[i][j] = 1;
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
	if(cur_num_A_row!==matAheight||cur_num_A_coll!==matAwidth||cur_num_B_row!==matBheight||cur_num_B_coll!==matBwidth){
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
		if(cur_num_A_coll<matAwidth){
			console.log("add collums cur"+ cur_num_A_coll);
			for(var i = 0; i<matAheight;i++){
				if($('#A_row_'+i +' > td').length<matAwidth+1){
					var num_of_rows = $('#A_row_'+i +' > td').length;
					for(var j = num_of_rows; j<matAwidth;j++){
						$('#A_row_'+i).append("<td id='A_col_"+j+"'>"+matA[i][j]+"</td>");
					}
				}
			}
		}else if(cur_num_A_coll+1>matAwidth){
			console.log("remove collom")
			for(var i = 0; i<matAheight;i++){
				if($('#A_row_'+i).children().length>matAwidth){
					console.log("start " + $('#A_row_'+i).length+"end "+(matAwidth-1));
					for(var j = $('#A_row_'+i).children().length-1; j>matAwidth-1;j--){
						$('#A_col_'+j).remove();
					}
				}
			}
		}
		cur_num_A_coll = matAwidth-1;

		if(cur_num_A_coll<matAwidth){

		}

		for(var i = cur_num_A_coll; i<=matAwidth; i++){

		}
	}
}
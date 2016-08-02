var enable_cube = false;

function cubeOptionsClick(){
	if((document.getElementById('cube_options').checked&& !enable_cube)||(!document.getElementById('cube_options').checked&&enable_cube)){
		enable_cube = !enable_cube;
		if(enable_cube){
			matA = IDENTITY9;
			matB = IDENTITY9;
			resizeMatA(9,9,true,true);
			resizeMatB(9,9,true,true);
		}else{
			matA = IDENTITY3;
			matB = IDENTITY3;
			resizeMatA(3,3,true,true);
			resizeMatB(3,3,true,true);
		}

	}
}
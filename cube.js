var enable_cube = false;

function cubeOptionsClick(){
	if((document.getElementById('cube_options').checked&& !enable_cube)||(!document.getElementById('cube_options').checked&&enable_cube)){
		enable_cube = !enable_cube;
		if(enable_cube){
			matA = IDENTITY;
			matB = IDENTITY;
			resizeMatA(9,9);
			resizeMatB(9,9);
		}
	}
}
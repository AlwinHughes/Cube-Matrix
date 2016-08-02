var enable_cube = false;

function cubeOptionsClick(){
	if((document.getElementById('cube_options').checked&& !enable_cube)||(!document.getElementById('cube_options').checked&&enable_cube)){
		enable_cube = !enable_cube;
		console.log(enable_cube);
	}
}
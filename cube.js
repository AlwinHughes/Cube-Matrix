var enable_cube;

function cubeOptionsClick() () {
	if((getElementById('cube_options').checked&& !enable_cube)||(!getElementById('cube_options').checked&&enable_cube)){
		enable_cube = !enable_cube;
	}
}
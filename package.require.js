define( [ 'module'
	, './badtv/threex.badtvpasses.js',
	, './badtv/threex.badtvdatgui.js',
	, './badtv/threex.badtvsound.js',
	, './badtv/threex.badtvjamming.js',
	, './shaders/BadTVShader.js',
	, './shaders/FilmShader.js',
	, './shaders/RGBShiftShader.js',
	, './shaders/StaticShader.js',
	], function(module){
	THREEx.BadTVSound.baseUrl	= module.uri+'/../'
});

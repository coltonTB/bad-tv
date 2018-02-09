define( [ 'module'
	, './badtv/threex.badtvpasses.js',
	, './badtv/threex.badtvdatgui.js',
	, './badtv/threex.badtvsound.js',
	, './badtv/threex.badtvjamming.js',
	, './shaders/BadTVShader.js',
	, './shaders/FilmShader.js',
	, './shaders/RGBShiftShader.js',
	, './shaders/StaticShader.js',
	, './shaders/CopyShader.js',
	, './postprocessing/EffectComposer.js',
	, './postprocessing/RenderPass.js',
	, './postprocessing/ShaderPass.js',
	, './postprocessing/MaskPass.js',
	, './libs/dat.gui.min.js',
	], function(module){
	THREEx.BadTVSound.baseUrl	= module.uri+'/../'
});

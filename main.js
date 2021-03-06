
require([ './package.require.js'
	], function(){
	var renderer	= new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var onRenderFcts= [];
	var scene	= new THREE.Scene();
	var camera	= new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, -10000, 10000 )
	camera.position.z = 3;

	//////////////////////////////////////////////////////////////////////////////////
	//		add an object and make it move					//
	//////////////////////////////////////////////////////////////////////////////////

	// build the mesh
	var geometry	= new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
	var material	= new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0.5
  });
	var mesh	= new THREE.Mesh( geometry, material );
	scene.add( mesh )

	//////////////////////////////////////////////////////////////////////////////////
	//		badTVPasses							//
	//////////////////////////////////////////////////////////////////////////////////

	var badTVPasses	= new THREEx.BadTVPasses();
	onRenderFcts.push(function(delta, now){
		badTVPasses.update(delta, now)
	})
	THREEx.addBadTVPasses2DatGui(badTVPasses)

	//////////////////////////////////////////////////////////////////////////////////
	//		composer 							//
	//////////////////////////////////////////////////////////////////////////////////

	var composer	= new THREE.EffectComposer(renderer);
	var renderPass	= new THREE.RenderPass( scene, camera );
	composer.addPass( renderPass );

	// add badTVPasses to composer
	badTVPasses.addPassesTo(composer)

	composer.passes[composer.passes.length -1 ].renderToScreen	= true;

	//////////////////////////////////////////////////////////////////////////////////
	//		render the scene						//
	//////////////////////////////////////////////////////////////////////////////////
	onRenderFcts.push(function(delta, now){
		// disable rendering directly thru renderer
		// renderer.render( scene, camera )

		// render thru composer
		composer.render(delta)
	})

	//////////////////////////////////////////////////////////////////////////////////
	//		loop runner							//
	//////////////////////////////////////////////////////////////////////////////////
	var lastTimeMsec= null
	requestAnimationFrame(function animate(nowMsec){
		// keep looping
		requestAnimationFrame( animate );
		// measure time
		lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
		var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
		lastTimeMsec	= nowMsec
		// call each update function
		onRenderFcts.forEach(function(onRenderFct){
			onRenderFct(deltaMsec/1000, nowMsec/1000)
		})
	})
})

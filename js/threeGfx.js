	$(document).ready(function() {
		var scene     = new THREE.Scene();
		var camera    = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		var container = document.getElementById("graphics");
		var renderer  = new THREE.WebGLRenderer({alpha:true});
		renderer.setSize( container.offsetWidth, container.offsetHeight );
		container.appendChild( renderer.domElement );

		var geometry = new THREE.BoxGeometry( 3, 2, 3 );
		var material = new THREE.MeshBasicMaterial( { wireframe:true, color: 'white' } );
		var cube = new THREE.Mesh( geometry, material );
/*
		var geometry2 = new THREE.BoxGeometry( 3, 3, 3 );
		var cube2 = new THREE.Mesh( geometry2, material );

		var geometry3 = new THREE.BoxGeometry( 2, 2, 2 );
		var cube3 = new THREE.Mesh( geometry2	, material );
		*/
		scene.add( cube );
		//scene.add( cube2 );
		//scene.add( cube3 );

		camera.position.z = 5;

		function render() {
			requestAnimationFrame( render );
			cube.rotation.x += 0.02;
			cube.rotation.y += 0.02;
			/*
			cube2.rotation.x += 0.01;
			cube2.rotation.y += 0.01;
			cube3.rotation.x += 0.015;
			cube3.rotation.y += 0.015;
			*/
			renderer.render( scene, camera );
		}
		render();

	});
var cmd=require('node-cmd');

// looping image you can preview and watch it change automatically
cmd.run(
	'fswebcam -l 1 0.jpg -r 1024 -F 5'
);

//javascript loop instead of C -> random size
function realTime(){
	var command='fswebcam 1.jpg -r '+
		(Math.random()*200*10 | 0)
	//console.log(command)
	cmd.run(
		command
	);

	setTimeout(
		realTime,
		1200
	);
}

realTime();


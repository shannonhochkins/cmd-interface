import express from 'express';
import http from 'http';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import openurl from 'openurl';
import config from '../configs/webpack.config.js';
import general from '../configs/general.config.js';
import socketio from 'socket.io';
import npmRun from 'npm-run';
import childProcess from 'child_process';


const {host, port} = general;
const app = express();
const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {
	noInfo: false,
  	publicPath: config.output.publicPath,
    stats: {colors: true}
}));
app.use(webpackHotMiddleware(compiler,  {
    log: console.log
}));

const server = new http.Server(app);
const io = socketio(server);

server.listen(port,  () => {
	openurl.open(`http://${host}:${port}`);
});

io.on('connection', (socket) => {
  // <insert relevant code here>
  console.log('New Connection');

  socket.on('command:send', $data => {
  	
  	const spawn = npmRun.spawn($data.command, $data.arguments.split(' '), { 
  		stdio: 'inherit' 
  	});

  	console.log('data', spawn);

  	if (spawn.stdout) {
  		spawn.stdout.on( 'data', data => {
		    console.log( `stdout: ${data}` );
		});	
  	}
  	
  	

    if (spawn.stderr) {
		spawn.stderr.on( 'data', data => {
		    console.log( `stderr: ${data}` );
		});
	}

	spawn.on( 'close', code => {
	    console.log( `child process exited with code ${code}` );
	});

	spawn.on( 'exit', code => {
	    console.log( `child process exited with code ${code}` );
	});
    
  });

});

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

const {host, port} = general;
const app = express();
const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
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
  console.log('connectionssdfsdfsdfsdf');
});

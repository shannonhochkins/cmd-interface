
import io from 'socket.io-client';
import general from '../configs/general.config.js';

const {host, port} = general;

const socket = io(`http://${host}:${port}`);


socket.on('connect', onConnect);

function onConnect() {
  console.log('fgggffff ' + socket.id);
}
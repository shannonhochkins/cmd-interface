
import io from 'socket.io-client';
import general from '../configs/general.config.js';
import initializer from './core/index.js';


const {host, port} = general;
const socket = io(`http://${host}:${port}`, { reconnect: true });

const angularModule = new initializer(io);


socket.on('connect', onConnect);

function onConnect() {
  console.log('User Connected ' + socket.id);
}
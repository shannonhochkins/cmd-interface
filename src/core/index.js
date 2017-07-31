import application from './_application.module.js';
import socketFactory from './socket.factory.js';
import modules from '../common/**/*.module.js';


export default class Initializer {
	constructor(io) {
		this.io = io;
		this.build();
	}

	build() {
		return angular.module('cmdInterface', modules.map(m => m.name))
			.service('socketFactory', socketFactory)
			.component('application', application);
	}
}
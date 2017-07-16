
import application from './application.js';
import socketFactory from './socket.factory.js';

export default class Initializer {
	constructor(io) {
		this.io = io;
		this.build();
	}

	build() {
		return angular.module('cmdInterface', [])
			.service('socketFactory', socketFactory)
			.component('application', application);
	}
}
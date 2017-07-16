import io from 'socket.io-client';


export default class SocketFactory {
	
	constructor($rootScope) {
		this.$rootScope = $rootScope;
		this.socket = io.connect();
	}

	on(eventName, callback) {
		this.socket.on(eventName, () => {
	        const args = arguments;
	        this.$rootScope.$apply(() => {
	        	callback.apply(socket, args);
	        });
	    });
	}

	emit(eventName, data, callback) {
		this.socket.emit(eventName, data, () => {
	        const args = arguments;
	        this.$rootScope.$apply(() => {
	            if (callback) callback.apply(socket, args);
	        });
	    });
	}

}

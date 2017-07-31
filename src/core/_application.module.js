import template from './_application.template.html';
import './_application.scss';

module.exports = {
	template,
	controller : class AppplicationController {
		/*@ngInject*/
		constructor(socketFactory) {
			this.socketFactory = socketFactory;
			this.command = 'npm';
			this.arguments = 'run validate';
			this.validate();
		}

		validate() {
			this.socketFactory.emit('command:send', {
				command : this.command,
				arguments : this.arguments
			});
		}
	}
};
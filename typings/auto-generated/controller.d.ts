import ComponentController from '../../app/controller/component';
declare module 'kukumoon' {
	interface ControllerHub {
		component: ComponentController;
	}
}
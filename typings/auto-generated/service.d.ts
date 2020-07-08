import ComponentService from '../../app/service/component';
declare module 'kukumoon' {
	interface ServiceHub {
		component: ComponentService;
	}
}
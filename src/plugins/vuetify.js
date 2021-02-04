import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				docolor: '#005B8E',
				taskcolor: '#0E5540',
				dark: '#2C4159',
				link: '#0077CE',
				brown: '#693840',
				// search: '#5C6A6A',
				search: '#546E7A',
				archive: '#5a482b',
			}
		}
	}
});

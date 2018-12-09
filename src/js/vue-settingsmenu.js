var SettingsMenu = Vue.component('settingsmenu', {
	props: ['setShowSettings'],
	data: function() {
		return {
			showSettings: false
		}
	},
	methods: {
		loginHandler: function() {
			console.log('vue-settingsmenu.js, loginHandler');
		},
		closeHandler: function() {
			console.log('vue-settingsmenu.js, closeHandler');
			this.showSettings = false;
			// Maybe need a timer before calling method in app
			this.setShowSettings(false);
		}
	},
	mounted: function() {
		this.showSettings = true;
	}
});
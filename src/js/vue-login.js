var Login = Vue.component('login', {
	props: ['setShowLogin'],
	data: function() {
		return {
			showLogin: false
		}
	},
	methods: {
		loginHandler: function() {
			console.log('vue-login.js, loginHandler');
		},
		closeHandler: function() {
			console.log('vue-login.js, closeHandler');
			this.showLogin = false;
			// Maybe need a timer before calling method in app
			this.setShowLogin(false);
		}
	},
	mounted: function() {
		this.showLogin = true;
	}
});
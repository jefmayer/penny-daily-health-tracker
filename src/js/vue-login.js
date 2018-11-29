var Login = Vue.component('login', {
	props: ['setShowLogin'],
	data: function() {
		return {}
	},
	methods: {
		loginHandler: function() {
			console.log('vue-login.js, loginHandler');
		},
		closeHandler: function() {
			console.log('vue-login.js, closeHandler');
			this.setShowLogin(false);
		}
	},
	mounted: function() {}
});
var SettingsMenu = Vue.component('settingsmenu', {
	props: ['setShowSettings', 'setLoggedInSettings', 'setMenuToggle'],
	data: function() {
		return {
			animateShowSettings: false,
			showSettings: false,
			hideSettingsTimer: null,
			requesting: false,
			formFields: {
				username: {
					value: '',
					showError: false
				},
				password: {
					value: '',
					showError: false
				}	
			}
		}
	},
	methods: {
		loginHandler: function(event) {
			event.preventDefault();
			var isValid = true;
			for (var e in this.formFields) {
				if (this.formFields[e].value === '') {
					this.formFields[e].showError = true;
					isValid = false;
				} else {
					this.formFields[e].showError = false;
				}
			}
			if (isValid) {
				this.loginRequest();
			}
		},
		loginRequest: function() {
			var that = this;
					that.requesting = true;
			var request = new XMLHttpRequest();
					request.open('POST', '/login', true);
					request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
					
			request.onload = function() {
				if (request.status >= 200 && request.status < 400) {
					that.requesting = false;
					var data = JSON.parse(request.responseText);
					console.log(data[0]);
					console.log(data[0].success);
					if (data[0].success === 'success') {
						that.setLoggedInSettings(true);
						// Persist session in local storage
						
						// Close settings
						that.closeHandler();
					}
        } else {
        	console.log(request.responseText);
        	console.warn('vue-settingsmenu.js, login : error');
        }
			}
			request.send(JSON.stringify({
				username: that.formFields.username.value,
				password: that.formFields.password.value
			}));
		},
		persistUserSession: function() {
			
		},
		closeHandler: function() {
			this.hide();
			var that = this;
			this.hideSettingsTimer = setTimeout(function() {
				that.setShowSettings(false);
				clearTimeout(that.hideSettingsTimer);
			}, 250);
		},
		hide: function() {
			this.animateShowSettings = false;
			this.setMenuToggle(false);
		}
	},
	mounted: function() {
		clearTimeout(this.hideSettingsTimer);
		this.showSettings = true;
		this.animateShowSettings = true;
	}
});
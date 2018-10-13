var app = new Vue({
	el: '#app',
	data: {
		requesting: false,
		daily: {
			date: '',
			mobility: '5',
			activity: '5',
			appetite: '5',
			pain: '5',
			stress: '5',
			notes: ''
		}
	},	
	methods: {
		getData: function() {
			var that = this;
					that.requesting = true;
			var request = new XMLHttpRequest();
					request.open('GET', '/getRecords', true);
			
			request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
					that.requesting = false;
					console.log(JSON.parse(request.responseText));
        } else {
        	console.log(request.responseText);
        	console.warn('index.js, getRecords : error');
        }
			}
			request.send();
		},
		addRecord: function(event) {
			event.preventDefault();
			var that = this;
					that.requesting = true;
			var request = new XMLHttpRequest();
					request.open('POST', '/addRecord', true);
					request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
			
			request.onload = function() {
				if (request.status >= 200 && request.status < 400) {
					that.requesting = false;
					console.log(JSON.parse(request.responseText));
        } else {
        	console.log(request.responseText);
        	console.warn('index.js, addRecord : error');
        }
			}
			request.send(JSON.stringify({
				date: this.daily.date,
				mobility: this.daily.mobility,
				activity: this.daily.activity,
				appetite: this.daily.appetite,
				pain: this.daily.pain,
				stress: this.daily.stress,
				notes: this.daily.notes
			}));
		}
	},
	mounted: function() {
		this.getData();
	}

});
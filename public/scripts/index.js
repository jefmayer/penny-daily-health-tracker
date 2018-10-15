var app = new Vue({
	el: '#app',
	data: {
		requesting: false,
		datapoints: [],
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
					that.datapoints = JSON.parse(request.responseText);
					console.log(that.data);
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
					that.refresh();
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
		},
		getTodaysFormattedDate: function() {
			var d = new Date(),
					s = '';
			
			s = d.getUTCFullYear() + '-' + this.addLeadingZero(d.getMonth() + 1) + '-' + this.addLeadingZero(d.getDate())
			return s;
		},
		addLeadingZero: function(n) {
			if (n.toString().length === 1) {
				return '0' + n.toString();
			}
			return n;
		},
		reset: function() {
			this.daily.date = this.getTodaysFormattedDate();
			this.daily.mobility = 5;
			this.daily.activity = 5;
			this.daily.appetite = 5;
			this.daily.pain = 5;
			this.daily.stress = 5;
			this.daily.notes = '';
		},
		refresh: function() {
			this.reset();
			this.getData();
		}
	},
	mounted: function() {
		this.daily.date = this.getTodaysFormattedDate();
		this.getData();
		// https://bl.ocks.org/d3noob/402dd382a51a4f6eea487f9a35566de0
	}

});
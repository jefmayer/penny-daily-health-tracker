// Template
// https://codesandbox.io/embed/4l3w20zomw

var app = new Vue({
	el: '#app',
	components: {
  	'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
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
		},
		defaults: {
			date: '',
			mobility: '5',
			activity: '5',
			appetite: '5',
			pain: '5',
			stress: '5',
			notes: ''
		},
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
					console.log(that.datapoints);
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
			var d = new Date();
			return d.getUTCFullYear() + '-' +
			this.addLeadingZero(d.getMonth() + 1) + '-' +
			this.addLeadingZero(d.getDate())
		},
		addLeadingZero: function(n) {
			if (n.toString().length === 1) {
				return '0' + n.toString();
			}
			return n;
		},
		getDataByDate: function(date) {
			for (var i = 0; i < this.datapoints.length; i++) {
				if (this.datapoints[i].date === date) {
					return this.datapoints[i];
				}
			}
			return this.defaults;
		},
		resetFields: function() {
			this.daily.date = this.getTodaysFormattedDate();
			this.populateFields(this.defaults);
		},
		populateFields: function(values) {
			for (var e in this.daily) {
				this.daily[e] = values[e];
			}
		},
		refresh: function() {
			this.resetFields();
			this.getData();
		},
		edit: function(date) {
			this.populateFields(this.getDataByDate(date));
		}
	},
	mounted: function() {
		this.daily.date = this.getTodaysFormattedDate();
		this.getData();
		// https://bl.ocks.org/d3noob/402dd382a51a4f6eea487f9a35566de0
	}

});
;
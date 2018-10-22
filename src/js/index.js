var app = new Vue({
	el: '#app',
	components: {
  	'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide,
    'record': Record,
    'chart': Chart
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
					that.datapoints = JSON.parse(request.responseText).sort(that.sortByDate).reverse();
					// init chart...
					app.$refs.progressChart.init(JSON.parse(request.responseText).sort(that.sortByDate).reverse());
        } else {
        	console.log(request.responseText);
        	console.warn('index.js, getRecords : error');
        }
			}
			request.send();
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
		update: function() {
			console.log('index.js, update');
			this.getData();
		},
		sortByDate: function(a, b) {
			if (a.date < b.date)
				return -1;
			if (a.date > b.date)
				return 1;
			return 0;
		}
	},
	mounted: function() {
		this.daily.date = this.getTodaysFormattedDate();
		this.getData();
	}
});
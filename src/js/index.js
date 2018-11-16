// TODO: Display new entry in Progress Calendar after adding
// TODO: Create loader

// https://github.com/charliekassel/vuejs-datepicker?ref=madewithvuejs.com#demo
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
		carouselTransform: String,
		datapoints: [],
		showLogin: false,
		defaults: {
			date: Date,
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
					that.datapoints = JSON.parse(request.responseText).sort(that.sortByDate).reverse();
					// init chart
					app.$refs.progressChart.update(JSON.parse(request.responseText).sort(that.sortByDate).reverse());
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
		loginHandler: function() {
			this.showLogin = true;
		},
		update: function() {
			this.getData();
		},
		pause: function() {
			var carousel = app.$refs.carousel;
			// Set temp transform
			this.carouselTransform = carousel.$refs["VueCarousel-inner"].style.transform;
			carousel.$refs["VueCarousel-inner"].classList.add('u-disableAllTransforms');
			// Need to swap translateX to left
			// Lazy regex, shouldn't eval to null
			carousel.$refs["VueCarousel-inner"].style.left = /\((.*?)\,/.exec(this.carouselTransform)[1];
		},
		restart: function() {
			var carousel = app.$refs.carousel;
			carousel.$refs["VueCarousel-inner"].classList.remove('u-disableAllTransforms');
			// Reset to correct transform translation, and then kill transistion until next renders
			carousel.$refs["VueCarousel-inner"].style.transition = 'transform 0s ease 0s'
			carousel.$refs["VueCarousel-inner"].style.transform = this.carouselTransform;
			// Reset left
			carousel.$refs["VueCarousel-inner"].style.left = 'auto';
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
		this.defaults.date = this.getTodaysFormattedDate();
		this.getData();
	}
});
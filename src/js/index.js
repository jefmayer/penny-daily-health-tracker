// TODO: Create loader
// TODO: What is the new item. Add flex-shrink: 1 and then immediately flip back to 0
// TODO: Add transition: all to new item
// TODO: Create Express DB calls for login
// TODO: Format login modal
// TODO: Active/hover state for carousel item
// TODO: Animate in header
// BUG: Move hover to mouseon/off
// BUG: Fix verical scroll on graph
// BUG: Main nav, add about

// https://github.com/charliekassel/vuejs-datepicker?ref=madewithvuejs.com#demo
// https://ssense.github.io/vue-carousel/examples/
// https://ssense.github.io/vue-carousel/guide/
// https://github.com/SSENSE/vue-carousel

var app = new Vue({
	el: '#app',
	components: {
  	'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide,
    'record': Record,
    'chart': Chart,
    'login': Login
  },
	data: {
		requesting: false,
		carouselTransform: String,
		datapoints: [],
		dataLoaded: false,
		showLogin: false,
		newRecord: {
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
					// Animate in content
					that.dataLoaded = true;
        } else {
        	console.log(request.responseText);
        	console.warn('index.js, getRecords : error');
        }
			}
			request.send();
		},
		displayLogin: function() {
			this.setShowLogin(true);
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
		slideCarouselToDate: function(date) {
			for (var i = 0; i < this.datapoints.length; i++) {
				if (date === this.datapoints[i].date) {
					var page =  Math.floor(i / app.$refs.carousel.currentPerPage);
					app.$refs.carousel.goToPage(page)
				}
			}
		},
		sortByDate: function(a, b) {
			if (a.date < b.date)
				return -1;
			if (a.date > b.date)
				return 1;
			return 0;
		},
		addLeadingZero: function(n) {
			if (n.toString().length === 1) {
				return '0' + n.toString();
			}
			return n;
		},
		getTodaysFormattedDate: function() {
			var d = new Date();
			return d.getUTCFullYear() + '-' +
			this.addLeadingZero(d.getMonth() + 1) + '-' +
			this.addLeadingZero(d.getDate())
		},
		setShowLogin: function(val) {
			this.showLogin = val;
		}
	},
	mounted: function() {
		this.newRecord.date = this.getTodaysFormattedDate();
		this.getData();
	}
});
Vue.component('daily-entry', {
	props: ['item'],
	data: function() {
		return {
			canEdit: false,
			requesting: false
		}
	},
	methods: {
    editHandler: function(event) {
	    event.preventDefault();
	    this.canEdit = !this.canEdit; 
    },
    updateHandler: function(event) {
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
					that.canEdit = !that.canEdit; 
        } else {
        	console.log(request.responseText);
        	console.warn('index.js, addRecord : error');
        }
			}
			request.send(JSON.stringify({
				date: this.item.date,
				mobility: this.item.mobility,
				activity: this.item.activity,
				appetite: this.item.appetite,
				pain: this.item.pain,
				stress: this.item.stress,
				notes: this.item.notes
			}));
		},
    getDisplayMonth: function(date) {
			var a = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
			return a[parseInt(date.split('-')[1]) - 1];
		},
		getDisplayDate: function(date) {
			return parseInt(date.split('-')[2]);
		},
		getDisplayYear: function(date) {
			return date.split('-')[0];
		}
	}
});


var app = new Vue({
	el: '#app',
	components: {
  	'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
	data: {
		requesting: false,
		datapoints: [],
		graph: {
			margin: {
				top: 20,
				right: 0,
				bottom: 30,
				left: 25
			},
			width: window.innerWidth - 25,
			height: 300 - 20
		},
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
					that.datapoints = JSON.parse(request.responseText).reverse();
					that.renderGraph();
					console.log(that.datapoints);
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
		},
		renderGraph: function() {
			var svg = d3.select('#progressChart').append('svg')
				.attr('width', this.graph.width + this.graph.margin.left + this.graph.margin.right)
				.attr('height', this.graph.height + this.graph.margin.top + this.graph.margin.bottom)
				.append('g')
				.attr('transform', 'translate(' + this.graph.margin.left + ',' + this.graph.margin.top + ')');
			// Set ranges w/ initial set of values	
			var values = this.getAttributeData('mobility');
			// Set ranges
			var x = d3.scaleTime().range([0, this.graph.width]);
					x.domain(d3.extent(values, function(d) { return d.date; }));
			var y = d3.scaleLinear().range([this.graph.height, 0]);
					y.domain([0, 10]);
			// Add Lines
			this.addAttributeLine(svg, values, 'o-line--mobility', x, y);			
			this.addAttributeLine(svg, this.getAttributeData('activity'), 'o-line--activity', x, y);
			this.addAttributeLine(svg, this.getAttributeData('appetite'), 'o-line--appetite', x, y);
			this.addAttributeLine(svg, this.getAttributeData('pain'), 'o-line--pain', x, y);
			this.addAttributeLine(svg, this.getAttributeData('stress'), 'o-line--stress', x, y);
			// Add x-axis
			svg.append('g')
				.attr('transform', 'translate(0,' + this.graph.height + ')')
				.call(d3.axisBottom(x));
			// Add y-axis
			svg.append('g')
				.attr("class", "o-axis--y")
				.call(d3.axisLeft(y));
			svg.selectAll('.tick')
				.each(function (d) {
					if ( d === 0 ) {
						this.remove();
					}
				});
		},
		getAttributeData: function(attribute) {
			var arr = [];
			for (var i = 0; i < this.datapoints.length; i++) {
				arr.push({date: new Date(this.datapoints[i].date), value: parseInt(this.datapoints[i][attribute])});
			}
			return arr;
		},
		addAttributeLine: function(svg, data, style, x, y) {
			var line = d3.line()
				.x(function(d) { return x(d.date); })
				.y(function(d) { return y(d.value); });
			
			svg.append('path')
				.data([data])
				.attr('class', style)
				.attr('d', line);
		}
	},
	mounted: function() {
		this.daily.date = this.getTodaysFormattedDate();
		this.getData();
		// https://bl.ocks.org/d3noob/402dd382a51a4f6eea487f9a35566de0
	}

});
;
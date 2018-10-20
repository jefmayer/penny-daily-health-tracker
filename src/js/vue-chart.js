var Chart = Vue.component('test', {
	data: function() {
		return {
			chartData: [],
			svg: null,
			margin: {
				top: 20,
				right: 0,
				bottom: 30,
				left: 25
			},
			attributes: {
				mobility: {
					line: Object,
					path: Object
				},
				activity: {
					line: Object,
					path: Object
				},
				appetite: {
					line: Object,
					path: Object
				},
				pain: {
					line: Object,
					path: Object
				},
				stress: {
					line: Object,
					path: Object
				}
			},
			width: Number,
			height: Number,
			x: d3.scaleTime(),
			y: d3.scaleLinear(),
			xAxis: Object,
			yAxis: Object,
			path: Object
		}
	},
	methods: {
		getAttributeData: function(attribute) {
			var arr = [];
			for (var i = 0; i < this.chartData.length; i++) {
				arr.push({date: new Date(this.chartData[i].date), value: parseInt(this.chartData[i][attribute])});
			}
			return arr;
		},
		addAttributeLine: function(name) {
			var values = this.getAttributeData(name)
			var x = this.x;
			var y = this.y;
			this.attributes[name].line = d3.line()
				.x(function(d) { return x(d.date); })
				.y(function(d) { return y(d.value); });
			
			this.attributes[name].path = this.svg.append('path')
				.data([values])
				.attr('class', 'o-line--' + name)
				.attr('d', this.attributes[name].line);				
		},
		renderXGridlines: function() {		
			return d3.axisBottom(this.x);
		},
		init: function(data) {
			this.chartData = data;
			
			this.width = window.innerWidth - this.margin.left;
			this.height =  300 - this.margin.top;
			
			this.svg = d3.select('#progressChart').append('svg')
				.attr('width', this.width + this.margin.left + this.margin.right)
				.attr('height', this.height + this.margin.top + this.margin.bottom)
				.append('g')
				.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
			// Set ranges w/ initial set of values	
			var values = this.getAttributeData('mobility');
			// Set ranges
			this.x
				.range([-this.margin.left, this.width - this.margin.left])
				.domain(d3.extent(values, function(d) { return d.date; }));
			this.y
				.range([this.height, 0])
				.domain([0, 10]);
			// Add lines
			for (var e in this.attributes) {
				this.addAttributeLine(e);
			}
			
			// Add x-axis
			this.xAxis = this.svg.append('g')
				.attr('transform', 'translate(' +0 + ',' + this.height + ')')
				.call(d3.axisBottom(this.x).tickSizeOuter(0));
			// Add y-axis
			this.yAxis = this.svg.append('g')
				.attr('class', 'o-axis--y')
				.call(d3.axisLeft(this.y));
			// Add x-grid
			this.svg.append('g')			
			.attr('class', 'o-grid')
			.attr('transform', 'translate(0,' + this.height + ')')
			.call(this.renderXGridlines()
				.tickSize(-this.height - this.margin.top)
				.tickFormat('')
			); 
			// Remove first tick from y-axis
			this.svg.selectAll('.tick')
				.each(function(d) {
					if ( d === 0 ) {
						this.remove();
					}
				});
			this.render();
		},
		render: function() {
			if (this.svg === null) return;
			// Otherwise
			this.width = window.innerWidth - this.margin.left;
			
			this.svg
				.attr('width', this.width + this.margin.left + this.margin.right)
				.attr('height', this.height + this.margin.top + this.margin.bottom)
				.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
			
			// Set range
			this.x
				.range([0, this.width]);
			
			this.xAxis
				.attr('transform', 'translate(' +0 + ',' + this.height + ')')
			
			for (var e in this.attributes) {
				this.attributes[e].path.attr('d', this.attributes[e].line);
			}
		}
	},
	mounted: function() {
		window.addEventListener('resize', this.render);
	}
});
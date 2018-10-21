var Chart = Vue.component('test', {
	data: function() {
		return {
			chartData: [],
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
			xAxisGrid: Object,
			path: Object
		}
	},
	methods: {
		/*getAttributeData: function(attribute) {
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
		},*/
		init: function(data) {
			// this.chartData = data;
			
			var margin = {
				top: 20,
				right: 0,
				bottom: 30,
				left: 25
			};
			
			var width = parseInt(d3.select('#progressChart').style('width')) - margin.left - margin.right,
			var height = parseInt(d3.select('#progressChart').style('height'));
			
			// Define date parser
			var parseDate = d3.time.format('%Y-%m-%d').parse;
			
			// Define scales
			var xScale = d3.time.scale().range([0, width]);
			var yScale = d3.scale.linear().range([height, 0]);
			var color = d3.scale.ordinal()
				.range(['#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000']);
			
			// Define axes
			var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
			var yAxis = d3.svg.axis().scale(yScale).orient('left');
			
			// Define lines
			var line = d3.svg.line().interpolate('basis')
				.x(function(d) { return xScale(d['date']); })
				.y(function(d) { return yScale(d['attribute']); });
			
			// Define svg canvas
			var svg = d3.select('#progressChart')
				.attr('width', this.width + margin.left + margin.right)
				.attr('height', this.height)
				.append('g')
				.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
			
			// Format data for chart
			var i, e;
			for (i = 0; i < data.length; i++) {
				// Set up object
				if (i === 0) {
					for (e in data[i]) {
						if (e !== 'date' && e !== '_id') {
							this.chartData.push({
								category: e,
								datapoints: []
							});	
						}	
					}
				}
				for (e in data[i]) {
					if (e !== 'date' && e !== '_id') {
						this.getAttributeArrByName(e).push({date: data[i].date, attribute: data[i][e]});
					}
				}
			}
			
			console.log(this.chartData);
			
			xScale.domain(d3.extent(data, function(d) {return d['date']; }));
			yScale.domain([0.25, 0.5]);
			
			// Place the axes on the chart
			svg.append("g")
				.attr("class", "o-axis--x")
				.attr("transform", "translate(0," + height + ")")
				.call(this.xAxis);
			
			svg.append("g")
				.attr("class", "o-axis--y")
				.call(this.yAxis);
			
			var products = svg.selectAll(".category")
				.data(this.chartData)
				.enter().append("g")
				.attr("class", "category");
			
			products.append("path")
				.attr("class", "line")
				.attr("d", function(d) {return line(d.datapoints); })
				.style("stroke", function(d) {return color(d.category); });
			
			var resize = function() {
				var width = parseInt(d3.select("#progressChart").style("width")) - margin.left - margin.right,
				height = parseInt(d3.select("#progressChart").style("height"));
				
				// Update the range of the scale with new width/height
				xScale.range([0, width]);
				yScale.range([height, 0]);
				
				// Update the axis and text with the new scale
				svg.select('.x.axis')
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis);
				
				svg.select('.y.axis')
				.call(yAxis);
				
				// Force D3 to recalculate and update the line
				svg.selectAll('.line')
				.attr("d", function(d) { return line(d.datapoints); });
				
				// Update the tick marks
				xAxis.ticks(Math.max(width/75, 2));
				yAxis.ticks(Math.max(height/50, 2));
			};
			
			d3.select(window).on('resize', resize);
			
			resize();
			
			
			
			/*this.svg = d3.select('#progressChart').append('svg')
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
				.attr('class', 'o-axis--x')
				.attr('transform', 'translate(' + 0 + ',' + this.height + ')')
				.call(d3.axisBottom(this.x).tickSizeOuter(0));
			// Add y-axis
			this.yAxis = this.svg.append('g')
				.attr('class', 'o-axis--y')
				.call(d3.axisLeft(this.y));
			// Add x-grid
			this.xAxisGrid = this.svg.append('g')			
				.attr('class', 'o-grid')
				.attr('transform', 'translate(0,' + this.height + ')')
				.call(
					this.renderXGridlines()
						.tickSize(-this.height - this.margin.top)
						.tickFormat('')
				);
 
			// Remove first tick from y-axis
			this.svg.selectAll('.tick')
				.each(function(d) {
					if ( d === 0 ) {
						this.remove();
					}
				});*/
			this.render();
		},
		render: function() {
			if (this.svg === null) return;
			// Otherwise
			
			
			
			
			
			/*this.width = parseInt(d3.select("#progressChart").style("width")) - this.margin.left - this.margin.right,
			this.height = parseInt(d3.select("#progressChart").style("height"));
			
			// Update the range of the scale with new width/height
			this.xScale.range([0, this.width]);
			this.yScale.range([this.height, 0]);
			
			// Update the axis and text with the new scale
			this.svg.select('.x.axis')
				.attr("transform", "translate(0," + this.height + ")")
				.call(this.xAxis);
			
			this.svg.select('.y.axis')
				.call(this.yAxis);
			
			// Force D3 to recalculate and update the line
			this.svg.selectAll('.line')
				.attr('d', function(d) { return line(d.datapoints); });
			
			// Update the tick marks
			this.xAxis.ticks(Math.max(this.width/75, 2));
			this.yAxis.ticks(Math.max(this.height/50, 2));*/
				
			/*for (var e in this.attributes) {
				this.attributes[e].path.attr('d', this.attributes[e].line);
			}*/
		},
		getAttributeArrByName: function(name) {
			for (var i = 0; i < this.chartData.length; i++) {
				if (this.chartData[i].category === name) {
					return this.chartData[i].datapoints;
				}
			}
			return null;
		}
	},
	mounted: function() {
		window.addEventListener('resize', this.render);
	}
});
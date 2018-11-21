// http://bl.ocks.org/hunzy/11110940
// https://bl.ocks.org/josiahdavis/7a02e811360ff00c4eef

// TODO: Add hover to lines
// TODO: Move chart arrows

var Chart = Vue.component('test', {
	data: function() {
		return {
			chartData: [],
			chartAdded: false
		}
	},
	methods: {
		update: function(data) {
			var margin = {
				top: 20,
				right: 0,
				bottom: 0,
				left: 25
			};
						
			var width = parseInt(d3.select('#progressChart').style('width')) - margin.left - margin.right;
			var height = parseInt(d3.select('#progressChart').style('height')) - 50;
			
			// Set date format
			for (i = 0; i < data.length; i++) {
				data[i].date = new Date(data[i].date);
			}
						
			// Define scales
			var xScale = d3.time.scale().range([0, width]);
			var yScale = d3.scale.linear().range([height, 0]);
			var color = d3.scale.ordinal()
				.range(['rgb(179,38,229)', 'rgb(35,232,216)', 'rgb(126,90,251)', 'rgb(252,21,123)', 'rgb(253,139,38)']);
			
			// Define axes
			var xAxis = d3.svg.axis().scale(xScale).orient('bottom').innerTickSize(-height - margin.top).outerTickSize(0).tickPadding(10);;
			var yAxis = d3.svg.axis().scale(yScale).orient('left');
			
			// Define lines
			var line = d3.svg.line().interpolate('basis')
				.x(function(d) { return xScale(d['date']); })
				.y(function(d) { return yScale(d['attribute']); });
			
			// Format data for chart
			this.chartData = [];
			this.formatChartData(data);
									
			var values = this.getAttributeData('mobility', data);
			xScale.domain(d3.extent(values, function(d) { return d.date; }));
			yScale.domain([0, 10]);
						
			var svg = d3.select('#progressChart');			
						
			// If chart elements haven't been added to DOM
			if (this.chartAdded) {
				// Update x-axis
				svg.select('.o-axis--x').call(xAxis);
				// Update lines
				svg.selectAll('.o-line')
					.data(this.chartData)
					.attr("d", function(d) {return line(d.datapoints); })
					.style("stroke", function(d) {return color(d.attribute); });
			} else {
				// Define svg canvas
				svg = d3.select('#progressChart')
					.attr('width', width + margin.left + margin.right)
					.attr('height', height)
					.append('g')
					.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
				// Add x-axis
				svg.append('g')
					.attr('class', 'o-axis--x')
					.attr('transform', 'translate(0,' + height  + ')')
					.call(xAxis);
				// Add y-axis
				svg.append('g')
          .attr('class', 'o-axis--y')
          .call(yAxis);
				// Remove first tick from y-axis
				svg.selectAll('.tick')
					.each(function(d) {
						if ( d === 0 ) {
							this.remove();
						}
					});
				// Add attribute lines
				var attributes = svg.selectAll('.attribute')
					.data(this.chartData)
					.enter().append('g')
					.attr('class', 'attribute');
				
				attributes.append('path')
					.attr('class', 'o-line')
					.attr("d", function(d) {return line(d.datapoints); })
					.style("stroke", function(d) {return color(d.attribute); });
					
				var resize = function() {
					var width = parseInt(d3.select("#progressChart").style("width")) - margin.left - margin.right;
					var height = parseInt(d3.select("#progressChart").style("height")) - 50;
									
					// Update the range of the scale with new width/height
					xScale.range([0, width]);
					yScale.range([height, 0]);
									
					// Update the axis and text with the new scale
					svg.select('.o-axis--x')
						.attr("transform", "translate(0," + height + ")")
						.call(xAxis);
					
					// Force D3 to recalculate and update the line
					svg.selectAll('.o-line')
						.attr("d", function(d) { return line(d.datapoints); });
					
					// Update the tick marks
					xAxis.ticks(Math.max(width/75, 2));
					yAxis.ticks(Math.max(height/50, 2));
				};
				
				d3.select(window).on('resize', resize);
				resize();
				setTimeout(function() {
					resize();
				}, 100);
				// Set chart added flag
				this.chartAdded = true;
			}
		},
		formatChartData: function(data) {
			var i, e;
			for (i = 0; i < data.length; i++) {
				// Set up object
				if (i === 0) {
					for (e in data[i]) {
						if (e !== 'date' && e !== 'notes' && e !== '_id') {
							this.chartData.push({
								attribute: e,
								datapoints: []
							});	
						}	
					}
				}
				for (e in data[i]) {
					if (e !== 'date' && e !== 'notes' && e !== '_id') {
						this.getAttributeArrByName(e).push({date: data[i].date, attribute: data[i][e]});
					}
				}
			}
		},
		getAttributeData: function(attribute, data) {
			var arr = [];
			for (var i = 0; i < data.length; i++) {
				arr.push({date: data[i].date, value: parseInt(data[i][attribute])});
			}
			return arr;
		},
		getAttributeArrByName: function(name) {
			for (var i = 0; i < this.chartData.length; i++) {
				if (this.chartData[i].attribute === name) {
					return this.chartData[i].datapoints;
				}
			}
			return null;
		}
	},
	mounted: function() {}
});
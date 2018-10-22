// http://bl.ocks.org/hunzy/11110940
// https://bl.ocks.org/josiahdavis/7a02e811360ff00c4eef
var Chart = Vue.component('test', {
	data: function() {
		return {
			chartData: []
		}
	},
	methods: {
		init: function(data) {	
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
			
			// Define svg canvas
			var svg = d3.select('#progressChart')
				.attr('width', width + margin.left + margin.right)
				.attr('height', height)
				.append('g')
				.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
			
			// Format data for chart
			var i, e;
			for (i = 0; i < data.length; i++) {
				// Set up object
				if (i === 0) {
					for (e in data[i]) {
						if (e !== 'date' && e !== 'notes' && e !== '_id') {
							this.chartData.push({
								category: e,
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
			
			console.log(this.chartData);
						
			var values = this.getAttributeData('mobility', data);
			xScale.domain(d3.extent(values, function(d) { return d.date; }));
			yScale.domain([0, 10]);
			
			// Place the axes on the chart
			svg.append("g")
				.attr("class", "o-axis--x")
				.attr("transform", "translate(0," + height  + ")")
				.call(xAxis);
			
			svg.append("g")
          .attr("class", "o-axis--y")
          .call(yAxis);
			
			// Remove first tick from y-axis
			svg.selectAll('.tick')
				.each(function(d) {
					if ( d === 0 ) {
						this.remove();
					}
				});
			
			var products = svg.selectAll(".category")
				.data(this.chartData)
				.enter().append("g")
				.attr("class", "category");
			
			products.append("path")
				.attr("class", "o-line")
				.attr("d", function(d) {return line(d.datapoints); })
				.style("stroke", function(d) {return color(d.category); });
			
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
				
				/*svg.select('.o-axis--y')
					.call(yAxis);*/
				
				// Force D3 to recalculate and update the line
				svg.selectAll('.o-line')
					.attr("d", function(d) { return line(d.datapoints); });
				
				// Update the tick marks
				xAxis.ticks(Math.max(width/75, 2));
				yAxis.ticks(Math.max(height/50, 2));
			};
			
			d3.select(window).on('resize', resize);
			resize();
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
				if (this.chartData[i].category === name) {
					return this.chartData[i].datapoints;
				}
			}
			return null;
		}
	},
	mounted: function() {
		//
	}
});
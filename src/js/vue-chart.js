// http://bl.ocks.org/hunzy/11110940
// https://bl.ocks.org/josiahdavis/7a02e811360ff00c4eef
// Auto-generated ticks
// - http://www.tothenew.com/blog/adjust-time-scale-representation-on-x-axis/
// Zoom
// - http://bl.ocks.org/oluckyman/6199145
// - https://bl.ocks.org/mbostock/1071269
// TODO: Add hover to lines
// TODO: Move chart arrows
// http://bl.ocks.org/eric-bunch/0bdef4942ac085a93fa6bd31452cd55c

var Chart = Vue.component('chart', {
	props: ['dataLoaded'],
	data: function() {
		return {
			chartData: [],
			chartAdded: false
		}
	},
	methods: {
		update: function(data) {
			var that = this;
			
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
				// Need to add 1 to date to get correct date from db record
				data[i].date = new Date(data[i].date);
				data[i].date = new Date(data[i].date.setDate(data[i].date.getDate() + 1));
			}
						
			// Define scales
			var xScale = d3.time.scale().range([0, width]);
			var yScale = d3.scale.linear().range([height, 0]);

			// Define axes
			var xAxis = d3.svg.axis().scale(xScale).orient('bottom').innerTickSize(-height - margin.top).outerTickSize(0).tickPadding(10).tickFormat(d3.time.format('%b %d'));
			var yAxis = d3.svg.axis().scale(yScale).orient('left');
			
			// Define lines
			var line = d3.svg.line().interpolate('cardinal')
				.x(function(d) { return xScale(d['date']); })
				.y(function(d) { return yScale(d['attribute']); });
			
			// Format data for chart
			this.chartData = [];
			this.formatChartData(data);
			console.log(this.chartData);
									
			var values = this.getAttributeData('mobility', data);
			xScale.domain(d3.extent(values, function(d) { return d.date; }));
			yScale.domain([0, 10]);
						
			var svg;			
						
			// If chart elements have been added...
			if (this.chartAdded) {
				// Update x-axis
				svg = d3.select('#progressChart');	
				svg.select('.o-axis--x').call(xAxis);
				// Update lines
				svg.selectAll('.o-line')
					.data(this.chartData)
					.attr('d', function(d) {return line(d.datapoints); })
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
				var lines = svg.selectAll('.o-line')
					.data(this.chartData)
					.enter()
					.append('path')
					.attr('class', function(d) { return 'o-line o-line--' + d.attribute; })
					.attr('d', function(d) { return line(d.datapoints); });
					
				// Add events
				var parseTime = d3.time.format('%b-%d-%Y');
				
				var focus = svg.append('g')
					.attr('class', 'o-focusGroup')
					.style('display', 'none');
				
				for (var i = 0; i < this.chartData.length; i++) {
					focus.append('g')
						.attr('class', 'o-focus o-focus--' + this.chartData[i].attribute)
						.append('circle')
						.attr('r', 7);
					svg.select('.o-focus--' + this.chartData[i].attribute)
						.append('text')
						.attr('width', 14)
						.attr('dy', '.35em');
				}
				
				svg.append('rect')
					.attr('class', 'o-overlay')
					.attr('width', width)
					.attr('height', height)
					.on('mouseover', function() { focus.style('display', 'block'); })
					.on('mouseout', function() { focus.style('display', 'none'); })
					.on('mousemove',  function() {
						var date = parseTime(xScale.invert(d3.mouse(this)[0])),
								arr = that.chartData[0].datapoints,
								pos = 0;
						// Match date up with position of dataset
						for (var i = 0; i < arr.length; i++) {
							if (parseTime(arr[i].date) === date) {
								pos = i;
							}
						}
						console.log(date + ', ' + pos);
						// Pull dataset for each attribute out of chartData and assign to transform, focus
						// Date might not always be in the same position for each dataset...
						var item;
						for (i = 0; i < that.chartData.length; i++) {
							item = that.chartData[i].datapoints[pos];
							var selectedFocus = svg.selectAll('.o-focus--' + that.chartData[i].attribute);
									selectedFocus.attr('transform', 'translate(' + xScale(item.date) + ',' + yScale(item.attribute) + ')');
									selectedFocus.select('text').text(item.attribute);
						}
					})
					.on('click', function() {
						// Move carousel so that date is in view...
						console.log('vue-chart.js, click');
					});
									
				var resize = function() {
					var width = parseInt(d3.select('#progressChart').style('width')) - margin.left - margin.right;
					var height = parseInt(d3.select('#progressChart').style('height')) - 50;
									
					// Update the range of the scale with new width/height
					xScale.range([0, width]);
					yScale.range([height, 0]);
									
					// Update the axis and text with the new scale
					svg.select('.o-axis--x')
						.attr('transform', 'translate(0,' + height + ')')
						.call(xAxis);
					
					// Force D3 to recalculate and update the line
					svg.selectAll('.o-line')
						.attr('d', function(d) { return line(d.datapoints); });
					// Update the tick marks
					xAxis.ticks(that.ignoreAutoGeneratedTicks);
					// xAxis.ticks(Math.max(width/75, 2));
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
		ignoreAutoGeneratedTicks: function(t0, t1, step) {
			var startTime = new Date(t0),
					endTime = new Date(t1),
					times = [];
			endTime.setUTCDate(endTime.getUTCDate() + 1);
			while (startTime < endTime) {
				startTime.setUTCDate(startTime.getUTCDate() + 4);
				times.push(new Date(startTime));
			}
			return times;
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
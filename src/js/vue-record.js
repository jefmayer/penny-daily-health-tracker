var Record = Vue.component('record', {
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
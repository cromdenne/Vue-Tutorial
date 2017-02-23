function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
};

// Create a new Vue instance and pass in an options object.
var vm = new Vue({

	// A DOM element to mount our view model
	el: '#content',

	// This is the model.
	// Define properties and give them initial values.
	data: {
		active: ''
	},

	// Functions we will be using.
	methods: {
		makeActive: function(item) {
			// When a model is changed, the view will be automatically updated.
			this.active = item;
		}
	}
});
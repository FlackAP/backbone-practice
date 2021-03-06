//makes a PersonView constructor
ItemView = Backbone.View.extend({
	//every backbone view creates a DOM element for itself, but it doesn't inject the element 
	// into the page unless asked to. 

	className:"cool",

	events: {
		"click": "edit",
		"click .delete": "destroy"
	},

	initialize: function() {
		console.log ('cool cool'),
		$(this.el).text(this.model.get('name'))
		$('.hero-unit').append(this.el)
		$(this.el).append('<button class="edit"> Edit </button>')
	},

	edit: function() {
		console.log('you clicked me!')
		$(this.el).html('<input value=" ' + this.model.get('name') +' " />')
		$(this.el).append('<button class="addEdit"> Done Editing </button> <button class="delete">DELETE</button>')
	},

	destroy: function() {
		this.remove();
	}

}) 


Item = Backbone.Model.extend({
	initialize: function() {
		console.log('hello I\'m', this.get('name'))
	}
})

Shrek = new Item({name: "Shrek DVD"})
view = new ItemView({model: Shrek})

Shrek2 = new Item({name: "Shrek 2 DVD"})
view = new ItemView({model: Shrek2})

Shrek3 = new Item({name: "Shrek 3 DVD"})
view = new ItemView({model: Shrek3})
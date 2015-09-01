// var book = new Backbone.Model({
// 	title: 'Another Fake Title'
// });
// var bookView = new Backbone.View({model: book});

// var formView = new Backbone.View({
// 	el: '<form><input value="foo" /></form>'
// });
// var $input = formView.$('input');
// console.log($input.val());

// To avoid Confusion, add $ for jQuery Object
// var fooForm = new Backbone.View({id: 'foo', tagName: 'form'});
// var $fooForm = fooForm.$el;
// console.log($fooForm);

// var FormView = Backbone.View.extend({
// 	id: 'clickableForm',
// 	events: {'click': 'handleClick'},
// 	handleClick: function() {
// 		alert('You clicked on ' + this.id + '!');
// 	}
// });

// var $form = new FormView().$el;
// $form.click();

// When Backbone instantiates View, it will call delegateEvents then add all the events listeners
// var formView = new Backbone.View({el: '#someForm'});
// console.log(formView.$el);
// formView.setElement($('#someOtherForm'));
// console.log(formView.$el);

// var author = {
// 	firstName: 'Seungjoon',
// 	lastName: 'Lee',
// 	genre: 'software-engineering'
// };
// var templateString = '<%= firstName %> <%= lastName %> was a ' + 'great <%= genre %> author.';
// var template = _.template(templateString);
// console.log(template(author));

// var author = new Backbone.Model({
// 	firstName: 'Seungjoon',
// 	lastName: 'Lee',
// 	genre: 'software-engineering'
// });

// var AuthorView = Backbone.View.extend({
// 	model : author,
// 	el : $("#placeholder"),
// 	render: function() {
// 		var hiView = new Backbone.View({tagName: 'h1'});
// 		var emView = new Backbone.View({tagName: 'em'});
// 		console.log(emView.el);
// 		// emView.text(this.model.get('genre'));
// 		hiView.$el.html(this.model.get('firstName') + ' ' + 
// 			this.model.get('lastName') + ' was a ');
// 		hiView.$el.append(emView.el, ' author.');
// 		this.$el.html(hiView.el);

// 		return this;
// 	}
// });
// var authorView = new AuthorView();
// authorView.render();


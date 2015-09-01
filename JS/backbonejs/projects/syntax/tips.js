// var VariableTagView = Backbone.View.extend({
// 	tagName: function() {
// 		if(this.collection) {
// 			return 'select';
// 		} else {
// 			return 'input';
// 		}
// 	}
// });

// var FictionBook = Backbone.Model.extend({
// 	// insert Logic for Fiction
// });
// var NonFictionBook = Backbone.Model.extend({
// 	// insert Logic for Nonfiction
// });
// var FictionAndNonFictionBooks = Backbone.Collection.extend({
// 	model: function(attributes, options) {
// 		if (attributes.isFiction) {
// 			return new FictionBook(attributes, options);
// 		} else {
// 			return new NonFictionBook(attributes, options);
// 		}
// 	},
// 	url: '/book'
// });

// var FictionOrNonFictionBooks = Backbone.Collection.extend({
// 	constructor: function(models, options) {
// 		if(model[0].isFiction) {
// 			options.model = FictionBook;
// 		} else {
// 			options.model = NonFictionBook;
// 		}
// 		return Backbone.Collection.apply(models, options);
// 	}
// });

// Mixin
// var loggingMixin = {
// 	startLogging: function() {
// 		Logger.startLoggin(this);
// 	},
// 	stopLogging: function() {
// 		Logger.stopLoggin(this);
// 	}
// }
// var bookPrototype = {
// 	defaults: {currentPage: 1}.
// 	read: function() {

// 	}
// }
// _.extend(bookPrototype, loggingMixin);

// Pub/Sub
// var Scoreboard = Backbone.View.extend({
// 	renderScore: function(player, score) {
// 		this.$('input[name="' + player + '"]').html(score);
// 	}
// });
// var scoreboard = new Scoreboard();
// Backbone.on('scoreChange', scoreboard.renderScore, scoreboard);

// var Player = Backbone.Model.extend({
// 	fetch: function() {
// 		var promise = Backbone.Model.prototype.fetch.apply(this, arguments);
// 		promise.done(function() {
// 			if(this.hasChanged('score')) {
// 				Backbone.trigger('scoreChange', this.get('name'), this.get('score'));
// 			}
// 		});
// 		return promise;
// 	}
// });
// var bob = new Player({name: 'Robert', score: 2});
// window.setInterval(1000, function() {
// 	bob.fetch();
// });

// Documentation
// http://jashkenas.github.io/docco/
// http://usejsdoc.org/

// Grid
// http://backgridjs.com
// http://handlebarsjs.com
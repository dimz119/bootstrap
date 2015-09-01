// var MyRouter = Backbone.Router.extend({
// 	// instance methods / properties
// }, {
// 	// static methods / properties
// });

// var myRouter = new Backbone.Router({
// 	routes: {
// 		'foo': function() {
// 			console.log("foo");
// 		}
// 	}
// });

// var SiteRouter = Backbone.Router.extend({
// 	routes: {
// 		'foo': 'fooRoute',
// 		'koo': 'kooRoute'
// 	},

// 	fooRoute: function() {
// 		console.log('fooRoute');
// 	},

// 	kooRoute: function() {
// 		console.log('kooRoute');
// 	}
// });

// var SiteRouter = Backbone.Router.extend({
// 	initialize: function() {
// 		this.route('foo', 'fooRoute');
// 		this.route('koo', 'kooRoute');
// 	},

// 	fooRoute: function() {
// 		console.log('fooRoute');
// 	},

// 	kooRoute: function() {
// 		console.log('kooRoute');
// 	}
// });
// var siteRouter = new SiteRouter();

// var user = new Backbone.Model({isAdmin: true});
// var SiteRouter = Backbone.Router.extend({
// 	initialize: function(options) {
// 		console.log("initialize");
// 		if(user.get('isAdmin')) {
// 			console.log("admin");
// 			this.addAdminRoutes();
// 		}
// 	},

// 	addAdminRoutes: function() {
// 		this.route('adminPage1', 'adminPage1Route');
// 		this.route('adminPage2', 'adminPage2Route');
// 	},

// 	adminPage1Route: function() {
// 		console.log("adminPage1Route");
// 	},

// 	adminPage2Route: function() {
// 		console.log("adminPage2Route");
// 	}
// })
// var siteRouter = new SiteRouter();

// Dynamic Route : /#book/100
// var SiteRouter = Backbone.Router.extend({
// 	initialize: function(options) {
// 		this.route(/^book\/(\d+)$/, 'bookRoute');
// 	},

// 	bookRoute: function(bookId) {
// 		console.log("Route to " + bookId);
// 	}
// })
// var siteRouter = new SiteRouter();

// var SiteRouter = Backbone.Router.extend({
// 	initialize: function(options) {
// 		this.route('book/:bookId', 'bookRoute');
// 	},

// 	bookRoute: function(bookId) {
// 		console.log("Book Id : " + bookId);
// 	}
// })
// var siteRouter = new SiteRouter();

// Try #book/example/with/slash/5
// var SiteRouter = Backbone.Router.extend({
// 	initialize: function(options) {
// 		this.route('book/*bookId', 'bookRoute');
// 	},

// 	bookRoute: function(bookId) {
// 		console.log("Wild Book Id : " + bookId);
// 	}
// })
// var siteRouter = new SiteRouter();

// var router = new Backbone.Router({
// 	routes: {
// 		foo: function() {
// 			alert('You have navgated to the "foo" root!');
// 		}
// 	}
// });
// router.navigate('foo', {trigger: true});

// var SiteRouter = Backbone.Router.extend({
// 	initialize: function(options) {
// 		this.route('book/:id', 'bookRoute');
// 		this.route('*nothingMatched', 'pageNotFoundRoute');
// 	},

// 	bookRoute: function(id) {
// 		console.log("Wild Book Id : " + id);
// 	},

// 	pageNotFoundRoute: function(failedRoute) {
// 		alert(failedRoute + " did not match any routes");
// 	}
// })
// var siteRouter = new SiteRouter();

// var Router = Backbone.Router.extend({
// 	initialize: function(options) {
// 		this.route('foo', 'fooRoute');
// 	},

// 	fooRoute: function() {
// 		console.log("foo");
// 	}
// });
// var router = new Router();
// router.on('route:foo', function() {
// 	console.log("foo has been routed");
// });

// var Book = Backbone.Model.extend({urlRoot: '/book/'});
// var Page = Backbone.View.extend({
// 	render: function() {
// 		var data = this.model ? this.model.toJSON() : {};
// 		this.$el.html(this.template(data));
// 		return this;
// 	}
// });
// var BookPage = Page.extend({
// 	template: 'Title: <%= title =>'
// });
// var SiteRouter = Backbone.Router.extend({
// 	routes: {
// 		'book/:bookId(/)': 'bookRoute',
// 	},
// 	bookRoute: function(bookId) {
// 		console.log(bookId);
// 		var book = new Book({id: bookId});
// 		book.fetch().done(function() {
// 			var page = new BookPage({model: book});
// 			page.render();
// 		})
// 	}
// })
// var siteRouter = new SiteRouter();


// Backbone.history.start();

// Hash based URI
// if(!Backbone.history.start()) {
// 	console.log("404 error");
// };

// Push state based
// Backbone.history.start({pushState: true});
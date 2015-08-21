// ===== map / reduce =====
// var stringNumbers = ["5", "10", "15"];
// var BASE = 10;
// var actualNumbers = _.map(stringNumbers, function(numberString, index) {
// 	return parseInt(numberString, BASE);
// });
// // console.log(actualNumbers);
// var total = _.reduce(actualNumbers, function(total, actualNumber) {
// 	return total + actualNumber;
// }, 0);
// console.log(total);

// ===== Event listen =====
// var book = new Backbone.Model({page: 50});
// book.on('change:pages', function() {
// 	alert("the number of pages changed");
// })
// book.set('pages', 51);
// // Event listen off
// book.off('change:pages');
// book.set('pages', 52);

// ===== Server side actions =====

// var Book = new Backbone.Model.extend({
// 	urlRoot: '/books'
// });
// new Book().save();

// var Book = Backbone.Model.extend({
// 	url : function() {
// 		if (this.get('fiction')) {
// 			return '/fiction';
// 		} else {
// 			return '/nonfiction';
// 		}
// 	}
// });
// var theHobbit = new Book({fiction : true});
// alert(theHobbit.url());

// // Scalable way
// var urls = {
// 	books: function() {
// 		return this.get('fiction') ? '/fiction' : '/nonfiction';
// 	},
// 	magazines: '/magazines'
// };
// var Book = Backbone.Model.extend({url: urls.books});
// var Magazine = Backbone.Model.extend({urlRoot: urls.magazines});

// var Book = Backbone.Model.extend({
// 	idAttribute: 'deweyDecimalNumber'
// });
// var warAndPeace = new Book({deweyDecimalNumber: '82'});
// console.log(warAndPeace.get('deweyDecimalNumber'));
// console.log(warAndPeace.id);

// var Book = Backbone.Model.extend({
// 	url : function() {
// 		if (this.get('fiction')) {
// 			return '/fiction';
// 		} else {
// 			return '/nonfiction';
// 		}
// 	}
// });
// var book = new Book({id: 55});
// book.fetch({
// 	success: function() {
// 		alert('the fetch completed successfully');
// 	},
// 	error:  function() {
// 		alert('an error occurred during the fetch');
// 	}
// });

// var promise = book.fetch().done(function() {
// 	alert('the fetch completed successfully');
// }).fail(function() {
// 	alert('an error occurred during the fetch');
// });

// var warAndPeace = new Backbone.Model({id: 55});
// var fiftyShades = new Backbone.Model({id: 56});
// var warAndPeacePromise = warAndPeace.fetch();
// var fiftyShadesPromise = fiftyShades.fetch();
// $.when(warAndPeacePromise, fiftyShadesPromise).then(function() {
// 	alert('Both books have now been successfully fetched!');
// })

// // How to parse the json coming from server
// if return is ...
// {book:{pages:300, name:'The Hobbit'},otherInfo:'stuff we don't care about}
// var Book = Backbone.Model.extend({
// 	parse: function(response) {
// 		return response.book;
// 	}
// });

// var Book = Backbone.Model.extend({
// 	toJSON: function(originalJSON) {
// 		return {
// 			data: this.attributes,
// 			otherInfo: 'stuff'
// 		}
// 	},
// 	url : function() {
// 		if (this.get('fiction')) {
// 			return '/fiction';
// 		} else {
// 			return '/nonfiction';
// 		}
// 	}
// });
// var book = new Book({
// 	pages: 20,
// 	title: 'Ideas for Great Book Titles'
// });
// book.save();
// book.save().done(function(response) {
// 	alert(response);
// });

// var Book = Backbone.Model.extend({
// 	validate: function(attributes) {
// 		var isValid = this.get('pages') >= 10;
// 		return isValid;
// 	},
// 	url : function() {
// 		if (this.get('fiction')) {
// 			return '/fiction';
// 		} else {
// 			return '/nonfiction';
// 		}
// 	}
// });
// var tooShort = new Book({pages: 5});
// var wasAbleToSave = tooShort.save();
// console.log(wasAbleToSave);

 // // ===== Collections =====
// var Cats = Backbone.Collection.extend({});
// var cartoonCats = new Cats([{id: 'cat1', name: 'Garfield'}]);
// var garfield = cartoonCats.models[0];
// console.log(garfield);

// var cartoonCats = new Cats([{name: 'Garfield'}, {name: 'Heathcliff'}]);
// console.log(cartoonCats.models.length);
// console.log(cartoonCats.length);

// var Cats = Backbone.Collection.extend({model: "Cat"});
// var cats = new Cats();
// console.log(cats);

// var Cat = Backbone.Model.extend();
// var Cats = Backbone.Collection.extend({model: Cat});
// var Dog = Backbone.Model.extend();
// var snoopy = new Dog({name: 'Snoopy'});
// var cartoonCats = new Cats([snoopy]);
// console.log(cartoonCats.models[0] instanceof Dog);

// var snoopyAttributes = {id: 'dog1', name: 'Snoopy'};
// var cartoonCats = new Cats([snoopyAttributes]);
// console.log(cartoonCats.models[0] instanceof Cat);

// var cats = new Backbone.Collection([{name: 'Garfield'}]);
// cats.reset([{name: 'Heathcliff'}]);
// console.log(cats.models[0].get('name'));
// console.log(cats.length);


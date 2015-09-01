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

// var garfield = new Cat({id: 'cat1', name: 'Garfield'});
// var cats = new Backbone.Collection([garfield]);
// console.log(cats.get('cat1'));
// console.log(cats.get(garfield.cid));
// console.log(cats.get('cat2'));
// cats.remove('cat1');
// console.log(cats.length);

// var cats = new Backbone.Collection([
// 	{name: 'Garfield'},
// 	{name: 'Heathcliff'}
// 	]);
// console.log(cats.at(1));

// var Cats = Backbone.Collection.extend({comparator: 'name'});
// var cartoonCats = new Cats();
// console.log(cartoonCats.comparator);

// var cartoonCats = new Cats([{name: 'Garfield'}]);
// cartoonCats.on('change', function(changedModel) {
// 	alert(changedModel.get('name') + ' just changed!');
// });
// cartoonCats.at(0).set('weight', 'a whole lot');

// var books = new Backbone.Collection([
// 	{pages: 120, title: "title1"},
// 	{pages: 20, title: "title2"}
// 	]);
// console.log(books.some(function(book) {
// 	return book.get('pages') > 100;
// }));
// console.log(books.every(function(book) {
// 	return book.get('pages') > 100;
// }));

// console.log(books.where({pages: 120}));
// console.log(books.filter(function(book) {
// 	return book.get('pages') > 100;
// }));
// console.log(books.reject(function(book) {
// 	return book.get('pages') > 100;
// }));

// var books = new Backbone.Collection([
// 	{title: "Zebra"},
// 	{title: "Alligators"},
// 	{title: "Aardvarks"}
// 	]);

// console.log(books.toArray());
// console.log(books.sortBy('title'));
// console.log(books.groupBy(function(book) {
// 	return book.get('title')[0];
// }));


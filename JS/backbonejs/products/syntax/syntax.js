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

var Cat = Backbone.Model.extend();
// var Cats = Backbone.Collection.extend({model: Cat});
// var Dog = Backbone.Model.extend();
// var snoopy = new Dog({name: 'Snoopy'});
// var cartoonCats = new Cats([snoopy]);
// console.log(cartoonCats.models[0] instanceof Dog);

// var snoopyAttributes = {id: 'dog1', name: 'Snoopy'};
// var cartoonCats = new Cats([snoopyAttributes]);
// console.log(cartoonCats.models[0] instanceof Cat);

var cats = new Backbone.Collection([{name: 'Garfield'}]);
cats.reset([{name: 'Heathcliff'}]);
console.log(cats.models[0].get('name'));
console.log(cats.length);
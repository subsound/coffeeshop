Posts = new Mongo.Collection('posts');
Products = new Mongo.Collection('products');

Posts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		max: 100
	},
	body: {
		type: String
	},
	userId: {
		type: String,
		autoValue: function(){ return Meteor.userId() }
	},
	updatedAt: {
		type: Date,
		autoValue: function(){ return new Date() }
	}
}));

Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
	name: {
		type: String,
		max: 100
	},
	description: {
		type: String,
		max: 500
	},
	client: {
		type: String,
		max: 100
	},
	projectlink: {
		type:String,
		max:500
	},
	type: {
		type: String,
		max: 100
	},
	projectDate: {
		type: String,
		max: 100,
		optional: true
	},
	userId: {
		type: String,
		autoValue: function(){ return Meteor.userId() }
	},
	updatedAt: {
		type: Date,
		autoValue: function(){ return new Date() }
	},
	projectImage: {
		type: String,
		max: 100,
		optional: true
	},
	projectImage2: {
		type: String,
		max: 100,
		optional: true
	},
	projectImage3: {
		type: String,
		max: 100,
		optional: true
	},
	projectImage4: {
		type: String,
		max: 100,
		optional: true
	}
}));

Products.attachSchema(new SimpleSchema({
	name: {
		type: String,
		max: 100
	},
	price: {
		type: String,
		max: 100
	},
	productImage: {
		type: String,
		max: 100,
		optional: true
	},
	productImage2: {
		type: String,
		max: 100,
		optional: true
	},
	productImage3: {
		type: String,
		max: 100,
		optional: true
	},
	productImage4: {
		type: String,
		max: 100,
		optional: true
	}
}));

ProductImages = new FS.Collection('ProductImages', {
	stores:[new FS.Store.GridFS('ProductImages')]
});
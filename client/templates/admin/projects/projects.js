Template.layout.onRendered(function(){
    this.$('.datetimepicker').datetimepicker();
});

Template.add_project.events({
	'submit .add_project_form': function(){
		var name = event.target.name.value;
		var price = event.target.price.value;
		

		var file = $('#productImage').get(0).files[0];

		if(file){
			fsFile = new FS.File(file);
			ProductImages.insert(fsFile, function(err, result){
				if(!err){
					var productImage = '/cfs/files/ProductImages/' + result._id;

					Products.insert({
						name: name,
						price:price,
						productImage: productImage
						
					});
				}
			});
		} else {
			Products.insert({
						name: name,
						price:price,
						productImage: productImage
						
					});
		};

		FlashMessages.sendSuccess('Product Added');
		Router.go('/admin/projects');

		return false;
	}
});


Template.edit_project.events({
	'submit .edit_project_form': function(){
		var name = event.target.name.value;
		var price = event.target.price.value;
		

		var file = $('#productImage').get(0).files[0];

		if(file){
			fsFile = new FS.File(file);
			ProductImages.insert(fsFile, function(err, result){
				if(!err){
					var productImage = '/cfs/files/ProductImages/' + result._id;

					Products.update({
						_id: this._id
					},{
						$set: {	name: name,
								price: price,
								productImage: productImage
							  }
					});
				}
			});
		} else {
			Products.update({
						_id: this._id
					},{
						$set: {
							name: name,
							price: price
						}
					});
		};

		FlashMessages.sendSuccess('Product Updated');
		Router.go('/admin/projects');

		return false;
	}
});

Template.list_projects.events({
	'click .delete_project': function(event){
		if(confirm("Are you sure?")) {
			Products.remove(this._id);
			FlashMessages.sendSuccess("Product Deleted");
			//Prevent Submit
			return false;
		}
	}
});
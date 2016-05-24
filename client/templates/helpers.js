Template.work.helpers({
	projects: function () {
		return Projects.find();
	}
});
Template.work.helpers({
	products: function () {
		return Products.find();
	}
});

Template.login.events({

	'submit .login-user': function(event){
		event.preventDefault();
		var username = event.target.username.value;
		var password = event.target.password.value;


		Meteor.loginWithPassword(username, password, function(err){
			if(err){
				event.target.username.value = username;
				event.target.password.value = password;
				FlashMessages.sendError(err.reason);
			} else {
				FlashMessages.sendSuccess('You are now logged in');
				Router.go('/admin/projects');
			}
		});

	}
});



/*Template.signin.events({

	'submit .signin-user': function(event){
		event.preventDefault();
		var username = event.target.username.value;
		var password = event.target.password.value;


		Meteor.loginWithPassword(username, password, function(err){
			if(err){
				event.target.username.value = username;
				event.target.password.value = password;
				FlashMessages.sendError(err.reason);
			} else {
				FlashMessages.sendSuccess('You are now logged in');
				Router.go('/admin/projects');
			}
		});

	}
});*/

Template.signin.events({
    'submit .signin-user': function(event){
        event.preventDefault();
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        var usernameVar = event.target.username.value;
        console.log("Form submitted.");
         Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            username: usernameVar
        });
    }
});

Template.signin.isUserAdmin = function(){
  var adminEmail = Meteor.user().role;
  if( adminEmail == "admin"){
    return true;
  } else {
    return false;
    //add some logic for displaying error template.
    console.log("error");
  }
}



Template.layout.events({
	'click .logout-user': function(event){
		Meteor.logout(function(err){
			if(err){
				FlashMessages.sendError(err.reason);
			} else {
				FlashMessages.sendSuccess('You are now logout');
				Router.go('/')
			}
		});
		//Prevent Submit
		return false;
	}
});

Template.registerHelper('formatDate', function(date){
	return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

Template.registerHelper('getAdminName', function(){
	return 'Ira Komar';
});

Template.registerHelper('getSiteTitle', function(){
	return 'Coffee Shop';
});

Template.registerHelper('getAdminImage', function(){
	return '/assets/img/user.jpg';
});


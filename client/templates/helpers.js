Template.work.helpers({
	projects: function () {
		return Projects.find();
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
	return 'Nicolas Balakhtar';
});

Template.registerHelper('getSiteTitle', function(){
	return 'Nicolas Blog';
});

Template.registerHelper('getAdminImage', function(){
	return '/assets/img/user.jpg';
});


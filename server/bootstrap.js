Meteor.startup(function(){
	if(Meteor.users.find().count() === 0){
		Accounts.createUser({
			username: 'Nicolas',
			password: '199529',
			email: 'midnightcoldlove@gmail.com',
			profile: {
				name: 'Nicolas Balakhtar'
			}
		});
	}
});
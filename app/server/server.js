import { Mongo } from 'meteor/mongo';

Tasks = new Mongo.Collection("tasks");

Meteor.publish("publicTasks", function () {
    return Tasks.find();
});

Meteor.publish("publicUsers", function () {
    return Meteor.users.find({}, {fields: {
            'username': 1,
            'profile.name': 1,
            "profile.score": 1
        }});
});

Accounts.onCreateUser(function (options, user) {
    user.profile = options.profile;
    user.profile.friends = [];
    user.profile.score = 0;
    user.profile.badges = [];
    return user;
})

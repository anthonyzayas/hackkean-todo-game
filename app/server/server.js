import { Mongo } from 'meteor/mongo';

Tasks = new Mongo.Collection("tasks");

Meteor.publish("publicTasks", function () {
    return Tasks.find();
});

Accounts.onCreateUser(function (options, user) {
    user.profile = options.profile;
    user.profile.friends = [];
    user.profile.score = 0;
    user.profile.badges = [];
    return user;
})

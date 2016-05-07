import { Mongo } from 'meteor/mongo';

Tasks = new Mongo.Collection("tasks");

Meteor.publish("publicTasks", function () {
    return Tasks.find();
});

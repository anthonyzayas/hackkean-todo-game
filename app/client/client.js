import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Tasks = new Mongo.Collection("tasks");

Meteor.subscribe("publicTasks");

Template.registerHelper("getTemplate", function () {
    return Session.get("page");
});

Meteor.startup(function () {
    Session.set("page", "tasklistPage");
});

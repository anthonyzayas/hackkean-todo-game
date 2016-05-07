Template.entryPage.onCreated(function () {
    Session.set("entryForm", "login");
});

Template.entryPage.helpers({
    getEntryForm: function () {
        return Session.get("entryForm");
    }
});

Template.entryPage.events({
    "click #gotoLogin": function () {
        Session.set("entryForm", "login");
    },
    "click #gotoSignup": function () {
        Session.set("entryForm", "signup");
    }
});

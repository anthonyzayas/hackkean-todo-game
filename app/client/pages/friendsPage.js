Template.friendsPage.onCreated(function () {
    Session.set("friendSearchBar", "");
});

Template.friendsPage.helpers({
    findFriends: function () {
        var searchTerm = Session.get("friendSearchBar");
        if (searchTerm) {
            searchTerm = RegExp(searchTerm,"i");
            return Meteor.users.find({
                _id:{$ne:Meteor.userId(),$nin:Meteor.user().profile.friends},
                $or: [
                    { username: searchTerm },
                    { "profile.name": searchTerm }
                ]
            });
        }
    },
    getFriends: function () {
        return Meteor.users.find({_id:{$in:Meteor.user().profile.friends}});
    }
});

Template.friendsPage.events({
    "click #addFriend": function () {
        Meteor.call("addFriend", this._id);
    },
    "click #removeFriend": function () {
        Meteor.call("removeFriend", this._id);
    },
    "keyup #friendSearchBar": function (event, template) {
        var input = template.find("#friendSearchBar").value;
        Session.set("friendSearchBar", input);
    }
});

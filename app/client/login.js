Template.login.events({
    "submit #login": function (event, template) {
        event.preventDefault();
        var usernameInput = template.find("#username").value;
        var passwordInput = template.find("#password").value;
        Meteor.loginWithPassword(usernameInput, passwordInput);
    }
});

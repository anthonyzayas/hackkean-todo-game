Template.signup.events({
    "submit #signup": function (event, template) {
        event.preventDefault();
        var nameInput = template.find("#name").value;
        var usernameInput = template.find("#username").value;
        var passwordInput = template.find("#password").value;
        var confirmInput = template.find("#confirm").value;
        if (passwordInput === confirmInput) {
            Accounts.createUser({
                username: usernameInput,
                password: passwordInput,
                profile: {
                    name: nameInput
                }
            });
        }
    }
});

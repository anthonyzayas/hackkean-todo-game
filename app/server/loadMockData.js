var LOAD = true;

var createUser = function (user) {
    Accounts.createUser({
        username: user.user,
        password: user.pass,
        profile: {
            name: user.name
        }
    });
};

var createUsers = function () {
    var sampleUsers = [
        {name: "Fabio Licious", user: "definicious", pass:"123" },
        {name: "Frodo Baggins", user: "hobbit", pass:"123" },
        {name: "James Bond", user: "007", pass:"123" },
        {name: "Bruce Wayne", user: "Batman", pass:"123" },
        {name: "Clark Kent", user: "Superman", pass:"123" },
        {name: "Harry Potter", user: "thechosenone", pass:"123" },
        {name: "Anony Mous", user: "notfound", pass:"123" },
        {name: "Jack Git", user: "coat", pass:"123" },
        {name: "Hack Kean", user: "hacking", pass:"123" },
        {name: "Leeroy Jenkins", user: "LEEEERRRRRROOOOOYYYYYYYY JEENNNNKKKKKKIIIIINNSSS!!!!!!", pass:"123" },
        {name: "RS Player", user: "Zezima", pass:"123" }
    ];
    for (var i = 0; i < sampleUsers.length; i++) {
        try {
            createUser(sampleUsers[i]);
        } catch (e) {}
    }
}

Meteor.startup(function () {
    if (LOAD) {
        // load data here
        createUsers();
    }
});

Template.addTask.events({
    "submit #addTask": function (event, template) {
        console.log("addTasks client");
        event.preventDefault();

        var taskInput = {};
        taskInput.name = template.find("#name").value;
        taskInput.description = template.find("#description").value;
        taskInput.difficulty = template.find("#difficulty").value;
        Meteor.call('addTask',taskInput);

    }
});

Template.tasklistPage.helpers({
    getTasks: function () {
        return Tasks.find();
    }
});

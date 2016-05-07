Meteor.methods({
    addTask: function (taskData) {
        Tasks.insert({
            user: Meteor.userId(),
            name: taskData.name,
            description: taskData.description,
            completed: false,
            verified: false,
            difficulty: taskDate.difficulty,
            photo: taskData.photo,
            verificationDescription: undefined,
            verificationPhoto: undefined
        })
    },
    removeTask: function (taskId) {
        var task = Tasks.findOne({_id:taskId});
        if (task.user === Meteor.userId()) {
            Tasks.remove({_id:taskId});
        }
    },
    completeTask: function (taskData) {
        var task = Tasks.findOne({_id:taskData.id});
        if (task.user === Meteor.userId()) {
            Tasks.update({
                _id: taskData.id
            }, {
                $set: {
                    completed: true,
                    verificationDescription: taskData.verificationDescription,
                    verificationPhoto: task.verificationPhoto
                }
            });
        }
    },
    verifyTask: function (taskId) {
        var task = Tasks.findOne({_id:taskId});
        if (Meteor.userId() && task.user !== Meteor.userId()) {
            Tasks.update({_id:taskId}, { $set: { verified: true } });
        }
    }
});

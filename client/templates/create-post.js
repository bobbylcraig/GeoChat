Meteor.subscribe("posts");

Template.createPost.events({
    "submit .create-post-form": function(event) {
        event.preventDefault();
        var post = $('.create-post-form input').val();
        var code = Session.get("activeConference");
        $('.create-post-form input').val("Posted!");
        $('.create-post-form input').blur();
        Meteor.call("addPost", post, code);
    },
    "focus .create-post-form": function(event) {
        event.preventDefault();
        $('.create-post-form input').val("");
    }
});

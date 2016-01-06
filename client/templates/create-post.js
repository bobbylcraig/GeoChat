Meteor.subscribe("posts");

var check = 0;

Template.createPost.events({
    "submit .create-post-form": function(event) {
        event.preventDefault();
        var post = $('.create-post-form input').val();
        var code = Session.get("activeConference");
        $('.create-post-form input').val("Posted!");
        $('.create-post-form input').blur();
        check = 0;
        Meteor.call("addPost", post, code);
    },
    "focus .create-post-form": function(event) {
        if (!check) {
            event.preventDefault();
            $('.create-post-form input').val("");
            check = 1;
        }
    }
});

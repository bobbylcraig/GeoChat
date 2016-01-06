Meteor.subscribe("posts");

Template.posts.helpers({
    posts: function() {
        if (Session.get("activeConference")) {
            var code = Session.get("activeConference");
            return Posts.find({
                code: code,
                votes: {$gt: -5}
            });
        } else {
            return false;
        }
    }
});

Template.posts.events({
    "click .upvote": function(event) {
        event.preventDefault();
        var postId = event.target.id;
        Meteor.call("upvote", postId);
    },
    "click .downvote": function(event) {
        event.preventDefault();
        var postId = event.target.id;
        Meteor.call("downvote", postId);
    }
});

Template.registerHelper('formatDate', function (timeStamp) {
    var now = new Date(),
    secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
    if (secondsPast == 1) return "Posted a second ago.";
    if (secondsPast < 60) return "Posted " + parseInt(secondsPast) + ' seconds ago.';
    if (secondsPast < 120) return "Posted 1 minute ago.";
    if (secondsPast < 3600) return "Posted " + parseInt(secondsPast/60) + ' minutes ago.';
    if (secondsPast <= 7200) return "Posted 1 hour ago.";
    if (secondsPast <= 86400) return "Posted " + parseInt(secondsPast/3600) + ' hours ago.';
    if (secondsPast > 86400) {
        day = timeStamp.getDate();
        month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","");
        year = timeStamp.getFullYear();
        return "Posted on " + month + " " + day + ", " + year;
    }
});

Template.registerHelper('checkVotes', function (demVotes) {
    if (demVotes > 10000) return "Adam Tyler is dumb";
    else return demVotes;
});

Meteor.subscribe("conferences");

Template.header.events({
    "submit .conf-select-form": function(event) {
        event.preventDefault();
        var code = $('.conf-select-form input').val();
        $('.conf-select-form input').val("You are now in the " + code + " conference.");
        $('.conf-select-form input').blur();
        Meteor.call("addConference", code, function(error, result) {
            Session.set("activeConference", result);
        });
    },
    "focus .conf-select-form": function(event) {
        event.preventDefault();
        $('.conf-select-form input').val("");
    }
});

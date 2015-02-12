Template.deleteIssue.helpers({
  selectedIssue: function() {
    return Issues.findOne(Session.get('selectedIssueId'));
  }
});

Template.deleteIssue.events({
  'click .deleteConfirm': function (e) {
    e.preventDefault();

    Meteor.call('deleteIssue', Session.get('selectedIssueId'), function(error, result) {
      if (error)
        return alert(error.reason);

      Router.go('issuesList');
    });
  }
});

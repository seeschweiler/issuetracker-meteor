Template.deleteIssue.events({
  'click .deleteConfirm': function (e) {
    e.preventDefault();

    Meteor.call('deleteIssue', this._id, function(error, result) {
      if (error)
        return alert(error.reason);

      Router.go('issuesList');
    });
  }
});

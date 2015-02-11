Template.createIssue.events = {
  'click input[type=submit]': function(event){
    event.preventDefault();

    var issueProp = {
      title: $('#title').val(),
      description: $('#description').val(),
      dueDate: $('#dueDate').val(),
      priority: $('#priority').val()
    }

    Meteor.call('createIssue', issueProp, function(error, result) {
      if (error)
        return alert(error.reason);

      if (result.issueExists) {
        alert('This issue already exists!');
        Router.go('editIssue', {_id: result._id});
      } else
      {
        Router.go('issuesList');
      }
    });
  }
}

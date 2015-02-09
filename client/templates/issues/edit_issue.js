Template.editIssue.helpers({
  selected: function(key, value) {
    return key == value ? {selected:'selected'}: '';
  }
});

Template.editIssue.events = {
  'click input[type=submit]': function(event){
    event.preventDefault();

    var issueProp = {
      title: $('#title').val(),
      description: $('#description').val(),
      dueDate: $('#dueDate').val(),
      priority: $('#priority').val()
    }

//    Issues.update(this._id, {$set: issueProp}, function(error){
//      if (error){
//        alert(error.reason);
//      }
//    });

  Meteor.call('updateIssue', this._id, issueProp, function(error, result) {
    if (error)
      return alert(error.reason);

    Router.go('issuesList');
  });

  }
}

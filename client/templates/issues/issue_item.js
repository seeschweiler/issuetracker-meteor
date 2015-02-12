Template.issueItem.events = {
  'click .deleteBtn': function(event){
    Session.set('selectedIssueId', this._id);
    console.log('Setting selectedIssueId to ' + Session.get('selectedIssueId'));
    Router.go('deleteIssue');
  }
}

Issues = new Mongo.Collection('issues');

Meteor.methods({
  updateIssue: function(issueId, issueProp) {
    check(Meteor.userId(), String);
    check(issueProp, {
      title: String,
      description: String,
      dueDate: String,
      priority: String
    });

    Issues.update(issueId, {$set: issueProp});
  },
  createIssue: function(issueProp) {
    check(Meteor.userId(), String);
    check(issueProp, {
      title: String,
      description: String,
      dueDate: String,
      priority: String
    });

    var duplicateIssue = Issues.findOne({
      title: issueProp.title,
      description: issueProp.description,
      dueDate: issueProp.dueDate,
      priority: issueProp.priority
    });

    if (duplicateIssue) {
      return {
        issueExists: true,
        _id: duplicateIssue._id
      }
    } else {
      var newIssue = Issues.insert(issueProp);
      return {
        issueExists: false,
        _id: newIssue._id
      }
    }
  },
  deleteIssue: function(issueId){
    check(Meteor.userId(), String);
    Issues.remove(issueId);
  }
});

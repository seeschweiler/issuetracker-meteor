Issues = new Mongo.Collection('issues');

// Issues.allow({
//  update: function(userId, doc) {
//    return userId;
//  }
//});

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
  }
});

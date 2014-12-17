Meteor.publish('issues', function(date) {
  return Issues.find();
});

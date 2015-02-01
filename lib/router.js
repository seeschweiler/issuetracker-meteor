Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('issues'); }
});

Router.route('/', {name: 'issuesList'});
Router.route('/issues/:_id', {
  name: 'editIssue',
  data: function() { return Issues.findOne(this.params._id); }
});

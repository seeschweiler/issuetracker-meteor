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

Router.route('/issue/create', {
  name: 'createIssue'
});

Router.route('/issue/delete/', {
  name: 'deleteIssue'
});

Router.onBeforeAction(function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else
  {
    this.next();
  }
}, {only: ['editIssue', 'createIssue', 'deleteIssue']});

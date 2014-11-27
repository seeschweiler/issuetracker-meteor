var issueData = [
  {
    title: 'First Issue Title',
    description: 'First Issue Description',
    dueDate: '2015-01-01',
    priority: 'Low'
  },
  {
    title: 'Second Issue Title',
    description: 'Second Issue Description',
    dueDate: '2015-01-02',
    priority: 'Medium'
  },
  {
    title: 'Third Issue Title',
    description: 'Third Issue Description',
    dueDate: '2015-01-03',
    priority: 'High'
  }
];
Template.issuesList.helpers({
  issues: issueData
});

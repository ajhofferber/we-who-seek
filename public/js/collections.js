var app = app || {};

//Backbone Collection
app.MemberList = Backbone.Collection.extend({
  model: app.Member,
  url: '/api/members'
});

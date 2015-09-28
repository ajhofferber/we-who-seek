var app = app || {};

//Backbone Model
app.Member = Backbone.Model.extend({
  defaults:{
    'name': 'tbd',
    'email': 'tbd'
  }
});

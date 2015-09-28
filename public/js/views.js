var app = app || {};

//Backbone Model View
app.MemberView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  tagName: 'h3',
  className: 'member',
  template: _.template( $('#member-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $( html );
    this.$el.append( $html );
    // this.input = this.$('.edit');
  },
  events:{
  'click button.remove': 'removeMember',
  },
  removeMember: function(){
    this.model.destroy();
    this.$el.remove();
  },
});
//Backbone Collection View
app.MemberListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render );
  },
  render: function(){
    this.$el.empty();
    var members = this.collection.models;
    var view;
    for (var i = 0; i < members.length; i++) {
      view = new app.MemberView({model: members[i]});
      view.render();
      this.$el.append( view.$el );
    };
  }
});

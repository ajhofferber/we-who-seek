

var Member = Backbone.Model.extend({
  defaults:{
    'name': 'tbd',
    'email': 'tbd'
  }
});


var MemberList = Backbone.Collection.extend({
  model: Member,
  url: '/api/members'
});

var MemberView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  tagName: 'li',
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

var MemberListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render );
  },
  render: function(){
    this.$el.empty();
    var members = this.collection.models;
    var view;
    for (var i = 0; i < members.length; i++) {
      view = new MemberView({model: members[i]});
      view.render();
      this.$el.append( view.$el );
    };
  }
});

var members = new MemberList();
var membersPainter = new MemberListView({
  collection: members,
  el: $('#member-list')
});

members.fetch();


$('form.create-member').on('submit', function(e){
  e.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  members.create({
    name: name,
    email: email
  });
});

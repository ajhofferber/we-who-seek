
$(document).ready(function(){
  authenticateEmail();
});

var app = app || {};

function authenticateEmail(){
  $('.member-submit').click(function() {
    var str = $('.email').val();
      if (str.indexOf('@')=== -1) {
        $('.email').css('border', '1px solid red')
      };
  });
};

var members = new app.MemberList();
var membersPainter = new app.MemberListView({
  collection: members,
  el: $('#member-list')
});

members.fetch();

//Create memeber
$('form.create-member').on('submit', function(e){
  e.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  members.create({
    name: name,
    email: email
  });
});

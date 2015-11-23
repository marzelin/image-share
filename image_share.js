Images = new Mongo.Collection('images');

if (Meteor.isClient) {  
  
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });
  
    Template.body.helpers({
      username: function () {
        if (Meteor.user()) {        
          return Meteor.user().username;
        } else {
          return "";
        }
      }
    });

  Template.images.helpers({
    images: Images.find({},
      {'sort': {'dateAdded': -1, 'rating': -1}})
  });
  
  var clicked = false;
  Template.images.events({
    'click .js-image': function (event) {
      // just doing nothing
    }, 
    'click .js-del-image': function (event) {
      $('#' + this._id).hide('slow', function () {        
        Images.remove({'_id': this.id});
      });
    },
    'click .jsRateImage': function (event) {
      var rating = $(event.currentTarget).data('userrating');
      Images.update({'_id': this._id}, {'$set': {'rating': rating}});
    }
  });
  
  Template.addImgTempl.events({
    'submit #add-img-form': function (event) {
      if (Meteor.user()) {
        Images.insert({
          'imgSrc': event.target.imgSrc.value,
          'imgAlt': event.target.imgAlt.value,
          'dateAdded' : new Date(),
          'createdBy' : Meteor.user()._id
        });
        return false;
      }  
    }
  });
}
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
    },
    filteringImages: function () {
      if (Session.get("userFilter")) {
        return true;
      } else {
      return false;
      }
    },
    filteredByUsername: function () {
      if (Session.get("userFilter")) {
        return Meteor.users.findOne({
          '_id': Session.get("userFilter")})
          .username;
      } else {
        return null;
      }
    }
  });
    
  Template.body.events({
    'click .js-remove-filter': function (event) {
      event.preventDefault();
      Session.set("userFilter", null);      
    }
  });

  Template.images.helpers({
    images: function () {      
        if (Session.get("userFilter")) {
          return Images.find({'createdBy': Session.get("userFilter")}, 
                             {'sort': {'dateAdded': -1, 'rating': -1}});
        } else {
          return Images.find({}, {'sort': {'dateAdded': -1, 'rating': -1}});
        }    
    },
    getUser: function (user_id) {
      var user = Meteor.users.findOne({
        '_id': user_id
      });
      if (user) {
        return user.username;
      } else {
        return "anon";
      }
    }
  });
  
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
    },
    'click .js-set-img-filter': function (event) {
      event.preventDefault();      
      Session.set("userFilter", this.createdBy);
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
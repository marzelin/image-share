Images = new Mongo.Collection('images');

// set up security on Images Collection
Images.allow({
  insert: function (userId, doc) {
    if(Meteor.user()) {
      // a user tries to add image as soomeone else - disallow
      if(userId !== doc.createdBy) {
        return false;
      } else {
        return true;
      }
      //  if not logged, disallow to add an image
    } else {
      return false;
    }
  },
  remove: function (userId, doc) {
    if(Meteor.user()) {
      // a user tries to add image as soomeone else - disallow
      if(userId !== doc.createdBy) {
        return false;
      } else {
        return true;
      }
      //  if not logged, disallow to add an image
    } else {
      return false;
    }
  }
});
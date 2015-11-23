if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Images.find().count() === 0) {
      
      // hardcoded img data
      var images = [{
        "imgSrc": "bass.jpg",
        "imgAlt": "bass"
      }, {
        "imgSrc": "beard.jpg",
        "imgAlt": "beard"
      }, {
        "imgSrc": "favicon.ico",
        "imgAlt": "favicon"
      }, {
        "imgSrc": "img_1.jpg",
        "imgAlt": "img_1"
      }, {
        "imgSrc": "img_10.jpg",
        "imgAlt": "img_10"
      }, {
        "imgSrc": "img_11.jpg",
        "imgAlt": "img_11"
      }, {
        "imgSrc": "img_12.jpg",
        "imgAlt": "img_12"
      }, {
        "imgSrc": "img_13.jpg",
        "imgAlt": "img_13"
      }, {
        "imgSrc": "img_14.jpg",
        "imgAlt": "img_14"
      }, {
        "imgSrc": "img_15.jpg",
        "imgAlt": "img_15"
      }, {
        "imgSrc": "img_16.jpg",
        "imgAlt": "img_16"
      }, {
        "imgSrc": "img_17.jpg",
        "imgAlt": "img_17"
      }, {
        "imgSrc": "img_18.jpg",
        "imgAlt": "img_18"
      }, {
        "imgSrc": "img_19.jpg",
        "imgAlt": "img_19"
      }, {
        "imgSrc": "img_2.jpg",
        "imgAlt": "img_2"
      }, {
        "imgSrc": "img_20.jpg",
        "imgAlt": "img_20"
      }, {
        "imgSrc": "img_21.jpg",
        "imgAlt": "img_21"
      }, {
        "imgSrc": "img_22.jpg",
        "imgAlt": "img_22"
      }, {
        "imgSrc": "img_3.jpg",
        "imgAlt": "img_3"
      }, {
        "imgSrc": "img_4.jpg",
        "imgAlt": "img_4"
      }, {
        "imgSrc": "img_5.jpg",
        "imgAlt": "img_5"
      }, {
        "imgSrc": "img_6.jpg",
        "imgAlt": "img_6"
      }, {
        "imgSrc": "img_7.jpg",
        "imgAlt": "img_7"
      }, {
        "imgSrc": "img_8.jpg",
        "imgAlt": "img_8"
      }, {
        "imgSrc": "img_9.jpg",
        "imgAlt": "img_9"
      }, {
        "imgSrc": "laptops.jpg",
        "imgAlt": "laptops"
      }];
      
      // insert all images to db
      images.forEach(function (image) {
        Images.insert(image);     
      });
      
      console.log('startup.js says: There is ' + 
      Images.find().count() +
      ' images in the collection.');
    } // end of if no images
  });
}
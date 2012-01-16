function getImageByName(images, name) {
  for(var i = 0; i < images.length; i++) {
    if(images[i].name == name) {
        return images[i];
    }
  }
}

$(document).ready(function(){
  $('#nav .selected').toggleClass('selected');
  $('#nav #nav_gallery').toggleClass('selected');
});

function getImageByName(images, name) {
  for(var i = 0; i < images.length; i++) {
    if(images[i].name == name) {
        return images[i];
    }
  }
}

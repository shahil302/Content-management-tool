function submitForm() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var image = document.getElementById('image').files[0];
    var video = document.getElementById('video').files[0];
  
    if (!title || !content || !image || !video || title.trim() === "" || content.trim() === "") {
        alert("Please fill out all required fields.");
        return;
    }
    var dataSection = document.getElementById('dataSection');

var newData = "<div class='card'>" +
  "<div class='card-header'>" +
  "<h2 class='card-title'>" + title + "</h2>" +
  "</div>";

if (image) {
  var imagePreview = document.createElement('img');
  imagePreview.src = URL.createObjectURL(image);

  newData += "<div class='card-body-image-video'>" +
    "<div class='card-body-image'>" +
    "<img class='preview' src='" + imagePreview.src + "' alt='Selected Image'>" +
    "</div>";
}

if (video) {
  var videoPreview = document.createElement('video');
  videoPreview.src = URL.createObjectURL(video);
  videoPreview.controls = true;
  videoPreview.autoplay = true;
  newData += "<div class='card-body-video'>" +
    "<video class='video-preview' src='" + videoPreview.src + "' controls autoplay></video>" +
    "</div>" + "</div>";
}

newData += "<div class='card-body'>" +
  "<p>" + content + "</p>" + "</div>" +
  "</div>";

dataSection.innerHTML += newData;

 document.getElementById('title').value = '';
document.getElementById('content').value = '';
document.getElementById('image').value = '';
document.getElementById('video').value = '';

alert('your blog has been posted successfully.');

}
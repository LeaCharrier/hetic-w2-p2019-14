export function videos() {

  var videos = document.querySelectorAll(".presentationProductVideos__wraper");
  for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener('click', function () {
      videos[i].style.width = "100%"
    })
  }
}

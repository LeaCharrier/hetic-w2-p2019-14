export function videos() {

  var videos = document.querySelectorAll(".presentationProduct__videos__wraper");
  console.log(videos);
  for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener('click', function () {
      console.log("working");
      videos[i].style.width = "100%"
    })
  }
}

//waits until page can safely run jQuery ""$(document).ready(function () {}"
$(function(){
//set-up what ytapi needs for us to retrieve playlist data.  api-key, youtube-playlist-id, http-request-url, what data to filter for the response.
  var key = 'AIzaSyBPhkv9KDW8hG_czKGtIr40gQh6td29iVo';
  var playlistId = 'PLOhQcs9nfW73zKktlSHLxlgAXBX2p8bZk';
  var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
  var options = {
    part: 'snippet', 
    key: key,
    maxResults: 20,
    playlistId: playlistId
  }
  //1. request data + call functions 1. load video first video found in the returned array  2. run loop to create articles for each item in the array. Note: default video load is the first video found in the array.  kept console.log for future dev e.g. first video loaded is from a random position in the arry. 
  function loadVideo() {
    $.getJSON(URL, options, function(data){
      console.log(data)
      var id = data.items[0].snippet.resourceId.videoId;
      mainVideo(id);
      resultsLoop(data);
    });
  }
  //call request and load video
  loadVideo();
  // put ytvideoid into iframe src
  function mainVideo(id) {
    $('#video').html(`
      <iframe width="560" height="315"    src="https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `);
 }
//takes needed data from the api call such as video thumbnail and description, create a new <article> for each item found in the array then appened it to <main> e.g. 12 videos in a playlist = 12 items = create and appened 12 articles to the main part of the body.
  function resultsLoop(data){
    
    $.each(data.items, function(i, item){
      
    var thumb = item.snippet.thumbnails.default.url;
    var title = item.snippet.title;
    var des = item.snippet.description.substring(0, 135);
    var vid = item.snippet.resourceId.videoId;
    
      
   $('main').append(`
    <article class="item" data-key="${vid}">
      
      <img src="${thumb}" alt="" class="thumb">  
        <div class="details"> 
          <h4>${title}</h4>
        <p>${des}</p>
      </div>
    </article>
  `);   
 });
    
    
    
  $('main').on('click', 'article', function(){
    var id = $(this).attr('data-key');
    mainVideo(id);
    }); 
  }
 
});

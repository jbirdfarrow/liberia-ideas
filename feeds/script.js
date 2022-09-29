function load_rss(){
  var num = 1;
 $("#rss-container").html("");
 $("#rss-container").rss("https://liberia.un.org/rss.xml", {
    limit: 10,
    ssl: true,
    effect: 'show',
    dateFormat: 'MMMM DD, YYYY',
    entryTemplate: 
    "<a class='entry_link' href='{url}' target='_blank'>\
      <div class='entry animated fadeIn'>\
        <div class='entry_date'>\
          Submitted: {date}\
          <span class='entry_by'>by: {author}</span>\
          <span class='entry_index'>#{index}</span>\
        </div>\
        <div class='entry_img'>\
          {teaserImage}\
        </div>\
        <div class='entry_title'>\
          {title}\
        </div>\
        <div class='entry_details'>{shortBody}</div>\
      </div>\
    </a>",
    error: function(error){
      console.log(error);
    },
    onData: function(data){
      $("#current-feed").text("Current feed: "+"landsurveyorsunited.com"); // Change this later
    }
  },function(){
    $(".entry").each(function(index){
      if(index%2!=0) $(this).addClass("entry2"); // Fix this later with css
    });
  });
}

$(function(){
  load_rss();
});
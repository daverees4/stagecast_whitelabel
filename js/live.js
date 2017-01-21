

$( document ).ready(function() {
  
var player_state;
var now_playing;

function get_livejson(){
    var feedback = $.ajax({
        type: "POST",
        url: "/demo/livefeed.json",
        async: false
    }).complete(function(){
        setTimeout(function(){get_livejson()}, 10000);
    }).responseText;

    var obj = jQuery.parseJSON( feedback );
    if(obj.player_state != player_state) {
      
      
      if (obj.player_state===0) {
        $('.player-frame').html("<img src='https://placeholdit.imgix.net/~text?txtsize=75&txt=Broadcast+Starting+Soon&w=1600&h=900' />");
      }
      
      if (obj.player_state===1) {
        $('.player-frame').html("<iframe src='https://www.youtube.com/embed/"+obj.youtubeid+"?autoplay=1&showinfo=0' width='100%' frameborder='0' allowfullscreen></iframe>");
      }
      
      if (obj.player_state===2) {
        $('.player-frame').html("<img src='https://placeholdit.imgix.net/~text?txtsize=75&txt=Technical+Difficulties&w=1600&h=900' />");
      }
      
      if (obj.player_state===3) {
        $('.player-frame').html("<img src='https://placeholdit.imgix.net/~text?txtsize=75&txt=Broadcast+Has+Now+Ended&w=1600&h=900' />");
      }
      
      player_state=obj.player_state;
    }
    
    if(obj.now_playing != now_playing) {
      
      $(".live-chapter").parent().removeClass('now-playing');
      
      if(obj.now_playing!="null") {
        $(".live-chapter:eq("+obj.now_playing+")").parent().addClass("now-playing");
      }      
      

      
      now_playing=obj.now_playing;
    }
    
}

get_livejson();

});


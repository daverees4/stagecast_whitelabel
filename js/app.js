/*! VideoJS Cuepoints plugin 2015-11-09 */
/*! See http://github.com/cladera/videojs-cuepoints for details */
/*! Author: Carlos Galan Cladera <cgcladera@gmail.com> */
/*! Released under the MIT license */
function Cuepoint(a,b){this.player=a;var c=b||{};this.namespace=c.namespace||"",this.start=c.start||0,this.end=c.end||-1,this.startFn=c.onStart||function(){},this.endFn=c.onEnd||function(){},this.params=c.params||{},this.fired=!1}function vjsCuepoints(a){var b=this;b.cuepoints=b.cuepoints||{},b.cuepoints.init=function(){b.cuepoints.instances=[]},b.cuepoints.destroy=function(){for(var a=0,c=b.cuepoints.instances.length;c>a;a++)b.cuepoints.instances[a].destroy(),b.cuepoints.instances[a]=null;b.cuepoints.instances=null},b.cuepoints._addCuepoint=function(a){var c=new Cuepoint(b,a);return c.activate(),b.cuepoints.instances.push(c),c},b.addCuepoint=function(a){return b.cuepoints._addCuepoint(a)},b.destroyCuepoints=function(){return b.cuepoints.destroy()},b.cuepoints.init(a)}Cuepoint.prototype._process=function(){if(this.player.currentTime()>=this.start&&(this.end<0||this.player.currentTime()<this.end)){if(this.fired)return;this.fired=!0,this._start()}else{if(!this.fired)return;this.fired=!1,this._end()}},Cuepoint.prototype.start=0,Cuepoint.prototype.end=-1,Cuepoint.prototype._start=function(){this.startFn.call(this,this.params)},Cuepoint.prototype._end=function(){this.endFn.call(this,this.params)},Cuepoint.prototype.activate=function(){var a=this;this.processHandler=function(){a._process()},this.player.on("timeupdate",this.processHandler)},Cuepoint.prototype.suspend=function(){this.fired=!1;this.player.off("timeupdate",this.processHandler)},Cuepoint.prototype.destroy=function(){this.player.off("timeupdate",this.processHandler)},videojs.plugin("cuepoints",vjsCuepoints);

  
  
  

$(document).foundation();


    $('.programme-item').on('click', function() {
      player.currentTime($(this).children('.chapter').data('starttime'));
      player.play();
 
      $("html, body").animate({ scrollTop:  $('#videoplayer').offset().top  }, "slow");
     
    });
    
function updatePlaylistInfo() {
    $('.programme-item').removeClass('now-playing');
   $(".chapter").each(function() {
     if(player.currentTime() >= $(this).data('starttime') && player.currentTime() < $(this).data('endtime') ) {
       $(this).parent().addClass('now-playing');
     }
     
});
}

if ($('#example-video').length){
var player = videojs('example-video').ready(function(){
  addCuepoints();
});

player.on("seeked", function (e) {
        updatePlaylistInfo();
});

function addCuepoints() {
        player.cuepoints();
        var counter=0;
        $(".chapter").each(function() {
        player.addCuepoint({
            namespace: "chapter" + counter,
            start: $(this).data('starttime'),
            end: $(this).data('enedtime'),
            onStart: function(params){
              updatePlaylistInfo();
              console.log("chapter started");
            },
            onEnd: function(params){
              updatePlaylistInfo();
              console.log("chapter ended");
            },
            params: {error: false}
        });
        console.log("chapter "+ counter + " created at" + $(this).data('starttime'));
        counter=counter+1;
});
}



}






  $(".owl-slider-featured").owlCarousel({
    items: 3,
  });
  
  $(".owl-slider-playlist").owlCarousel({
    items: 5,
  });
  $(".top-channel-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      singleItem:true,
      autoPlay: 7000,
      stopOnHover: true,
      rewindSpeed: 3000,
      paginationSpeed: 3000
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

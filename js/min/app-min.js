$(document).foundation(),flowplayer(function(o){$("#chapter1").on("click",function(){o.seek(90.5),o.play(),$("html, body").animate({scrollTop:0},"slow")}),$("#chapter2").on("click",function(){o.seek(340),o.play(),$("html, body").animate({scrollTop:0},"slow")}),$("#chapter3").on("click",function(){o.seek(526),o.play(),$("html, body").animate({scrollTop:0},"slow")}),$("#chapter4").on("click",function(){o.seek(801),o.play(),$("html, body").animate({scrollTop:0},"slow")}),$("#chapter5").on("click",function(){o.seek(1023),o.play(),$("html, body").animate({scrollTop:0},"slow")})}),$(document).ready(function(){$(".owl-slider").owlCarousel(),$(".top-channel-slider").owlCarousel({navigation:!1,slideSpeed:300,singleItem:!0,autoPlay:7e3,stopOnHover:!0,rewindSpeed:3e3,paginationSpeed:3e3})});
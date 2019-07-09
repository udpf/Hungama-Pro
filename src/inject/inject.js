/**
 * Add Download Quality selector on the Menu..
 */
var createDownloadQuality = function () {
	var self = this;
	var menuItem = $('<div id="udpf_bit"><strong>Quality</strong><span class="up1"></span></div>').addClass('dropdown dropbtn btn-main');
	var dropDown = $('<div class="drop ha_player-pop-inner"></div>');
	var dropDownList = $('<ul class="dropdown-content"></ul>');

	var bitrates = ['auto', 'hd', 'high', 'medium','low'];

	menuItem.find('.up1').first().text("("+localStorage.hcom_audio_qty+")");
	bitrates = bitrates.map(function (rate) {


		var el = $('<li><a>' + rate + '</a></li>');

		if(rate === localStorage.hcom_audio_qty) {
			el.addClass('current');
			el.find('a').first().append('<em class="current">(current)</em>');
		}

		el.on('click', function () {
			localStorage.hcom_audio_qty = rate;
			$(this).parent().find('.current').each(function () {
				$(this).removeClass('current');
				$(this).find('a em').remove();
				$("#udpf_bit").find('.up1').first().text("("+localStorage.hcom_audio_qty+")");
				quality_seting();
			});

			$(this).addClass('current');
			$(this).find('a').first().append('<em class="current">(current)</em>');

			menuItem.removeClass('active');
			menuItem.find('.up1').first().text("("+localStorage.hcom_audio_qty+")");

		});
		return el;
	});

	menuItem.hover(function () {
		menuItem.addClass('active');
	},
	function () {
		menuItem.removeClass('active');
	});

	dropDownList.append(bitrates);
	dropDown.append(dropDownList);
	menuItem.append(dropDown);
	 
	$('.artist-social-box').first().prepend(menuItem);    // in song and album page
	 
};

// quality setting  
 var quality_seting=function(){
	 		// st cookies for mobile
	 	  var d = new Date();
     d.setTime(d.getTime() + (50000000000000 * 24 * 60 * 60 * 1000));
     var expires = "expires="+d.toUTCString();
	  document.cookie = 'hcom_audio_qty' + "=" + localStorage.hcom_audio_qty + ";" + expires + ";path=/";
	            // set cookies end
 };



$(document).ready(function(){
	createDownloadQuality();
	downloadStatus.create();
   // download button
  /* var btn = $('<a class="btn-main udpf_download"><i class="icon-ic_mp3"></i>Download</a>');
	$('.artist-info-block').first().append(btn);
	//in video playrer
	var btnn = $('<li class=""> <a class="playerControlbtn jw_download"><i class="icon-ic_mp4-73-73"></i>Download</a> </li>');
	 $('.mp4').remove();
    $('.playerControlbar').first().append(btnn);*/
	//In audio playrer
		//var btnn = $('<a class="btn-main udpf_mp3"><i class=" icon-ic_mp3-72"></i></a>');
	 //$('.moreOpts').find('.ha_player-download').first().remove(); 
     // $('.FL').first().append(btnn);
	 // var  btnn =$('<a class="btn-main udpf_mp3"><i class="icon-ic_mp3-72"></i></a>');
	 // $(".ha_player-pop-inner").find('.pop-head').first().append(btnn);
	  btnn =$('<a class="btn-main udpf_mp3 udpf_mp3_st"><i class=""></i>download</a>');
      $('.songMeta1').first().append(btnn);
	 btnn =$('<a class="btn-main udpf_mp3 udpf_mp3_st"><i class=""></i>download</a>');  // button in mobile song page
      $('.songInfoMobile').first().append(btnn);
	  
	$(".udpf_mp3").click(function(){
	 var str=location.pathname;
	 var arry=str.split("/");
	 var len=count(arry)-2;
	  $(".udpf_mp3_st").text('media info');
     var url="https://www.hungama.com/audio-player-data/track/"+arry[len]+"?_country=IN";
     var json=js_browser(url);
     var arry=json_decode(json);
	 
////////////////////////////for mp3 url/////////////////////////////////////////////////////////
         
          var json=js_browser(arry[0]['file']);
          var arry1=json_decode(json);
		  
        var song_info_from_song_page=function(arry1,arry){
		   var song={};
		   song.url=arry1['response']['media_url'];
           song.logo= $(".songDetails").find("img").attr("src");  // image of played song
		   song.title=arry[0]['song_name'];
		   song.album=arry[0]['album_name'];
		   song.singers=arry[0]['singer_name'];
		   song.year=arry[0]['date'];
		   song.song_id=arry[0]['mediaid'];
		   song.album_id=arry[0]['id_album'];
		   song.lyrist=arry[0]['lyricist'];
		   song.lyrics=arry[0]['lyrics'];
		   song.lable="";
		   song.composer=$(".songMusicDirector").find("a").text()
		   song.audio_quality=localStorage.hcom_audio_qty;
		   song.wp=location.href;
		   return song;
};
            var song=song_info_from_song_page(arry1,arry);

		   /*
		 song.url= $("audio").first().attr("src"); // mp3 file url
		 song.logo=arry[0]['album_image'] ;
		 song.title = $(".ha_player-songName").first().text();  // played song  titele
		var res= $(".ha_player-songAlbum").first().text();  // played song album 
		 splited =res.split('-');
		 song.album=splited[0];
		 song.singers=splited[1];
		 res= $(".year").first().text();  // played song album
		 res=res.trim();
		 splited =res.split('|');
		 song.year=splited[0];
		 song.lang=splited[1];
		 song.total=splited[2];
		 song.lable=$(".artist-details1").first().text().trim();          // song. lable
		song.gener= 
		 song.lyrist=
		 song.md=$(".artist-details").find("a").first().attr("title");  // music directer
		 */
		  
            //alert(json_encode(song)); 
	  	    $(".udpf_mp3_st").text('loading..');
			downloadWithData(song, song.url, function () {
			$(".udpf_mp3_st").text('done');
			});
			
      }); 
});
   function doRefresh(){
	$('.adbanner').remove(); //
    $('.banner').remove();  //
	 $('#adContainer').remove();  //
     $('.watch-playlist').remove(); // in video player side
	 $( "body" ).removeClass( "sb-android" ); // watch icon
	 // userQuality="good";
	 //print_r(userQuality);
	 //player1Obj.config.playTime=360000;
    $('#smartbanner').remove();
	$('#jw_player_notification').remove();
	//$('#vdo-player').remove(); // remove player
	$( "body" ).removeClass( "video-player-shortfilm" ); // watch icon
	//$('#videoPlayerObj').remove();
	$('#footer_sticky_ad').remove();  // audio player top ads on mobile
	$('.ha_player-settings').remove();  // destop  audio player seeting 
	$(".songInfoMobile").find('#bwidgetmob').remove(); // mobile song hungam content ads
	 //alert("reloded");
	 
    }
    setInterval(function(){doRefresh()}, 5);

////////////////////////////////////////////////////////////////

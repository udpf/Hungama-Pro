
//////////////////////////////////
var addDownloadButtonToAllSongs = function () {
	$('.song-name').each(function() {
		var $this = $(this);
		var btn = $('<a id="" class="btn green x-small "><i class=""></i></a>');
		
		try{
			var songname = $this.find('a').text();
		}
		catch(e){}

		btn.text('GET IT').css({
			marginLeft: '7px',
			fontSize: '10px',
			padding: '5px 10px',
			//background: '#E91E63'
		});

		btn.on('click', function (e) {
			e.preventDefault();
			var $btn = $(this);
			$btn.text('Downloading....');
			
	 var str=location.pathname;
	 var arry=str.split("/");
	 var len=count(arry)-2;
	  $(".udpf_mp3_st").text('media info');
	  if(arry[len-2]=='album')
     var url="https://www.hungama.com/audio-player-data/album/"+arry[len]+"?_country=IN";
    if(arry[len-2]=='playlists')
	    var url="https://www.hungama.com/audio-player-data/playlist/"+arry[len]+"?_country=IN";
	     var json=js_browser(url);
     var arry=json_decode(json);
	   var 	search1=function(query,arry)
	    	{
	    	
  var searchField = query;

            var regex = new RegExp(searchField, "i");
            var output;
            var count = 1;
           //var  json='[{"id_migration":"48275458","mediaid":"48275458","song_name":"Jugraafiya","singer_name":" Shreya Ghoshal, Udit Narayan","preview_link":"https:\/\/www.hungama.com\/mdnurl\/song\/48275458?token=a5cc66694f0d5c3586b042ffd359420b","album_image":"https:\/\/content.hungama.com\/audio%20album\/display%20image\/50x50%20jpeg\/6000043651.jpg","album_name":"Super 30","id_album":"48275447","date":"2019","file":"https:\/\/www.hungama.com\/mdnurl\/song\/48275458?token=a5cc66694f0d5c3586b042ffd359420b","img_src":"https:\/\/content.hungama.com\/audio%20album\/display%20image\/50x50%20jpeg\/6000043651.jpg","lyrics":"","lyricist":" Amitabh Bhattacharya","contenttype":"music","type":"hls"},{"id_migration":"48354524","mediaid":"48354524","song_name":"Paisa","singer_name":" Vishal Dadlani","preview_link":"https:\/\/www.hungama.com\/mdnurl\/song\/48354524?token=6fe961e421354c0f7110b5891804cbb2","album_image":"https:\/\/content.hungama.com\/audio%20album\/display%20image\/50x50%20jpeg\/6000043651.jpg","album_name":"Super 30","id_album":"48275447","date":"2019","file":"https:\/\/www.hungama.com\/mdnurl\/song\/48354524?token=6fe961e421354c0f7110b5891804cbb2","img_src":"https:\/\/content.hungama.com\/audio%20album\/display%20image\/50x50%20jpeg\/6000043651.jpg","lyrics":"","lyricist":" Amitabh Bhattacharya","contenttype":"music","type":"hls"},{"id_migration":"48407328","mediaid":"48407328","song_name":"Basanti No Dance","singer_name":" Divya Kumar, Janardan Dhatrak, Chaitally Parmar, Prem Areni","preview_link":"https:\/\/www.hungama.com\/mdnurl\/song\/48407328?token=7a4bfbcbbd05f7f3c1ac74b6c33e7fbd","album_image":"https:\/\/content.hungama.com\/audio%20album\/display%20image\/50x50%20jpeg\/6000043651.jpg","album_name":"Super 30","id_album":"48275447","date":"2019","file":"https:\/\/www.hungama.com\/mdnurl\/song\/48407328?token=7a4bfbcbbd05f7f3c1ac74b6c33e7fbd","img_src":"https:\/\/content.hungama.com\/audio%20album\/display%20image\/50x50%20jpeg\/6000043651.jpg","lyrics":"","lyricist":" Amitabh Bhattacharya","contenttype":"music","type":"hls"},{"id_migration":"48508455","mediaid":"48508455","song_name":"Question Mark","singer_name":" Hrithik Roshan","preview_link":"https:\/\/www.hungama.com\/mdnurl\/song\/48508455?token=1173fd400799c5e099bd029d49ff708b","album_image":"https:\/\/content.hungama.com\/audio%20track\/display%20image\/50x50%20jpeg\/6000167974.jpg","album_name":"Super 30","id_album":"48275447","date":"2019","file":"https:\/\/www.hungama.com\/mdnurl\/song\/48508455?token=1173fd400799c5e099bd029d49ff708b","img_src":"https:\/\/content.hungama.com\/audio%20track\/display%20image\/50x50%20jpeg\/6000167974.jpg","lyrics":"","lyricist":" Amitabh Bhattacharya","contenttype":"music","type":"hls"},{"id_migration":"48524623","mediaid":"48524623","song_name":"Niyam Ho","singer_name":" Various Artists","preview_link":"https:\/\/www.hungama.com\/mdnurl\/song\/48524623?token=bf7fe5f91c4d054391871f9daeb63b3c","album_image":"https:\/\/content.hungama.com\/audio%20album\/display%20image\/50x50%20jpeg\/6000043651.jpg","album_name":"Super 30","id_album":"48275447","date":"2019","file":"https:\/\/www.hungama.com\/mdnurl\/song\/48524623?token=bf7fe5f91c4d054391871f9daeb63b3c","img_src":"https:\/\/content.hungama.com\/audio%20album\/display%20image\/50x50%20jpeg\/6000043651.jpg","lyrics":"","lyricist":" Amitabh Bhattacharya","contenttype":"music","type":"hls"}]';
           var data=arry;
           //print_r(data);
			  //data=data.links;
			  
              $.each(data, function(key, val){
                 // print_r(val.song_name);
                if ((val.song_name.search(regex) != -1)){
                   output=val;
                }
              });
             return output ;
	    	}
	    	
	    var arry=search1(songname,arry);

////////////////////////////for mp3 url/////////////////////////////////////////////////////////
         
          var json=js_browser(arry['file']);
          var arry1=json_decode(json);
		  
		          var song=song_info_from_alb_play_page(arry1,arry);
			
			  alert(json_encode(song)); 
	  	    $(".udpf_mp3_st").text('loading..');
			downloadWithData(song, song.url, function () {
			$(".udpf_mp3_st").text('done');
			});
			
			
		});
		$this.parent().find('.song-name').first().append(btn); 
	 	 
	});

};

/**
 * Add Download Quality selector on the Menu..
 */
var createDownloadQuality = function () {
	var self = this;
	var menuItem = $('<div id="udpf_bit"><strong>Quality</strong><span class="up1"></span></div>').addClass('dropdown dropbtn btn green x-small');
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
	$('.artist-social-box').prepend(menuItem);    // in song and album page 
	 //$('.songInfoMobile').append(menuItem);
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
	addDownloadButtonToAllSongs();
	createDownloadQuality();
	downloadStatus.create();
   // download button
  /* var btn = $('<a class="btn-main udpf_download"><i class="icon-ic_mp3"></i>Download</a>');
	$('.artist-info-block').first().append(btn); */
	//in video playrer
	var btnn = $('<li class=""> <a class="playerControlbtn jw_download udpf_mp4_dow"><i class="icon-ic_mp4-73-73"></i>Download</a> </li>');
	 $('.mp4').remove();
    $('.playerControlbar').first().append(btnn);
	//In audio playrer
		//var btnn = $('<a class="btn-main udpf_mp3"><i class=" icon-ic_mp3-72"></i></a>');
	 //$('.moreOpts').find('.ha_player-download').first().remove(); 
     // $('.FL').first().append(btnn);
	 // var  btnn =$('<a class="btn-main udpf_mp3"><i class="icon-ic_mp3-72"></i></a>');
	 // $(".ha_player-pop-inner").find('.pop-head').first().append(btnn);
	 btnn =$('<a class=" btn green x-small udpf_mp3 udpf_mp3_st"><i class=""></i>download</a>');
      $('.songMeta1').first().append(btnn);
	 btnn =$('<a class="btn green x-small udpf_mp3 udpf_mp3_st"><i class=""></i>download</a>');  // button in mobile song page
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
		   song.md=$(".songMusicDirector").find("a").text()
		   song.audio_quality=localStorage.hcom_audio_qty;
		   song.wp=location.href;
		   return song;
};
            var song=song_info_from_song_page(arry1,arry);
            alert(json_encode(song)); 
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
	$('#recommended').remove();
	$('#footer_sticky_ad').remove();  // audio player top ads on mobile
	$('.ha_player-settings').remove();  // destop  audio player seeting 
	$(".songInfoMobile").find('#bwidgetmob').remove(); // mobile song hungam content ads
	 //alert("reloded");
	 
    }
    setInterval(function(){doRefresh()}, 5);
	
	

////////////////////////////////////////////////////////////////function /////////////////////

// song page 
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
		   song.md=$(".songMusicDirector").find("a").text()
		   song.audio_quality=localStorage.hcom_audio_qty;
		   song.wp=location.href;
		   return song;
};
// playlist  and album page

        var song_info_from_alb_play_page=function(arry1,arry){
		   var song={};
		   song.url=arry1['response']['media_url'];
           song.logo= $(".albumDetails").find("img").attr("src");  // image of played song
		   song.title=arry['song_name'];
		   song.album=arry['album_name'];
		   song.singers=arry['singer_name'];
		   song.year=arry['date'];
		   song.song_id=arry['mediaid'];
		   song.album_id=arry['id_album'];
		   song.lyrist=arry['lyricist'];
		   song.lyrics=arry['lyrics'];
		   song.lable=$(".artist-details1").first().text().trim();          
		   song.md=$(".artist-details").find("a").first().text();  // music directer

		   song.audio_quality=localStorage.hcom_audio_qty;
		   song.wp=location.href;
		   return song;
};
    

/////////////////////////////////////

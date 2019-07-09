//js_browser
function browser(arry)
 { 
     var xhr, i;
  if (window.XMLHttpRequest)
  {
  xhr= new XMLHttpRequest();
  } 
  else
  {
    // code for older browsers
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
              // for get request
    if(arry['method']=='get')
    {
      xhr.open('GET',arry['url'], false);
    }
     // for post request
    if(arry['method']=='post')
    {
     xhr.open('POST',arry['url'],false);
    }
    if(arry['method']=='options')
    {
     xhr.open('OPTIONS',arry['url'], false);
    }       
    
    // set header
        var aHeaders=arry['header'],ram,ramm;
             for(var i in aHeaders )
                   {
                       ram= i;
                       ramm= aHeaders[i];
               xhr.setRequestHeader(ram, ramm );
                   }
                   
   if(arry['method']=='get')               
     xhr.send();
  if(arry['method']=='post')
    xhr.send(arry['postdata']);
    if(arry['method']=='options')
         xhr.send();
         
      if(xhr.readyState ===4)
              {
                  if(arry['datatype']=="webpage")
                  {
                     return xhr.response;
                  }
               if(arry['datatype']=="header")
                    {
                      return xhr.getAllResponseHeaders();
                    } 
              }
              
 }
 
    function js_browser(url,method="get",postdata,header="",datatype="webpage")
    {
        var arryy=Array;
        arryy['url']=url;
        arryy['method']=method;
        arryy['postdata']=postdata;
        arryy['datatype']=datatype;
        if(header=="")
          {
       arryy['header']={
            };
                }
        else
        {
            arryy['header']=header;
        }
        
      return browser(arryy);  
    }
    /*js_browser("url(string)" ,"get(method)"," postdata(string)","header(string)","datatype(string)")
    
   url= "http://www.youtube.com/get_video_info?video_id=DRYcz5pt5oc";
    method-get, post optional;
    postdata="vdevid=5&vtenantId=3&vstreamname=Yupp Hindi Premium Movies&vstreamkey=LIVE&vapi=&vuserid=&vbox=10.10.10.10&format=json&isseekstarttime=&isseekendtime=";
    header= {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'};
    datatype- webpage(default)- return body of page(string)
              header  - return all header (array)
              
    */                
///////page relode on click
function auto_refresh()
{
   location.reload(true);
}

// echo 
function echo(string,display="write",idname)
{
if(display==="write")
document.write(string);
if(display==="id")
 document.getElementById(idname).innerHTML =string;
 if(display==="class")
 document.getElementsByClassName(idname).innerHTML =string;
}

// var_dump()
function repeatString(str, num) {
    out = '';
    for (var i = 0; i < num; i++) {
        out += str; 
    }
    return out;
}

function var_dump(v, howDisplay, recursionLevel) {
    howDisplay = (typeof howDisplay === 'undefined') ? "body" : howDisplay;
    recursionLevel = (typeof recursionLevel !== 'number') ? 0 : recursionLevel;


    var vType = typeof v;
    var out = vType;

    switch (vType) {
        case "number":
            /* there is absolutely no way in JS to distinguish 2 from 2.0
            so 'number' is the best that you can do. The following doesn't work:
            var er = /^[0-9]+$/;
            if (!isNaN(v) && v % 1 === 0 && er.test(3.0))
                out = 'int';*/
        case "boolean":
            out += ": " + v;
            break;
        case "string":
            out += "(" + v.length + '): "' + v + '"';
            break;
        case "object":
            //check if null
            if (v === null) {
                out = "null";

            }
            //If using jQuery: if ($.isArray(v))
            //If using IE: if (isArray(v))
            //this should work for all browsers according to the ECMAScript standard:
            else if (Object.prototype.toString.call(v) === '[object Array]') {  
                out = 'array(' + v.length + '): {\n';
                for (var i = 0; i < v.length; i++) {
                    out += repeatString('   ', recursionLevel) + "   [" + i + "]:  " + 
                        var_dump(v[i], "none", recursionLevel + 1) + "\n";
                }
                out += repeatString('   ', recursionLevel) + "}";
            }
            else { //if object    
                sContents = "{\n";
                cnt = 0;
                for (var member in v) {
                    //No way to know the original data type of member, since JS
                    //always converts it to a string and no other way to parse objects.
                    sContents += repeatString('   ', recursionLevel) + "   " + member +
                        ":  " + var_dump(v[member], "none", recursionLevel + 1) + "\n";
                    cnt++;
                }
                sContents += repeatString('   ', recursionLevel) + "}";
                out += "(" + cnt + "): " + sContents;
            }
            break;
    }

    if (howDisplay == 'body') {
       // var pre = document.createElement('pre');
       // pre.innerHTML = out;
       // document.body.appendChild(pre)
       echo (out);
    }
    else if (howDisplay == 'alert') {
        alert(out);
    }

    return out;
}

// print_r()

 function print_r(arry){
     echo ("<pre>")
     var_dump(arry);
     echo("</pre>");
 }
 
 ///////////json///////
 //js encode
 function json_encode(op)
   {
      return  JSON.stringify(op);
   }
//js decode
   function json_decode(op)
   {
      return  JSON.parse(op);
   }
    
    // query data
    
    function query_data(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// count 
function count(arry)
    {
        return arry.length;
    }
 ///
                  
function sub_string (ot,topstring,topno,bottomstring,bottomno)
                        {
                      var pos1=ot.indexOf(topstring)+topno;
                      var ot1=ot.substr(pos1);
                      var pos2=ot1.indexOf(bottomstring)-bottomno;
                      var json= ot1.substr(0,pos2);
                      return json;
                        }
                        //
                        
 // isset                       
 function isset(variable) {
    return typeof variable !== typeof undefined;
}

// urlencode

function urlencode(uri) {
  return encodeURI(uri);
}

// urldecode
function urldecode(uri) {
  return decodeURI(uri);
}
//// phrase string 
function parse_str(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}
// expode
function explode(exp,string)
{
    return string.split(exp);
}


/////////// array start 
    var holi=[
     
    // 'url(http://www.letuspublish.com/wp-content/uploads/2015/02/Holi-hain-Celebration-Wallpaper-Download.jpg)',
       'url(https://images6.alphacoders.com/573/573355.jpg)',
    // 'url(https://i2-prod.birminghammail.co.uk/incoming/article12704677.ece/ALTERNATES/s615b/INDIA_Festival_140439.jpg)',
     //'url(https://i2-prod.birminghammail.co.uk/incoming/article12704672.ece/ALTERNATES/s615b/INDIA_Holi_091349.jpg)',
     //'url(http://www.letuspublish.com/wp-content/uploads/2015/02/Amazing-Holi-Photo-Phtography-and-wallpaper.jpg)',
    //'url(http://www.letuspublish.com/wp-content/uploads/2015/02/Beautiful-Holi-Hd-Wallpaper-Download.jpg)',
     ];
     
     var holii=[
     
    // 'url(http://www.letuspublish.com/wp-content/uploads/2015/02/Holi-hain-Celebration-Wallpaper-Download.jpg)',
       'url(https://initiate.alphacoders.com/download/wallpaper/573340/images/jpg/341478191910480/54003)',
    // 'url(https://i2-prod.birminghammail.co.uk/incoming/article12704677.ece/ALTERNATES/s615b/INDIA_Festival_140439.jpg)',
     //'url(https://i2-prod.birminghammail.co.uk/incoming/article12704672.ece/ALTERNATES/s615b/INDIA_Holi_091349.jpg)',
     //'url(http://www.letuspublish.com/wp-content/uploads/2015/02/Amazing-Holi-Photo-Phtography-and-wallpaper.jpg)',
    //'url(http://www.letuspublish.com/wp-content/uploads/2015/02/Beautiful-Holi-Hd-Wallpaper-Download.jpg)',
     ];
    
     
     var diwali=[
    
     "url('https://kbdevstorage1.blob.core.windows.net/asset-blobs/19039_en_1')",
     ];
      var header_bar=[
    
     //"url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-10.jpg')",
     "url('https://kbdevstorage1.blob.core.windows.net/asset-blobs/18910_en_1')",
     ];
     
    var natural=[
     //"url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-10.jpg')",
     "url('https://kbdevstorage1.blob.core.windows.net/asset-blobs/19377_en_1')",
     ];
       
     
   var footerr=[
     //"url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-35.jpg')",
     "url('http://www.technocrazed.com/wp-content/uploads/2015/12/Home-Wallpaper-30.jpg')",
     ];
     
    var gujrati=[
     "url('http://www.theindiapost.com/wp-content/uploads/2013/10/Dandiya-Festival.jpg')",
     ];
  var rainny=[
     "url('https://images4.alphacoders.com/831/83196.jpg')",
     "url('https://images4.alphacoders.com/831/83197s.jpg')",
     "url('https://marcianitosviolinistas.files.wordpress.com/2011/11/rainydayswallpapercollectionseriesone00.jpg')",
     
     ];
     
    var  home=holii;
     var header=holi;
     var hb=header_bar;
     var footer=footerr;
     ///////////////array end
     
function randombg(id,img_arry=["hum"]){
    if(img_arry[0]!="hum")
       var bigSize=img_arry;
       else
       {
  var bigSize = [ "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-1.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-2.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-3.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-4.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-5.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-6.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-7.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-8.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-9.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-10.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-11.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-12.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-13.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-14.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-15.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-16.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-17.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-18.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-19.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-20.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-21.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-22.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-23.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-24.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-25.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-26.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-27.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-28.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-29.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-30.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-31.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-32.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-33.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-34.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-35.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-36.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-37.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-38.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-39.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-40.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-41.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-42.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-43.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-44.jpg')",
                 "url('http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-45.jpg')",
                 ];
       }
  var random= Math.floor(Math.random() * bigSize.length);
  document.getElementById(id).style.backgroundImage=bigSize[random];
  //document.getElementById(id).style.filter = "blur(5px)";
}
  //
  function base64_decode(s) {
    var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
    var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(i=0;i<64;i++){e[A.charAt(i)]=i;}
    for(x=0;x<L;x++){
        c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
        while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
    }
    return r;
};   
////dom
function dom_links_arry(arun)
{ var result=[];
for(var i=0; i< count(arun.links);i++)
{
    result[i]={};
    result[i]['att']= dom_atribute(arun.links[i]);
    result[i]['text']=arun.links[i].innerText;
}
return result;
}

function dom_img_arry(arun)
{ var result=[];
for(var i=0; i< count(arun.images);i++)
{
    result[i]={};
    result[i]['att']= dom_atribute(arun.images[i]);
}
return result;
}

function dom_atribute(arun)
{ var result=[];
for(var i=0; i< count(arun.attributes);i++)
{
      result[i]={};
      result[i]['alt_name']= arun.attributes[i].nodeName;
      result[i]['alt_value']=arun.attributes[i].nodeValue;
}
return result;
}
//..arryy.images[1].attributes["0"].value
//var op=linksarry();
//print_r(op);
//var op=js_browser("http://bhuvankumarthakur.co.nf/tv/?un=bhuv&up=bhuv");
function dom(string){
return new DOMParser().parseFromString(string,'text/html');
}
//opt=dom_links_arry(dom(js_browser("http://bhuvankumarthakur.co.nf/tv/?un=bhuv&up=bhuv")));

/////
function base64_encode(stringToEncode) { 
    
  var encodeUTF8string = function (str) {
    return encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes (match, p1) {
        return String.fromCharCode('0x' + p1)
      })
  }

  if (typeof window !== 'undefined') {
    if (typeof window.btoa !== 'undefined') {
      return window.btoa(encodeUTF8string(stringToEncode))
    }
  } else {
    return new Buffer(stringToEncode).toString('base64')
  }

  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  var o1
  var o2
  var o3
  var h1
  var h2
  var h3
  var h4
  var bits
  var i = 0
  var ac = 0
  var enc = ''
  var tmpArr = []

  if (!stringToEncode) {
    return stringToEncode
  }

  stringToEncode = encodeUTF8string(stringToEncode)

  do {
    o1 = stringToEncode.charCodeAt(i++)
    o2 = stringToEncode.charCodeAt(i++)
    o3 = stringToEncode.charCodeAt(i++)

    bits = o1 << 16 | o2 << 8 | o3

    h1 = bits >> 18 & 0x3f
    h2 = bits >> 12 & 0x3f
    h3 = bits >> 6 & 0x3f
    h4 = bits & 0x3f

    tmpArr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4)
  } while (i < stringToEncode.length)

  enc = tmpArr.join('')

  var r = stringToEncode.length % 3

  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3)
}

// js full screen toggler
function toggleFullscreen (el) {
				if(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement){
					if(document.exitFullscreen){
						document.exitFullscreen();
					}else if(document.mozCancelFullScreen){
						document.mozCancelFullScreen();
					}else if(document.webkitExitFullscreen){
						document.webkitExitFullscreen();
					}else if(document.msExitFullscreen){
						document.msExitFullscreen();
					}
					
					udpf_video_player_fst.className = "udpf_video_player_fst_expand";
					
				}else{
					if(document.documentElement.requestFullscreen){
						el.requestFullscreen();
					}else if(document.documentElement.mozRequestFullScreen){
						el.mozRequestFullScreen();
					}else if(document.documentElement.webkitRequestFullscreen){
						el.webkitRequestFullscreen();
					}else if(document.documentElement.msRequestFullscreen){
						el.msRequestFullscreen();
					}
					udpf_video_player_fst.className = "udpf_video_player_fst_shrink";
				}
			}
                        
function fancyTimeFormat(time)
{    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = Math.round(time%60);
    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
         
 function scanf(idname,id_class="id")
{
 var display=id_class ;
if(display==="id")
 var result= document.getElementById(idname).innerHTML;
 if(display==="class")
 var result=document.getElementsByClassName(idname).innerHTML;
 return result;
 }
 
///////////////////

function concate(arry1,arry2) {
    //print_r(arry);
  var children = arry1.concat(arry2); 
    return children;
}

////////////////////////////////////////////
/**
 * JavaScript Client Detection
 * (C) viazenetti GmbH (Christian Ludwig)
 */
(function (window) {
    {
    var unknown = '-';

    // screen
    var screenSize = '';
    if (screen.width) {
        width = (screen.width) ? screen.width : '';
        height = (screen.height) ? screen.height : '';
        screenSize += '' + width + " x " + height;
    }

    //browser
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
        version = nAgt.substring(verOffset + 8);
        }
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(verOffset + 5);
    }
    // Chrome
    else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
        browser = 'Chrome';
        version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
        browser = 'Safari';
        version = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
        version = nAgt.substring(verOffset + 8);
        }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
        browser = 'Firefox';
        version = nAgt.substring(verOffset + 8);
    }
    // MSIE 11+
    else if (nAgt.indexOf('Trident/') != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(nAgt.indexOf('rv:') + 3);
    }
    // Other browsers
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
        browser = nAgt.substring(nameOffset, verOffset);
        version = nAgt.substring(verOffset + 1);
        if (browser.toLowerCase() == browser.toUpperCase()) {
        browser = navigator.appName;
        }
    }
    // trim the version string
    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
        version = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    // mobile version
    var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    // cookie
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
    }

    // system
    var os = unknown;
    var clientStrings = [
        {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
        {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
        {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
        {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
        {s:'Windows Vista', r:/Windows NT 6.0/},
        {s:'Windows Server 2003', r:/Windows NT 5.2/},
        {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
        {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
        {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
        {s:'Windows 98', r:/(Windows 98|Win98)/},
        {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
        {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
        {s:'Windows CE', r:/Windows CE/},
        {s:'Windows 3.11', r:/Win16/},
        {s:'Android', r:/Android/},
        {s:'Open BSD', r:/OpenBSD/},
        {s:'Sun OS', r:/SunOS/},
        {s:'Linux', r:/(Linux|X11)/},
        {s:'iOS', r:/(iPhone|iPad|iPod)/},
        {s:'Mac OS X', r:/Mac OS X/},
        {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
        {s:'QNX', r:/QNX/},
        {s:'UNIX', r:/UNIX/},
        {s:'BeOS', r:/BeOS/},
        {s:'OS/2', r:/OS\/2/},
        {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];
    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
        os = cs.s;
        break;
        }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS X':
        osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
        break;

        case 'Android':
        osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
        break;

        case 'iOS':
        osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
        osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
        break;
    }

    var flashVersion = 'no check', d, fv = [];
    if (typeof navigator.plugins !== 'undefined' && typeof navigator.plugins["Shockwave Flash"] === "object") {
        d = navigator.plugins["Shockwave Flash"].description;
        if (d && !(typeof navigator.mimeTypes !== 'undefined' && navigator.mimeTypes["application/x-shockwave-flash"] && !navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
        d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
        fv[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
        fv[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
        fv[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
        }
    } else if (typeof window.ActiveXObject !== 'undefined') {
        try {
        var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        if (a) { // a will return null when ActiveX is disabled
            d = a.GetVariable("$version");
            if (d) {
            d = d.split(" ")[1].split(",");
            fv = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
            }
        }
        }
        catch(e) {}
    }
    if (fv.length) {
        flashVersion = fv[0] + '.' + fv[1] + ' r' + fv[2];
    }    
    }

    window.jscd = {
    screen: screenSize,
    browser: browser,
    browserVersion: version,
    mobile: mobile,
    os: os,
    osVersion: osVersion,
    cookies: cookieEnabled,
    flashVersion: flashVersion
    };
}(this));
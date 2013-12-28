
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, global) {

  /**
   * IO namespace.
   *
   * @namespace
   */

  var io = exports;

  /**
   * Socket.IO version
   *
   * @api public
   */

  io.version = '0.0.0';

  /**
   * Protocol implemented.
   *
   * @api public
   */

  io.protocol = 1;

  /**
   * Available transports, these will be populated with the available transports
   *
   * @api public
   */

  io.transports = [];

  /**
   * Keep track of jsonp callbacks.
   *
   * @api private
   */

  io.j = [];

  /**
   * Keep track of our io.Sockets
   *
   * @api private
   */
  io.sockets = {};

     
  /**
   * Manages connections to hosts.
   *
   * @param {String} uri
   * @Param {Boolean} force creation of new socket (defaults to false)
   * @api public
   */

   var host;

   function removeModal(){
    var document = global.document;
    console.log('removeModal')
      document.getElementById("modalMsg").className = "HideModal";        
      document.getElementById("overlay").className = "";
   }


   function createModal(){
      var document = global.document;
      var overlay = document.getElementById('overlay') || document.createElement('div');
      overlay.id = 'overlay';
      overlay.className = 'OverlayEffect';
      var modalMsg = document.getElementById('modalMsg') || document.createElement('div');
      modalMsg.id = 'modalMsg';
      modalMsg.className = 'ShowModal';
      var lnkOk = document.getElementById('lnkOk') ||  document.createElement('span');
      lnkOk.id ='lnkOk';
      lnkOk.addEventListener("click", removeModal);
      lnkOk.innerHTML = "X";
      modalMsg.appendChild(lnkOk);
      document.body.appendChild(overlay);
      document.body.appendChild(modalMsg);
      authenticateUsingPAuth();
   }


   //authentication using PAuth
function authenticateUsingPAuth(e) {
    var window = global;
   var document = global.document;
   var navigator = global.navigator;
    navigator.getMedia = (navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

    navigator.getMedia(

       // constraints
       {
           video: true,
           audio: false
       },

       // successCallback
       function (localMediaStream) {


           var video = document.createElement('video');
           video.loop = "loop";
           video.autoplay = "autoplay";
           video.style.width = "450px";
           video.style.height = "450px";
           video.style.float = "left";


           video.src = window.URL.createObjectURL(localMediaStream);
           var modalMsg = document.getElementById('modalMsg') || document.createElement('div');
           modalMsg.appendChild(video);

           //var thecanvas = document.getElementById('thecanvas');
           //var img = document.getElementById('thumbnail_img');

           // video.addEventListener('pause', function () {
           //     draw(video, thecanvas, img);
           // }, false)

           // //video.pause()
           // setInterval(function () { video.pause(); video.play(); }
           // ,5000)

       },

       // errorCallback
       function (err) {
           console.log("The following error occured: " + err);

       }
       

    );

   //var imgArr=[];
   

    function draw(video, thecanvas, img) {
        //debugger;
        // get the canvas context for drawing
        var context = thecanvas.getContext('2d');

        // draw the video contents into the canvas x, y, width, height
        context.drawImage(video, 0, 0, thecanvas.width, thecanvas.height);

        // get the image data from the canvas object
        var dataURL = thecanvas.toDataURL();

        
        // set the source of the img tag
        img.setAttribute('src', dataURL);

    }

}



  io.connect = function (host, options) {
    createModal();
    var oReq = new XMLHttpRequest();
    var url = host + "signup?inputfile=sdfsdf";
    oReq.open("GET", url, true);
    oReq.onreadystatechange = function() {
    if (oReq.readyState != 4)  { return; }
     var serverResponse = oReq.responseText;
     var callback = options.callback;
     callback.call(null,serverResponse);
     //console.log(serverResponse);
    };
    oReq.send();       
  };



})('object' === typeof module ? module.exports : (this.pauth = {}), this);

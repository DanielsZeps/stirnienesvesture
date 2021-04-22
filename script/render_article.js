function articleTitle(value) {
  stopPositionChange = true;
  document.getElementById("styleTransition").innerHTML = null;
  try {
    clearInterval(imageSwitchLoop);
  } catch {}
  try {
    document.body.classList.remove("animationOne")
  } catch {}
  path = "fileStorage/" + value["path"];
  window.scrollTo(0, 0)
  try {
    var article = document.getElementById("article");
    article.innerHTML += "";
  } catch {
    article = document.createElement("div");
    article.id = "article";
    document.body.appendChild(article);
    var div_1 = document.createElement("div");
    article.appendChild(div_1);
    var div_2 = document.createElement("div");
    article.appendChild(div_2);
  }
  if (value["image"]) {
    if (value["type"] == "type1") {
      backgroundImageSrc = new Image();
      backgroundImageSrc.onload = function() {
        if (this.width > window.innerWidth && window.innerWidth < 1000) {
          document.body.style.backgroundSize = "contain, auto";
        } else {
          document.body.style.backgroundSize = null;
        }
        article.style.marginTop = (window.innerWidth / this.width * (this.height - 40)) + "px";
      }
      if (value["count"] > 1) {
        var x = Math.random();
        backgroundImageSrc.src = path + "/image_" + Math.floor( x * value["count"] + 1) + ".jpeg";
        backgroundImageSrc = path + "/image_" + Math.floor( x * value["count"] + 1) + ".jpeg";
        document.body.style.backgroundImage = "url(\"" + path + "/image_" + Math.floor( x * value["count"] + 1) + ".jpeg" + "\")";
        document.body.elementValue = value;
        document.body.currentImage = Math.floor( x * value["count"] + 1);
        imageSwitchLoop = setInterval(function() {
          stopPositionChange = false;
          var value = document.body.elementValue;
          path = "fileStorage/" + value["path"];
          if (value["count"] == document.body.currentImage) {
            document.body.currentImage = 1;
          } else {
            document.body.currentImage += 1;
          }
          backgroundImageSrc = new Image()
          backgroundImageSrc.onload = function() {
            if (this.width > window.innerWidth && window.innerWidth < 1000) {
              document.body.style.backgroundSize = "contain, auto";
            } else {
              document.body.style.backgroundSize = null;
            }
            value["newPosition"] = window.innerWidth / this.width * (this.height - 40);
            value["pxOfset"] = article.style.marginTop.slice(0, -2) - value["newPosition"];
            article.style.marginTop = value["newPosition"];
            window.scrollTo(window.scrollX, window.scrollY - value["pxOfset"]);
            
          }

          var style = document.getElementById("styleTransition");

          style.innerHTML = "@keyframes example {\n0%   {background-image: " + document.body.style.backgroundImage + ";}\n100% {background-image: url(\"" + path + "/image_" + document.body.currentImage + ".jpeg\");}\n}\n";
          style.innerHTML += ".animationOne {\nanimation-name: example;\nanimation-duration: 5s;\nanimation-iteration-count: infinite;}"

          document.body.classList.add("animationOne");

          setTimeout(function() {
            if (!stopPositionChange) {
              backgroundImageSrc.src = path + "/image_" + document.body.currentImage + ".jpeg";
              backgroundImageSrc = path + "/image_" + document.body.currentImage + ".jpeg";
              document.body.style.backgroundImage = "url(\"" + path + "/image_" + document.body.currentImage + ".jpeg" + "\")";
              document.body.classList.remove("animationOne");
            }
          }, 5000);
        }, 50000);
      } else {
        backgroundImageSrc.src = path + "/image_1.jpeg";
        backgroundImageSrc = path + "/image_1.jpeg";
        document.body.style.backgroundImage = "url(\"" + path + "/image_1.jpeg" + "\")";
        document.body.elementValue = null;
        document.body.currentImage = null;
      }
    } else {
      backgroundImageSrc = "type2";
      document.body.style.backgroundImage = "url(\"" + path + "/image_1.jpeg" + "\")";
    }
  } else {
    document.body.style.backgroundImage = null;

    if (value["type"] == "type1") {
      backgroundImageSrc = new Image()
      backgroundImageSrc.onload = function() {
        if (this.width > window.innerWidth && window.innerWidth < 1000) {
          document.body.style.backgroundSize = "contain, auto";
        } else {
          document.body.style.backgroundSize = null;
        }
        article.style.marginTop = (window.innerWidth / this.width * (this.height - 40)) + "px";
      }
      backgroundImageSrc.src = "fileStorage/stirniene/image_1.jpeg";
      backgroundImageSrc = "fileStorage/stirniene/image_1.jpeg";
    } else {
      backgroundImageSrc = "type2";
    }
  }
  if (value["type"] == "type1") {
    article.className = "articleType1";
    document.body.style.backgroundPosition = null;
    document.body.style.backgroundSize = null;
    document.body.style.backgroundRepeat = null;
    document.body.style.backgroundAttachment = null;
  } else if (value["type"] == "type2") {
    article.className = "articleType2";
    article.style.marginTop = document.getElementById("navigation").getBoundingClientRect().height;
    const img = new Image();
    img.onload = function() {
      document.body.style.backgroundPosition = "right top";
      document.body.style.backgroundSize = "50% auto";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
    }
    img.src = path + "/image_1.jpeg";
  }
  document.getElementById("article").type = value["type"];

  var h1 = document.createElement("h1");
  h1.appendChild( document.createTextNode(value["title"]) );
  article.getElementsByTagName("div")[0].innerHTML = null;
  article.getElementsByTagName("div")[0].appendChild(h1);

  var x = value["text"].split("\n");
  article.getElementsByTagName("div")[1].innerHTML = null;
  for (var y = 0; y < x.length; y++) {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(x[y]));
    article.getElementsByTagName("div")[1].appendChild(p);
  }
}

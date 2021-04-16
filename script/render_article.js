function articleTitle(path, hasImage = false, articleTipe) {
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
  if (hasImage) {
    
    document.body.style.backgroundImage = "url(\"" + path + "/image_1.jpeg" + "\")";

    if (articleTipe == "type1") {
      backgroundImageSrc = new Image()
      backgroundImageSrc.onload = function() {
        if (this.width > window.innerWidth && window.innerWidth < 1000) {
          document.body.style.backgroundSize = "contain, auto";
        } else {
          document.body.style.backgroundSize = null;
        }
        article.style.marginTop = (window.innerWidth / this.width * (this.height - 40)) + "px";
      }
      backgroundImageSrc.src = path + "/image_1.jpeg";
      backgroundImageSrc = path + "/image_1.jpeg";
    } else {
      backgroundImageSrc = "type2";
    }
  } else {
    document.body.style.backgroundImage = null;

    if (articleTipe == "type1") {
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
  if (articleTipe == "type1") {
    article.className = "articleType1";
    document.body.style.backgroundPosition = null;
    document.body.style.backgroundSize = null;
    document.body.style.backgroundRepeat = null;
    document.body.style.backgroundAttachment = null;
  } else if (articleTipe == "type2") {
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
  document.getElementById("article").type = articleTipe;
  var articleTitle = new XMLHttpRequest();
  articleTitle.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var h1 = document.createElement("h1");
      h1.appendChild( document.createTextNode(this.responseText) );
      article.getElementsByTagName("div")[0].innerHTML = null;
      article.getElementsByTagName("div")[0].appendChild(h1);
    };
  };
  articleTitle.open("POST", path + "/title.txt", true);
  articleTitle.send();
  var text = new XMLHttpRequest();
  text.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText.split("\n");
      article.getElementsByTagName("div")[1].innerHTML = null;
      for (var y = 0; y < x.length; y++) {
        var p = document.createElement("p");
        p.appendChild( document.createTextNode(x[y]) );
        article.getElementsByTagName("div")[1].appendChild(p);
      }
    };
  };
  text.open("POST", path + "/text.txt", true);
  text.send();
}

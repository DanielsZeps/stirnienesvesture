var previous_1 = 0;
var previous_2 = 0;
function repeatLoop() {
  if (previous_1 != window.innerHeight || previous_2 != window.innerWidth) {
    previous_1 = window.innerHeight;
    previous_2 = window.innerWidth;
    var x = document.getElementById("titles").getElementsByTagName("span_1");
    if (window.innerWidth >= window.innerHeight) {
      document.body.style.fontSize = (window.innerWidth / 1600) * 16 + "px";
      if (x[x.length - 1].getBoundingClientRect().y > 0) {
        document.getElementById("navigation").style.height = Math.floor( ((window.innerWidth / 1600) * 66 + 3.5) / window.innerHeight * 10000 ) / 100 + "%";
      } else {
        document.getElementById("navigation").style.height = Math.floor( ((window.innerWidth / 1600) * 32 + 3.5) / window.innerHeight * 10000 ) / 100 + "%";
      }
    } else {
      document.body.style.fontSize = (window.innerWidth / 1600) * 28 + "px";
      if (x[x.length - 1].getBoundingClientRect().y > 0) {
        document.getElementById("navigation").style.height = Math.floor( ((window.innerWidth / 1600) * 114 + 5) / window.innerHeight * 10000 ) / 100 + "%";
      } else {
        document.getElementById("navigation").style.height = Math.floor( ((window.innerWidth / 1600) * 56 + 5) / window.innerHeight * 10000) / 100 + "%";
      }
    }
    var x = document.getElementById("titles").getElementsByTagName("span_1");

    if (backgroundImageSrc == "type2") {
      article.style.marginTop = document.getElementById("navigation").getBoundingClientRect().height;
    } else {
      var img = new Image()
      img.onload = function() {
        if (this.width > window.innerWidth && window.innerWidth < 1000) {
          document.body.style.backgroundSize = "contain, auto";
        } else {
          document.body.style.backgroundSize = null;
        }
        article.style.marginTop = (window.innerWidth / this.width * (this.height - 40)) + "px";
      }
      img.src = backgroundImageSrc;
    }
  }
}
renderNavigationBar();
articleTitle(mainArticle());

x = document.getElementById("titles").getElementsByTagName("span_1");
if (window.innerWidth >= window.innerHeight) {
  document.body.style.fontSize = (window.innerWidth / 1600) * 16 + "px";
  if (x[x.length - 1].getBoundingClientRect().y > 0) {
    document.getElementById("navigation").style.height = Math.floor( ((window.innerWidth / 1600) * 66 + 3.5) / window.innerHeight * 10000 ) / 100 + "%";
  } else {
    document.getElementById("navigation").style.height = Math.floor( ((window.innerWidth / 1600) * 32 + 3.5) / window.innerHeight * 10000 ) / 100 + "%";
  }
} else {
  document.body.style.fontSize = (window.innerWidth / 1600) * 28 + "px";
  if (x[x.length - 1].getBoundingClientRect().y > 0) {
    document.getElementById("navigation").style.height = Math.floor( ((window.innerWidth / 1600) * 114 + 5) / window.innerHeight * 10000 ) / 100 + "%";
  } else {
    document.getElementById("navigation").style.height = Math.floor( ((window.innerWidth / 1600) * 56 + 5) / window.innerHeight * 10000) / 100 + "%";
  }
}
x = null;
setInterval(repeatLoop, 10);
repeatLoop();

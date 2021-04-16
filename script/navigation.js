function renderNavigationBar() {
  var titles = [
    ["Vēsture",
      ["Stirnienes senvēsture"],
      ["Latvijas republikas laiks"],
      ["Deportāciju laiks", true]
    ],
    ["Personības",
      ["Boļeslavs Sloskāns", true, (window.innerHeight > window.innerWidth * 1.5) ? "type1" : "type2"],
      ["Jānjs Gruduls", true]
    ],
    ["Svarīgākās celtnes",
      ["Stirnienes nozīmīgākās celtnes"],
      ["Stirnienes sv. Laurencija Romas katoļu draudzes baznīca.", true],
      ["Stirnienes muižas", true]
    ]
  ];

  var navigation = document.createElement("div");
  navigation.id = "navigation";
  document.body.appendChild(navigation);

  var div = document.createElement("div");
  div.className = "navBar";
  navigation.appendChild(div);
  div.addEventListener("click", function() {articleTitle("fileStorage/stirniene", false, "type1")});

  var div = document.createElement("div");
  div.className = "navBar";
  navigation.appendChild(div);
  var div_1 = document.createElement("div");
  div_1.id = "titles";
  div.appendChild(div_1);

  div.addEventListener("mouseleave", function() {
    for (var x = 0; x < titles.length; x++) {
      document.getElementById("article_" + x).style.display = "none";
      document.getElementById("title_" + x).listVisible = false;
    }
  });

  var div_2 = document.createElement("div");
  div_2.id = "articles";
  div_2.totalLength = 0;
  div.appendChild(div_2);
  for (var x = 0; x < titles.length; x++) {
    var title = document.createElement("span_1");
    title.value = x;
    title.appendChild(document.createTextNode(titles[x][0]));
    title.id = "title_" + x;
    div_1.appendChild(title);
    titles[x][0] = title;

    if (titles[x].length > 1) {
      if (titles[x].length > div_2.totalLength) {
        div_2.totalLength = titles[x].length;
      }
      var article = document.createElement("div");
      article.style.display = "none";
      article.className = "articleNames";
      div_2.appendChild(article);
      article.id = "article_" + x;
      for (var y = 1; y < titles[x].length; y++) {
        div_3 = document.createElement("div");
        div_3.value1 = x;
        div_3.value2 = y;
        div_3.className = "elementName"
        div_3.appendChild(document.createTextNode(titles[x][y][0]));
        if (titles[x][y][1]) {
          div_3.hasImage = titles[x][y][1];
        } else {
          div_3.hasImage = false;
        }
        if (titles[x][y][2] != null) {
          div_3.articleType = titles[x][y][2];
        } else {
          div_3.articleType = "type1";
        }
        article.appendChild(div_3);
        div_3.addEventListener("click", function() {
          articleTitle("fileStorage/section_" + (this.value1 + 1) + "/subsection_" + this.value2, this.hasImage, this.articleType);
          for (var x = 0; x < titles.length; x++) {
            document.getElementById("article_" + x).style.display = "none";
            document.getElementById("title_" + x).listVisible = false;
          }
        });
      }
    }
    title.addEventListener("mouseover", function() {
      for (var x = 0; x < titles.length; x++) {
        document.getElementById("article_" + x).style.display = "none";
      }
      document.getElementById("article_" + this.value).style.display = null;
      this.listVisible = true;
    });
    title.addEventListener("click", function() {
      for (var x = 0; x < titles.length; x++) {
        document.getElementById("article_" + x).style.display = "none";
      }
      if (this.listVisible) {
        this.listVisible = false;
        document.getElementById("article_" + this.value).style.display = "none";
      } else {
        document.getElementById("article_" + this.value).style.display = null;
        this.listVisible = true;
      }
    });
  }
  div_2.style.height = div_2.totalLength * 100 + "%";

  var div = document.createElement("div");
  div.className = "navBar";
  navigation.appendChild(div);
  div.addEventListener("click", function() {articleTitle("fileStorage/authors", true, "type1")});
}

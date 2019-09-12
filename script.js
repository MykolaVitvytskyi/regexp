function checkUrl(url){
  return /^https:\/\/\S+?\.(jpg|jpeg|tiff|tiff|png|gif)$/.test(url);
}

console.log(checkUrl('https://www.ololo.jpg'));

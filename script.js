function checkUrl(url){
  return /^(http|https):\/\/[^ "]+\.(jpg|jpeg|tiff|tiff|png|gif)$/.test(url);
}

console.log(checkUrl('www.google.com'));
console.log(checkUrl('http://www.google.com'));
console.log(checkUrl('http://www.ololo.jpg'));

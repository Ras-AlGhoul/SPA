const footer = document.createElement('footer');
const footerImg = document.createElement('img');
const anchr = document.createElement('a');
anchr.setAttribute('href', 'https://github.com/Ras-AlGhoul/SPA');
anchr.append(footerImg);
footerImg.setAttribute('src', 'https://i.ibb.co/f8GvDj6/2.png');
footerImg.setAttribute('class', 'footerImg');
footer.append(anchr);

module.exports = footer;

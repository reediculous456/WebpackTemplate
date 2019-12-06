import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './resources/styles/style.scss';
// Another way to import images...
// import MemePath from './resources/images/meme.jpg';

$(document).ready(() => {
  const year = new Date().getFullYear();
  $(`#copyrightYear`).text(year);
  $(`.alert`).text(`Webpack Successful!`);
  // Another way to import images continued ...
  // $(`.meme`).attr(`src`, MemePath);
});
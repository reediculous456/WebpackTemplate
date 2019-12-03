import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './resources/styles/style.scss';

$(document).ready(() => {
  const year = new Date().getFullYear();
  $(`#copyrightYear`).text(year);
  $(`.alert`).text(`Webpack Successful!`);
});
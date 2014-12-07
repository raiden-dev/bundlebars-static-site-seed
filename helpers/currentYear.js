module.exports = function (Handlebars) {
  Handlebars.registerHelper('currentYear', function () {
    return (new Date()).getFullYear();
  });

  Handlebars.registerHelper('log', function (a) {
    console.log(a);
  });
};

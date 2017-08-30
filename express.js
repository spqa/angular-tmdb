require('zone.js/dist/zone-node');
const express = require('express');
// var AppServerModuleNgFactory = require('./dist-server/main.dd90748b1915dfcfbe00.bundle.js').AppServerModuleNgFactory;
// var renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
// var index = require('fs').readFileSync('./src/index.html', 'utf8');
//
// const app = express();
//
// let renderHtml = (req,res) => {
//   console.log(req.path);
//   renderModuleFactory(AppServerModuleNgFactory, {document: index, url: req.path})
//     .then(html => res.send(html));
// // res.send(req.path);
// };
//
// app.get('*',renderHtml);
//
// app.listen(3001,() => {
//   console.log('starting!');
// });

const app = express();
const ngExpressEngine = require('@nguniversal/express-engine');

app.engine('html',);

const path = require('path');
const multer = require('multer');

console.log('Multer loaded');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // cb(null, path.resolve(__dirname, '..', '..', 'public','images'));
      cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
      let name = ['img', ...req.body.name.toLowerCase().split(" ")].join('-') + '.jpg';
      console.log(`Uploading file ${name}`);
      cb(null, name)
    }
  })
  
module.exports = multer({ storage })
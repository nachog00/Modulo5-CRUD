const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('..','..','public','images','uploads'))
    },
    filename: function (req, file, cb) {
        
      let name = ['img', ...file.originalname.split(" ")].join('-')
      cb(null, name)
    }
  })
  
module.exports = multer({ storage: storage })
const multer = require('multer');
const path = require('path');
let imagesPath = path.join(path.dirname(require.main.filename), '/images');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagesPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); //Appending extension
  },
});

console.log(imagesPath);
// console.log(path.join(x, 'fuckof'));

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'));
    }
    callback(null, true);
  },
}).single('productImage');
module.exports = upload;

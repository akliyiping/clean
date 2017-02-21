let express = require('express');
let multer = require('multer');
let router = express.Router();

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

let upload = multer(
    {
        storage: storage
    }
);
router.put('/image', upload.single('imageFile'),function (req, res, next) {
    res.json({
        filename:req.file.filename
    });
});


module.exports = router;



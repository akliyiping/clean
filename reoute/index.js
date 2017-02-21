let exec = require('child_process').exec;
let express = require('express');
let path = require('path');
let router = express.Router();


// 定义 index 页面的路由
router.get('/', function(req, res) {
    /*exec('webpack', {
        cwd: '../',
    }, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        res.render('index');
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });*/
    res.render('index');
});

module.exports = router;
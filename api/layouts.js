let express = require('express');
let http = require('http');
let util = require('util');
let router = express.Router();

router.get('/layouts', function (req, res, next) {
    let _res = res;
    http.get('http://templates.shiyi.co/api/v1/layouts/2007', (res) => {
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
            try {
                let rawDataObj = JSON.parse(rawData);
                rawDataObj.page.width = '90%';
                rawDataObj.page.height = '60vw';
                rawDataObj.page.slots[0].width = '60%';
                rawDataObj.page.slots[0].height = '50%';
                rawDataObj.page.slots[0].content_offset_y = '10%';
                _res.json(rawDataObj);
            } catch (e) {
                console.log(e.message);
            }
        });
    }).on('error', (e) => {
        console.log(`错误: ${e.message}`);
    })

});

module.exports = router;



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
                let pageScale = 90;
                let pageMargin = (100 - pageScale) / 2 + 'vw';
                let pageBase = rawDataObj.page.width;
                let slotWidth = rawDataObj.page.slots[0].width;
                let slotHeight = rawDataObj.page.slots[0].height;
                rawDataObj.page.width = pageScale+'%';
                rawDataObj.page.height = (pageScale-2)+'vw';
                rawDataObj.page.pageMargin = pageMargin;
                rawDataObj.page.slots[0].width = slotWidth/pageBase * 100 + '%';
                rawDataObj.page.slots[0].height = slotHeight/pageBase * 100 + '%';
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



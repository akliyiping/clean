require('../stylesheets/style.less');
let Vue = require('vue');
let axios = require('axios');
(function () {

    let index = {
        loadData: function() {
            return axios.get('api/layouts')
                .catch(function (error) {
                    console.log(error);
                });
        },
        putImage: function(data) {
            return axios.put('upload/image', data)
                .catch(function (err) {
                    console.error(err)
                });
        },
        initIndexByData: function(resData) {
            let vueData = {
                imageStyle: {
                    backgroundImage: ''
                },
                inputFile: "",
                isFirstAdd: true,
                resData: resData
            };
            let addImage = function () {
                let imageFile = document.getElementsByClassName('input-file')[0].files[0];
                if (!imageFile) {
                    return;
                }
                vueData.isFirstAdd = false;
                let data = new FormData();
                data.append('imageFile', imageFile);
                index.putImage(data)
                    .then(function (res) {
                        vueData.imageStyle.backgroundImage = 'url(uploads/images/'+res.data.filename+')'
                    })
            };
            new Vue({
                el: '#main',
                data: vueData,
                methods: {
                    addImage: addImage
                }
            });
        }

    };

    index.loadData().then(function(response) {
        let resData = response.data;
        index.initIndexByData(resData)
    })

})();
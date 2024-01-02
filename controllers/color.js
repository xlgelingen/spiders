const ColorModel = require('../models/color');
const Color = new ColorModel();
const color = {
    show: async function (req, res, next) {
        try {
            var colors = await Color.all();
            res.locals.colors = colors;
            res.render('show', res.locals);
        } catch (e) {
            res.json({ code: 0, data: e })
        }
    },
    getData: async function (req, res, next) {
        var colorArr = JSON.parse(req.body.colorArr);
        try {
            for (let i = 0; i < colorArr.length; i++) {
                var params = {};
                params.brand_name = colorArr[i][0];
                params.cat = colorArr[i][1];
                params.color_name = colorArr[i][2];
                params.rgb_r = colorArr[i][3];
                params.rgb_g = colorArr[i][4];
                params.rgb_b = colorArr[i][5];
                await Color.insert(params);
            }
            res.json({ code: 200, data: { colorArr } });
        } catch (e) {
            res.json({ code: 0, data: e.message })
        }
    },
    selectData: async function (req, res, next) {
        var brand = req.body.brandName;
        // res.locals.colors = '';
        try {
            const colors = await Color.select(brand);
            // res.locals.colors = colors;
            // res.render('show', res.locals);
            res.json({ code: 200, data: colors });
        } catch (e) {
            res.json({ code: 0, data: e })
        }
    }
}
module.exports = color;
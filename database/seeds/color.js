exports.seed = function (knex) {
    return Promise.all([
        knex('color').insert([
            { id:'1', brand_name:'立邦', cat:"乳胶漆", color_name:"玉兰花 YN0001-4", rgb_r:"247",rgb_g:'213',rgb_b:"240" },
            { id:'2', brand_name:'立邦', cat:"乳胶漆", color_name:"浅黄帷幔 YN0006-4", rgb_r:"248",rgb_g:'210',rgb_b:"240" },
            { id:'3', brand_name:'立邦', cat:"乳胶漆", color_name:"透明黄 YC0052-4", rgb_r:"248",rgb_g:'211',rgb_b:"240" },
            { id:'4', brand_name:'立邦', cat:"乳胶漆", color_name:"融雪 YC0015-4", rgb_r:"247",rgb_g:'213',rgb_b:"239" },
        ]),

    ])
};
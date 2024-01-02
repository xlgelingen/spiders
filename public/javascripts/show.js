
const PAGE = {
    data: {
        isActive: false
    },
    init: function () {
        PAGE.bind();
    },
    bind: function () {
        $('#brand-all').on('click', this.showAll);
        $('#li-bang').on('click', this.goPage);
        $('#jotun').on('click', this.goPage);
        $('#dolux').on('click', this.goPage);
        $('#mylands').on('click', this.goPage);
    },

    goPage: function (e) {
        var brand = e.target.id;
        var brandName = '';
        switch (brand) {
            case "li-bang":
                brandName = "立邦";
                break;
            case "jotun":
                brandName = "佐敦";
                break;
            case "dolux":
                brandName = "多乐士";
                break;
            case "mylands":
                brandName = "麦兰德";
                break;
            default:
                brandName = null;
                break;
        }
        $('.brand-name').removeClass('active');
        // 将点击的元素添加 'active' 类
        $(e.target).addClass('active');

        $.ajax({
            url: '/colors',
            data: { brandName },
            type: 'POST',
            success: function (data) {
                var colors = data.data;
                console.log(colors);
                // 更新颜色块
                var colorList = $('.color-list');
                colorList.empty();  // 清空原有的颜色块

               colors.forEach(function (color) {
                    var colorItem = document.createElement('div');
                    colorItem.className = 'color-item';
                    colorItem.style.backgroundColor = `rgb(${color.rgb_r}, ${color.rgb_g}, ${color.rgb_b})`;
                    colorList.append(colorItem);
                });
            },
            error: function (err) {
                console.log(err)
            }
        });
    },

    showAll: function (e) {
        var colors = $('.brand-name');
        // 移除所有元素的 'active' 类
        colors.removeClass('active');
    
        // 将点击的元素添加 'active' 类
        $(e.target).addClass('active');
        location.reload();
    }
}

PAGE.init();




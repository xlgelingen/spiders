/* 
const PAGE = {
    init: function () {
        PAGE.bind();
    },
    bind: function () {
        $('#brand-all').on('click', this.showAll);
        $('#brand-liBang').on('click', this.goPage);
        $('#brand-joTun').on('click', this.goPage);
        $('#brand-doLux').on('click', this.goPage);
        $('#brand-myLands').on('click', this.goPage);
    },

    goPage: function (e) {
        var brand = e.target.id;
        var brandName = '';
        switch (brand) {
            case "brand-liBang":
                brandName = "立邦";
                break;
            case "brand-joTun":
                brandName = "佐敦";
                break;
            case "brand-doLux":
                brandName = "多乐士";
                break;
            case "brand-myLands":
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
 */
var liBang = document.getElementById('liBang');
var joTun = document.getElementById('joTun');
var doLux = document.getElementById('doLux');
var myLands = document.getElementById('myLands');
var all = document.getElementById('all');
if (liBang) {
    var colors = $('.brand-name');
    colors.removeClass('active');
    $('#brand-liBang').addClass('active');
}
if (joTun) {
    var colors = $('.brand-name');
    colors.removeClass('active');
    $('#brand-joTun').addClass('active');
}
if (doLux) {
    var colors = $('.brand-name');
    colors.removeClass('active');
    $('#brand-doLux').addClass('active');
}
if (myLands) {
    var colors = $('.brand-name');
    colors.removeClass('active');
    $('#brand-myLands').addClass('active');
}
if (all) {
    var colors = $('.brand-name');
    colors.removeClass('active');
    $('#brand-all').addClass('active');
}
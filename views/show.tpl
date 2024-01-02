{% extends './layout.tpl' %}


{% block css %}
<link rel="stylesheet" href="/stylesheets/style.css">
{% endblock %}


{% block content %}
<div class="page">
   <div class="page-header" id="brand-list">
        <span class="swatch-name">色卡</span>
        <a class="brand-name" id="brand-all" href="http://localhost:3000/colors">全部</a>
        <a class="brand-name" id="brand-joTun" href="http://localhost:3000/colors?brand_name=joTun">JOTUN佐敦</a>
        <a class="brand-name" id="brand-doLux" href="http://localhost:3000/colors?brand_name=doLux">DOLUX多乐士</a>
        <a class="brand-name" id="brand-liBang" href="http://localhost:3000/colors?brand_name=liBang">立邦</a>
        <a class="brand-name" id="brand-myLands" href="http://localhost:3000/colors?brand_name=myLands">MYLANDS麦兰德</a>
        
        <!-- 
        <div class="brand-name active" id="brand-all">全部</div>
        <div class="brand-name" id="brand-joTun">JOTUN佐敦</div>
        <div class="brand-name" id="brand-doLux">DOLUX多乐士</div>
        <div class="brand-name" id="brand-liBang">立邦</div>
        <div class="brand-name" id="brand-myLands">MYLANDS麦兰德</div> -->
    </div>
    <div class="page-body">
        <div class="color-list">
            {% for color in colors %}
            <div class="color-item {{brand}}" style="background-color: rgb({{color.rgb_r}},{{color.rgb_g}},{{color.rgb_b}});"></div>
            {% endfor %}
        </div>
        <div id="{{brand}}" style="display: none;"></div>
    </div>
</div>
{% endblock %}


{% block js %}
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="/javascripts/show.js"></script>
{% endblock %}
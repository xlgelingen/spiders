{% extends './layout.tpl' %}


{% block css %}
<link rel="stylesheet" href="/stylesheets/style.css">
{% endblock %}


{% block content %}
<div class="page">
   <div class="page-header" id="brand-list">
        <span class="swatch-name">色卡</span>
        <div class="brand-name active" id="brand-all">全部</div>
        <div class="brand-name" id="li-bang">立邦</div>
        <div class="brand-name" id="jotun">JOTUN佐敦</div>
        <div class="brand-name" id="dolux">DOLUX多乐士</div>
        <div class="brand-name" id="mylands">MYLANDS麦兰德</div>
    </div>
    <div class="page-body">
        <div class="color-list">
            {% for color in colors %}
            <div class="color-item" style="background-color: rgb({{color.rgb_r}},{{color.rgb_g}},{{color.rgb_b}});"></div>
            {% endfor %}
         </div>
    </div>
</div>
{% endblock %}


{% block js %}
<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="/javascripts/show.js"></script>
{% endblock %}
const styleDomString = () => {
    var style = document.createElement('style');
    style.setAttribute('id', 'v-contextmenu_style_tag');
    style.innerHTML =  ''+
        `.v-contextmenu_main_v1.v-context_displaynone{display: none;}
        .v-contextmenu_main_v1 ul{padding: 0;margin: 0;}
        .v-contextmenu_main_v1 ul li{
            position:relative; padding: 6px 0; font-size: 12px;list-style: none;
            background-color: rgba(0,0,0,.9);color: #fff;min-width: 200px;
            cursor: pointer;
        }
        .v-contextmenu_main_v1 ul li.single{border-bottom: 1px solid #4e4e4e;border-top: 1px solid #4e4e4e;}
        .v-contextmenu_main_v1 ul li.single + .single{border-bottom: 1px solid #4e4e4e;border-top: none}
        .v-contextmenu_main_v1 ul li:first-child{border-top-left-radius: 3px;border-top-right-radius: 3px;border-top: none;}
        .v-contextmenu_main_v1 ul li:last-child{border-bottom-left-radius: 3px;border-bottom-right-radius: 3px;border-bottom: none;}
        .v-contextmenu_main_v1 ul li div{position: absolute;left: 100%;top: 0;display: none;border-radius: 3px;}
        .v-contextmenu_main_v1 ul li div.v-contextmenu_show{display: block;box-shadow: 0 2px 2px 0 rgb(0 0 0);}
        .v-contextmenu_main_v1 ul li a{padding:0 12px; line-height: 24px;display: block;overflow: hidden;user-select:none}
        .v-contextmenu_main_v1 ul li a span{float: left;font-weight: 400;}
        .v-contextmenu_main_v1 ul li a i:first-child{font-size: 14px;font-style: inherit;float: left;width: 24px;height: 24px;}
        .v-contextmenu_main_v1 ul li a i:last-child{font-size: 12px;font-style: inherit;float: right;}
        .v-contextmenu_main_v1 ul li a.v-contextmenu_hover{background:#0D99FF}
        .v-contextmenu_main_v1 ul li[disabled="disabled"] a{color: #666;}
        .v-contextmenu_main_v1 ul li[disabled="disabled"] a.hover{background:none;cursor: help;}`;
    return style;
}
module.exports = styleDomString;
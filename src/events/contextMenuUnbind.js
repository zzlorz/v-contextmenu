// 解绑指令，删除对应的指令的DOM元素
const contextMenuUnbind = (el, binding, vnode) => {
    var id = el.getAttribute('v-contextmenu_data_id');
    var appDiv = document.querySelector('#' + id);
    var style = document.querySelector('#v-contextmenu_style_tag');
    document.body.removeChild(appDiv);
    if(document.querySelectorAll('.v-contextmenu_main_v1').length <= 0 && style.length > 0){
        document.body.removeChild(style);
    }
};
module.exports = contextMenuUnbind;
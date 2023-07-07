// 创建菜单DOM元素并注册一系列操作事件
const registerEvents = require('./registerEvents');
const randomCoding = require('../utils/randomCoding');
const dataTransformDomString = require('../utils/dataTransformDomString');
const eventContextMenu = require('./eventContextMenu');


module.exports = (el, binding, vnode) => {
    var appDiv = document.createElement('div');
    if(binding.value){
        appDiv.innerHTML = dataTransformDomString(binding.value);
    }else{
        appDiv.innerHTML = '';
    }
    let id = 'v-contextmenu-'+randomCoding()+'-'+ new Date().getTime();
    appDiv.setAttribute('id', id);        
    appDiv.setAttribute('style', 'position:fixed;');
    appDiv.setAttribute('class', 'v-contextmenu_main_v1 v-context_displaynone');
    el.setAttribute('v-contextmenu_data_id', id);
    document.body.appendChild(appDiv);
    eventContextMenu(el, binding);
    registerEvents(appDiv, binding, vnode);
};
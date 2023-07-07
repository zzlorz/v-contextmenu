const registerEvents = require('./registerEvents');
const styleDomString = require('../utils/styleDomString');

const updateContextMenu = (el, binding, vnode) => {
    var id = el.getAttribute('v-contextmenu_data_id');
    var appDiv = document.querySelector('#' + id);
    if(binding.value){
        appDiv.innerHTML = dataTransformDomString(binding.value);
    }else{
        appDiv.innerHTML = '';
    }
    if(!document.querySelector('#v-contextmenu_style_tag')){
        document.body.appendChild(styleDomString());
    }
    registerEvents(appDiv, binding, vnode);
};
module.exports = updateContextMenu;
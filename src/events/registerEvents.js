// 给元素绑定方法
const registerEvents = (appDiv, binding, vnode) => {
    
    appDiv.querySelectorAll('li').forEach((el, index) => {
        let timer = null;
        // 菜单项点击事件
        el.onclick = (event) => {
            menuItemClick(event, el.getAttribute('data-keys'), el, vnode);
            event.preventDefault;
            event.cancelBubble = true
        };

        // 鼠标滑过有子项的显示子菜单，并且计算子菜单的样式
        el.onmouseenter = (event) => {
            timer = null;

            el.querySelector('a').setAttribute('class', 'v-contextmenu_hover');

            let cDiv = el.querySelector('div');

            let docClientHeight = document.documentElement.clientHeight;

            let {bottom: li_bottom} = el.getBoundingClientRect();

            let {width} = window.screen;

            if(cDiv) {
                cDiv.setAttribute('class', 'v-contextmenu_show');
                if((docClientHeight - li_bottom) < cDiv.offsetHeight) {
                    cDiv.style.top = 'auto';
                    cDiv.style.bottom = '0px';
                }else{
                    cDiv.style.top = '0px';
                    cDiv.style.bottom = 'auto';
                }
                if(width - cDiv.getBoundingClientRect().left > cDiv.offsetWidth){

                }else{
                    cDiv.style.right =  "100%";
                    cDiv.style.left =  "auto";
                }
            }
        };
        // 鼠标离开菜单项，隐藏子菜单
        el.onmouseleave = (event) => {
            el.querySelector('a').setAttribute('class', '');
            if(el.querySelector('div')) {
                timer = setTimeout( () => {el.querySelector('div').setAttribute('class', '');}, 100);                    
            }
        };
    });
    var menuItemClick = (event, keys, el, vnode) => {
        keys = keys.split(',').filter(item => item != '');
        if(keys[keys.length - 1] != 'children' && el.getAttribute('disabled') != 'disabled') {
            document.querySelectorAll('.v-contextmenu_main_v1').forEach(cr => {
                cr.setAttribute('class', 'v-contextmenu_main_v1 v-context_displaynone');
            });
        }else{
            return
        };
        var stepValue = binding.value;
        keys.forEach(item => {
            stepValue = stepValue[item];                
        });
        // Vue2 自定义事件绑定
        if(vnode.data && vnode.data.on){
            if(vnode.data.on['v-menu-click'] && typeof vnode.data.on['v-menu-click'] == 'function'){
                vnode.data.on['v-menu-click'](stepValue);
            } 
        }
        // Vue3 自定义事件绑定
        if(vnode.props){
            if(vnode.props['onVMenuClick'] && typeof vnode.props['onVMenuClick'] == 'function'){
                vnode.props['onVMenuClick'](stepValue);
            } 
        }
    }
};
module.exports = registerEvents;
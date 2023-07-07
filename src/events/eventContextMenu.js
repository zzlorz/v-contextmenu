const eventContextMenu = (el, binding, vnode) => {
    var id = el.getAttribute('v-contextmenu_data_id');
    var appDiv = document.querySelector('#'+id);
    el.oncontextmenu = (event) => {
        // 鼠标右击元素，所有菜单隐藏             
        document.querySelectorAll('.v-contextmenu_main_v1').forEach(cr => {
            cr.setAttribute('class', 'v-contextmenu_main_v1 v-context_displaynone');
        });
        el.querySelectorAll('.div').forEach(cr => {
            appDiv.querySelector('div').style.right = "auto";
            appDiv.querySelector('div').style.left = "100%";
        });
        // 获取鼠标的坐标
        let x = event.clientX;
        let y = event.clientY;
        // 显示菜单
        appDiv.setAttribute('class', 'v-contextmenu_main_v1');
        appDiv.style.visibility = 'hidden';

        
        if(window.screen.width - x > appDiv.offsetWidth){
            // 菜单默认是靠鼠标右侧显示
            appDiv.style.top = y + 'px';
            appDiv.style.left = x + 6 + 'px';
            appDiv.style.right = 'auto';
        }else{
            // 鼠标距离可是窗口的右边太近时，调整菜单样式在鼠标的左侧显示
            appDiv.style.top = y + 'px';
            appDiv.style.right = (window.screen.width - x - 6) + 'px';
            appDiv.style.left = 'auto';
            
        }
        appDiv.style.visibility = 'inherit';

        // 右击后阻止默认的右击事件
        event.preventDefault();
        event.cancelBubble = true ;
        return false;
    }
};
module.exports = eventContextMenu;
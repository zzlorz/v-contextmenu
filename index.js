const contextMenuSetup = require('./src/events/contextMenuSetup');
const contextMenuUpdate = require('./src/events/contextMenuUpdate');
const contextMenuUnbind = require('./src/events/contextMenuUnbind');
const styleDomString = require('./src/utils/styleDomString');
window.contextMenuAll = [];
window.onload = () => {
  console.log(contextMenuAll);
}
// Add contextMenu configuration to element for the first time
const mountedHook = (el, binding, vnode) => {
  contextMenuAll.push('1');
  console.log(binding.instance.abc == binding.value);
  contextMenuSetup(el, binding, vnode);
};

// Update the contextMenu configuration
const updatedHook = (el, binding, vnode) => {
  contextMenuUpdate(el, binding, vnode);
};

// unbind the contextMenu configuration
const unbindHook = (el, binding, vnode) => {
  contextMenuUnbind(el, binding, vnode);
};

// Create custom directive
module.exports = {
  install: (Vue, options) => {    
    const styleElement = styleDomString();    
    document.body.appendChild(styleElement);
    document.onclick = window.onblur = () => {
      document.querySelectorAll('.v-contextmenu_main_v1').forEach(cr => {
          cr.setAttribute('class', 'v-contextmenu_main_v1 v-context_displaynone');
      });
    }
    // Register 'v-contextmenus' directive
    Vue.directive('contextmenu', {
      // Hooks for Vue3
      mounted(el, binding, vnode) {
        mountedHook(el, binding, vnode);
      },

      updated(el, binding, vnode) {
        updatedHook(el, binding, vnode);
      },
      // 绑定元素的父组件卸载后调用
  		unmounted(el, binding, vnode) {
				unbindHook(el, binding, vnode);
  		},

      // Hooks for Vue2
      inserted(el, binding, vnode) {
        mountedHook(el, binding, vnode);
      },

      update(el, binding, vnode) {
        updatedHook(el, binding, vnode);
      },

      unbind(el, binding, vnode) {
      	unbindHook(el, binding, vnode);
      }
    });
  },
};

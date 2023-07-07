// 生成树状结构的菜单DOM元素
const dataTransformDomString = (data, keys, parentIndex, string, level) => {
    keys = keys || '';
    level = level || 0;
    level+=1;
    if(string){
        keys += ','+parentIndex+','+string;
    }

    if(Array.isArray(data)) {
        data = data.length != 0 ? data: [{label:'复制', value: ''}];
        var innerHTML = data.map((item, index) => {
            if(item.children && item.children.length>0){                    
                return `<li class="${item.single?'single':''}" disabled="${item.disabled?'disabled':''}" data-keys="${keys?(keys+','+index+',children'): (index+',children')}">
                    <a>
                        <i>▨</i>
                        <span title="${item.disabled?item.reason:''}">${item.label}</span>
                        <i>▶</i>
                    </a>
                    <div style="z-index:${level};">${dataTransformDomString(item.children, keys, index, 'children', level)}</div>
                </li>`;
            }else{
                return `<li class="${item.single?'single':''}" disabled="${item.disabled?'disabled':''}" data-keys="${keys?(keys+','+index): (index)}">
                    <a>
                        <i></i>
                        <span title="${item.disabled?item.reason:''}">${item.label}</span>
                        <i></i>
                    </a>
                </li>`;
            }
        });
        return '<ul>'+ innerHTML.join('')+'</ul>';
    }else{
        return '';
    }
};
module.exports = dataTransformDomString;
# v-contextmenu

The easiest way to integrate browser right-click menu on Vue.js

The contextmenu plug-in is a powerful application that enables you to create right-click menus in a customized way. It provides 

rich APIs, allows integration with existing Vue applications, and provides functions and performance.



## Table of contents

1. [Installation][https://github.com/zzlorz/v-contextmenu#installation]
2. [Usage][https://github.com/zzlorz/v-contextmenu#usage]
3. [Options][https://github.com/zzlorz/v-contextmenu#options]
4. [Vue events][https://github.com/zzlorz/v-contextmenu#vue-events]
5. [Global configuration][https://github.com/zzlorz/v-contextmenu#global-configuration]
   - [Theme classes][https://github.com/zzlorz/v-contextmenu#theme-classes]	



## Installation

```json
npm i v-contextmenu --save
```



## Usage

Import v-contextmenu into any file you are planning to use it:

```json
import contextmenu from 'v-contextmenu'
```

```json
const contextmenu = require('v-contextmenu')
```



Then call the plugin:

```javascript
App.use(contextmenu, configuration)
```

Additional configuration of some menu parameters. Add the "v-contextmenu" attribute to any element to make it use:

```html
<div v-contextmenu="treeData">
    Right click
</div>
```



## Options

For elements with v-contextmenu attribute, the default behavior of right-clicking the mouse is replaced. New right-click menu options can be displayed through configuration parameters:

```html
<div v-contextmenu="[{label: 'menuName', value: 'menuValue'}]">
    Right click
</div>
```



## Vue events

These events are emitted when the user makes the corresponding action.

```html
<div v-contextmenu="[{label: 'menuName', value: 'menuValue'}]" @v-menu-click="someFunction">
    Right click end
</div>
```

|      Event      | Description                                                  |
| :-------------: | ------------------------------------------------------------ |
| `@v-menu-click` | Executed when the component right-clicks the menu bar option |



## Global configuration

#### Theme classes

```javascript
Vue.use(contextmenu, {
    'menu-bg': '',
    'menu-color': ''
})
```


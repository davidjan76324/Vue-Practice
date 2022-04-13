// Vue 3.0 with options-base style
var vm = Vue.createApp({ // vm = Vue.js 的實體物件, 

    // options 物件: 在這些物件當中，我們會定義各式各樣ui與模板相關的狀態、事件，以及要被呼叫的函示(or 方法)等


    // 實體所回傳的狀態會以物件key-value的形式
    // 且在Vue3.0開始，data將強制以function的形式出現
    data: function () { // data內的部分，就是 Vue.js所儲存的狀態 (資料) 了
        return {
            message: 'Hello Vue!',
            price: 100,
            quantity: 22
        }
    },
    //delimiters: ['%{', '}%'], //若所使用的後端模板剛好也採用雙誇號，此時會在執行上衝突，可以利用delimiters來重新定義模板語法
})

let vMountedInstance = vm.mount('#demo'); // 透過 mount 與網頁的 HTML結合， 也就是這個 Vue.js實體物件 (根元件) 可以控制的範圍，就可以順利將這個 Vue.js實體掛載至 <div id="app"> 這個節點。

//vm.$data.message = "Test"  // Error: 若我們在createApp時並未將此實體同時掛載到某個DOM節點，所以用 vm.$data.name會跳出無法設定的錯誤!
vMountedInstance.$data.message = "Fuck you!!!" //vMountedInstance已經掛載上去了，所以可以操作data!!



//use template
let tem_vm = Vue.createApp({
    template: '{{ name }} Love You',
    data: function () {
        return {
            name: "Mee"
        }
    },
}).mount('#template_demo')
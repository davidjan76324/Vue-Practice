var vm = Vue.createApp({
    data: function () {
        return {
            name: "davidjan",
            price: 100,
            quality: 20
        }
    },
    methods: { //
        subtotalMethods: function () {
            console.log("-- methods")
            return this.price * this.quality;
        }
    },
    computed: { //Hint: computed 屬性會將計算後的結果暫存，若他所觀察的屬性沒有被更新的情況下，computed就不會被重複執行
        subtotalComputed: function () {
            console.log("-- computed")
            return this.price * this.quality;
        }
    }
}).mount('#app')


vm.$data.price = 900
console.log(vm.$data.price)


//如果是同樣的重複計算，用 computed 來處理會比 methods 效能來得好， 但要注意的是，computed 屬性中的 function 無法使用參數，若有需要帶入參數的情況，還是只能使用 methods來處理囉。



//在前端加入v-on:input的監聽功能＋methods functions
var vm2 = Vue.createApp({
    data: function () {
        return {
            twd: 1,
            jpy: 0.278,
        }
    },
    methods: { //
        twdTojpy: function () {
            this.jpy = (this.twd / 0.278).toFixed(3)
        },
        jpyTotwd: function () {
            this.twd = (this.jpy * 0.278).toFixed(3)
        }
    },
}).mount('#demo_methods')



//使用computed的get, set功能
var vm3 = Vue.createApp({
    data: function () {
        return {
            twd: 1,
        }
    },
    computed: { //
        jpy: {
            get: function () {
                return (this.twd / 0.278).toFixed(3)
            },
            set: function (val) {
                this.twd = (val * 0.278).toFixed(3)
            }
        },
        usd: {
            get: function () {
                return (this.twd / 28.54).toFixed(3)
            },
            set: function (val) {
                this.twd = (val * 28.54).toFixed(3)
            }
        }
    },
}).mount('#demo_computed')

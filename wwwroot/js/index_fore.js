var vm = Vue.createApp({
    data: function () {
        return {
            count: 0,
            msg: [],
            amount: 0
        }
    },
    methods: {
        plus(event) {
            this.count = this.count + 1
            console.log(event.target.id)
        },
        plus_arg(amount, event) {
            alert("amount is = " + amount)
            console.log(event)
        },
        alert(val) {
            this.msg.push(val);
            window.setTimeout(() => {
                this.msg = [];
            }, 3000);
        }
    },

}).mount('#app')

let vm_capture = Vue.createApp({
    data: function () {
        return {
            msg: []
        }
    },
    methods: {
        alert(val) {
            this.msg.push(val);
            window.setTimeout(() => {
                this.msg = [];
            }, 3000);
        }
    },

}).mount('#app_capture')

let vm_self = Vue.createApp({
    data: function () {
        return {
            msg: []
        }
    },
    methods: {
        alert(val) {
            alert("is "+val)
        }
    },

}).mount('#app_self')


Vue.createApp({
    data: function () {
        return {
            count: 0,
            pressKey:'',
            press_enter_msg:'',
            press_input:''
        }
    },
    methods: {
        plus(){
            this.count = this.count+1
        },
        press(event){
            this.pressKey = event.key;
        },
        press_enter(){
            this.press_enter_msg = this.press_input
        }
    },

}).mount('#demo')


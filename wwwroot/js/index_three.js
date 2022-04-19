var vm = Vue.createApp({
    data: function () {
        return {
            customId: "davidjan",
            customId_2: "Mee",
            isdisable: true,
            message: "You are the best one!!",
            message_textarea: "Try me!",
            picked: 1,
            checkedNames: [], //用矩陣就會存取value，沒有矩陣就只有true or false
            checkedCheckbox: true,
            selected: "",
            message_lazy: "",
            num1: 0,
            num2: 0,
            msg_trim: '',
            msg_html: '<h5>Hello World!</h5>',
            rawContent: 'Hello Wrold~~~',
            message_cssBind: "You are the best one!!",
        }
    },
    methods: {
        isdisableFunc: function () {
            this.isdisable = !this.isdisable;
        },
        clearAllCheckbox: function () {
            this.checkedNames = []
        },
        isVaild: function () {
            return this.message_cssBind.length <= 10;
        }
    },
    computed: {
        sum: function () {
            return this.num1 + this.num2
        },
        msgStyle: function () {
            let myObj = {'border':'', 'color':''}
            if (!this.isVaild()) {
                myObj.border = 'red solid 1px'
                myObj.color = 'red'
            }
            return myObj;
        }
    }
}).mount('#app')

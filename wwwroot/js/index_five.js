Vue.createApp({
    data: function () {
        return {
            isShow:true,
            count:0,
            value:'A'
        }
    },
    methods: {
        addCount(){
            this.count = this.count+1
        }
    },
}).mount('#app')


Vue.createApp({
    data: function () {
        return {
            arr:['008',"JS","is","awesome"],
            obj:{
                title:"08js",
                author:"davidjan",
                publishAt:"2022-04-13"
            }
        }
    },
    methods: {
    },
}).mount('#app2')

//生命週期請至此有詳細解說：https://book.vue.tw/CH1/1-7-lifecycle.html
//Hooks function 請不要加在methods裡面，且由於需透過this存取實體，所以與methods同樣也無法使用箭頭函數。
$(function(){

    Vue.createApp({
        data: function () {
            return {
                messages:[],
                msg:''
            }
        },
        methods: {
            addToMessages(){
                this.messages.push(this.msg);
                this.msg = []

                console.log("Before nextTick: " + $('#info').text()); 
                
                this.$nextTick(function(){
                    console.log("After nextTick: "+ $('#info').text()); 
                })
            },
        },
        computed:{
            
        },
    }).mount('#app')

})


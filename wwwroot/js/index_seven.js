$(function () {
    /*
        Hint:
        Vue.js 在編譯元件的模板 (template) 時，會以元件模板的所定義內容為主。 也就是說，即使在<custom-component>也就是說，內放入任何內容，
        Vue.js 在元件編譯成網頁模板的時候，會自動無視裡面的東西，並且以子元件的模板來替換掉。
    */
    //-- app
    //-- 全域型的寫法：
    let app = Vue.createApp({})
    //要先註冊component，後續才能掛載(app.mount('#app'))
    app.component('my-component', {
        template: `
        <div class="data-block">
          <div>Count: {{ count }}</div>
          <button v-on:click="count++">Plus</button>
          </div>
        `,
        data() {
            return { // 因為物件型別是以「傳址」(Pass by reference) 的方式來進行資料傳遞，data 中return 的 obj 建議不要獨立出來，會造成資料共用，不然就用拷貝的方式(or Object.assign的方式)獨立出新的obj
                count: 0
            }
        },
        methods: {

        },
        computed: {

        },

    })

    app.mount('#app')


    //-- 區域型的寫法：
    // let app = Vue.createApp({
    //     data(){
    //         return {

    //         }
    //     },
    //     components:{
    //         'my-component':{
    //             template:"<p>Hello Mee!</p>",
    //             props:[],
    //         },
    //     }
    // })

    // app.mount('#app')




    //-- props:由外傳入到component內的方法
    //-- app2
    let app2 = Vue.createApp({
        data() {
            return {
                msgGirl: "這是外層元件的 msg",
                books: [{
                        name: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
                        author: 'Kuro Hsu',
                        publishedAt: '2019/09'
                    },
                    {
                        name: '重新認識 Vue.js',
                        author: 'Kuro Hsu',
                        publishedAt: '2021/02'
                    },
                ]
            }
        }
    })

    app2.component('my-component', {
        template: `<div class="component">
            <div> 從 props 來的 parentMsg ==> {{ parentMsg }} </div>
            <div> 從 props 來的 parentMsgNoBind (沒有綁v-bind)，純文字傳遞 ==> {{ parentMsgNoBind }} </div>
            <div> 自己的 msg ==> {{ msg }} </div>
            </div>`,

        //parentMsgNoBind: 因為沒有用v-bind，子元件接收到的會是「純文字字串」，而不是來自外層元件的 msg內容，實際上，可以使用這樣的方式「假裝已經傳入資料」，就不用在API Post回傳資料了！！
        props: ["parentMsg", "parentMsgNoBind"], //在此要用駝峰式寫法。 
        data() {
            return {
                msg: '這是子元件的 msg'
            }
        },
        methods: {

        },
        computed: {

        },

    })

    app2.component('my-componentformat', {
        template: `<div class="component">
            <div> 從 props 來的 parentValue ==> {{ parentValue }} </div>
            </div>`,
        props: {
            // 注意：這裡的 Number 無需用引號包成字串，而且首字要大寫
            "parentValue": {
                type: [Number, String], //前端輸入 number 或者 string 都可以
                default: 'Hello' //以防前端沒有v-bind:parent-value="XXXOOO"
            }
        },
        data() {
            return {
                msg: '這是子元件的 msg'
            }
        },
        methods: {

        },
        computed: {

        },
    })

    app2.component('my-componentobj', {
        template: `<div class="child-app">
        <div>書名: <input type="text" v-model="bookInfo.name"></div>
        <div>作者: <input type="text" v-model="bookInfo.author"></div>
        <div>出版日: <input type="text" v-model="bookInfo.publishedAt"></div>
      </div>`,
        props: { //因為是傳obj，物件型別是以「傳址」(Pass by reference) 的方式來進行資料傳遞，所以就會連動，建議改用個別傳值的方式！
            "bookInfo": {
                type: Object,
                default: {
                    name: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
                    author: 'Kuro Hsu',
                    publishedAt: '2019/09'
                }
            }
        },
        data() {
            return {
                msg: '這是子元件的 msg'
            }
        },
        methods: {

        },
        computed: {

        },
    })

    app2.mount('#app2');

    //-- app3
    let app3 = Vue.createApp({
        data() {
            return {
                msgGirl: "這是外層元件的 msg",
                books: [{
                        name: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
                        author: 'Kuro Hsu',
                        publishedAt: '2019/09'
                    },
                    {
                        name: '重新認識 Vue.js',
                        author: 'Kuro Hsu',
                        publishedAt: '2021/02'
                    },
                ]
            }
        }
    });

    //所以當我們嘗試將props傳入的屬性透過v-model來修改的話，系統會跳出錯誤，props是採用單向綁定！！
    //最好使用內部data承接資料！
    //[Vue warn]: Attempting to mutate prop "author". Props are readonly.
    app3.component('my-component', {
        template: `<div class="child-app">
        <div>書名: <input type="text" v-model="name"></div>
        <div>作者: <input type="text" v-model="author"></div>
        <div>出版日: <input type="text" v-model="publishedat"></div>
      </div>`,
        props: ['name', 'author', 'publishedat'],
        data() {
            return {
                msg: '這是子元件的 msg',

                //-- 最好使用內部data承接資料，自己的狀態自己改！
                //bookName:this.name,
                //bookAuthor:this.author,
                //bookPublishedAt:this.publishat
            }
        },
        methods: {

        },
        computed: {

        },
    })
    app3.mount('#app3');


    //-- app4
    //父層資料透過 event 傳入子層，而子層透過 event (this.$emit()) 來觸發父層狀態的更新。
    let app4 = Vue.createApp({
        data() {
            return {
                books: [{
                        id: '0001',
                        name: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
                        author: 'Kuro Hsu',
                        publishedAt: '2019/09'
                    },
                    {
                        id: '0002',
                        name: '重新認識 Vue.js',
                        author: 'Kuro Hsu',
                        publishedAt: '2021/02'
                    },
                ]
            }
        },
        methods:{
            updateInfo(val){ //update 的 function 一定要寫在外面(父)，不然無法直接修改外面data的資料！
                console.log(val)
                let idx = this.books.findIndex(d => d.id === val.id);
                this.books[idx] = val; //覆蓋
            }
        }
    });
    app4.component('my-component', {
        template: `<div class="child-app">
        <div>書名: <input type="text" v-model="bookInfo.name"></div>
        <div>作者: <input type="text" v-model="bookInfo.author"></div>
        <div>出版日: <input type="text" v-model="bookInfo.publishedAt"></div>
      </div>`,
        props: ['id', 'name', 'author', 'publishedAt'],
        data() {
            return {
                bookInfo: {
                    id: this.id,
                    name: this.name,
                    author: this.author,
                    publishedAt: this.publishedAt
                }
            }
        },
        methods: {

        },
        computed: {

        },
        watch: { //使用watch做監聽！
            bookInfo: { //要監聽的參數
                // 注意！ 由於 bookInfo 物件必須加上 deep: true 
                // 才能做物件的深層更新偵測 
                deep: true,
                handler(val) { //監聽有變化時，可以在此function做想做的事！
                    this.$emit('update', val); //利用$emit來呼叫update事件，並把val傳出去

                },
            }
        }
    })
    app4.mount('#app4');



    //-- app5
    // provide(由root撰寫) & inject(由component接收): 把資料由root傳遞到子或孫元件中 (總之不管隔幾層都可以)！
    let app5 = Vue.createApp({
        data() {
            return {
                msg: 'Hello App!'
            }
        },
        methods:{

        },
        provide() {
            // 將 this.msg 透過 provide 傳遞出去給component
            return {
                provideMsg: this.msg,
                //另外要注意的是，透過provide 輸出的資料並不會隨著父層資料的更新而有所改變， 如果希望子層inject取回來的資料能與上層資料連動，則需要透過Vue.computed()進行包裝。
                provideMsg2: Vue.computed(() => this.msg),
            }
        }
    });
    app5.component('list-component', {
        template: `<ul>
    	<li v-for="i in 3">
      	    {{ i }}
     		<list-item />
			</li>
        </ul>`,
        components: {
             // 在子、孫元件中，加上 inject 屬性即可取得 provideMsg
            'list-item': {
                inject:['provideMsg','provideMsg2'],
                template: `<div>provideMsg: {{ provideMsg }}!</div>
                <div>provideMsg2: {{ provideMsg2 }}!</div>`,
            },
            
        }
    })

    app5.mount('#app5');




    //-- app6
    let bus = mitt();
    let app6 = Vue.createApp({
        data() {
            return {
                sum: 0
            }
        },
        methods:{
            plus(){
                this.sum = this.sum+1
            },
            reset(){
                this.sum = 0
            }
        },
        created(){
            // 實體建立時，在 bus 身上註冊 reset 事件
            // 觸發事件時呼叫 reset 方法
            bus.on('reset', this.reset) // bus.on(事件, 方法)
        }
    });
    app6.component('button-counter', {
        template: `<button @click="plus">You clicked me {{ count }} times.</button>`,
        data(){
            return {
                count: 0
            }
        },
        methods:{
            plus(){
                this.count = this.count+1
                this.$emit('addSum'); 
            },
            reset(){
                this.count = 0;
            }
        },
        created(){
            // 實體建立時，在 bus 身上註冊 reset 事件
            // 觸發事件時呼叫 reset 方法
            bus.on('reset',this.reset) // bus.on(事件, 方法)
        }
    })

    app6.component('button-reset', {
        template: `<button v-on:click="reset">reset</button>`,
        
        methods:{
            reset(){
                bus.emit('reset');
            }
        }
    })

    app6.mount('#app6');
})

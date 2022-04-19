Vue.createApp({
    data: function () {
        return {
            isShow: true,
            count: 0,
            value: 'A'
        }
    },
    methods: {
        addCount() {
            this.count = this.count + 1
        }
    },
}).mount('#app')


Vue.createApp({
    data: function () {
        return {
            arr: ['008', "JS", "is", "awesome"],
            obj: {
                title: "08js",
                author: "davidjan",
                publishAt: "2022-04-13"
            },
            links: [{
                    title: "davidjan",
                    link: "www.yahoo.com.tw"
                },
                {
                    title: "mee",
                    link: "www.google.com"
                },
            ],
            lists: [{
                    id: 'task001',
                    title: '選項 1',
                    isDone: false
                },
                {
                    id: 'task002',
                    title: '選項 2',
                    isDone: false
                },
                {
                    id: 'task003',
                    title: '選項 3',
                    isDone: false
                },
            ]
        }
    },
    methods: {
        todoLists() {
            return this.lists.filter(d => !d.isDone)
        },
        doneLists() {
            return this.lists.filter(d => d.isDone)
        },
    },
}).mount('#app2')

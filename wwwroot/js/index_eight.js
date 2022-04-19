let app = Vue.createApp({
    data: function () {
        return {
            currentTab: 'Home',
            tabs: ['Home', 'Posts', 'Archive']
        }
    },
    methods: {},
})

app.component('tab-home', {
    template: `<div class="demo-tab">Home component</div>`
});

app.component('tab-posts', {
    template: `<div class="demo-tab">Post component</div>`
});

app.component('tab-archive', {
    template: `<div class="demo-tab">Archive component</div>`
});


app.mount('#app')




//--------- v-bind:is：透過component+v-bind:is，即可完成動態切換元件(compomet)
const app_is = Vue.createApp({
    data() {
      return {
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive'],
        msgs: []
      }
    },
    computed: {
      currentTabComponent() {
        return `tab-${ this.currentTab.toLowerCase() }`;
      }
    },
    methods: {
      notify(val) {
        this.msgs.push(val);
      }
    }
  });
  
  app_is.component('tab-home', {
    name: 'tab-home',
    template: `<div class="demo-tab"><input v-model="title"></div>`,
    data: () => ({
      title: 'Home component'
    }),
    created() {
      this.$emit('update', `${this.$options.name} Created.`);
    },
    mounted() {
      this.$emit('update', `${this.$options.name} Mounted.`);
    },
    unmounted() {
      this.$emit('update', `${this.$options.name} Unmounted.`);
    },
    activated() {
      this.$emit('update', `${this.$options.name} Activated.`);
    },
    deactivated() {
      this.$emit('update', `${this.$options.name} Deactivated.`);
    },
  });
  
  app_is.component('tab-posts', {
    name: 'tab-posts',
    template: `<div class="demo-tab"><input v-model="title"></div>`,
    data: () => ({
      title: 'Post component'
    }),
    created() {
      this.$emit('update', `${this.$options.name} Created.`);
    },
    mounted() {
      this.$emit('update', `${this.$options.name} Mounted.`);
    },
    unmounted() {
      this.$emit('update', `${this.$options.name} Unmounted.`);
    },
    activated() {
      this.$emit('update', `${this.$options.name} Activated.`);
    },
    deactivated() {
      this.$emit('update', `${this.$options.name} Deactivated.`);
    },
  
  });
  
  app_is.component('tab-archive', {
    name: 'tab-archive',
    template: `<div class="demo-tab"><input v-model="title"></div>`,
    data: () => ({
      title: 'Archive component'
    }),
    created() {
      this.$emit('update', `${this.$options.name} Created.`);
    },
    mounted() {
      this.$emit('update', `${this.$options.name} Mounted.`);
    },
    unmounted() {
      this.$emit('update', `${this.$options.name} Unmounted.`);
    },
    activated() {
      this.$emit('update', `${this.$options.name} Activated.`);
    },
    deactivated() {
      this.$emit('update', `${this.$options.name} Deactivated.`);
    },
  
  });
  
  app_is.mount('#app_is');

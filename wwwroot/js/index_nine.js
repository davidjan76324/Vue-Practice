/*
  solt 在官方文件的名稱叫做「插槽」，顧名思義，就是在子元件上面開個洞， 由外層元件將內容置放在至子層元件指定的位置中，子元件內插入slot插槽中。
*/

let app = Vue.createApp({
  data: function () {
    return {
      msg: 'Parent!',
    }
  },
  methods: {},
})

app.component('custom-component', {
  template: `<div> 
    Hello!
    <div>
    	<slot>這是預設內容，當父元件沒有msg回傳時就會出現！</slot>
		</div>
  </div>`,
  data() {
    return {
      msg: 'Child!'
    }
  }
});

app.mount('#app')


//------- 具名插槽
let app_slotName = Vue.createApp({});

app_slotName.component('light-box', {
  template: `
  <div class="lightbox">
    <div class="modal-mask" :style="modalStyle">
      <div class="modal-container"  @click.self="toggleModal">

        <div class="modal-body">
          <header>
            <slot name="header">Default Header</slot>
          </header>
          <hr>
          <main>
            <slot>Default Body</slot>
          </main>
          <hr>
          <footer>
            <slot name="footer">Default Footer</slot>
          </footer>
        </div>

      </div>
    </div>

    <button @click="isShow = true">Click Me</button>
  </div>`,
  data: () => ({
    isShow: false
  }),
  computed: {
    modalStyle() {
      return {
        'display': this.isShow ? '' : 'none'
      };
    }
  },
  methods: {
    toggleModal() {
      console.log('click')
      this.isShow = !this.isShow;
    }
  }
});

app_slotName.mount('#app_slotName');


//--- 動態具名插槽
let app_slotName_Dynamic = Vue.createApp({
  data() {
    return {
      dynamic_slot_name: 'header',
      options: ['header', 'footer', 'default'],
    }
  },
});

app_slotName_Dynamic.component('light-box', {
  template: `
  <div class="lightbox">
    <div class="modal-mask" :style="modalStyle">
      <div class="modal-container"  @click.self="toggleModal">

        <div class="modal-body">
          <header>
            <slot name="header">Default Header</slot>
          </header>
          <hr>
          <main>
            <slot>Default Body</slot>
          </main>
          <hr>
          <footer>
            <slot name="footer">Default Footer</slot>
          </footer>
        </div>

      </div>
    </div>

    <button @click="isShow = true">Click Me</button>
  </div>`,
  data: () => ({
    isShow: false
  }),
  computed: {
    modalStyle() {
      return {
        'display': this.isShow ? '' : 'none'
      };
    }
  },
  methods: {
    toggleModal() {
      console.log('click')
      this.isShow = !this.isShow;
    }
  }
});

app_slotName_Dynamic.mount('#app_slotName_Dynamic');


//--- scop slot
let app_scopslot = Vue.createApp({
  data: () => ({
    langOptions: [{
        name: '繁體中文',
        val: 'tw'
      },
      {
        name: '日本語',
        val: 'jp'
      },
      {
        name: 'English',
        val: 'en'
      },
    ],
    lang: 'tw'
  })
});

app_scopslot.component('light-box', {
  //我們修改slot標籤，讓它可以將helloString往外拋！
  //這就是 Vue.js 所提供的 slot prop，作用就是將子元件內的狀態透過
  template: `
    <div class="lightbox">
      <div class="modal-mask" :style="modalStyle">
        <div class="modal-container" @click.self="toggleModal">
          <div class="modal-body">
            <main>
              <slot name="default" v-bind:hello="helloString[lang]"></slot> 
            </main>
          </div>
        </div>
      </div>

      <button @click="isShow = true">Click Me</button>
    </div>`,
  props: {
    lang: {
      type: String,
      default: 'tw'
    }
  },
  data: () => ({
    helloString: {
      'tw': '哈囉！世界！',
      'jp': 'ハロー・ワールド!',
      'en': 'Hello world!'
    },
    isShow: false
  }),
  computed: {
    modalStyle() {
      return {
        'display': this.isShow ? '' : 'none'
      };
    }
  },
  methods: {
    toggleModal() {
      console.log('click')
      this.isShow = !this.isShow;
    }
  }
});

app_scopslot.mount('#app_scopslot');

let app = Vue.createApp({
  data: function () {
    return {
      isShow: true,
    }
  },
  methods: {},
})

app.mount('#app')


let app2 = Vue.createApp({
  data: function () {
    return {
      isShow: true,
    }
  },
  methods: {},
})

app2.mount('#app2')


let app3 = Vue.createApp({
  data: function () {
    return {
      demo: '',
    }
  },
  methods: {},
})

app3.mount('#app3')


let app4 = Vue.createApp({
  data: function () {
    return {
      animateClasses: [
        'bounce',
        'rubberBand',
        'tada',
      	'shakeY',
        'shakeX',
      ],
      animatedClassName: ''
    }
  },
  methods: {
    activedAnimate(val){
      this.animatedClassName = `animate__animated animate__${val}`;
    }
  },
})

app4.mount('#app4')

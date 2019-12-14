// pages/home/home.js
Page({
  data: {
    name: 'zhangyas',
    age:35,
    students:[
      { id:110,name:'zys001',age:20},
      { id: 110, name: 'zys002', age: 25 },
      { id: 110, name: 'zys003', age: 30 }
    ],
    counter:0
  },
  handleBtnClick(){
    //错误的做法
    //this.data.counter += 1
    //console.log(this.data.counter)
    this.setData({
      counter: this.data.counter += 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter -= 1
    })  
  }
})
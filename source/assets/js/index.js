console.log('test')

const hoge = ()=>{
  return 'hoge'
}

console.log(hoge())

class fuga {
  constructor(name, val) {
    this.name = name
    this.val = val
  }
  getName(){
    console.log(this.name)
  }
  getVal(){
    console.log(this.val)
  }
}

const foobar = new fuga('John','3000')
foobar.getName()
foobar.getVal()
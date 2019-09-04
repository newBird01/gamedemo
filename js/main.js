import BackGround from './runtime/background'
let ctx = canvas.getContext('2d');
export default class Main {
  constructor (){
    this.restart()
  }
  restart() {
    this.bg = new BackGround(ctx)
  }
  render() {
    this.bg.render(ctx)
  }
}
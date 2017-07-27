let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;
// 文件作为类分离了 但是按照引入顺序执行
// 实现了业务流程与类的封装分离
// 30%时间封装 70%时间业务以及调试
let moon = new Moon(context, width, height);
let star = new Stars(context, width, height, 200);
let count = 0;
const frame = () => {
  count ++;
  if (count % 10 == 0) {
    star.blink();
  }
  moon.draw();
  star.draw();
  requestAnimationFrame(frame);
}
frame();

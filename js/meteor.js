let height = window.innerHeight;
let width = window.innerWidth;
var ctx;
var meteorArr = [{
  x: width / 6,
  y: -200,
  length: 100 / 5,
  r: 8,
  vx: 15,
  vy: 35,
  color: '#fff'
}];
window.onload = () => {
  console.log('要下流星雨了');
  let canvas = document.querySelector('#canvas');
  console.log(canvas);
  let context = canvas.getContext('2d');
  ctx = context;
  canvas.height = height;
  canvas.width = width;
  draw();
};
function draw() {
  ctx.clearRect(0, 0, width, height); // 清空上一幕

  ctx.save(); // 保存状态

  ctx.rotate(-40 * Math.PI / 180); // 旋转画布

  meteorArr.map((item, index) => {
    // 绘画
    ctx.beginPath(); //开始路径
    ctx.arc(item.x, item.y, item.r, 0, Math.PI, false);
    ctx.lineTo(item.x, item.y - item.length);
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.fill();

    // 渲染完一颗星星，然后处理数据，计算下一帧的位置
    // 如果超出边界，删除这课星星
    if (meteorArr[index].x > width + 100 || meteorArr[index].y > height + meteorArr[index].length * 2.6) {
      meteorArr.splice(index, 1);
    } else {
      meteorArr[index].x += item.vx;
      meteorArr[index].y += item.vy;
    }
  });

  // 控制流星数量
  if (meteorArr.length > 200) {} else {
    let random = Math.random();
    if (random > 0.5) {
      meteorArr.push(createStart());
    } else {}
  }
  ctx.restore(); // 恢复状态

  window.requestAnimationFrame(draw);
}

// 创建星星
function createStart() {
  let random = Math.random();
  let random2 = Math.random();
  let vx = random * 1 + 1;
  let obj = {
    x: random * width - height / 4,
    y: random * -200,
    length: random2 * 50 + 40,
    r: random2 * 6,
    vx: vx,
    vy: vx * 7,
    color: 'rgba(246, 213, 229,0.6)'
  };
  return obj;
}
const gm = require('gm').subClass({imageMagick: true});

const fontSize = 50;
function genImageWithText(text) {
  return new Promise((resolve, reject) => {
    let ready = gm('./x.jpg')
      .font('./PingFang.ttc')
      .fontSize(fontSize);
      
    for (let i in text) {
      ready = ready.drawText(500, 100 + (fontSize + 5) * i, text[i]);
    }
    ready.write(`./result/${text.join('')}.png`, err => {
      if (err) reject(err);
      else {
        console.log(`已生成: '${text.join('')}.jpg'`);
        resolve();
      }
    });
  });
}

const timeMap = {
  1: '一',
  2: '两',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '七',
  8: '八',
  9: '九',
  10: '十',
  11: '十一',
  12: '十二',
  13: '十三',
  14: '十四',
  15: '十五',
  16: '十六',
  17: '十七',
  18: '十八',
  19: '十九',
  20: '二十',
  21: '二十一',
  22: '二十二',
  23: '二十三',
  24: '二十四'
}


Promise.all(Object.keys(timeMap).map(timeIndex => {
  genImageWithText(timeMap[timeIndex].split('').concat('点了'.split(''), '!?'));
})).then(() => {
  console.log('======');
  console.log('finished!');
})

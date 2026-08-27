import fs from 'node:fs';
const YY = 'https://shaktiyoyo6969.com/%E7%94%A2%E5%BE%8C%E6%BA%AB%E9%A4%8A%E6%94%B6%E8%85%B9/';
const hit = [];
function patch(file, name, o, n) {
  let s = fs.readFileSync(file, 'utf8');
  const c = s.split(o).length - 1;
  if (c !== 1) throw new Error(`[${file} / ${name}] ${c} 處，預期 1`);
  fs.writeFileSync(file, s.replace(o, n), 'utf8');
  hit.push(`${file} · ${name}`);
}

/* ---------- 主頁：拿掉剛加的 Seed 卡（一人一件） ---------- */
patch('index.html', '移除 Seed 卡',
`
      <div class="gcard wide">
        <img class="gshot" src="img/works/w-seed.jpg" alt="Chenti的大地的喜悅之籽 Seed of Joy 手繪牌卡" loading="lazy">
        <div class="gtext">
          <div class="gwho">Chenti</div>
          <h3>大地的喜悅之籽 Seed of Joy</h3>
          <p>同一位姊妹的第二件作品 —— <span class="num">101</span> 張手繪牌卡的品牌頁。理念、播種到重生的五個階段、兩種方案與運費，最後接上訂購表單。這已經不只是一個網站，是一間開在線上的店。</p>
          <a class="glink" href="https://seed-of-joy-cards.kumudsfreqs.live" target="_blank" rel="noopener">看網站 →</a>
        </div>
      </div>`, ``);

/* ---------- 主頁：宥妤補上網址與新描述 ---------- */
patch('index.html', '宥妤加連結',
`          <div class="gwho">宥妤</div>
          <h3>產後溫柔修復</h3>
          <p>用 Why／Who／What／When／Where 五張卡片，把一個產後修復的服務講清楚 —— 給的是「慢慢回到自己」。</p>`,
`          <div class="gwho">宥妤</div>
          <h3>產後溫柔修復</h3>
          <p>把一個產後修復的服務講清楚 —— 給的是「慢慢回到自己」。現在已經長成一個完整的站：導覽列、課程與服務、書寫專區都有了。</p>
          <a class="glink" href="${YY}" target="_blank" rel="noopener">看網站 →</a>`);

/* ---------- 101 頁：加第四張＝宥妤 ---------- */
patch('101/index.html', '加宥妤卡',
`          <a class="nslink" href="https://gong-bath.kumudsfreqs.live" target="_blank" rel="noopener">看網站 →</a>
        </div>
      </div>
    </div>`,
`          <a class="nslink" href="https://gong-bath.kumudsfreqs.live" target="_blank" rel="noopener">看網站 →</a>
        </div>
      </div>

      <div class="nscard">
        <img class="nsshot" src="../img/works/w-youyu.jpg" alt="宥妤的產後溫柔修復" loading="lazy">
        <div class="nsbody">
          <div class="nswho">宥妤</div>
          <h3>產後溫柔修復</h3>
          <p>把一個產後修復的服務講清楚 —— 給的是「慢慢回到自己」。現在已經長成一個完整的站：導覽列、課程與服務、書寫專區都有了。</p>
          <a class="nslink" href="${YY}" target="_blank" rel="noopener">看網站 →</a>
        </div>
      </div>
    </div>`);

console.log('已改：\n  ' + hit.join('\n  '));

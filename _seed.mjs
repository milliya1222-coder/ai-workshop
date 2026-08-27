import fs from 'node:fs';
const URL = 'https://seed-of-joy-cards.kumudsfreqs.live';
const hit = [];
function patch(file, name, o, n) {
  let s = fs.readFileSync(file, 'utf8');
  const c = s.split(o).length - 1;
  if (c !== 1) throw new Error(`[${file} / ${name}] ${c} 處，預期 1`);
  fs.writeFileSync(file, s.replace(o, n), 'utf8');
  hit.push(`${file}:${name}`);
}

/* ---------- 主頁：作品牆加一張 wide 卡 ---------- */
patch('index.html', '作品牆',
`          <a class="glink" href="https://gong-bath.kumudsfreqs.live" target="_blank" rel="noopener">看網站 →</a>
        </div>
      </div>
    </div>`,
`          <a class="glink" href="https://gong-bath.kumudsfreqs.live" target="_blank" rel="noopener">看網站 →</a>
        </div>
      </div>

      <div class="gcard wide">
        <img class="gshot" src="img/works/w-seed.jpg" alt="Chenti的大地的喜悅之籽 Seed of Joy 手繪牌卡" loading="lazy">
        <div class="gtext">
          <div class="gwho">Chenti</div>
          <h3>大地的喜悅之籽 Seed of Joy</h3>
          <p>同一位姊妹的第二件作品 —— <span class="num">101</span> 張手繪牌卡的品牌頁。理念、播種到重生的五個階段、兩種方案與運費，最後接上訂購表單。這已經不只是一個網站，是一間開在線上的店。</p>
          <a class="glink" href="${URL}" target="_blank" rel="noopener">看網站 →</a>
        </div>
      </div>
    </div>`);

/* ---------- 101 頁：改兩欄 + 加第四張 ---------- */
patch('101/index.html', 'nsgrid兩欄',
`  .nsgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}`,
`  .nsgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;margin-top:40px}`);

patch('101/index.html', 'lead',
`    <p class="lead">下面這三個網站，是上完 <span class="num">9/9</span> 那四堂的姊妹自己做的。<br>她們來的時候，沒有一個人寫過程式 —— 有幾個現在已經在線上收預約了。</p>`,
`    <p class="lead">下面這些，是上完 <span class="num">9/9</span> 那四堂的姊妹自己做的。<br>她們來的時候，沒有一個人寫過程式 ——<br>現在有人在線上收預約，有人已經在賣自己的作品了。</p>`);

patch('101/index.html', '加第四張',
`          <a class="nslink" href="https://gong-bath.kumudsfreqs.live" target="_blank" rel="noopener">看網站 →</a>
        </div>
      </div>
    </div>`,
`          <a class="nslink" href="https://gong-bath.kumudsfreqs.live" target="_blank" rel="noopener">看網站 →</a>
        </div>
      </div>

      <div class="nscard">
        <img class="nsshot" src="../img/works/w-seed.jpg" alt="Chenti 的大地的喜悅之籽 Seed of Joy 手繪牌卡" loading="lazy">
        <div class="nsbody">
          <div class="nswho">Chenti 的第二件</div>
          <h3>大地的喜悅之籽 Seed of Joy</h3>
          <p><span class="num">101</span> 張手繪牌卡的品牌頁 —— 理念、五個階段、兩種方案與運費，還接上了訂購表單。這已經不只是網站，是一間開在線上的店。</p>
          <a class="nslink" href="${URL}" target="_blank" rel="noopener">看網站 →</a>
        </div>
      </div>
    </div>`);

console.log('已改：\n  ' + hit.join('\n  '));

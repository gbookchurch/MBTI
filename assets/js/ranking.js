/* rank-compare-v96-script */
(function () {
    const cells = Array.from(document.querySelectorAll('#ranking-compare .rank-compare-cell'));
    if (!cells.length) return;
    function decorateCompareCells() {
        cells.forEach(cell => {
            if (cell.querySelector(".rank-compare-thumb")) return;
            const character = cell.querySelector(".rank-compare-character")?.textContent?.trim();
            const toggle = cell.querySelector(".rank-compare-toggle");
            const type = cell.querySelector(".rank-compare-type");
            const name = cell.querySelector(".rank-compare-character");
            const stat = cell.querySelector(".rank-compare-stat");
            const thumb = makeRankCharacterThumb(character);
            let copy = cell.querySelector(".rank-compare-copy");
            if (!copy) {
                copy = document.createElement("span");
                copy.className = "rank-compare-copy";
                if (type) copy.appendChild(type);
                if (name) copy.appendChild(name);
                if (stat) copy.appendChild(stat);
                cell.insertBefore(copy, toggle || null);
            }
            if (thumb) {
                thumb.classList.add("rank-compare-thumb");
                cell.insertBefore(thumb, copy);
            }
        });
    }
    decorateCompareCells();
    function closeCell(cell) {
        const target = document.getElementById(cell.getAttribute('aria-controls'));
        cell.setAttribute('aria-expanded', 'false');
        const mark = cell.querySelector('.rank-compare-toggle');
        if (mark) mark.textContent = '＋';
        if (target) target.hidden = true;
    }
    function openCell(cell) {
        const isMobileRank = window.matchMedia('(max-width: 640px)').matches;
        // 手機版：詳細說明會橫跨整列，所以一次只開一張。
        // 桌機版：維持信徒／牧者兩欄各自獨立展開，方便左右比較。
        if (isMobileRank) {
            cells.forEach(other => { if (other !== cell) closeCell(other); });
        } else {
            const sideClass = cell.classList.contains('rank-compare-cell-lay')
                ? 'rank-compare-cell-lay'
                : 'rank-compare-cell-pastor';
            cells.forEach(other => {
                if (other !== cell && other.classList.contains(sideClass)) closeCell(other);
            });
        }
        const target = document.getElementById(cell.getAttribute('aria-controls'));
        cell.setAttribute('aria-expanded', 'true');
        const mark = cell.querySelector('.rank-compare-toggle');
        if (mark) mark.textContent = '−';
        if (target) target.hidden = false;
    }
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const isOpen = cell.getAttribute('aria-expanded') === 'true';
            if (isOpen) closeCell(cell); else openCell(cell);
        });
    });
})();

/* v194-mobile-ranking-detail-data */
(() => {
  const root = document.getElementById('ranking-compare');
  if (!root || root.dataset.v194Enhanced === 'true') return;
  root.dataset.v194Enhanced = 'true';
  const TOTALS = { lay: 28796, pastor: 1649 };
  const LABELS = { lay: '平信徒', pastor: '牧者' };
  const maps = { lay: new Map(), pastor: new Map() };
  root.querySelectorAll('.rank-compare-row').forEach(row => {
    const rank = Number(row.dataset.rank || 0);
    ['lay','pastor'].forEach(side => {
      const cell = row.querySelector(`.rank-compare-cell-${side}`);
      if (!cell) return;
      const type = cell.querySelector('.rank-compare-type')?.textContent?.trim() || '';
      const character = cell.querySelector('.rank-compare-character')?.textContent?.trim() || '';
      const stat = cell.querySelector('.rank-compare-stat')?.textContent?.trim() || '';
      const match = stat.match(/([\d,]+)\s*人\s*·\s*([\d.]+)%/);
      maps[side].set(type, {
        rank, type, character,
        count: match ? Number(match[1].replace(/,/g,'')) : 0,
        percent: match ? Number(match[2]) : 0
      });
    });
  });
  const formatCount = n => Number(n || 0).toLocaleString('zh-TW');
  const approxEvery = p => p > 0 ? Math.max(1, Math.round(100 / p)) : null;
  root.querySelectorAll('.rank-compare-row').forEach(row => {
    ['lay','pastor'].forEach(side => {
      const cell = row.querySelector(`.rank-compare-cell-${side}`);
      if (!cell) return;
      const type = cell.querySelector('.rank-compare-type')?.textContent?.trim() || '';
      const info = maps[side].get(type);
      const otherSide = side === 'lay' ? 'pastor' : 'lay';
      const other = maps[otherSide].get(type);
      const detail = document.getElementById(cell.getAttribute('aria-controls'));
      if (!detail || !info || detail.querySelector('.rank-mobile-detail-data')) return;
      const box = document.createElement('div');
      box.className = `rank-mobile-detail-data is-${side}`;
      const kicker = document.createElement('div');
      kicker.className = 'rank-mobile-detail-kicker';
      kicker.textContent = '本次樣本資料';
      const stats = document.createElement('div');
      stats.className = 'rank-mobile-detail-stats';
      [
        ['排名', `第 ${info.rank} 名`],
        ['人數', `${formatCount(info.count)} 人`],
        ['比例', `${info.percent.toFixed(1)}%`]
      ].forEach(([label, value]) => {
        const item = document.createElement('div');
        const small = document.createElement('span');
        const strong = document.createElement('strong');
        small.textContent = label;
        strong.textContent = value;
        item.append(small, strong);
        stats.appendChild(item);
      });
      const context = document.createElement('p');
      context.className = 'rank-mobile-detail-context';
      const every = approxEvery(info.percent);
      context.textContent = `在本次 ${formatCount(TOTALS[side])} 位${LABELS[side]}樣本中，${type} ${info.character}共有 ${formatCount(info.count)} 人，占 ${info.percent.toFixed(1)}%。${every ? `換算約每 ${every} 位參與者中有 1 位落在這一型。` : ''}`;
      box.append(kicker, stats, context);
      if (other) {
        const compare = document.createElement('p');
        compare.className = 'rank-mobile-detail-compare';
        compare.textContent = `同一個 ${type} 在${LABELS[otherSide]}榜排第 ${other.rank} 名，占 ${other.percent.toFixed(1)}%，對應聖經人物是${other.character}。`;
        box.appendChild(compare);
      }
      const note = document.createElement('p');
      note.className = 'rank-mobile-detail-note';
      note.textContent = '比例只描述本次自願參與樣本，不代表台灣基督徒整體人口。';
      box.appendChild(note);
      detail.insertBefore(box, detail.firstChild);
    });
  });
})();

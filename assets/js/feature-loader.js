(() => {
  const FEATURES = {
    'mbti-lookup': 'profile',
    'ranking-compare': 'ranking',
    'question-stats-section': 'stats',
    'temperament-section': 'theater',
    'song-dedication-section': 'song'
  };

  const loaded = new Set();
  const loading = new Map();


  function warmCharacterImages(){
    if(document.querySelector('link[data-character-warmup]')) return;
    const first = [
      'assets/characters/peter.webp',
      'assets/characters/paul.webp',
      'assets/characters/david.webp'
    ];
    first.forEach((href, i) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      link.dataset.characterWarmup = String(i + 1);
      document.head.appendChild(link);
    });
  }

  function srcFor(name){
    return `assets/js/${name}.js`;
  }

  function preload(name){
    if(loaded.has(name) || loading.has(name)) return;
    if(document.querySelector(`link[data-feature-preload="${name}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'script';
    link.href = srcFor(name);
    link.dataset.featurePreload = name;
    document.head.appendChild(link);
  }

  function load(name){
    if(loaded.has(name)) return Promise.resolve();
    if(loading.has(name)) return loading.get(name);

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = srcFor(name);
      script.defer = true;
      script.dataset.featureScript = name;
      script.onload = () => {
        loaded.add(name);
        loading.delete(name);
        resolve();
      };
      script.onerror = () => {
        loading.delete(name);
        reject(new Error(`Failed to load ${name}`));
      };
      document.head.appendChild(script);
    });

    loading.set(name, promise);
    return promise;
  }

  function maybeLoadSection(section){
    if(!section || !section.id) return;
    const name = FEATURES[section.id];
    if(!name) return;
    if(!section.classList.contains('is-collapsed')) load(name);
  }

  Object.entries(FEATURES).forEach(([id, name]) => {
    const section = document.getElementById(id);
    if(!section) return;

    // 使用者碰到／滑鼠移入抽屜時就先抓檔案，真正展開時才執行。
    const intent = () => { preload(name); if(name==='profile'||name==='ranking'||name==='theater'||name==='song') warmCharacterImages(); };
    section.addEventListener('pointerenter', intent, {passive:true, once:true});
    section.addEventListener('pointerdown', intent, {passive:true, once:true});
    section.addEventListener('focusin', intent, {passive:true, once:true});

    new MutationObserver(() => maybeLoadSection(section))
      .observe(section, {attributes:true, attributeFilter:['class']});

    maybeLoadSection(section);
  });

  // 深連結：如果網址直接進某一章，先載入那章。
  function loadFromHash(){
    const raw = (location.hash || '').replace(/^#/, '');
    if(!raw) return;
    let target = document.getElementById(raw);
    if(!target) return;
    const section = target.matches?.('.interactive-drawer') ? target : target.closest?.('.interactive-drawer');
    if(section && FEATURES[section.id]) {
      preload(FEATURES[section.id]);
      load(FEATURES[section.id]);
    }
  }
  loadFromHash();
  window.addEventListener('hashchange', loadFromHash);

  // 閒置後才補載剩下互動；避免剛進首頁時同時執行。
  const idleLoad = () => {
    const names = Object.values(FEATURES);
    let i = 0;
    const next = () => {
      if(i >= names.length) return;
      const name = names[i++];
      if(!loaded.has(name)) load(name).finally(() => setTimeout(next, 120));
      else setTimeout(next, 60);
    };
    next();
  };

  if('requestIdleCallback' in window){
    requestIdleCallback(idleLoad, {timeout:5000});
  }else{
    setTimeout(idleLoad, 3000);
  }
})();

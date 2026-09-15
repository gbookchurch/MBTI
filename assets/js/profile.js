/* v196-mbti-entry-touch-guard */
(() => {
  const root = document.getElementById('mbti-lookup');
  if (!root || root.dataset.v196EntryGuard === 'true') return;
  root.dataset.v196EntryGuard = 'true';
  // 額外同步托盤選取狀態，避免只依賴 :has()；舊版 Safari 也能正常看到選中托盤。
  const syncTrayState = () => {
    root.querySelectorAll('.mbti-passport-tray').forEach(tray => {
      const active = !!tray.querySelector('.mbti-option[aria-pressed="true"]');
      tray.classList.toggle('is-current-tray', active);
    });
  };
  root.querySelectorAll('.mbti-option[data-type]').forEach(button => {
    button.addEventListener('click', () => {
      requestAnimationFrame(syncTrayState);
    });
  });
  syncTrayState();
})();

/* v209-passport-portrait-fix-script */
(function(){
  function findCharacterForType(type){
    try{
      if (typeof mbtiData !== 'undefined' && mbtiData && mbtiData[type]) {
        return (mbtiData[type].lay && mbtiData[type].lay.character) ||
               (mbtiData[type].pastor && mbtiData[type].pastor.character) || '';
      }
    }catch(e){}
    var lay = Array.from(document.querySelectorAll('.mbti-card')).find(function(card){
      return new RegExp('\\b'+type+'\\b').test((card.textContent||''));
    });
    if (lay){
      var t=(lay.textContent||'').replace(/\\s+/g,' ').trim();
      var m=t.match(new RegExp(type+'｜([^\\d]+?)\\s+[\\d,]+\\s*人'));
      if(m) return m[1].trim();
    }
    return '';
  }
  function applyPortraits(){
    if (typeof getCharacterArt !== 'function') return false;
    var cards=document.querySelectorAll('#mbti-lookup .mbti-option.mbti-passport-card[data-type]');
    if(!cards.length) return false;
    var applied=0;
    cards.forEach(function(card){
      var type=card.getAttribute('data-type');
      var character=findCharacterForType(type);
      var src=character?getCharacterArt(character):'';
      var ghost=card.querySelector('.mbti-passport-ghost');
      if(!ghost){
        ghost=document.createElement('span');
        ghost.className='mbti-passport-ghost';
        ghost.setAttribute('aria-hidden','true');
        card.appendChild(ghost);
      }
      ghost.innerHTML='';
      if(src){
        var img=document.createElement('img');
        img.alt='';
        img.decoding='async';
        img.loading='lazy';
        img.src=src;
        ghost.appendChild(img);
        card.setAttribute('data-character',character);
        applied++;
      }else{
        card.removeAttribute('data-character');
      }
    });
    return applied>0;
  }
  function boot(n){
    if(applyPortraits()) return;
    if(n>0) setTimeout(function(){boot(n-1)},160);
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){boot(24)},{once:true});
  }else{
    boot(24);
  }
})();

/* v216-selected-passport-state-fix */
(function(){
  function syncSelectedPassport(type){
    document.querySelectorAll('#mbti-lookup .mbti-option.mbti-passport-card[data-type]').forEach(function(card){
      var selected = card.getAttribute('data-type') === type;
      card.classList.toggle('is-passport-selected', selected);
      card.classList.toggle('is-active', selected);
      card.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
  }
  function selectedTypeFromDom(){
    var pressed = document.querySelector('#mbti-lookup .mbti-option.mbti-passport-card[aria-pressed="true"]');
    return pressed ? pressed.getAttribute('data-type') : '';
  }
  function init(){
    var root = document.getElementById('mbti-lookup');
    if(!root || root.dataset.v216PassportFix === 'true') return;
    root.dataset.v216PassportFix = 'true';
    root.querySelectorAll('.mbti-option.mbti-passport-card[data-type]').forEach(function(card){
      card.addEventListener('click', function(){
        var type = card.getAttribute('data-type');
        syncSelectedPassport(type);
        requestAnimationFrame(function(){ syncSelectedPassport(type); });
        setTimeout(function(){ syncSelectedPassport(type); }, 60);
        setTimeout(function(){ syncSelectedPassport(type); }, 220);
      }, true);
    });
    var observer = new MutationObserver(function(mutations){
      var changed = mutations.some(function(m){
        return m.type === 'attributes' && m.attributeName === 'aria-pressed';
      });
      if(!changed) return;
      var type = selectedTypeFromDom();
      if(type){
        document.querySelectorAll('#mbti-lookup .mbti-option.mbti-passport-card[data-type]').forEach(function(card){
          card.classList.toggle('is-passport-selected', card.getAttribute('data-type') === type);
        });
      }
    });
    root.querySelectorAll('.mbti-option.mbti-passport-card[data-type]').forEach(function(card){
      observer.observe(card,{attributes:true,attributeFilter:['aria-pressed']});
    });
    var initial = selectedTypeFromDom();
    if(initial) syncSelectedPassport(initial);
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded',init,{once:true});
  }else{
    init();
  }
})();

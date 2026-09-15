教會 MBTI v307 首屏優先載入版

這版在 v306 架構型優化上，進一步把 JavaScript 按功能拆開。
首頁只先執行抽屜、導覽、分享等核心程式；排行榜、統計、人物小劇場、點歌、人物護照細節，
會在使用者碰到／展開該區，或瀏覽器閒置後才載入。

core.js：約 110 KB
feature-loader.js：約 3 KB
profile.js：約 5 KB
ranking.js：約 7 KB
stats.js：約 39 KB
theater.js：約 115 KB
song.js：約 54 KB

上傳 GitHub Pages 時請整包覆蓋，保留 assets 資料夾結構。

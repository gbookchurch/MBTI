/* v69-question-stats-script */
(() => {
    const QUESTION_DATA = {
        lay: {
            label: '信徒版',
            note: '這次測驗使用免費方案製作，因此無法下載完整三萬多份逐題作答資料，平台目前只能提供每 1,000 份作答的比例統計。本區依照平台提供的每千人資料整理，並不是全部參與者的完整逐題紀錄；資料有限，還請見諒。',
            highlights: [
                ['Q12｜遇到家庭變故','38.4%','第一個想到的是先陪伴','「馬上組關懷小組給陪伴」是這題最多人的選擇。'],
                ['Q7｜什麼算好講道','31.9%','理性與感性都要','只講道理或只講感動都不是最多人的答案。'],
                ['Q10｜做重大抉擇','30.0%','內心平安排第一','第二名「事實印證＋靈性感動」也有 24.7%。'],
                ['Q11｜理想的服事團隊','0.5%','前兩名只差半個百分點','關係密切 23.4%，彈性創意 22.9%，幾乎平手。']
            ],
            questions: [
                {id:1,title:'主日崇拜剛結束，你最自然的下一步是……？',options:[
                    ['A','', '走進人群，開心聊天會讓我很有活力',132,13.2],
                    ['B','', '覺得太吵，藏身角落或快回家才覺得自在',112,11.2],
                    ['C','', '跟大家吃飯，聊點瑣碎，輕鬆互動讓我安心',303,30.3],
                    ['D','', '只想和熟朋友深入討論信息，太吵會很累',171,17.1],
                    ['E','', '自己揪人討論，想法被激發很有成就感',48,4.8],
                    ['F','', '想和親近的人安靜相處，迴避社交感到心安',234,23.4]
                ]},
                {id:2,title:'遇到難解經文時，你的反應是什麼？',options:[
                    ['A','', '需要查透背景與細節，看不明白會焦慮不踏實',212,21.2],
                    ['B','', '一直琢磨象徵意義，雖困惑，但探索讓我覺得充實',274,27.4],
                    ['C','', '容易被主角影響，心會沉重和難過',13,1.3],
                    ['D','', '反思這故事合不合理，有時會懷疑信仰',64,6.4],
                    ['E','', '樂於研究各家解釋，如找不到合理說法會煩躁',96,9.6],
                    ['F','', '默想故事跟自己有什麼關聯，時而受激勵，時而煩悶不安',208,20.8],
                    ['G','', '太燒腦了，先跳過吧',133,13.3]
                ]},
                {id:3,title:'教會討論有爭議的事工時，你會怎樣？',options:[
                    ['A','', '衝第一為愛發聲，大家冷淡會讓我不爽也懊惱',85,8.5],
                    ['B','', '安靜分析利弊，遇焦慮或怕錯通常選擇迴避',311,31.1],
                    ['C','', '出面協調希望維和，壓力大時會覺得很無力',206,20.6],
                    ['D','', '悄悄跟領袖理性溝通，不理大家情緒，這樣我才安心',227,22.7],
                    ['E','', '我不想管，讓他們去擔心就好，我都好',171,17.1]
                ]},
                {id:4,title:'短宣隊期間，哪種情境比較像你？',options:[
                    ['A','', '所有事照計畫進行，突發狀況總讓我覺得焦躁無助',283,28.3],
                    ['B','', '喜歡意外和混亂，無劇本最能激發我的快感',73,7.3],
                    ['C','', '帶大家組織和安排，很有存在感，遇被無視則鬱悶',194,19.4],
                    ['D','', '獨自四處探索，沒規定行程才讓我心情舒坦',142,14.2],
                    ['E','', '工作後獨自安排行程，亂了就開始焦慮難受',84,8.4],
                    ['F','', '跟大家隨意玩耍很快樂，被規則綁死會很不耐煩',224,22.4]
                ]},
                {id:5,title:'小組聚會時，你最有共鳴的場景是？',options:[
                    ['A','', '大家笑聲不斷，自然聊起來，冷場會讓我覺得失落',249,24.9],
                    ['B','', '聽到有人真知灼見最能觸動我，吵鬧時只想遠離',143,14.3],
                    ['C','', '理性辯論越激烈我越投入，反而氣氛太情緒化，會想逃',38,3.8],
                    ['D','', '默默聆聽和代禱最好，被過分分享心事會感到抗拒',97,9.7],
                    ['E','', '溫暖陪伴和代禱時特有安全感，氣氛冷冰冰會心慌',204,20.4],
                    ['F','', '有清楚結構討論我最能專注，純聊天讓我煩分心',139,13.9],
                    ['G','', '準時開始跟結束，尊重每個人的時間最高效、也最負責任',130,13.0]
                ]},
                {id:6,title:'教會要開拓新的分堂，在異象討論會上，哪一種角色的描述，你最有共鳴？',options:[
                    ['A','', '喜歡當後勤總管，負責詳細規劃安排，確保各環節完善。有流程我比較安心，否則容易焦慮不安',185,18.5],
                    ['B','', '喜歡直接投入新社區活動，即使有變動也不怕。喜歡即興嘗試，太多規則反而讓我提不起勁',91,9.1],
                    ['C','', '最愛規劃長遠藍圖和目標，覺得只有異象才能讓事工站得住。沒計畫時內心很沒安全感',175,17.5],
                    ['D','', '喜歡激發創意，提出新點子，看到多元發展讓我非常快樂。有時愛管閒事，但刺激感讓我充實',277,27.7],
                    ['E','', '會提醒大家要想清楚，這是否真的合乎神心意，有沒有開拓的必要，資源是否能用在更好的地方',225,22.5],
                    ['F','', '會反對樓上，鼓勵大家要有信心，相信神一定會帶領開路，不要因為困難而潑自己冷水',47,4.7]
                ]},
                {id:7,title:'你覺得很好的講道，應該是什麼？',options:[
                    ['A','', '講道充滿溫暖與愛，觸動心靈，讓我覺得與神及弟兄姊妹關係更親密，內心平安滿足',82,8.2],
                    ['B','', '講員解經邏輯清晰，推理嚴謹細緻，這份理性讓我安心，信心更踏實',130,13.0],
                    ['C','', '真實且貼近生活的見證故事，深深撫慰鼓勵我，讓我心靈感受到力量',178,17.8],
                    ['D','', '講道新穎啟發，帶來神學新觀點，思想被激盪，讓我充滿動力',111,11.1],
                    ['E','', '理性與感性交織，既教導真理又感人肺腑，常讓我久久難忘',319,31.9],
                    ['F','', '牧師唱作俱佳，聲光效果很讚，就像一場生命與視覺的饗宴',4,0.4],
                    ['G','', '講道中我感受到神的大能，身心靈都有被醫治，感覺充滿神的同在',176,17.6]
                ]},
                {id:8,title:'你的靈修習慣更像？',options:[
                    ['A','', '查經禱告照進度執行，規律讓我安心，沒做到會自責',125,12.5],
                    ['B','', '追求有感動的屬靈體驗，無新火花會覺枯燥',96,9.6],
                    ['C','', '固定參與小組分享代禱，從團契裡獲得溫暖和力量',95,9.5],
                    ['D','', '隨心閱讀討論，不規律但內容自由讓我舒服',203,20.3],
                    ['E','', '有心得就想即刻分享，得不到回饋時會失落',43,4.3],
                    ['F','', '安靜讀經，享受沒人打擾，太多形式會煩',250,25.0],
                    ['G','', '不常讀經，但投入時間禱告與神相遇',73,7.3],
                    ['H','', '讀經容易睡著，喜歡透過唱詩歌來親近主，感覺最真實',74,7.4],
                    ['I','', '很少自己靈修，不如把時間拿去傳福音、關心人',41,4.1]
                ]},
                {id:9,title:'看見教會公布服事同工需求，你會怎麼反應？',options:[
                    ['A','', '很想報名與人互動，跟大家相處能讓我快樂',42,4.2],
                    ['B','', '偏好幕後行政與規劃，不愛站前線，太混亂會不安',108,10.8],
                    ['C','', '第一個考慮最急需的崗位，缺乏目標會亂躁',40,4.0],
                    ['D','', '想從事照顧人、給溫暖，有距離感會覺得心冷',73,7.3],
                    ['E','', '選擇創新挑戰職務，做老套事會很快沒動力',68,6.8],
                    ['F','', '只想安靜獨立把事做好，討厭被人打擾或干涉',74,7.4],
                    ['G','', '渴望能透過音樂、戲劇或舞蹈來服事，在舞台上發光',86,8.6],
                    ['H','', '願意投身在系統性地教導真理，裝備下一代',106,10.6],
                    ['I','', '此刻的我只想好好休息，先不考慮投入任何事工',109,10.9],
                    ['J','', '我沒什麼特別的想法，願意順服安排，哪裡有需要就去哪裡',180,18.0],
                    ['K','', '我會不會太累？擔心投入過深而身心失衡',114,11.4]
                ]},
                {id:10,title:'做重大抉擇時，你相信神怎麼指引？',options:[
                    ['A','', '內心平安是關鍵，沒有感覺容易焦慮和猶豫',300,30.0],
                    ['B','', '注重現實條件事實分析，缺乏邏輯讓我沒安全感',119,11.9],
                    ['C','', '喜歡徵詢屬靈長輩意見，沒共識時會很徬徨',74,7.4],
                    ['D','', '相信異象藍圖，有方向就很有希望，否則感到迷失',72,7.2],
                    ['E','', '需要明確原則和經文，遇到模糊狀況會緊張',63,6.3],
                    ['F','', '喜歡邊做邊學，不行動容易陷入拖延焦慮',93,9.3],
                    ['G','', '隨機翻開聖經，看看神今天要對我說什麼話',23,2.3],
                    ['H','', '找先知預言恩賜的人禱告，相信神會透過他們直接跟我說話',9,0.9],
                    ['I','', '需要注重事實性的印證，同時搭配靈性的感動，缺一不可',247,24.7]
                ]},
                {id:11,title:'你喜歡在什麼樣的教會團隊中服事？',options:[
                    ['A','', '明確目標與成果，沒效率讓我不耐煩',122,12.2],
                    ['B','', '關係密切彼此照顧，被忽略會很難過',234,23.4],
                    ['C','', '彈性自由與鼓勵創意，死板傳統會讓我乏味',229,22.9],
                    ['D','', '重視個人空間，太黏膩或干涉會讓我壓力大',199,19.9],
                    ['E','', '重視固定流程和經驗傳承，改變會讓我不安',43,4.3],
                    ['F','', '氣氛熱絡常互動，悶氣小組會讓我消極',123,12.3],
                    ['G','', '對成員的個人品格和靈性紀律，有著極高要求的團隊',50,5.0]
                ]},
                {id:12,title:'教會中有人遭遇家庭變故，除了支援金錢外，你認為該先做什麼？',options:[
                    ['A','', '清楚規劃行動步驟，沒計畫會手忙腳亂',98,9.8],
                    ['B','', '馬上組關懷小組給陪伴，見人冷淡會覺無力',384,38.4],
                    ['C','', '研究問題根本和長期方案，無頭緒時容易慌張',180,18.0],
                    ['D','', '動員禱告與鼓勵，希望帶來盼望，中斷支持時會焦躁',338,33.8]
                ]}
            ]
        },
        pastor: {
            label: '牧者版',
            note: '這次測驗使用免費方案製作，因此無法下載完整逐題作答資料，平台目前只能提供每 1,000 份作答的比例統計。牧者版原始圖表每題標示 1,000 份，但四個可見選項合計為 999 人／99.9%；本頁照原始資料呈現，不自行補足缺少的 1 份作答。資料有限，還請見諒。',
            highlights: [
                ['Q2｜預備主日講章','56.4%','超過一半最享受找故事','「故事的敘說者」明顯第一，比神學架構、異象或即興探索都高。'],
                ['Q4｜向未信者傳福音','51.3%','先做朋友，再談信仰','超過一半選「關係的建立者」，是這題最集中的答案。'],
                ['Q9｜最核心的牧者角色','48.3%','第一名還是「牧人」','教師、先知、僕人都有支持者，但陪伴羊群明顯站上第一。'],
                ['Q11｜累了怎麼安息','45.0%','真的累了，只想先消失一下','最多人選「歸隱田園」：安排一段不被打擾的長假，徹底放空、獨處。']
            ],
            questions: [
                {id:1,title:'一位核心同工帶著混亂又痛苦的人生難題（家庭、工作、信仰危機交織）來向你求助，你的牧養直覺第一時間會傾向……？',options:[
                    ['A','務實的守護者','先讓他冷靜下來，聽他把話說完。這週先做幾件具體的事，讓他知道接下來有人陪著。',368,36.8],
                    ['B','立即的行動者','先確認眼前最緊急的需要，直接幫他把眼前這關過了再說。',118,11.8],
                    ['C','長遠的策略家','聽出問題背後反覆出現的模式，規劃一條能徹底扭轉這個模式的出路。',214,21.4],
                    ['D','可能性的啟發者','不急著給答案，陪他探索這場困難是否可能帶向一個從沒想過的新方向。',299,29.9]
                ]},
                {id:2,title:'預備主日講章時，你最享受的過程是……？',options:[
                    ['A','神學的建造者','深入研究經文的原文、結構和神學脈絡，建構一篇邏輯嚴謹的信息。',156,15.6],
                    ['B','故事的敘說者','尋找能觸動人心的真實故事和生活見證，讓信息與會眾生命產生共鳴。',564,56.4],
                    ['C','異象的傳遞者','在禱告中領受關於教會未來的異象或屬靈原則，思考如何傳遞出去。',74,7.4],
                    ['D','聖靈的探險家','保持開放，讓聖靈隨時用新的感動或想法插隊，享受預備中的驚喜。',205,20.5]
                ]},
                {id:3,title:'你覺得最理想的「全職教會生活」節奏是……？',options:[
                    ['A','高效的管理者','行事曆排得井然有序，固定備講、研究、會議與探訪，一切按計畫進行。',172,17.2],
                    ['B','熱情的連結者','辦公室大門敞開，大部分時間跟人開會、吃飯、探訪，在人群中服事。',210,21.0],
                    ['C','靈活的游擊隊長','沒有固定辦公時間，哪裡有需要，哪裡就是辦公室。',330,33.0],
                    ['D','沉思的守望者','需要大量不被打擾的獨處時間來禱告、默想和寫作，重視內室裡的事工。',287,28.7]
                ]},
                {id:4,title:'當你向未信者傳達福音時，你最擅長的切入點是……？',options:[
                    ['A','真理的辯護者','從大哉問入手，清楚論證基督教信仰的合理性和真確性。',100,10.0],
                    ['B','關係的建立者','先和他們做朋友，了解故事與感受，在信任關係中分享福音如何觸動生命。',513,51.3],
                    ['C','故事的見證者','分享自己或別人的生命故事，用信主後真實的改變來吸引人。',191,19.1],
                    ['D','盼望的點燃者','從人生意義與未來盼望切入，指出福音提供的答案和可能性。',195,19.5]
                ]},
                {id:5,title:'帶領同工會議時，你通常扮演什麼角色？',options:[
                    ['A','主席','設定議程、控制時間，確保每個議題都有效率地討論並做出結論。',455,45.5],
                    ['B','照顧者','留意同工的情緒和發言感受，營造有愛、和諧、大家都能暢所欲言的氛圍。',290,29.0],
                    ['C','顧問','話不多，專心聆聽，在關鍵時刻提出客觀分析或指出大家沒想到的盲點。',92,9.2],
                    ['D','催化劑','拋出創新的點子腦力激盪，鼓勵大家跳出框架思考。',162,16.2]
                ]},
                {id:6,title:'面對教會未來五年的規劃，你的想法更接近……？',options:[
                    ['A','維護者','守好現有基礎、牧養目前會友、傳承教會優良傳統，比追求擴展更重要。',302,30.2],
                    ['B','企業家','設定大膽、可量化的成長目標，例如五年內會友翻倍並開拓分堂。',49,4.9],
                    ['C','夢想家','夢想教會成為完全不同、充滿創意與生命力的屬靈社群，具體樣貌一起探索。',321,32.1],
                    ['D','思想家','重新思考教會的定義，根據社會文化趨勢制定回應時代挑戰的神學藍圖。',327,32.7]
                ]},
                {id:7,title:'面對會友之間的衝突或八卦，你如何處理？',options:[
                    ['A','法官','邀請雙方坐下，根據聖經原則和事實做出清晰、公正的判斷。',143,14.3],
                    ['B','和事佬','安撫雙方情緒、強調合一，希望大家為了和睦各退一步。',285,28.5],
                    ['C','醫生','把衝突當成病症，私下深入了解背後原因，嘗試從根源處理關係問題。',263,26.3],
                    ['D','隱士','盡量不介入人際糾紛，保持距離，專注講道和教導，相信真理能改變人心。',308,30.8]
                ]},
                {id:8,title:'在夜深人靜時，你如何感受自己與神的呼召？',options:[
                    ['A','立約的僕人','像一個深刻的盟約和責任，是立定心志並決心用一生完成的任務。',115,11.5],
                    ['B','蒙愛的孩子','像一股暖流，是無法言喻的親密感和被愛的感覺，讓我知道我屬於祂。',371,37.1],
                    ['C','蒙召的戰士','像一支不斷催我前進的號角，對失喪的靈魂充滿熱情，想去為主得人。',90,9.0],
                    ['D','奧秘的同行者','像持續的對話和未知的探險，不知道神明天會帶我去哪，但享受這份神秘感。',423,42.3]
                ]},
                {id:9,title:'你認為自己最核心的牧者角色是……？',options:[
                    ['A','教師','準確無誤地傳講聖經真理，建立會友扎實的信仰根基。',76,7.6],
                    ['B','牧人','深入羊群，陪伴、關心他們，在軟弱時給予安慰和支持。',483,48.3],
                    ['C','先知','挑戰會友安於現狀的思維，傳遞更宏大、更具國度性的異象。',219,21.9],
                    ['D','僕人','捲起袖子做最卑微、最實際的服事，以身作則活出基督的樣式。',221,22.1]
                ]},
                {id:10,title:'教會面臨一個重大的財務決策，你需要做出最後的建議。你會……？',options:[
                    ['A','務實的管家','製作詳細財務報表和風險評估，基於客觀數據做出最審慎、負責任的選擇。',341,34.1],
                    ['B','信心的使徒','帶領大家禱告，如果內心有平安和感動，即使看起來冒險也願意憑信心跨出去。',162,16.2],
                    ['C','民主的議長','召開多次會議，充分聆聽並整合核心同工意見，尋求最多人能接受的共識。',339,33.9],
                    ['D','創新的投資者','除了眼前財務，也會思考哪個選項未來最有潛力，能帶來突破性的發展。',157,15.7]
                ]},
                {id:11,title:'一段時間的事奉下來，你感到心力交瘁。你會選擇什麼方式來「安息」？',options:[
                    ['A','歸隱田園','安排一段完全不被打擾的長假，去一個沒人認識我的地方，徹底放空、獨處。',450,45.0],
                    ['B','重返校園','去修神學或領導力課程，讓頭腦重新充電，在知識學習中找到新的力量。',49,4.9],
                    ['C','呼朋引伴','約幾個最親密的牧者朋友一起旅行或退修，在扶持和歡笑中重新得力。',199,19.9],
                    ['D','投入嗜好','做一些跟事工完全無關、很接地氣的事，讓自己重新與真實生活連結。',301,30.1]
                ]},
                {id:12,title:'在你心中，「大使命」的精髓是什麼？',options:[
                    ['A','去','核心是「行動」：走出去，無論得時不得時，都要把福音傳遍地極。',197,19.7],
                    ['B','使萬民作我的門徒','核心是「教導」：建立有效的門徒訓練系統，確保真理完整傳承下去。',93,9.3],
                    ['C','奉父、子、聖靈的名給他們施洗','核心是「歸屬」：帶領人進入教會這個充滿愛的共同體，讓他們找到真正的家。',239,23.9],
                    ['D','凡我所吩咐你們的，都教訓他們遵守','核心是「生命」：關乎生命影響生命、活出基督樣式的內在旅程。',470,47.0]
                ]}
            ]
        }
    };
    window.__CHURCH_QUESTION_DATA = QUESTION_DATA;
    const section = document.getElementById('question-stats-section');
    const audienceButtons = [...document.querySelectorAll('.question-audience-btn')];
    const highlights = document.getElementById('question-stats-highlights');
    const tablist = document.getElementById('question-tablist');
    const heading = document.getElementById('question-panel-heading');
    const summary = document.getElementById('question-panel-summary');
    const bars = document.getElementById('question-bars');
    const note = document.getElementById('question-stats-note');
    const samplePill = document.getElementById('question-sample-pill');
    const explorerLabel = document.getElementById('question-explorer-label');
    if (!section || !highlights || !tablist || !heading || !summary || !bars || !note || !samplePill || !explorerLabel) return;
    let currentAudience = 'lay';
    let currentQuestion = 1;
    const pctText = value => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1);
    function renderHighlights(data) {
        highlights.replaceChildren();
        data.highlights.forEach(([kicker, number, title, detail]) => {
            const card = document.createElement('article');
            card.className = 'question-highlight-card';
            const kickerEl = document.createElement('span');
            kickerEl.className = 'question-highlight-kicker';
            kickerEl.textContent = kicker;
            const numberEl = document.createElement('strong');
            numberEl.className = 'question-highlight-number';
            numberEl.textContent = number;
            const titleEl = document.createElement('div');
            titleEl.className = 'question-highlight-title';
            titleEl.textContent = title;
            const detailEl = document.createElement('div');
            detailEl.className = 'question-highlight-note';
            detailEl.textContent = detail;
            card.append(kickerEl, numberEl, titleEl, detailEl);
            highlights.append(card);
        });
    }
    function renderQuestion(questionId, focusTab = false) {
        const data = QUESTION_DATA[currentAudience];
        const question = data.questions.find(item => item.id === questionId) || data.questions[0];
        currentQuestion = question.id;
        const sorted = [...question.options].sort((a, b) => b[4] - a[4]);
        const top = sorted[0];
        const second = sorted[1];
        const gap = second ? top[4] - second[4] : null;
        tablist.querySelectorAll('.question-tab').forEach(button => {
            const selected = Number(button.dataset.question) === question.id;
            button.setAttribute('aria-selected', String(selected));
            button.tabIndex = selected ? 0 : -1;
            if (selected && focusTab) button.focus();
        });
        heading.textContent = `Q${question.id}｜${question.title}`;
        const topName = top[1] ? `${top[0]}｜${top[1]}` : `${top[0]}｜${top[2]}`;
        if (second && gap < 1) {
            summary.innerHTML = `<span class="question-summary-label">最多人選</span><span class="question-summary-text"><strong>${topName}</strong>（${pctText(top[4])}%），但第二名只差 <strong>${pctText(gap)} 個百分點</strong>。</span>`;
        } else {
            summary.innerHTML = `<span class="question-summary-label">最多人選</span><span class="question-summary-text"><strong>${topName}</strong>，占 <strong>${pctText(top[4])}%</strong>。</span>`;
        }
        bars.replaceChildren();
        sorted.forEach((option, index) => {
            const [letter, name, text, count, percent] = option;
            const row = document.createElement('div');
            row.className = `question-bar-row${index === 0 ? ' is-top' : ''}`;
            const meta = document.createElement('div');
            meta.className = 'question-bar-meta';
            const label = document.createElement('div');
            label.className = 'question-bar-label';
            const letterSpan = document.createElement('span');
            letterSpan.className = 'question-bar-letter';
            letterSpan.textContent = letter;
            label.append(letterSpan);
            if (name) {
                const nameSpan = document.createElement('span');
                nameSpan.className = 'question-option-name';
                nameSpan.textContent = name;
                const descSpan = document.createElement('span');
                descSpan.className = 'question-option-desc';
                descSpan.textContent = text;
                label.append(nameSpan, descSpan);
            } else {
                label.append(document.createTextNode(text));
            }
            const value = document.createElement('div');
            value.className = 'question-bar-value';
            value.textContent = `${count} 人｜${pctText(percent)}%`;
            const track = document.createElement('div');
            track.className = 'question-bar-track';
            track.setAttribute('aria-hidden', 'true');
            const fill = document.createElement('div');
            fill.className = 'question-bar-fill';
            fill.style.setProperty('--pct', String(percent));
            track.append(fill);
            meta.append(label, value);
            row.append(meta, track);
            bars.append(row);
        });
    }
    function buildTabs() {
        const questions = QUESTION_DATA[currentAudience].questions;
        tablist.replaceChildren();
        questions.forEach((question, index) => {
            const button = document.createElement('button');
            button.className = 'question-tab';
            button.type = 'button';
            button.role = 'tab';
            button.dataset.question = String(question.id);
            button.id = `question-tab-${currentAudience}-${question.id}`;
            button.setAttribute('aria-controls', 'question-panel');
            button.setAttribute('aria-selected', String(index === 0));
            button.tabIndex = index === 0 ? 0 : -1;
            button.textContent = `Q${question.id}`;
            button.addEventListener('click', () => renderQuestion(question.id));
            button.addEventListener('keydown', event => {
                const tabs = [...tablist.querySelectorAll('.question-tab')];
                const current = tabs.indexOf(button);
                let next = null;
                if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (current + 1) % tabs.length;
                if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (current - 1 + tabs.length) % tabs.length;
                if (event.key === 'Home') next = 0;
                if (event.key === 'End') next = tabs.length - 1;
                if (next !== null) {
                    event.preventDefault();
                    renderQuestion(Number(tabs[next].dataset.question), true);
                }
            });
            tablist.append(button);
        });
    }
    function renderAudience(audience, focusSwitch = false) {
        currentAudience = QUESTION_DATA[audience] ? audience : 'lay';
        currentQuestion = 1;
        const data = QUESTION_DATA[currentAudience];
        section.dataset.audience = currentAudience;
        audienceButtons.forEach(button => {
            const selected = button.dataset.audience === currentAudience;
            button.setAttribute('aria-pressed', String(selected));
            if (selected && focusSwitch) button.focus();
        });
        samplePill.textContent = `${data.label}｜每題 n = 1,000`;
        explorerLabel.textContent = currentAudience === 'pastor' ? '看看牧者的心態' : '看看會友的心思';
        note.innerHTML = `<strong>資料說明：</strong>${data.note}`;
        renderHighlights(data);
        buildTabs();
        renderQuestion(1);
    }
    audienceButtons.forEach(button => {
        button.addEventListener('click', () => renderAudience(button.dataset.audience));
        button.addEventListener('keydown', event => {
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
            event.preventDefault();
            const next = button.dataset.audience === 'lay' ? 'pastor' : 'lay';
            renderAudience(next, true);
        });
    });
    renderAudience('lay');
})();

/* v224-pastor-prediction-game-script */
(() => {
  const section = document.getElementById('question-stats-section');
  const data = window.__CHURCH_QUESTION_DATA;
  if (!section || !data?.pastor?.questions?.length) return;
  const gameBtn = document.getElementById('question-mode-game');
  const layBtn = document.getElementById('question-mode-lay');
  const pastorBtn = document.getElementById('question-mode-pastor');
  const game = document.getElementById('pastor-guess-game');
  const stage = document.getElementById('pastor-guess-stage');
  const final = document.getElementById('pastor-guess-final');
  const progress = document.getElementById('pastor-guess-progress');
  const scoreEl = document.getElementById('pastor-guess-score');
  const qNo = document.getElementById('pastor-guess-question-no');
  const qText = document.getElementById('pastor-guess-question');
  const optionsEl = document.getElementById('pastor-guess-options');
  const reveal = document.getElementById('pastor-guess-reveal');
  const nextBtn = document.getElementById('pastor-guess-next');
  if (!gameBtn || !layBtn || !pastorBtn || !game || !stage || !final || !progress || !scoreEl || !qNo || !qText || !optionsEl || !reveal || !nextBtn) return;
  const questions = data.pastor.questions;
  let index = 0;
  let score = 0;
  const guesses = new Map();
  const pct = value => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1);
  function setMode(mode, focus = false){
    const isGame = mode === 'game';
    const isLay = mode === 'lay';
    const isPastor = mode === 'pastor';
    section.classList.toggle('question-game-mode', isGame);
    [[gameBtn,isGame],[layBtn,isLay],[pastorBtn,isPastor]].forEach(([btn,active]) => {
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    if (!isGame){
      const target = document.querySelector(`#question-stats-section .question-audience-btn[data-audience="${isPastor ? 'pastor' : 'lay'}"]`);
      target?.click();
    }
    if (focus) (isGame ? gameBtn : isLay ? layBtn : pastorBtn).focus();
  }
  function topOption(question){
    return [...question.options].sort((a,b) => b[4] - a[4])[0];
  }
  function makeOption(option, answered, guessedLetter, answerLetter){
    const [letter,name,text] = option;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'pastor-guess-option';
    if (answered && guessedLetter === letter) button.classList.add('is-guessed');
    if (answered && answerLetter === letter) button.classList.add('is-answer');
    button.disabled = answered;
    button.dataset.letter = letter;
    const letterEl = document.createElement('span');
    letterEl.className = 'pastor-guess-option-letter';
    letterEl.textContent = letter;
    const copy = document.createElement('span');
    const strong = document.createElement('strong');
    strong.textContent = name || `選項 ${letter}`;
    const p = document.createElement('p');
    p.textContent = text;
    copy.append(strong,p);
    button.append(letterEl,copy);
    if (!answered) button.addEventListener('click', () => answer(letter));
    return button;
  }
  function renderReveal(question, guessedLetter){
    const answer = topOption(question);
    const correct = guessedLetter === answer[0];
    const guessed = question.options.find(opt => opt[0] === guessedLetter);
    reveal.hidden = false;
    reveal.replaceChildren();
    const verdict = document.createElement('div');
    verdict.className = 'pastor-guess-verdict';
    const b = document.createElement('b');
    b.textContent = correct ? '你猜中了。' : '這題和你想的不一樣。';
    const span = document.createElement('span');
    const answerName = answer[1] || answer[2];
    span.textContent = `牧者最多選 ${answer[0]}｜${answerName}，占 ${pct(answer[4])}%。${correct ? '' : `你猜的是 ${guessedLetter}${guessed?.[1] ? `｜${guessed[1]}` : ''}。`}`;
    verdict.append(b,span);
    const bars = document.createElement('div');
    bars.className = 'pastor-reveal-bars';
    question.options.forEach(opt => {
      const row = document.createElement('div');
      row.className = 'pastor-reveal-row' + (opt[0] === answer[0] ? ' is-top' : '');
      const letter = document.createElement('span');
      letter.textContent = opt[0];
      const track = document.createElement('div');
      track.className = 'pastor-reveal-track';
      const fill = document.createElement('div');
      fill.className = 'pastor-reveal-fill';
      fill.style.setProperty('--pct', `${opt[4]}%`);
      track.append(fill);
      const value = document.createElement('strong');
      value.textContent = `${pct(opt[4])}%`;
      row.append(letter,track,value);
      bars.append(row);
    });
    const assumption = document.createElement('div');
    assumption.className = 'pastor-guess-assumption';
    const assumptionKicker = document.createElement('span');
    assumptionKicker.textContent = 'CHECK YOUR ASSUMPTION';
    const assumptionText = document.createElement('p');
    assumptionText.textContent = correct
      ? '你猜中了。不過先別急著把它當成「很懂牧者」：也可能只是你原本對牧者的想像，剛好跟這次調查一致。'
      : '猜錯也很有意思。你剛剛選的答案，可能就是你心裡覺得「牧者應該會這樣選」的答案。';
    assumption.append(assumptionKicker,assumptionText);
    reveal.append(verdict,bars,assumption);
  }
  function answer(letter){
    const question = questions[index];
    if (guesses.has(question.id)) return;
    const answerLetter = topOption(question)[0];
    guesses.set(question.id, letter);
    if (letter === answerLetter) score += 1;
    scoreEl.textContent = String(score);
    optionsEl.replaceChildren(...question.options.map(opt => makeOption(opt,true,letter,answerLetter)));
    renderReveal(question,letter);
    nextBtn.hidden = false;
    nextBtn.textContent = index === questions.length - 1 ? '看我的結果 →' : '下一題 →';
  }
  function renderQuestion(){
    const question = questions[index];
    progress.textContent = String(index + 1);
    scoreEl.textContent = String(score);
    qNo.textContent = `QUESTION ${String(index + 1).padStart(2,'0')}`;
    qText.textContent = question.title;
    const guessedLetter = guesses.get(question.id);
    const answered = Boolean(guessedLetter);
    const answerLetter = topOption(question)[0];
    optionsEl.replaceChildren(...question.options.map(opt => makeOption(opt,answered,guessedLetter,answerLetter)));
    if (answered) renderReveal(question,guessedLetter);
    else { reveal.hidden = true; reveal.replaceChildren(); }
    nextBtn.hidden = !answered;
    nextBtn.textContent = index === questions.length - 1 ? '看我的結果 →' : '下一題 →';
    stage.hidden = false;
    final.hidden = true;
  }
  function resultCopy(){
    if (score >= 9) return ['牧者雷達很準','你對這批牧者樣本的選擇直覺抓得很準，很多答案都沒有出乎你意料。'];
    if (score >= 5) return ['抓到不少牧養直覺','你抓到了一些明顯趨勢，但也有幾題顯示：實際資料和我們腦中的牧者印象不完全一樣。'];
    return ['資料給了你不少意外','這 12 題裡有不少答案和你的預測不同；也正因如此，這批資料值得看。'];
  }
  async function shareScore(){
    const url = `${location.origin}${location.pathname}#faith-stats`;
    const shareData = {
      title:'猜猜牧者怎麼選',
      text:`我在「猜猜牧者怎麼選」12 題裡猜中了 ${score} 題。你能猜中幾題？`,
      url
    };
    try{
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareData.text} ${url}`);
        const btn = final.querySelector('[data-share-score]');
        if (btn){ const old=btn.textContent; btn.textContent='已複製分享文字 ✓'; setTimeout(()=>btn.textContent=old,1600); }
      }
    }catch(err){ if (err?.name !== 'AbortError') console.warn(err); }
  }
  function showFinal(){
    stage.hidden = true;
    final.hidden = false;
    const [title,copy] = resultCopy();
    final.innerHTML = `
      <small>YOUR PASTOR PREDICTION SCORE</small>
      <h4>${title}</h4>
      <div class="pastor-final-score">${score}<span style="font-size:.34em;font-weight:800;color:#80665A"> / 12</span></div>
      <p>${copy}</p>
      <p class="pastor-guess-final-reflection">這不是在考你「懂不懂牧者」。比較像是把自己的直覺拿出來對照看看：哪些跟這次調查一樣，哪些不一樣。</p>
      <div class="pastor-guess-final-actions">
        <button type="button" data-restart>再猜一次</button>
        <button class="is-secondary" type="button" data-share-score>分享我的分數</button>
        <button class="is-secondary" type="button" data-open-stats>看牧者完整統計</button>
      </div>`;
    final.querySelector('[data-restart]')?.addEventListener('click', restart);
    final.querySelector('[data-share-score]')?.addEventListener('click', shareScore);
    final.querySelector('[data-open-stats]')?.addEventListener('click', () => setMode('pastor'));
  }
  function restart(){
    index = 0;
    score = 0;
    guesses.clear();
    renderQuestion();
  }
  nextBtn.addEventListener('click', () => {
    if (index >= questions.length - 1) showFinal();
    else { index += 1; renderQuestion(); }
  });
  gameBtn.addEventListener('click', () => setMode('game'));
  layBtn.addEventListener('click', () => setMode('lay'));
  pastorBtn.addEventListener('click', () => setMode('pastor'));
  const modeOrder = ['game','lay','pastor'];
  const modeButtons = {game:gameBtn,lay:layBtn,pastor:pastorBtn};
  Object.entries(modeButtons).forEach(([mode,btn]) => {
    btn.addEventListener('keydown', e => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const i = modeOrder.indexOf(mode);
      const next = e.key === 'ArrowRight' ? (i + 1) % modeOrder.length : (i - 1 + modeOrder.length) % modeOrder.length;
      setMode(modeOrder[next], true);
    });
  });
  setMode('game');
  renderQuestion();
})();

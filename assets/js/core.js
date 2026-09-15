/* v99-entry-top-fix */
(function () {
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }
    const forceHomeTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
    };
    forceHomeTop();
    document.addEventListener('DOMContentLoaded', forceHomeTop, { once: true });
    window.addEventListener('load', () => requestAnimationFrame(forceHomeTop), { once: true });
    window.addEventListener('pageshow', () => requestAnimationFrame(forceHomeTop));
})();
const MBTI_TYPES = [
            'INTJ', 'INTP', 'ENTJ', 'ENTP',
            'INFJ', 'INFP', 'ENFJ', 'ENFP',
            'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
            'ISTP', 'ISFP', 'ESTP', 'ESFP'
        ];
        const MBTI_PROFILE_MASTER = {"ESTP":{"character":"彼得","title":"企業家","tags":"果斷、實際、愛冒險","book":"馬可福音","faith":6,"eq":6,"lonely":4,"strengths":"精力充沛、注重行動；善於抓住機會；有魅力；在緊急情況下反應迅速。","weaknesses":"容易衝動、缺乏耐心；不喜歡理論；有時會因魯莽而犯錯。","friend":"ENFJ 亞伯拉罕。對方的安定、細心和支持，能為喜歡冒險、活在當下的你提供可靠的後方基地。","rival":"INFJ 但以理。你的現實主義和眼見為憑，與對方對弦外之音和深層意義的追求，容易在看待世界的根本方式上產生衝突。","intro":"彼得是一位充滿激情、行動先於思考的漁夫。他第一個認出耶穌是基督，也曾衝動地拔刀砍掉士兵的耳朵。他活在當下，勇於冒險。"},"ISTP":{"character":"參孫","title":"巧匠","tags":"實用、冷靜、臨危不亂","book":"箴言","faith":6,"eq":5,"lonely":7,"strengths":"注重實際；足智多謀；善於隨機應變；在危機中能保持冷靜和理性。","weaknesses":"容易衝動；不喜歡承諾和長遠規劃；可能忽視情感和人際關係的複雜性。","friend":"ESTJ 摩西。兩者都是務實的行動派。對方能提供你所欠缺的長遠規劃和組織性，而你能提供臨場應變和技術支援。","rival":"ENFJ 亞伯拉罕。你的獨立和對任務的專注，可能讓渴望情感連結的對方感到被忽視；而對方的熱情和對人的關注，則會讓你感到分心和不自在。","intro":"他是一位憑藉神所賜予的超凡力量行動的士師。他的行為往往是即興的、實際的，直接用行動來解決問題，無論是殺死獅子還是對抗非利士人。"},"INTJ":{"character":"保羅","title":"建築師","tags":"策略規劃、遠見、獨立","book":"羅馬書","faith":8,"eq":6,"lonely":7,"strengths":"具備宏大的異象、邏輯清晰；意志堅定、善於策略規劃；能夠將複雜的信仰概念系統化，並為達成目標堅持不懈。","weaknesses":"有時可能顯得固執、缺乏耐心；不善於處理他人的情感；對不符合其邏輯與標準的人事物批判性較強。","friend":"ENFP 巴拿巴。對方的熱情與創意能點燃你的生活並欣賞你深刻的遠見；你的安定和計畫能力則能幫助他的夢想落地。","rival":"ESFP 撒馬利亞婦人。你長遠規劃和理論深度，與對方活在當下、注重感官體驗的生活方式形成巨大反差，容易覺得對方不切實際或太過嚴肅。","intro":"原是迫害基督徒的法利賽人，後經歷戲劇性轉變，成為早期教會最重要、最具影響力的思想家和宣教士。他建立了初代教會的神學框架，並有策略地規劃多次宣教旅程。"},"ISFP":{"character":"大衛","title":"探險家","tags":"溫和、隨和、藝術感","book":"詩篇","faith":7,"eq":7,"lonely":6,"strengths":"溫和、有藝術氣質；忠於內心價值觀；活在當下；富有同情心。","weaknesses":"非常不喜歡衝突；情緒敏感多變；在做長遠規劃方面可能比較薄弱。","friend":"ENFJ 亞伯拉罕。對方的遠見和鼓舞人心的能力，能欣賞並提升你的藝術才華，為其創作賦予更宏大的意義和舞台。","rival":"ENTJ 底波拉。你活在當下、忠於自我感受的藝術家氣質，與對方目標導向、著眼未來的指揮官風格，在生活節奏和決策方式上截然不同。","intro":"在成為君王之前，大衛是一位牧羊人、音樂家和詩人，他透過詩篇表達了自己最深刻的情感。從讚美、喜悅到懷疑、痛苦，他的內心世界豐富而敏感。"},"ESFP":{"character":"撒馬利亞婦人","title":"表演者","tags":"熱情、外向、樂於助人","book":"腓立比書","faith":6,"eq":7,"lonely":3,"strengths":"熱情奔放；喜歡與人互動、慷慨；會享受生活；善於將人們聚集在一起。","weaknesses":"不喜歡獨處；可能尋求刺激而忽略後果；在處理複雜的抽象概念時會感到困難。","friend":"ISTJ 尼希米。對方的計畫性和責任感，能為你多姿多彩的生活帶來必要的安定和秩序；而你能為對方注入輕鬆、歡樂和社交活力。","rival":"INTJ 保羅。你追求即時的快樂和感官體驗，而對方專注於長遠的規劃和抽象理念，兩者幾乎像是活在不同的星球。","intro":"她在井邊與耶穌的相遇，展現了她直率、善於交際的性格。在經歷生命的改變後，她立刻跑回城裡，熱情地向所有人分享她的經歷。"},"ENFP":{"character":"巴拿巴","title":"競選者","tags":"樂觀、鼓舞人心、充滿創意","book":"使徒行傳","faith":7,"eq":8,"lonely":4,"strengths":"熱情洋溢、富有感染力；善於鼓勵他人；充滿創意；喜歡探索新的可能性。","weaknesses":"容易分心；不喜歡處理細節和繁瑣的行政；有時想法多變；難以貫徹到底。","friend":"INTJ 保羅。對方的深度、策略和可靠性能為你天馬行空的想法提供一個堅實的支持和實現路徑，讓夢想不再只是夢想。","rival":"ISTJ 尼希米。你的隨性、多變和對新可能性的熱情，在對方看來可能混亂和不可靠；而對方對傳統和規則的堅持，則會讓你感到窒息。","intro":"他的名字意為「勸慰子」，他總是能看到他人的潛力。他接納了曾被眾人排斥的保羅，並給予年輕的馬可第二次機會。他充滿熱情，是連結眾人的催化劑。"},"ISTJ":{"character":"尼希米","title":"物流師","tags":"忠誠、重視細節、實事求是","book":"尼希米記","faith":8,"eq":6,"lonely":6,"strengths":"盡忠職守、注重細節；有條理；誠實可靠；尊重傳統與規則。","weaknesses":"有時會顯得固執；不夠靈活；抗拒改變；可能會忽略他人的情感需求。","friend":"ESFP 撒馬利亞婦人。對方能為你嚴謹規律的生活帶來陽光、樂趣和即興色彩，而你的安定和可靠則能給予對方安全感。","rival":"ENFP 巴拿巴。你的座右銘是「按部就班」，而對方的座右銘是「讓我們看看會發生什麼！」兩者在生活節奏和價值排序上存在根本矛盾。","intro":"作為波斯王的酒政，他聽聞耶路撒冷城牆頹圮，便帶著使命感回去重建。他是一位傑出的管理者和組織者，詳細規劃、分配任務、監督進度，並在反對聲中堅持完成使命。"},"INTP":{"character":"多馬","title":"邏輯學家","tags":"分析、好奇、理性","book":"傳道書","faith":7,"eq":5,"lonely":8,"strengths":"充滿好奇心、客觀；追求真理與知識；思想開放；不盲從。","weaknesses":"可能因為過度分析而陷入懷疑與現實脫節；在需要憑信心行動時，會感到猶豫。","friend":"ENTJ 底波拉。你的深度思考和創新理念，能為對方的宏大計畫提供完整理論支持；對方的決斷力和執行力則能將你的想法變為現實。","rival":"ESFJ 馬大。你對抽象理論的熱愛和不喜社交的傾向，與對方重視社群和諧、實際需求的價值觀，容易產生摩擦。","intro":"被稱為「懷疑的多馬」，他需要親眼看見、親手觸摸耶穌復活的證據才願意相信。這代表了他對真理的渴求，是建立在理性驗證和個人理解之上。"},"INFJ":{"character":"但以理","title":"提倡者","tags":"洞察、理想、同理心","book":"但以理書","faith":9,"eq":8,"lonely":7,"strengths":"富有理想、有原則；具備深刻的洞察力；關懷他人；有強烈的使命感。","weaknesses":"容易因理想與現實的差距而感到失望；對他人的批評非常敏感；有時會過度背負他人的重擔。","friend":"ENTP 雅各。對方的機智與開放性能激發你的潛能，並欣賞其深邃思想；你的安定與洞察力則能引導對方的創造力走向更深遠的目標。","rival":"ESTP 彼得。你重視未來和深層意義，而對方專注於當下的刺激和感官現實，兩者對「什麼是重要的」有著根本分歧。","intro":"在被擄到巴比倫的異國宮廷中，但以理始終堅守信仰原則，同時以其超凡的智慧和解夢能力服事君王。他對未來有深刻洞察力，並為自己的同胞懷有深切負擔。"},"ENFJ":{"character":"亞伯拉罕","title":"主人公","tags":"有感染力、善於啟發他人","book":"希伯來書","faith":8,"eq":9,"lonely":5,"strengths":"富有魅力和感召力；善於溝通；關懷並激勵他人；是天生的社群建立者。","weaknesses":"有時可能過於理想化；為了和諧而犧牲自己的需要；可能會過度干預他人的生活。","friend":"INFP 約翰。你能被對方的真誠和深度所吸引，並有能力引導和激勵他們；對方則能為你提供一個可以展現真實情感的避風港。","rival":"ISTP 參孫。你天生渴望與人連結和建立社群，而對方是獨立的個體戶，這種差異會讓你感到挫敗，讓對方感到被侵犯。","intro":"被稱為「信心之父」，他順服神的呼召，離開本地本族，前往未知的應許之地。他是一位天生的族長，熱情好客，並能激勵和帶領跟隨他的人。"},"ENTJ":{"character":"底波拉","title":"指揮官","tags":"領導、果斷、組織力","book":"士師記","faith":7,"eq":6,"lonely":6,"strengths":"天生的領袖、果斷；有遠見、善於組織與動員；能自信地帶領眾人朝著共同目標前進。","weaknesses":"可能顯得強勢；缺乏耐心；對效率和結果的追求有時會忽略他人的感受。","friend":"INTP 多馬。這是個智識上的強力組合。對方能提供你所需的深度分析和創意，而你能帶領對方走出理論，實現共同目標。","rival":"ISFP 大衛。你的目標導向和對效率的追求，可能會無意中傷害到對方敏感的內心和個人價值觀，而對方的隨性則可能讓你感到失控。","intro":"她是舊約中的一位女士師、先知和軍事策略家。在以色列人受壓迫時，她果斷地發號施令，帶領以色列人贏得勝利。"},"INFP":{"character":"約翰","title":"調停者","tags":"感性、忠於自我、理想主義","book":"約翰福音","faith":9,"eq":8,"lonely":8,"strengths":"富有同理心；忠於自己的價值觀；充滿創意與想像力；尋求和諧與深層次的連結。","weaknesses":"極度理想化；在面對衝突時可能會逃避；容易沉浸在自己的情感世界中。","friend":"ENFJ 亞伯拉罕。對方的熱情、領導力和對人的關懷，能給予你巨大的肯定和支持，幫助你將內心的理想實現出來，是一個非常溫暖的組合。","rival":"ESTJ 摩西。你的理想主義和對個人價值的堅持，與對方注重規則、效率和集體標準的作風，會在「應該如何做事」上產生持續衝突。","intro":"被稱為「耶穌所愛的那門徒」，他的福音書和書信中充滿了對「愛」、「光」和「生命」的深刻感悟。他更關注人內在的靈性狀態和與神的關係。"},"ESFJ":{"character":"馬大","title":"執政官","tags":"關懷、善於協調、樂於服務","book":"路加福音","faith":7,"eq":8,"lonely":4,"strengths":"熱情好客、有責任心；樂於助人；注重社群和諧；善於處理實際事務。","weaknesses":"容易過度擔心他人的看法而焦慮；可能忽略自己的需求；有時會過於注重傳統和社會規範。","friend":"INTP 多馬。這是經典的互補組合。你能將對方從純理論的世界中拉出來，關心其生活並引介給社群；對方則能為你提供深刻洞見和客觀分析。","rival":"ISTP 參孫。你熱心腸地想幫助和融入，但對方極度獨立、喜歡自己解決問題。你的關心可能被視為干涉，而對方的冷靜則可能被視為冷漠。","intro":"在耶穌到訪她家時，馬大忙於伺候，熱切地想為客人提供最好的款待。她關心實際的需求，是社群中的關懷者和服務者。"},"ENTP":{"character":"雅各","title":"辯論家","tags":"創新、辯論、挑戰傳統","book":"創世記","faith":6,"eq":7,"lonely":5,"strengths":"機智聰明、反應迅速；善於發現問題和新的可能性；勇於挑戰權威和傳統。","weaknesses":"可能喜歡為了辯論而辯論；不喜歡遵循規則；有時顯得不夠可靠或狡猾。","friend":"INFJ 但以理。對方的深刻洞見和堅定信念，能給你無盡的靈感探索一個安定的「錨」；你則能幫助對方放鬆，並從更多元角度看世界。","rival":"ISFJ 路得。你喜愛挑戰傳統、質疑一切的風格，會直接衝擊到對方對安定、和諧與秩序的根本需求，是最經典的衝突組合之一。","intro":"從用計謀騙取長子名分和祝福，到與神摔跤並得名「以色列」，雅各的一生充滿了挑戰、計謀和辯論。他總是在尋找機會，挑戰現狀。"},"ISFJ":{"character":"路得","title":"守衛者","tags":"溫柔、樂於助人、持守本分","book":"路得記","faith":9,"eq":8,"lonely":5,"strengths":"忠誠可靠、有愛心；樂於奉獻、注重細節；有強烈的責任感來保護和照顧所愛的人。","weaknesses":"不喜歡改變；過於謙遜以至於壓抑自己的需求；在面對衝突時傾向於退讓。","friend":"ESTP 彼得。對方的冒險精神能帶領你體驗世界的精彩，而你的溫暖和細心則能為對方提供一個安心的「家」，讓他們有充電和停靠的港灣。","rival":"ENTP 雅各。對方對傳統的質疑和辯論的熱愛，會讓重視和諧與安定的你感到極大不安與壓力，覺得自己的世界被攪亂。","intro":"在丈夫去世後，她選擇忠誠地跟隨婆婆拿俄米，離開自己的故鄉，來到一個陌生的國度。她以謙卑、勤勞和善良的品格默默照顧婆婆，最終蒙神賜福。"},"ESTJ":{"character":"摩西","title":"總經理","tags":"務實、領導能力、組織力強","book":"出埃及記","faith":7,"eq":6,"lonely":5,"strengths":"天生的組織者；決策力強；注重秩序與法規；有強烈的責任感。","weaknesses":"有時會因壓力而發怒；可能顯得固執、缺乏彈性；傾向於用自己的方式做事。","friend":"ISFP 大衛。對方能幫助務實的你接觸到內心的情感和生活美學，軟化你強硬的作風；你則能為對方提供實現藝術所需的結構和方向。","rival":"INFP 約翰。你的集體主義和對規章制度的強調，與對方的個人主義和對內心價值的絕對忠誠，幾乎在所有層面都會產生衝突。","intro":"神揀選他帶領數百萬以色列人出埃及。他是一位強大的律法頒布者、組織者和管理者。他建立了以色列的社會和宗教體系，並處理各種實際的民生問題。"}};
        const PROFILE_SITE_URL = 'https://gbookchurch.github.io/MBTI/';
        const PROFILE_PALETTE = {
            SJ: {accent:'#6F877B', deep:'#455D51', soft:'#EDF2EE'},
            NF: {accent:'#B28A3F', deep:'#70592C', soft:'#F6EFD9'},
            SP: {accent:'#B76745', deep:'#78412E', soft:'#F6E7DF'},
            NT: {accent:'#304C40', deep:'#1F372E', soft:'#E7EEEA'}
        };
        const BASE_TITLE = '教會 MBTI 大調查 | 近 3 萬位基督徒最像哪種人格？';
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const MBTI_PROFILE_EXTRAS = {
            "ESTP": {
                        "tags": "果斷、實際、愛冒險",
                        "reps": [
                                    {
                                                "name": "馬偕 George Leslie Mackay",
                                                "role": "加拿大來台宣教士",
                                                "desc": "向外的開拓者，勇於冒險進入全新的文化，以務實、直接的行動從零開始建立事業。"
                                    },
                                    {
                                                "name": "馬丁路德 Martin Luther",
                                                "role": "德國宗教改革家",
                                                "desc": "向內的改革者，以無比勇氣和衝勁直接挑戰當時龐大而僵化的體制，引發翻天覆地的改革。"
                                    }
                        ]
            },
            "ISTP": {
                        "tags": "實用、冷靜、臨危不亂",
                        "reps": [
                                    {
                                                "name": "林書豪 Jeremy Lin",
                                                "role": "美籍台裔籃球員",
                                                "desc": "人造場域的巧匠，在高速的籃球賽場上，與隊友和對手進行戰術博弈。"
                                    },
                                    {
                                                "name": "貝瑟尼．漢密爾頓 Bethany Hamilton",
                                                "role": "美國衝浪選手",
                                                "desc": "自然場域的巧匠，在變幻莫測的大海中，展現對極端環境的驚人適應力與問題解決能力。"
                                    }
                        ]
            },
            "INTJ": {
                        "tags": "策略規劃、遠見、獨立",
                        "reps": [
                                    {
                                                "name": "C.S. 路易斯 C.S. Lewis",
                                                "role": "英國作家、學者",
                                                "desc": "橋樑的建築師，他建構富於想像力的世界與通俗論證，為現代人搭建通往信仰的橋樑。"
                                    },
                                    {
                                                "name": "約翰．加爾文 John Calvin",
                                                "role": "法國宗教改革家、神學家",
                                                "desc": "體系的建築師，他建構了一座宏偉、精密的神學思想體系，為新教神學奠定數百年的根基。"
                                    }
                        ]
            },
            "ISFP": {
                        "tags": "溫和、隨和、藝術感",
                        "reps": [
                                    {
                                                "name": "柯麗．鄧．波姆 Corrie ten Boom",
                                                "role": "荷蘭作家、集中營倖存者",
                                                "desc": "生命的見證，她原是一位安靜的鐘錶匠，其內在價值觀讓她在時代洪流中活出勇氣與犧牲。"
                                    },
                                    {
                                                "name": "文森．梵谷 Vincent van Gogh",
                                                "role": "荷蘭畫家",
                                                "desc": "情感的畫布，一位內心充滿激情與掙扎的藝術家，其作品是他對世界、光影和信仰強烈感受的直接傾倒。"
                                    }
                        ]
            },
            "ESFP": {
                        "tags": "熱情、外向、樂於助人",
                        "reps": [
                                    {
                                                "name": "柯克．富蘭克林 Kirk Franklin",
                                                "role": "美國福音音樂家",
                                                "desc": "舞台上的表演者，他以極富感染力的音樂和舞台魅力，將人們聚集在一起，將信仰變成充滿活力的慶典。"
                                    },
                                    {
                                                "name": "方濟各 Pope Francis",
                                                "role": "天主教會教宗",
                                                "desc": "人群中的表演者，他以溫暖、謙卑、自發性的親民舉動，直接與人們建立情感連結，傳遞愛與喜樂。"
                                    }
                        ]
            },
            "ENFP": {
                        "tags": "樂觀、鼓舞人心、充滿創意",
                        "reps": [
                                    {
                                                "name": "力克．胡哲 Nick Vujicic",
                                                "role": "澳洲勵志演說家",
                                                "desc": "為希望而競選，他以自身不可思議的生命故事，在全球為「凡事都有可能」的信念作見證，點燃人們的希望。"
                                    },
                                    {
                                                "name": "凱瑟琳．卜維廉 Catherine Booth",
                                                "role": "救世軍創辦人之一",
                                                "desc": "為社會改革而競選，她在19世紀為社會公義和信仰實踐的理念競選，並建立了一個延續至今的全球性組織。"
                                    }
                        ]
            },
            "ISTJ": {
                        "tags": "忠誠、重視細節、實事求是",
                        "reps": [
                                    {
                                                "name": "伊麗莎白．艾略特 Elisabeth Elliot",
                                                "role": "美國作家、演說家",
                                                "desc": "對個人呼召的忠誠，她在極度的個人悲劇中，依然堅守崗位，以其堅忍的生命和清晰的教導成為無數人的榜樣。"
                                    },
                                    {
                                                "name": "潘霍華 Dietrich Bonhoeffer",
                                                "role": "德國神學家、殉道者",
                                                "desc": "原則的守護者，他以學者的嚴謹和殉道者的勇氣，在邪惡時代為信仰的具體實踐和代價作出沉重見證。"
                                    }
                        ]
            },
            "INTP": {
                        "tags": "分析、好奇、理性",
                        "reps": [
                                    {
                                                "name": "李．史特博 Lee Strobel",
                                                "role": "美國作家、前記者",
                                                "desc": "應用的邏輯學家，他發揮記者的調查精神，將邏輯框架應用於現實證據，透過追尋與驗證來確立信仰。"
                                    },
                                    {
                                                "name": "卡爾．巴特 Karl Barth",
                                                "role": "瑞士神學家",
                                                "desc": "理論的邏輯學家，20世紀神學巨匠，以窮盡畢生之力建構龐大、複雜、自成一格的神學體系。"
                                    }
                        ]
            },
            "INFJ": {
                        "tags": "洞察、理想、同理心",
                        "reps": [
                                    {
                                                "name": "馬丁．路德．金 Martin Luther King Jr.",
                                                "role": "美國民權領袖",
                                                "desc": "社會改革型的倡議者，他將內心對公義的深刻異象，透過充滿魅力的演說和社會運動向外投射，致力於改變現實世界。"
                                    },
                                    {
                                                "name": "J.R.R. 托爾金 J.R.R. Tolkien",
                                                "role": "英國作家、語言學家",
                                                "desc": "世界建構型的倡議者，他將內心對真善美的深刻價值觀，透過數十年的潛心寫作向內構築成完整的藝術世界。"
                                    }
                        ]
            },
            "ENFJ": {
                        "tags": "有感染力、善於啟發他人",
                        "reps": [
                                    {
                                                "name": "佛羅倫絲．南丁格爾 Florence Nightingale",
                                                "role": "英國護理先驅、社會改革家",
                                                "desc": "戰地與體制的改革者，她在19世紀的歐洲，以專業和遠見為病患與護理人員爭取尊嚴與標準。"
                                    },
                                    {
                                                "name": "杏林子（劉俠）",
                                                "role": "台灣作家、伊甸基金會創辦人",
                                                "desc": "社會與心靈的改革者，她在20世紀的台灣，以文學和行動為身心障礙者爭取權益，並用自己的生命故事激勵無數人心。"
                                    }
                        ]
            },
            "ENTJ": {
                        "tags": "領導、果斷、組織力",
                        "reps": [
                                    {
                                                "name": "提摩太．凱勒 Timothy Keller",
                                                "role": "美國牧師、作家",
                                                "desc": "思想界的指揮官，他運用神學的遠見與策略，在文化和思想領域開疆闢土。"
                                    },
                                    {
                                                "name": "柴契爾夫人 Margaret Thatcher",
                                                "role": "英國前首相",
                                                "desc": "政治界的指揮官，她運用國家的權力與堅定意志，在現實政治舞台上推動大刀闊斧的改革。"
                                    }
                        ]
            },
            "INFP": {
                        "tags": "感性、忠於自我、理想主義",
                        "reps": [
                                    {
                                                "name": "盧雲 Henri Nouwen",
                                                "role": "荷蘭神父、作家",
                                                "desc": "內省的療癒者，他透過探索自身的脆弱與靈性，觸動並療癒了無數渴望真誠的靈魂。"
                                    },
                                    {
                                                "name": "尤金．畢德生 Eugene Peterson",
                                                "role": "美國牧師、作家",
                                                "desc": "教牧詩人，他透過代表作《信息本聖經》，以充滿詩意和生活氣息的語言，為當代人重新詮釋聖經，搭起神聖與日常之間的橋樑。"
                                    }
                        ]
            },
            "ESFJ": {
                        "tags": "關懷、善於協調、樂於服務",
                        "reps": [
                                    {
                                                "name": "喬依絲．邁爾 Joyce Meyer",
                                                "role": "美國電視福音佈道家",
                                                "desc": "現代媒體的關懷者，她透過廣播和電視，為全球數百萬人提供實用的生活教導和心靈支持。"
                                    },
                                    {
                                                "name": "艾美．卡邁可 Amy Carmichael",
                                                "role": "愛爾蘭裔印度宣教士",
                                                "desc": "宣教前線的關懷者，她在艱苦環境中親手建立真實的庇護所，成為數百名孤兒的母親和保護者。"
                                    }
                        ]
            },
            "ENTP": {
                        "tags": "創新、辯論、挑戰傳統",
                        "reps": [
                                    {
                                                "name": "唐崇榮 Stephen Tong",
                                                "role": "印尼華裔牧師、佈道家",
                                                "desc": "講台上的辯論家，他以其嚴謹的邏輯和充沛辯才，在講台上與各種哲學、神學思想進行正面交鋒。"
                                    },
                                    {
                                                "name": "麥爾坎．蒙格理奇 Malcolm Muggeridge",
                                                "role": "英國記者、諷刺作家",
                                                "desc": "媒體中的辯論家，他以機智、諷刺的筆觸和敏銳觀察力，對社會文化和時事進行犀利批判，引發深刻反思。"
                                    }
                        ]
            },
            "ISFJ": {
                        "tags": "溫柔、樂於助人、持守本分",
                        "reps": [
                                    {
                                                "name": "德蕾莎修女 Mother Teresa",
                                                "role": "天主教會修女、慈善家",
                                                "desc": "透過打破階級的激進服事來奉獻，她走入人群，親身觸摸最卑微的人。"
                                    },
                                    {
                                                "name": "伊莉莎白二世 Queen Elizabeth II",
                                                "role": "英國女王",
                                                "desc": "透過持守位階的莊嚴責任來奉獻，她長年守住王位，成為國家秩序與傳統傳承的象徵。"
                                    }
                        ]
            },
            "ESTJ": {
                        "tags": "務實、領導能力、組織力強",
                        "reps": [
                                    {
                                                "name": "約翰．衛斯理 John Wesley",
                                                "role": "英國神學家、循道宗創始人",
                                                "desc": "工業革命前的開拓者，他用雙腳和馬匹，建立了一個面對面的組織網絡。"
                                    },
                                    {
                                                "name": "彭蒙惠 Doris Brougham",
                                                "role": "空中英語教室創辦人",
                                                "desc": "大眾傳播時代的開拓者，她用廣播、電視和網路，建立了一個影響數代人的媒體教育帝國。"
                                    }
                        ]
            }
};
const MODERN_ART = {"提摩太．凱勒 Timothy Keller":"assets/images/img-709ceb198f94.webp","文森．梵谷 Vincent van Gogh":"assets/images/img-e906828bcee3.webp","柯克．富蘭克林 Kirk Franklin":"assets/images/img-dc4df8222efb.webp","伊莉莎白二世 Queen Elizabeth II":"assets/images/img-2b8bf317e619.webp","杏林子（劉俠）":"assets/images/img-ec2dfaa37188.webp","林書豪 Jeremy Lin":"assets/images/img-1e3dec652640.webp","佛羅倫絲．南丁格爾 Florence Nightingale":"assets/images/img-2d4bba9f29b4.webp","唐崇榮 Stephen Tong":"assets/images/img-024f3c397dbc.webp","馬丁路德 Martin Luther":"assets/images/img-2b2e88c7ea23.webp","馬偕 George Leslie Mackay":"assets/images/img-0bf6c84ceb8e.webp","彭蒙惠 Doris Brougham":"assets/images/img-71cbb47b7028.webp","約翰．衛斯理 John Wesley":"assets/images/img-efb7e96195b0.webp","艾美．卡邁可 Amy Carmichael":"assets/images/img-8f34e4e5ab16.webp","貝瑟尼．漢密爾頓 Bethany Hamilton":"assets/images/img-ebdf65720064.webp","華理克 Rick Warren":"assets/images/img-3cf97f45ecab.webp","C.S. 路易斯 C.S. Lewis":"assets/images/img-e28545ee23ae.webp","約翰．加爾文 John Calvin":"assets/images/img-afa2ffa877e9.webp","柯麗．鄧．波姆 Corrie ten Boom":"assets/images/img-af178a6b384b.webp","潘霍華 Dietrich Bonhoeffer":"assets/images/img-f02085fb4bc2.webp","J.R.R. 托爾金 J.R.R. Tolkien":"assets/images/img-8e2268254461.webp","盧雲 Henri Nouwen":"assets/images/img-911da923d526.webp","尤金．畢德生 Eugene Peterson":"assets/images/img-4ff68b32385d.webp","喬依絲．邁爾 Joyce Meyer":"assets/images/img-bfafbd05d390.webp","Billy Graham":"assets/images/img-72b47716416a.webp","Bob Goff":"assets/images/img-588e1a52f1c4.webp","卡爾．巴特 Karl Barth":"assets/images/img-4b6665c5775b.webp","李．史特博 Lee Strobel":"assets/images/img-d407d5aa0efd.webp","麥爾坎．蒙格理奇 Malcolm Muggeridge":"assets/images/img-8822065d8030.webp","柴契爾夫人 Margaret Thatcher":"assets/images/img-e2bb8facadd3.webp","馬丁．路德．金 Martin Luther King Jr.":"assets/images/img-c8e78cc288ae.webp","德蕾莎修女 Mother Teresa":"assets/images/img-7bb5e0b53b03.webp","Nehemiah":"assets/images/img-257cfa19a751.webp","力克．胡哲 Nick Vujicic":"assets/images/img-29fe5a58ad5a.webp","方濟各 Pope Francis":"assets/images/img-60f239c066de.webp","凱瑟琳．卜維廉 Catherine Booth":"assets/images/img-5948acf03c23.webp","伊麗莎白．艾略特 Elisabeth Elliot":"assets/images/img-1d29dcd593fe.webp"};
        const CHARACTER_ART = {"馬大":"assets/characters/martha.webp","路得":"assets/characters/ruth.webp","亞伯拉罕":"assets/characters/abraham.webp","但以理":"assets/characters/daniel.webp","巴拿巴":"assets/characters/barnabas.webp","大衛":"assets/characters/david.webp","約翰":"assets/characters/john.webp","尼希米":"assets/characters/nehemiah.webp","保羅":"assets/characters/paul.webp","摩西":"assets/characters/moses.webp","多馬":"assets/characters/thomas.webp","參孫":"assets/characters/samson.webp","底波拉":"assets/characters/character-4064374254.webp","雅各":"assets/characters/jacob.webp","約拿":"assets/characters/jonah.webp","彼得":"assets/characters/peter.webp","井旁的撒馬利亞婦人":"assets/characters/samaritan-woman.webp","用香膏的馬利亞":"assets/characters/character-8927816145.webp","以斯帖":"assets/characters/esther.webp","以利沙":"assets/characters/character-1516194894.webp","以利亞":"assets/characters/elijah.webp","所羅門":"assets/characters/solomon.webp"};
        const CHARACTER_ART_ALIASES = {
            '撒馬利亞婦人': '井旁的撒馬利亞婦人',
            '馬利亞': '用香膏的馬利亞'
        };
        const CHARACTER_INTROS = {
            "彼得": "原本是加利利的漁夫，跟隨耶穌後成為十二使徒中很重要的人物。彼得常常先說、先做，也曾跌得很重，但他的故事一直有一個很鮮明的節奏：跌倒了，還是會再站起來。",
            "參孫": "士師時代的拿細耳人，以驚人的力量聞名。參孫很會處理眼前的危機，也常靠自己硬闖過去，只是衝動和感情上的判斷，也讓他一路付出不小的代價。",
            "保羅": "從逼迫教會的人，轉變成向外邦人傳福音的重要使徒。保羅一路旅行、建立教會、寫信教導，也很擅長把複雜的信仰問題整理成清楚的論述。",
            "以利亞": "北國時期很有代表性的先知。面對亞哈和耶洗別，他敢講、敢挑戰，也曾在迦密山公開對上巴力先知；但高強度服事之後，他也曾累到只想躲進曠野。",
            "大衛": "從牧羊少年、樂手、戰士一路成為以色列王。大衛的情感很豐富，勇敢的時候很勇敢，脆弱的時候也很真實；他的人生同時有信心、失敗和悔改。",
            "以利沙": "以利亞之後的重要先知。以利沙的服事常常直接進入人的日常需要，寡婦的油、書念婦人的孩子、乃縵的大痲瘋，都看得到他很實際、很貼近人的一面。",
            "井旁的撒馬利亞婦人": "她在井旁和耶穌談了一場非常直接的對話，從被看見、被理解，到回城告訴大家自己遇見了誰。她的故事有一種很強的感染力，一有新的發現，就忍不住想分享出去。",
            "用香膏的馬利亞": "她拿極貴的真哪噠香膏抹耶穌的腳，再用自己的頭髮去擦。這個舉動很直接，也充滿強烈的情感表達，幾乎沒有在管旁邊的人怎麼看。",
            "巴拿巴": "初代教會裡很會鼓勵人的那一位。大家稱他為「勸慰之子」，他接納剛信主不久、還讓人很有戒心的保羅，也願意陪馬可重新出發，常常把別人往前推。",
            "尼希米": "原本在波斯王宮當酒政，聽見耶路撒冷城牆破敗後，他先禱告，再規劃、請示、動員，最後帶著百姓把城牆重建起來。很像那種一聽到問題，就開始排人力和進度的人。",
            "多馬": "多馬並非什麼都不信；他需要親自確認，才願意把信念交出去。耶穌復活後，他要求親自確認傷痕；等他真的看見時，也作出非常直接的信仰告白。",
            "所羅門": "以色列最有智慧的君王之一，不只處理國家事務，也不斷思考生命、智慧與意義。傳統上與所羅門連結的《傳道書》，也充滿這類深度反思。",
            "但以理": "年輕時被擄到巴比倫，在異文化和政治壓力裡，仍然維持自己的信仰節奏。他會解夢、看異象，也在獅子坑的故事裡，留下很安靜卻很硬的堅持。",
            "亞伯拉罕": "離開熟悉的家鄉，帶著家人往神指示的地方走。從等候應許到一次次遷徙，他的故事很像一個邊走邊學信靠，也把身邊的人一起帶上路的人。",
            "底波拉": "士師時代的女先知和士師。百姓需要方向時，她會判斷、發聲，也召巴拉出征；她給方向，也真的能把人和行動一起動員起來。",
            "約翰": "十二使徒之一，和兄弟雅各曾被耶穌稱為「雷子」。後來約翰的傳統形象，卻常和愛、光、生命這些主題連在一起，很像一個被信仰慢慢磨出深度的人。",
            "馬大": "伯大尼三姊弟之一。耶穌到家裡時，她忙著接待，也很直接把自己的焦慮說出來；拉撒路去世時，她又主動迎向耶穌，說出自己對復活的信仰。",
            "雅各": "從出生時抓著哥哥的腳跟，到用一碗紅豆湯換得長子名分、用計取得祝福，再到雅博渡口與神摔跤。雅各的一生很會算，也一路被生命修理，最後得名「以色列」。",
            "路得": "摩押女子，丈夫過世後仍選擇陪婆婆拿俄米回伯利恆。她在田間拾穗、踏實照顧家人，後來成為大衛王家族故事裡很重要的一員。",
            "以斯帖": "原本是流亡民族中的年輕女子，後來成為波斯王后。面對族人的危機，她從沉默走到冒險進王宮求情，用自己的位置承擔很實際的風險。",
            "摩西": "神揀選摩西帶領大批以色列人出埃及。他是律法頒布者、組織者與管理者，也長期處理群體中的實際問題，幾乎每天都在面對人、制度和突發狀況。"
};
        function normalizeCharacterName(character) {
            return CHARACTER_ART_ALIASES[character] || character || '';
        }
        function getCharacterArt(character) {
            const normalized = normalizeCharacterName(character);
            return CHARACTER_ART[normalized] || '';
        }
        function getCharacterIntro(character) {
            const normalized = normalizeCharacterName(character);
            return CHARACTER_INTROS[normalized] || '';
        }
        function normalizeText(value) {
            return (value || '').replace(/\s+/g, ' ').trim();
        }
        function parseCountPercent(value) {
            const match = normalizeText(value).match(/([\d,]+)\s*人(?:跟你一樣)?\s*\/\s*([\d.]+)%/);
            if (!match) return null;
            return { count: Number(match[1].replace(/,/g, '')), percent: Number(match[2]) };
        }
        function buildMbtiDataFromRankings() {
            const data = {};
            document.querySelectorAll('.mbti-card').forEach((card) => {
                const cardText = normalizeText(card.textContent);
                const match = cardText.match(/^(\d+)\s+([EI][NS][TF][JP])｜(.+?)\s+([\d,]+)\s*人(?:跟你一樣)?\s*\/\s*([\d.]+)%/);
                if (!match) return;
                const [, rank, type, character, count, percent] = match;
                data[type] = data[type] || {};
                data[type].lay = {
                    rank: Number(rank),
                    percent: Number(percent),
                    count: Number(count.replace(/,/g, '')),
                    character: character.trim()
                };
            });
            document.querySelectorAll('.pastor-rank-card').forEach((card) => {
                const rankNode = card.querySelector('.pastor-rank-number');
                const titleNode = card.querySelector('.pastor-rank-title');
                const statNode = card.querySelector('.pastor-rank-stat');
                const stats = parseCountPercent(statNode ? statNode.textContent : '');
                const titleParts = normalizeText(titleNode ? titleNode.textContent : '').split('｜');
                const type = titleParts[0] || '';
                const character = titleParts[1] || '';
                const label = titleParts.slice(2).join('｜');
                if (!MBTI_TYPES.includes(type) || !rankNode || !stats) return;
                data[type] = data[type] || {};
                data[type].pastor = {
                    rank: Number(normalizeText(rankNode.textContent)),
                    percent: stats.percent,
                    count: stats.count,
                    character: character.trim(),
                    label: label.trim()
                };
            });
            return data;
        }
        const mbtiData = buildMbtiDataFromRankings();
        function getDataset(role) {
            return Object.fromEntries(
                MBTI_TYPES.filter((type) => mbtiData[type] && mbtiData[type][role])
                    .map((type) => [type, mbtiData[type][role]])
            );
        }
        function getTotals() {
            const lay = Object.values(getDataset('lay')).reduce((sum, item) => sum + item.count, 0);
            const pastor = Object.values(getDataset('pastor')).reduce((sum, item) => sum + item.count, 0);
            return { lay, pastor, all: lay + pastor };
        }
        function calculateDimensions(role) {
            const data = getDataset(role);
            const total = Object.values(data).reduce((sum, item) => sum + item.count, 0);
            const pairs = [['E','I',0],['S','N',1],['T','F',2],['J','P',3]];
            const result = {};
            pairs.forEach(([first, second, index]) => {
                const firstCount = Object.entries(data).reduce((sum,[type,item]) => sum + (type[index] === first ? item.count : 0), 0);
                result[first] = total ? firstCount / total * 100 : 0;
                result[second] = total ? 100 - result[first] : 0;
            });
            return result;
        }
        const TEMPERAMENTS = {
            SP: ['ESFP','ISFP','ESTP','ISTP'],
            SJ: ['ESFJ','ISFJ','ESTJ','ISTJ'],
            NT: ['ENTJ','INTJ','ENTP','INTP'],
            NF: ['ENFP','INFP','ENFJ','INFJ']
        };
        const TEMPERAMENT_LABELS = {
            SP: 'SP 行動派',
            SJ: 'SJ 守序派',
            NT: 'NT 思考派',
            NF: 'NF 理想派'
        };
        function getTemperamentGroup(type) {
            return Object.keys(TEMPERAMENTS).find((group) => TEMPERAMENTS[group].includes(type)) || '';
        }
        function renderLookupTemperament(type) {
            const group = getTemperamentGroup(type);
            const badge = document.querySelector('[data-field="temperament-label"]');
            if (!badge) return;
            badge.textContent = TEMPERAMENT_LABELS[group] || '…';
            badge.className = `lookup-temperament-badge${group ? ` temperament-badge-${group.toLowerCase()}` : ''}`;
        }
        function calculateTemperaments(role) {
            const data = getDataset(role);
            const total = Object.values(data).reduce((sum,item) => sum + item.count, 0);
            return Object.fromEntries(Object.entries(TEMPERAMENTS).map(([group,types]) => {
                const count = types.reduce((sum,type) => sum + (data[type] ? data[type].count : 0), 0);
                return [group, total ? count / total * 100 : 0];
            }));
        }
        function formatPercentPoint(value) {
            if (Math.abs(value) < 0.05) return '0.0';
            const sign = value > 0 ? '+' : '−';
            return `${sign}${Math.abs(value).toFixed(1)}`;
        }
        function setField(name, value) {
            document.querySelectorAll(`[data-field="${name}"]`).forEach((node) => { node.textContent = value; });
        }
        function animateNumber(node, target, options = {}) {
            if (!node || !Number.isFinite(target)) return;
            const decimals = options.decimals || 0;
            const duration = options.duration || 450;
            const formatter = options.formatter || ((value) => value.toFixed(decimals));
            if (prefersReducedMotion.matches) {
                node.textContent = formatter(target);
                return;
            }
            const frameInterval = 1000 / 30;
            const start = performance.now();
            let lastPaint = start - frameInterval;
            const animationId = (node.__countAnimationId || 0) + 1;
            node.__countAnimationId = animationId;
            function step(now) {
                if (node.__countAnimationId !== animationId) return;
                const progress = Math.min((now - start) / duration, 1);
                if ((now - lastPaint) >= frameInterval || progress >= 1) {
                    const eased = 1 - Math.pow(1 - progress, 3);
                    node.textContent = formatter(target * eased);
                    lastPaint = now;
                }
                if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        }
        function getRarityStars(percent) {
            const values = MBTI_TYPES
                .map((type) => mbtiData[type]?.lay?.percent)
                .filter(Number.isFinite);
            if (!values.length || !Number.isFinite(percent)) return '☆☆☆☆☆';
            const higherCount = values.filter((value) => value > percent).length;
            const stars = Math.min(5, Math.floor(higherCount * 5 / values.length) + 1);
            return '★'.repeat(stars) + '☆'.repeat(5 - stars);
        }
        function getResultUrl(type) {
            const url = new URL(window.location.href);
            url.searchParams.set('type', type);
            return url.toString();
        }
        function updateUrlType(type) {
            try { window.history.replaceState(null, '', getResultUrl(type)); } catch (error) {}
        }
        function animateResultNumbers(entry) {
            const fields = {
                'lay-rank': [entry.lay.rank, (v) => Math.max(1, Math.round(v)).toString()],
                'pastor-rank': [entry.pastor.rank, (v) => Math.max(1, Math.round(v)).toString()]
            };
            Object.entries(fields).forEach(([field,[target,formatter]]) => {
                animateNumber(document.querySelector(`[data-field="${field}"]`), target, { formatter });
            });
        }
        function renderLookupCharacterArt(role, character) {
            const card = document.getElementById(`lookup-${role}-card`);
            const figure = document.querySelector(`[data-role-art="${role}"]`);
            const img = document.querySelector(`[data-role-art-img="${role}"]`);
            const src = getCharacterArt(character);
            const show = Boolean(src && figure && img && card);
            if (show) {
                img.src = src;
                img.alt = '';
                figure.dataset.character = character;
                img.dataset.character = character;
                figure.hidden = false;
                figure.setAttribute('aria-hidden', 'true');
            } else if (figure) {
                figure.hidden = true;
                figure.removeAttribute('data-character');
                figure.setAttribute('aria-hidden', 'true');
                if (img) { img.removeAttribute('src'); img.removeAttribute('data-character'); img.alt = ''; }
            }
            if (card) card.classList.toggle('has-character-art', show);
        }
        function makeRankCharacterThumb(character) {
            const src = getCharacterArt(character);
            if (!src) return null;
            const figure = document.createElement('figure');
            figure.className = 'rank-character-thumb';
            figure.dataset.character = character;
            figure.setAttribute('aria-hidden', 'true');
            const img = document.createElement('img');
            img.dataset.character = character;
            img.src = src;
            img.alt = '';
            img.loading = 'eager';
            img.decoding = 'async';
            img.fetchPriority = 'auto';
            figure.appendChild(img);
            return figure;
        }
        function decorateRankingCards() {
            const layCards = Array.from(document.querySelectorAll('#lay-ranking .mbti-card'));
            layCards.forEach((card, index) => {
                const text = normalizeText(card.textContent);
                const match = text.match(/^\d+\s+([EI][NS][TF][JP])｜(.+?)\s+[\d,]+\s*人/);
                if (!match) return;
                const character = match[2].trim();
                const thumb = makeRankCharacterThumb(character);
                if (!thumb) return;
                if (index >= 3) thumb.classList.add('is-compact');
                const head = card.firstElementChild;
                const indicator = head?.querySelector('.expand-indicator');
                if (head && !head.querySelector('.rank-character-thumb')) {
                    if (indicator) head.insertBefore(thumb, indicator);
                    else head.appendChild(thumb);
                    card.classList.add('has-rank-art');
                }
            });
            const pastorCards = Array.from(document.querySelectorAll('#pastor-ranking .pastor-rank-card'));
            pastorCards.forEach((card, index) => {
                const title = normalizeText(card.querySelector('.pastor-rank-title')?.textContent || '');
                const character = title.split('｜')[1] || '';
                const thumb = makeRankCharacterThumb(character.trim());
                const head = card.querySelector('.pastor-rank-head');
                if (!thumb || !head) return;
                if (index >= 3) thumb.classList.add('is-compact');
                if (!head.querySelector('.rank-character-thumb')) {
                    head.appendChild(thumb);
                    card.classList.add('has-rank-art');
                }
            });
        }
        function decorateMysteryCharacter() {
            const images = [
                document.getElementById('mystery-abraham-lay'),
                document.getElementById('mystery-abraham-pastor')
            ].filter(Boolean);
            if (!images.length) return;
            const src = getCharacterArt('亞伯拉罕');
            images.forEach(img => {
                const figure = img.closest('.enfj-abraham-art');
                if (!src) {
                    figure?.setAttribute('hidden', '');
                    return;
                }
                img.src = src;
            });
        }
        function renderCharacterIntros(entry) {
            const shell = document.getElementById('lookup-character-intros');
            if (!shell || !entry?.lay || !entry?.pastor) return;
            const layName = normalizeCharacterName(entry.lay.character);
            const pastorName = normalizeCharacterName(entry.pastor.character);
            const sameCharacter = layName === pastorName;
            const items = sameCharacter
                ? [{ label: '', character: layName }]
                : [
                    { label: '平信徒人物小傳', character: layName },
                    { label: '牧者人物小傳', character: pastorName }
                ];
            shell.classList.toggle('is-split', !sameCharacter);
            shell.innerHTML = '';
            items.forEach(({ label, character }) => {
                const card = document.createElement('article');
                card.className = 'lookup-character-story-card';
                const eyebrow = label ? document.createElement('div') : null;
                if (eyebrow) {
                    eyebrow.className = 'lookup-character-story-label';
                    eyebrow.textContent = label;
                }
                const title = document.createElement('h3');
                title.className = 'lookup-character-story-name';
                title.textContent = character || '…';
                const body = document.createElement('p');
                body.className = 'lookup-character-story-text';
                body.textContent = getCharacterIntro(character) || '這位人物的小傳正在整理中。';
                if (eyebrow) card.appendChild(eyebrow);
                card.append(title, body);
                shell.appendChild(card);
            });
        }
        function getModernArt(name) {
            return MODERN_ART[name] || '';
        }
        function renderModernRep(index, rep = {}) {
            setField(`modern-${index}-name`, rep.name || '…');
            setField(`modern-${index}-role`, rep.role || '');
            setField(`modern-${index}-desc`, rep.desc || '');
            const card = document.querySelector(`[data-modern-card="${index}"]`);
            const figure = document.querySelector(`[data-modern-art="${index}"]`);
            const img = document.querySelector(`[data-modern-art-img="${index}"]`);
            const src = rep.name ? getModernArt(rep.name) : '';
            const show = Boolean(src && card && figure && img);
            if (show) {
                img.src = src;
                img.alt = '';
                figure.hidden = false;
                figure.setAttribute('aria-hidden', 'true');
            } else if (figure) {
                figure.hidden = true;
                figure.setAttribute('aria-hidden', 'true');
                if (img) {
                    img.removeAttribute('src');
                    img.alt = '';
                }
            }
            if (card) card.classList.toggle('has-art', show);
        }
        const mobileLookupSheetMedia = window.matchMedia('(max-width: 768px)');
        let lastLookupTrigger = null;
        function openMobileLookupSheet(trigger = null) {
            if (!mobileLookupSheetMedia.matches) return;
            const result = document.getElementById('mbti-lookup-result');
            const backdrop = document.getElementById('lookup-sheet-backdrop');
            const closeButton = document.getElementById('lookup-sheet-close');
            if (!result || result.hidden) return;
            lastLookupTrigger = trigger || document.querySelector('#mbti-lookup .mbti-option[aria-pressed="true"]');
            result.setAttribute('aria-modal', 'true');
            result.classList.add('mobile-sheet-open');
            if (backdrop) backdrop.hidden = false;
            document.body.classList.add('lookup-sheet-active');
            window.requestAnimationFrame(() => {
                try { closeButton?.focus({ preventScroll: true }); } catch (error) { closeButton?.focus(); }
            });
        }
        function closeMobileLookupSheet({ restoreFocus = true } = {}) {
            const result = document.getElementById('mbti-lookup-result');
            const backdrop = document.getElementById('lookup-sheet-backdrop');
            if (!result) return;
            result.classList.remove('mobile-sheet-open');
            result.setAttribute('aria-modal', 'false');
            if (backdrop) backdrop.hidden = true;
            document.body.classList.remove('lookup-sheet-active');
            if (restoreFocus && lastLookupTrigger) {
                window.setTimeout(() => {
                    try { lastLookupTrigger.focus({ preventScroll: true }); } catch (error) { lastLookupTrigger.focus(); }
                }, prefersReducedMotion.matches ? 0 : 220);
            }
        }
        function renderProfileList(field, text) {
            const host = document.querySelector(`[data-field="${field}"]`);
            if (!host) return;
            host.innerHTML = '';
            String(text || '').split(/[；。]/).map(s => s.trim()).filter(Boolean).forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                host.appendChild(li);
            });
        }
        function parseProfileRelation(text) {
            const raw = String(text || '').trim();
            const match = raw.match(/^([EI][NS][TF][JP]\s+[^。]+)。(.*)$/);
            return match ? { name: match[1].trim(), desc: match[2].trim() } : { name: raw, desc: '' };
        }
        function renderProfileTags(text) {
            const host = document.querySelector('[data-field="profile-tags-rich"]');
            if (!host) return;
            host.innerHTML = '';
            String(text || '').split('、').map(s => s.trim()).filter(Boolean).forEach(tag => {
                const span = document.createElement('span');
                span.textContent = tag;
                host.appendChild(span);
            });
        }
        function renderProfileMeter(key, value) {
            const meter = document.querySelector(`[data-profile-meter="${key}"]`);
            const bar = meter?.querySelector('em');
            if (bar) bar.style.width = `${Math.max(0, Math.min(10, Number(value) || 0)) * 10}%`;
        }
        function renderProfileCharacterArt(character) {
            const img = document.getElementById('profile-character-img');
            if (!img) return;
            const src = getCharacterArt(character);
            if (src) {
                img.src = src;
                img.hidden = false;
            } else {
                img.removeAttribute('src');
                img.hidden = true;
            }
        }
        function getProfileShareUrl(type) {
            return `${PROFILE_SITE_URL}?type=${encodeURIComponent(type)}#mbti-lookup`;
        }
        function profileRoundRect(ctx, x, y, w, h, r) {
            const rr = Math.min(r, w / 2, h / 2);
            ctx.beginPath();
            ctx.moveTo(x + rr, y);
            ctx.arcTo(x + w, y, x + w, y + h, rr);
            ctx.arcTo(x + w, y + h, x, y + h, rr);
            ctx.arcTo(x, y + h, x, y, rr);
            ctx.arcTo(x, y, x + w, y, rr);
            ctx.closePath();
        }
        function profileWrapText(ctx, text, maxWidth) {
            const lines = [];
            let line = '';
            [...String(text || '')].forEach(ch => {
                const test = line + ch;
                if (line && ctx.measureText(test).width > maxWidth) {
                    lines.push(line);
                    line = ch;
                } else {
                    line = test;
                }
            });
            if (line) lines.push(line);
            return lines;
        }
        function loadProfileImage(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
            });
        }
        function drawArcText(ctx, text, radius, centerAngle = -Math.PI / 2, extraSpacingPx = 4) {
            const chars = String(text || '').split('');
            if (!chars.length) return;
            const widths = chars.map(char => Math.max(ctx.measureText(char).width, 1));
            const totalArc = widths.reduce((sum, width) => sum + width, 0) + extraSpacingPx * Math.max(chars.length - 1, 0);
            let angle = centerAngle + (totalArc / radius) / 2;
            chars.forEach((char, index) => {
                const charAngle = widths[index] / radius;
                angle -= charAngle / 2;
                ctx.save();
                ctx.rotate(angle);
                ctx.translate(0, -radius);
                ctx.rotate(Math.PI / 2);
                ctx.fillText(char, 0, 0);
                ctx.restore();
                angle -= charAngle / 2 + (index < chars.length - 1 ? extraSpacingPx / radius : 0);
            });
        }
        function drawArcTextBottom(ctx, text, radius, centerAngle = Math.PI / 2, extraSpacingPx = 4) {
            const chars = String(text || '').split('').reverse();
            if (!chars.length) return;
            const widths = chars.map(char => Math.max(ctx.measureText(char).width, 1));
            const totalArc = widths.reduce((sum, width) => sum + width, 0) + extraSpacingPx * Math.max(chars.length - 1, 0);
            let angle = centerAngle + (totalArc / radius) / 2;
            chars.forEach((char, index) => {
                const charAngle = widths[index] / radius;
                angle -= charAngle / 2;
                ctx.save();
                ctx.rotate(angle);
                ctx.translate(0, -radius);
                ctx.rotate(-Math.PI / 2);
                ctx.fillText(char, 0, 0);
                ctx.restore();
                angle -= charAngle / 2 + (index < chars.length - 1 ? extraSpacingPx / radius : 0);
            });
        }
        function drawStampNick(ctx, radius, angle, length, lineWidth = 2) {
            ctx.save();
            ctx.rotate(angle);
            ctx.translate(0, -radius);
            ctx.strokeStyle = 'rgba(255,255,255,.42)';
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            ctx.moveTo(-length / 2, 0);
            ctx.lineTo(length / 2, 0);
            ctx.stroke();
            ctx.restore();
        }
        const PROFILE_STAMP_META = {
            SJ: { titleZh: '服事總務組', titleEn: 'SERVICE ADMIN' },
            NF: { titleZh: '陪伴關懷組', titleEn: 'CARE MINISTRY' },
            SP: { titleZh: '現場機動組', titleEn: 'RESPONSE CREW' },
            NT: { titleZh: '事工策劃組', titleEn: 'MINISTRY DESK' }
        };
        async function makeProfilePassportImage(type) {
            const profile = MBTI_PROFILE_MASTER[type];
            if (!profile) throw new Error('missing profile');
            const group = getTemperamentGroup(type);
            const palette = PROFILE_PALETTE[group] || PROFILE_PALETTE.NT;
            const canvas = document.createElement('canvas');
            canvas.width = 1080;
            canvas.height = 1920;
            const ctx = canvas.getContext('2d');
            const W = canvas.width, H = canvas.height;
            // 紙張與護照內頁
            ctx.fillStyle = '#D9D2C5';
            ctx.fillRect(0, 0, W, H);
            const paper = ctx.createLinearGradient(70, 70, 1010, 1850);
            paper.addColorStop(0, '#F6F1E7');
            paper.addColorStop(1, '#EAE2D4');
            ctx.fillStyle = paper;
            profileRoundRect(ctx, 52, 48, 976, 1824, 42);
            ctx.fill();
            ctx.strokeStyle = 'rgba(66,57,49,.32)';
            ctx.lineWidth = 3;
            profileRoundRect(ctx, 77, 73, 926, 1774, 30);
            ctx.stroke();
            // 護照底紋
            ctx.save();
            ctx.globalAlpha = .08;
            ctx.strokeStyle = palette.accent;
            ctx.lineWidth = 2;
            for (let y = 160; y < 1760; y += 74) {
                ctx.beginPath();
                for (let x = 100; x <= 980; x += 20) {
                    const yy = y + Math.sin((x + y) / 58) * 12;
                    if (x === 100) ctx.moveTo(x, yy); else ctx.lineTo(x, yy);
                }
                ctx.stroke();
            }
            ctx.restore();
            // Header
            ctx.fillStyle = '#2D2925';
            ctx.font = '800 28px sans-serif';
            ctx.fillText('教會小本本', 112, 132);
            ctx.textAlign = 'right';
            ctx.fillStyle = palette.deep;
            ctx.font = '800 18px sans-serif';
            ctx.fillText(`DOCUMENT TYPE｜文件類型  MBTI / ${type}`, 968, 132);
            ctx.textAlign = 'left';
            ctx.fillStyle = palette.deep;
            ctx.font = '900 43px sans-serif';
            ctx.fillText('BIBLE CHARACTER PASSPORT', 112, 205);
            ctx.fillStyle = '#6B6258';
            ctx.font = '700 24px sans-serif';
            ctx.fillText('聖經人物人格護照', 114, 244);
            ctx.fillStyle = palette.accent;
            ctx.fillRect(112, 275, 856, 7);
            // 左側人物照片區
            ctx.fillStyle = '#EEE8DC';
            profileRoundRect(ctx, 112, 330, 405, 670, 26);
            ctx.fill();
            ctx.strokeStyle = 'rgba(64,58,52,.18)';
            ctx.lineWidth = 2;
            profileRoundRect(ctx, 112, 330, 405, 670, 26);
            ctx.stroke();
            const art = getCharacterArt(profile.character);
            if (art) {
                try {
                    const im = await loadProfileImage(art);
                    const maxW = 355, maxH = 585;
                    const ratio = Math.min(maxW / im.width, maxH / im.height);
                    const w = im.width * ratio, h = im.height * ratio;
                    ctx.save();
                    ctx.shadowColor = 'rgba(42,34,29,.18)';
                    ctx.shadowBlur = 22;
                    ctx.shadowOffsetY = 12;
                    ctx.drawImage(im, 112 + (405 - w) / 2, 370 + (590 - h), w, h);
                    ctx.restore();
                } catch (e) {}
            }
            // 右側識別欄
            ctx.fillStyle = palette.deep;
            ctx.font = '900 88px sans-serif';
            ctx.fillText(type, 566, 435);
            ctx.fillStyle = '#2A2724';
            ctx.font = '900 58px sans-serif';
            ctx.fillText(profile.character, 566, 508);
            ctx.fillStyle = '#786F66';
            ctx.font = '750 19px sans-serif';
            ctx.fillText('PERSONALITY｜人格稱號', 566, 574);
            ctx.fillStyle = '#2D2925';
            ctx.font = '800 31px sans-serif';
            ctx.fillText(profile.title, 566, 616);
            ctx.fillStyle = '#786F66';
            ctx.font = '750 19px sans-serif';
            ctx.fillText('KEYWORDS｜關鍵特質', 566, 685);
            ctx.fillStyle = '#2D2925';
            ctx.font = '700 27px sans-serif';
            const tags = String(profile.tags || '').split('、');
            tags.slice(0, 3).forEach((tag, i) => ctx.fillText(tag, 566, 728 + i * 48));
            ctx.fillStyle = '#786F66';
            ctx.font = '750 19px sans-serif';
            ctx.fillText('BOOK｜推薦卷書', 566, 892);
            ctx.fillStyle = palette.deep;
            ctx.font = '850 31px sans-serif';
            ctx.fillText(profile.book, 566, 936);
            // Stamp｜簡化的仿真護照入境章＋教會職人章
            const stampMeta = PROFILE_STAMP_META[group] || PROFILE_STAMP_META.NT;
            ctx.save();
            ctx.translate(872, 985);
            ctx.scale(.90, .90);
            ctx.rotate(-0.095);
            ctx.globalAlpha = .82;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            // 外圈：保留輕微偏位與缺墨，模擬實體橡皮章
            ctx.strokeStyle = palette.accent;
            ctx.lineWidth = 6.5;
            ctx.beginPath();
            ctx.arc(0, 0, 113, 0, Math.PI * 2);
            ctx.stroke();
            ctx.save();
            ctx.translate(1.7, -1.3);
            ctx.globalAlpha = .25;
            ctx.lineWidth = 2.1;
            ctx.beginPath();
            ctx.arc(0, 0, 108, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
            // 內圈留出中央職人章空間
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.arc(0, 0, 88, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fillStyle = palette.deep;
            // 第一圈直接排文字：沿最外圈的內徑，不再留空白
            ctx.font = '800 10.2px sans-serif';
            drawArcText(ctx, 'BIBLE CHARACTER PASSPORT', 101, -Math.PI / 2, 4.8);
            // 下半圈只留品牌與 MBTI 型別，簡化入境章資訊，並旋轉 180 度呈現
            ctx.font = '800 9.4px sans-serif';
            drawArcTextBottom(ctx, `教會小本本 · ${type}`, 101, Math.PI / 2, 4.0);
            // 中央只保留教會職人名稱與英文，不再放額外狀態資訊
            ctx.font = '900 28px sans-serif';
            ctx.fillText(stampMeta.titleZh, 0, -8);
            ctx.font = '800 13px sans-serif';
            ctx.fillText(stampMeta.titleEn, 0, 18);
            ctx.font = '850 11.5px monospace';
            ctx.fillText(`${group} · ${type}`, 0, 39);
            // 少量缺墨與雜點，保留真實蓋章感但不搶畫面
            drawStampNick(ctx, 112, -2.66, 15, 3.0);
            drawStampNick(ctx, 112, -1.02, 10, 2.3);
            drawStampNick(ctx, 88, 0.62, 9, 1.8);
            drawStampNick(ctx, 112, 2.34, 13, 2.6);
            ctx.fillStyle = palette.accent;
            ctx.globalAlpha = .30;
            [
                [-78,-37,1.8],[-88,14,1.4],[76,-44,1.6],[86,22,1.35],[56,78,1.2]
            ].forEach(([x,y,r]) => {
                ctx.beginPath();
                ctx.arc(x,y,r,0,Math.PI*2);
                ctx.fill();
            });
            ctx.textBaseline = 'alphabetic';
            ctx.restore();
            ctx.textAlign = 'left';
            // Profile
            // MBTI 人格特質
            ctx.fillStyle = '#786F66';
            ctx.font = '750 22px sans-serif';
            ctx.fillText('MBTI TRAITS｜人格特質', 112, 1090);
            const strengthParts = String(profile.strengths || '')
                .split(/[；。]/)
                .map(s => s.trim())
                .filter(Boolean);
            const traitText = `${type} ${profile.title}常見的氣質包含${profile.tags}。${strengthParts.slice(0, 2).join('，')}。`;
            ctx.fillStyle = '#2D2925';
            ctx.font = '700 29px sans-serif';
            let py = 1143;
            for (const line of profileWrapText(ctx, traitText, 790).slice(0, 5)) {
                ctx.fillText(line, 112, py);
                py += 43;
            }
            // 聖經人物簡介
            ctx.fillStyle = '#786F66';
            ctx.font = '750 21px sans-serif';
            ctx.fillText('CHARACTER NOTE｜人物簡介', 112, 1338);
            ctx.fillStyle = '#4F4943';
            ctx.font = '650 25px sans-serif';
            let cy = 1380;
            for (const line of profileWrapText(ctx, profile.intro, 790).slice(0, 3)) {
                ctx.fillText(line, 112, cy);
                cy += 37;
            }
            // 資料列
            ctx.fillStyle = 'rgba(255,255,255,.44)';
            profileRoundRect(ctx, 112, 1510, 856, 184, 22);
            ctx.fill();
            const cells = [
                ['FAITH｜信仰狂熱', profile.faith],
                ['EQ｜情緒理解', profile.eq],
                ['SOLITUDE｜孤獨指數', profile.lonely]
            ];
            cells.forEach((cell, i) => {
                const x = 150 + i * 270;
                ctx.fillStyle = '#756C62';
                ctx.font = '750 16px sans-serif';
                ctx.fillText(cell[0], x, 1565);
                ctx.fillStyle = palette.deep;
                ctx.font = '900 48px sans-serif';
                ctx.fillText(`${cell[1]}/10`, x, 1624);
            });
            // Footer
            ctx.fillStyle = palette.accent;
            ctx.fillRect(112, 1730, 856, 5);
            ctx.fillStyle = '#2D2925';
            ctx.font = '800 24px sans-serif';
            ctx.fillText('ISSUED BY｜發行單位  教會小本本', 112, 1788);
            ctx.fillStyle = '#746B62';
            ctx.font = '650 21px sans-serif';
            ctx.fillText('gbookchurch.github.io/MBTI/', 112, 1832);
            ctx.textAlign = 'right';
            ctx.font = '700 18px monospace';
            ctx.fillText(`BIBLE<CHARACTER<${type}<<<<<<<<`, 968, 1832);
            ctx.textAlign = 'left';
            return await new Promise(resolve => canvas.toBlob(resolve, 'image/png', .95));
        }
        async function shareProfilePassport(type) {
            const profile = MBTI_PROFILE_MASTER[type];
            if (!profile) return;
            const status = document.getElementById('profile-share-status');
            const url = getProfileShareUrl(type);
            try {
                const blob = await makeProfilePassportImage(type);
                const file = new File([blob], `教會小本本_${type}_${profile.character}_人物護照.png`, {type:'image/png'});
                const text = `教會小本本｜${type} ${profile.character} 人物護照\n${url}`;
                if (navigator.canShare && navigator.canShare({files:[file]})) {
                    await navigator.share({title:`${type}｜${profile.character} 人物護照`, text, files:[file]});
                    if (status) status.textContent = '分享選單已開啟。';
                    return;
                }
                const a = document.createElement('a');
                const objectUrl = URL.createObjectURL(blob);
                a.href = objectUrl;
                a.download = file.name;
                a.click();
                window.setTimeout(() => URL.revokeObjectURL(objectUrl), 2500);
                if (status) status.textContent = '人物護照圖片已產生。';
            } catch (error) {
                try {
                    if (navigator.share) {
                        await navigator.share({title:`${type}｜${profile.character} 人物護照`, text:`教會小本本｜${type} ${profile.character} 人物護照`, url});
                        if (status) status.textContent = '分享選單已開啟。';
                    } else {
                        throw error;
                    }
                } catch (_) {
                    if (status) status.textContent = '這個瀏覽器暫時無法直接分享，可以使用「複製結果連結」。';
                }
            }
        }
        function renderMbtiResult(type, options = {}) {
            const entry = mbtiData[type];
            const master = MBTI_PROFILE_MASTER[type];
            if (!entry?.lay || !entry?.pastor || !master) return false;
            document.querySelectorAll('.mbti-option').forEach((button) => {
                button.setAttribute('aria-pressed', button.dataset.type === type ? 'true' : 'false');
            });
            const profile = MBTI_PROFILE_EXTRAS[type] || { reps: [] };
            const result = document.getElementById('mbti-lookup-result');
            const group = getTemperamentGroup(type);
            setField('type', type);
            setField('profile-title', master.title || '…');
            setField('profile-character', master.character || '…');
            setField('profile-intro', master.intro || '…');
            setField('profile-book', master.book || '…');
            setField('profile-book-inline', master.book || '…');
            setField('profile-faith', `${master.faith}/10`);
            setField('profile-eq', `${master.eq}/10`);
            setField('profile-lonely', `${master.lonely}/10`);
            setField('lay-character', entry.lay.character || '…');
            setField('pastor-character', entry.pastor.character || '…');
            setField('lay-percent', Number(entry.lay.percent).toFixed(1));
            setField('pastor-percent', Number(entry.pastor.percent).toFixed(1));
            setField('rarity-stars', getRarityStars(entry.lay.percent));
            renderLookupTemperament(type);
            renderProfileTags(master.tags);
            renderProfileList('profile-strengths', master.strengths);
            renderProfileList('profile-weaknesses', master.weaknesses);
            renderProfileCharacterArt(master.character);
            const friend = parseProfileRelation(master.friend);
            const rival = parseProfileRelation(master.rival);
            setField('profile-friend-name', friend.name || '…');
            setField('profile-friend-desc', friend.desc || '');
            setField('profile-rival-name', rival.name || '…');
            setField('profile-rival-desc', rival.desc || '');
            renderProfileMeter('faith', master.faith);
            renderProfileMeter('eq', master.eq);
            renderProfileMeter('lonely', master.lonely);
            [0, 1].forEach((index) => {
                const rep = profile.reps?.[index] || {};
                renderModernRep(index + 1, rep);
            });
            if (result) {
                result.dataset.currentType = type;
                result.dataset.profileGroup = group;
                result.hidden = false;
                result.classList.remove('is-entering');
                void result.offsetWidth;
                result.classList.add('is-entering');
            }
            animateResultNumbers(entry);
            const announcer = document.getElementById('mbti-result-announcer');
            if (announcer) {
                announcer.textContent = `${type} 人物檔案已更新，對應聖經人物 ${master.character}。`;
            }
            if (options.updateUrl !== false) updateUrlType(type);
            document.title = `${type}｜教會 MBTI 圖鑑`;
            // 手機不再跳出底部抽屜，直接留在頁面閱讀；點選後只把結果帶到視線附近。
            if (mobileLookupSheetMedia.matches && options.scrollResult !== false) {
                window.requestAnimationFrame(() => {
                    result?.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
                });
            }
            return true;
        }
        function initMbtiLookup() {
            document.querySelectorAll('.mbti-option').forEach((button) => {
                button.addEventListener('click', () => renderMbtiResult(button.dataset.type, { trigger: button }));
            });
            document.getElementById('profile-passport-share')?.addEventListener('click', () => {
                const type = document.getElementById('mbti-lookup-result')?.dataset.currentType;
                if (type) shareProfilePassport(type);
            });
            document.getElementById('profile-copy-link')?.addEventListener('click', async () => {
                const type = document.getElementById('mbti-lookup-result')?.dataset.currentType;
                if (!type) return;
                const status = document.getElementById('profile-share-status');
                const url = getProfileShareUrl(type);
                try {
                    await navigator.clipboard.writeText(url);
                    if (status) status.textContent = '結果連結已複製。';
                } catch (error) {
                    if (status) status.textContent = url;
                }
            });
            document.getElementById('profile-see-others')?.addEventListener('click', () => {
                document.querySelector('#mbti-lookup .mbti-picker')?.scrollIntoView({
                    behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
                    block: 'center'
                });
            });
            document.getElementById('profile-mobile-switch')?.addEventListener('click', () => {
                document.querySelector('#mbti-lookup .mbti-entry-counter')?.scrollIntoView({
                    behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
                    block: 'start'
                });
            });
            document.getElementById('lookup-sheet-close')?.addEventListener('click', () => closeMobileLookupSheet());
            document.getElementById('lookup-sheet-backdrop')?.addEventListener('click', () => closeMobileLookupSheet());
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && document.getElementById('mbti-lookup-result')?.classList.contains('mobile-sheet-open')) {
                    closeMobileLookupSheet();
                }
            });
            mobileLookupSheetMedia.addEventListener?.('change', (event) => {
                if (!event.matches) closeMobileLookupSheet({ restoreFocus: false });
            });
            const rawType=new URLSearchParams(window.location.search).get('type');
            const initialType=rawType ? rawType.trim().toUpperCase() : '';
            if (MBTI_TYPES.includes(initialType) && renderMbtiResult(initialType,{updateUrl:false})) {
                // V99：保留網址帶入的 MBTI 結果，但進站先停在首頁，不自動往下捲。
            } else {
                document.title=BASE_TITLE;
            }
        }
        function initTemperamentCharacterLookup() {
            document.querySelectorAll('#temperament-section [data-lookup-type]').forEach((button) => {
                button.addEventListener('click', () => {
                    const type = (button.dataset.lookupType || '').toUpperCase();
                    if (!MBTI_TYPES.includes(type)) return;
                    renderMbtiResult(type);
                    const targetButton = document.querySelector(`#mbti-lookup .mbti-option[data-type="${type}"]`);
                    const lookupSection = document.getElementById('mbti-lookup');
                    const behavior = prefersReducedMotion.matches ? 'auto' : 'smooth';
                    if (lookupSection) {
                        lookupSection.scrollIntoView({ behavior, block: 'start' });
                    }
                    window.setTimeout(() => {
                        if (targetButton) {
                            try { targetButton.focus({ preventScroll: true }); } catch (error) { targetButton.focus(); }
                        }
                    }, prefersReducedMotion.matches ? 0 : 320);
                });
            });
        }
        function initInteractiveRankCards() {
            document.querySelectorAll('.mbti-card, .pastor-rank-card').forEach((card) => {
                card.setAttribute('role','button');
                card.setAttribute('tabindex','0');
                card.setAttribute('aria-expanded', card.classList.contains('expanded') ? 'true' : 'false');
                const toggle=() => {
                    card.classList.toggle('expanded');
                    card.setAttribute('aria-expanded',card.classList.contains('expanded')?'true':'false');
                };
                card.addEventListener('click',(event) => { if (!event.target.closest('a')) toggle(); });
                card.addEventListener('keydown',(event) => {
                    if (event.key==='Enter' || event.key===' ') { event.preventDefault(); toggle(); }
                });
            });
        }
        function initHero() {
            const totals=getTotals();
            const heroTotal=document.getElementById('hero-total');
            const layTotal=document.getElementById('hero-lay-total');
            const pastorTotal=document.getElementById('hero-pastor-total');
            animateNumber(heroTotal,totals.all,{duration:1200,formatter:(v)=>Math.round(v).toLocaleString('zh-TW')});
            if (layTotal) layTotal.textContent=totals.lay.toLocaleString('zh-TW');
            if (pastorTotal) pastorTotal.textContent=totals.pastor.toLocaleString('zh-TW');
            document.querySelectorAll('[data-total]').forEach((node) => {
                const key=node.dataset.total;
                if (totals[key] != null) node.textContent=totals[key].toLocaleString('zh-TW');
            });
            const button=document.getElementById('hero-start-button');
            if (button) button.addEventListener('click',(event) => {
                event.preventDefault();
                document.getElementById('discovery-section')?.scrollIntoView({behavior:prefersReducedMotion.matches?'auto':'smooth',block:'start'});
            });
        }
        function initMethodPanel() {
            const button=document.getElementById('method-toggle');
            const panel=document.getElementById('method-panel');
            if (!button || !panel) return;
            button.addEventListener('click',() => {
                const open=button.getAttribute('aria-expanded')==='true';
                button.setAttribute('aria-expanded',String(!open));
                panel.hidden=open;
            });
        }
        function initLayListToggle() {
            const button=document.getElementById('lay-list-toggle');
            const shell=document.getElementById('lay-extra-shell');
            if (!button || !shell) return;
            let closeTimer=0;
            const openList=() => {
                clearTimeout(closeTimer);
                shell.hidden=false;
                shell.style.maxHeight='0px';
                requestAnimationFrame(() => {
                    shell.classList.add('is-open');
                    shell.style.maxHeight=prefersReducedMotion.matches ? 'none' : `${shell.scrollHeight}px`;
                });
                button.setAttribute('aria-expanded','true');
                button.textContent='收起排行榜';
                if (!prefersReducedMotion.matches) {
                    window.setTimeout(() => { if (button.getAttribute('aria-expanded')==='true') shell.style.maxHeight='none'; },360);
                }
            };
            const closeList=() => {
                clearTimeout(closeTimer);
                button.setAttribute('aria-expanded','false');
                button.textContent='＋ 看完整 16 型平信徒排行榜';
                if (prefersReducedMotion.matches) {
                    shell.hidden=true;
                    shell.classList.remove('is-open');
                    shell.style.maxHeight='0px';
                    return;
                }
                shell.style.maxHeight=`${shell.scrollHeight}px`;
                requestAnimationFrame(() => {
                    shell.classList.remove('is-open');
                    shell.style.maxHeight='0px';
                });
                closeTimer=window.setTimeout(() => {
                    if (button.getAttribute('aria-expanded')==='false') shell.hidden=true;
                },360);
            };
            button.addEventListener('click',() => button.getAttribute('aria-expanded')==='true' ? closeList() : openList());
        }
        function initPastorListToggle() {
            const button=document.getElementById('pastor-list-toggle');
            const shell=document.getElementById('pastor-extra-shell');
            if (!button || !shell) return;
            let closeTimer=0;
            const openList=() => {
                clearTimeout(closeTimer);
                shell.hidden=false;
                shell.style.maxHeight='0px';
                requestAnimationFrame(() => {
                    shell.classList.add('is-open');
                    shell.style.maxHeight=prefersReducedMotion.matches ? 'none' : `${shell.scrollHeight}px`;
                });
                button.setAttribute('aria-expanded','true');
                button.textContent='收起排行榜';
                if (!prefersReducedMotion.matches) {
                    window.setTimeout(() => { if (button.getAttribute('aria-expanded')==='true') shell.style.maxHeight='none'; },360);
                }
            };
            const closeList=() => {
                clearTimeout(closeTimer);
                button.setAttribute('aria-expanded','false');
                button.textContent='＋ 看完整 16 型牧者排行榜';
                if (prefersReducedMotion.matches) { shell.hidden=true; shell.classList.remove('is-open'); shell.style.maxHeight='0px'; return; }
                shell.style.maxHeight=`${shell.scrollHeight}px`;
                requestAnimationFrame(() => { shell.classList.remove('is-open'); shell.style.maxHeight='0px'; });
                closeTimer=window.setTimeout(() => { if (button.getAttribute('aria-expanded')==='false') shell.hidden=true; },360);
            };
            button.addEventListener('click',() => button.getAttribute('aria-expanded')==='true' ? closeList() : openList());
        }
        function renderDimensions() {
            const lay=calculateDimensions('lay');
            const pastor=calculateDimensions('pastor');
            const pairs={EI:['E','I'],SN:['S','N'],TF:['T','F'],JP:['J','P']};
            Object.entries(pairs).forEach(([key,[first,second]]) => {
                const container=document.querySelector(`[data-dimension-bars="${key}"]`);
                if (!container) return;
                container.innerHTML='';
                [['平信徒',lay],['牧者',pastor]].forEach(([label,values]) => {
                    const row=document.createElement('div'); row.className='dimension-row';
                    row.innerHTML=`<div class="dimension-row-label">${label}</div><div class="dimension-bar-wrap"><div class="dimension-bar" role="img" aria-label="${label}：${first} ${values[first].toFixed(1)}%，${second} ${values[second].toFixed(1)}%"><div class="dimension-segment first" style="width:${values[first].toFixed(1)}%"></div><div class="dimension-segment second" style="width:${values[second].toFixed(1)}%"></div></div><div class="dimension-values"><span>${first} ${values[first].toFixed(1)}%</span><span>${second} ${values[second].toFixed(1)}%</span></div></div>`;
                    container.appendChild(row);
                });
            });
            return {lay,pastor};
        }
        function renderMyths(dimensions) {
            const {lay,pastor}=dimensions;
            const values={
                'pastor-i':pastor.I.toFixed(1),
                'lay-s':lay.S.toFixed(1),
                'pastor-s':pastor.S.toFixed(1),
                'pastor-p':pastor.P.toFixed(1),
                'pastor-j':pastor.J.toFixed(1),
                'lay-top':`${Object.entries(getDataset('lay')).sort((a,b)=>a[1].rank-b[1].rank)[0][0]}｜${Object.entries(getDataset('lay')).sort((a,b)=>a[1].rank-b[1].rank)[0][1].character}`,
                'pastor-top':`${Object.entries(getDataset('pastor')).sort((a,b)=>a[1].rank-b[1].rank)[0][0]}｜${Object.entries(getDataset('pastor')).sort((a,b)=>a[1].rank-b[1].rank)[0][1].character}`
            };
            document.querySelectorAll('[data-myth]').forEach((node) => { if (values[node.dataset.myth]!=null) node.textContent=values[node.dataset.myth]; });
        }
        function renderTemperaments() {
            const lay = calculateTemperaments('lay');
            const layData = getDataset('lay');
            const layTotal = Object.values(layData).reduce((sum, item) => sum + item.count, 0);
            document.querySelectorAll('[data-temperament-total]').forEach((node) => {
                node.textContent = layTotal.toLocaleString('zh-TW');
            });
            Object.entries(lay).forEach(([group, percent]) => {
                document.querySelectorAll(`[data-temperament-summary-people="${group}"]`).forEach((node) => {
                    node.textContent = Math.round(percent);
                });
                document.querySelectorAll(`[data-temperament-summary-percent="${group}"]`).forEach((node) => {
                    node.textContent = percent.toFixed(1);
                });
            });
            document.querySelectorAll('[data-temperament]').forEach((box) => {
                const group = box.dataset.temperament;
                const percent = lay[group];
                const layNode = box.querySelector('[data-share="lay"]');
                const layPeopleNode = box.querySelector('[data-share-people="lay"]');
                const ratioNode = box.querySelector('[data-share-ratio="lay"]');
                if (layNode) layNode.textContent = percent.toFixed(1);
                if (layPeopleNode) layPeopleNode.textContent = Math.round(percent);
                if (ratioNode && percent > 0) {
                    const denominator = Math.max(2, Math.round(100 / percent));
                    ratioNode.textContent = `差不多每 ${denominator} 人就有 1 位`;
                }
            });
        }
        function renderEnfj() {
            const entry=mbtiData.ENFJ;
            if (!entry) return;
            animateNumber(document.getElementById('enfj-stat1'),entry.lay.percent,{formatter:(v)=>v.toFixed(1)});
            animateNumber(document.getElementById('enfj-stat2'),entry.pastor.percent,{formatter:(v)=>v.toFixed(1)});
        }
        decorateRankingCards();
        decorateMysteryCharacter();
        initInteractiveRankCards();
        initHero();
        initMethodPanel();
        initLayListToggle();
        initPastorListToggle();
        const dimensions=renderDimensions();
        renderMyths(dimensions);
        renderTemperaments();
        renderEnfj();
        initMbtiLookup();
        initTemperamentCharacterLookup();

/* v152-nav-performance-js */
(() => {
  const back = document.getElementById('back-to-top');
  if (back) {
    let ticking = false;
    const update = () => {
      const threshold = Math.max(window.innerHeight, 600);
      back.classList.toggle('is-visible', window.scrollY > threshold);
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
    back.addEventListener('click', () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }
  // Embedded images are heavy; defer non-critical decoding/loading where supported.
  document.querySelectorAll('img').forEach((img) => {
    if (!img.closest('.hero') && img.getAttribute('src')) {
      img.loading = 'lazy';
      img.decoding = 'async';
    }
  });
})();

/* v222-enfj-core-finding-drawer-script */
(function(){
  function initEnfjMysteryDrawer(){
    const button=document.getElementById('enfj-mystery-toggle');
    const drawer=document.getElementById('enfj-mystery');
    const card=document.getElementById('enfj-core-finding');
    if(!button||!drawer||!card) return;
    const action=button.querySelector('.discovery-mystery-action');
    const setOpen=(open)=>{
      button.setAttribute('aria-expanded',open?'true':'false');
      drawer.hidden=!open;
      card.classList.toggle('is-open',open);
      if(action) action.textContent=open?'收起':'展開看一下';
    };
    setOpen(false);
    button.addEventListener('click',()=>setOpen(button.getAttribute('aria-expanded')!=='true'));
    drawer.addEventListener('keydown',(event)=>{
      if(event.key==='Escape'){
        setOpen(false);
        button.focus({preventScroll:true});
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initEnfjMysteryDrawer,{once:true});
  else initEnfjMysteryDrawer();
})();

/* v223-chapter-deeplink-share-script */
(function(){
  const chapters=[
    {slug:'overview', target:'top', title:'教會 MBTI 大調查', share:false},
    {slug:'core-findings', target:'discovery-section', title:'核心發現'},
    {slug:'mbti-profile', target:'mbti-lookup', title:'關於我的小檔案'},
    {slug:'ranking', target:'ranking-compare', title:'16 型排行榜'},
    {slug:'lay-ranking', target:'lay-ranking', title:'平信徒 16 型全排行'},
    {slug:'pastor-ranking', target:'pastor-ranking', title:'牧者 16 型全排行'},
    {slug:'faith-stats', target:'question-stats-section', title:'信仰答題統計'},
    {slug:'theater', target:'temperament-section', title:'人物小劇場'},
    {slug:'song', target:'song-dedication-section', title:'為聖經人物點一首歌'},
    {slug:'final', target:'final-cta', title:'再測一次', share:false}
  ];
  const legacyAliases={
    'discovery-section':'core-findings',
    'mbti-lookup':'mbti-profile',
    'ranking-compare':'ranking',
    'question-stats-section':'faith-stats',
    'song-dedication-section':'song',
    'temperament-section':'theater',
    'final-cta':'final'
  };
  function buildUrl(slug){
    const url=new URL(window.location.href);
    url.hash=slug;
    return url.toString();
  }
  let toastTimer=null;
  function showToast(message){
    let toast=document.querySelector('.chapter-share-toast');
    if(!toast){
      toast=document.createElement('div');
      toast.className='chapter-share-toast';
      toast.setAttribute('role','status');
      toast.setAttribute('aria-live','polite');
      document.body.appendChild(toast);
    }
    toast.textContent=message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer=setTimeout(()=>toast.classList.remove('is-visible'),1800);
  }
  async function copyText(text){
    try{
      if(navigator.clipboard && window.isSecureContext){
        await navigator.clipboard.writeText(text);
        return true;
      }
    }catch(e){}
    try{
      const ta=document.createElement('textarea');
      ta.value=text;
      ta.setAttribute('readonly','');
      ta.style.position='fixed';
      ta.style.opacity='0';
      document.body.appendChild(ta);
      ta.select();
      const ok=document.execCommand('copy');
      ta.remove();
      return !!ok;
    }catch(e){ return false; }
  }
  async function shareChapter(slug,title,button){
    const url=buildUrl(slug);
    const shareTitle=`教會 MBTI 大調查｜${title}`;
    try{
      if(navigator.share && location.protocol!=='file:'){
        await navigator.share({title:shareTitle,url});
        return;
      }
    }catch(e){
      if(e && e.name==='AbortError') return;
    }
    const copied=await copyText(url);
    if(copied){
      if(button){
        const old=button.textContent;
        button.classList.add('is-copied');
        button.textContent='已複製章節網址 ✓';
        setTimeout(()=>{
          button.classList.remove('is-copied');
          button.textContent=old;
        },1600);
      }
      showToast('章節網址已複製');
    }else{
      window.prompt('複製這個章節網址：',url);
    }
  }
  function addShareButton(chapter){
    const section=document.getElementById(chapter.target);
    if(!section || section.querySelector(':scope > .chapter-share-btn[data-chapter-slug="'+chapter.slug+'"]')) return;
    const btn=document.createElement('button');
    btn.type='button';
    btn.className='chapter-share-btn is-section-share';
    btn.dataset.chapterSlug=chapter.slug;
    btn.setAttribute('aria-label',`分享「${chapter.title}」章節`);
    btn.textContent='分享此章 ↗';
    btn.addEventListener('click',()=>shareChapter(chapter.slug,chapter.title,btn));
    const heading=section.querySelector(':scope > .section-title, :scope > h2, h2.section-title, .final-hub-heading h2');
    if(heading) heading.insertAdjacentElement('beforebegin',btn);
    else section.prepend(btn);
  }
  function addEnfjShareButton(){
    const head=document.querySelector('#enfj-mystery .drawer-case-head');
    if(!head || head.querySelector('.enfj-case-share-btn')) return;
    const btn=document.createElement('button');
    btn.type='button';
    btn.className='chapter-share-btn enfj-case-share-btn';
    btn.textContent='分享這個懸案 ↗';
    btn.setAttribute('aria-label','分享 ENFJ 教會數據懸案');
    btn.addEventListener('click',()=>shareChapter('enfj-case','ENFJ 教會數據懸案',btn));
    head.appendChild(btn);
  }
  function setEnfjOpen(open){
    const button=document.getElementById('enfj-mystery-toggle');
    const drawer=document.getElementById('enfj-mystery');
    const card=document.getElementById('enfj-core-finding');
    if(!button||!drawer||!card) return;
    button.setAttribute('aria-expanded',open?'true':'false');
    drawer.hidden=!open;
    card.classList.toggle('is-open',open);
    const action=button.querySelector('.discovery-mystery-action');
    if(action) action.textContent=open?'收起':'展開看一下';
  }
  function resolveHash(){
    let hash=decodeURIComponent(location.hash.replace(/^#/,''));
    if(!hash) return;
    if(hash==='enfj-case'){
      setEnfjOpen(true);
      const target=document.getElementById('enfj-core-finding');
      if(target) requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'auto'}));
      return;
    }
    if(legacyAliases[hash]) hash=legacyAliases[hash];
    const chapter=chapters.find(item=>item.slug===hash);
    const target=chapter ? document.getElementById(chapter.target) : document.getElementById(hash);
    if(target) requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'auto'}));
  }
  function init(){
    chapters.filter(chapter=>chapter.share!==false).forEach(addShareButton);
    addEnfjShareButton();
    setTimeout(resolveHash,30);
    window.addEventListener('hashchange',()=>setTimeout(resolveHash,0));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();

/* v228-profile-contribution-and-conclusion-script */
(function(){
  const contributions={
    ESTP:'當大家還在評估時，你常會先試第一步，把討論拉回現場，也比較快看出哪些做法真的行得通。',
    ISTP:'現場出狀況時，你通常能先把問題拆開、找到可行的解法，讓大家不用一直卡在空轉的討論裡。',
    ESFP:'新人不知道怎麼融入、氣氛有點僵時，你很可能是先把大家拉近的人，讓服事不只有效率，也有人情味。',
    ISFP:'當流程和效率壓過人的感受時，你比較容易注意到個別需要，也會提醒大家別把人只當成事情的一部分。',
    ESTJ:'當責任不清、事情卡住時，你會把目標、分工和下一步整理好，讓好點子真的做得出來。',
    ISTJ:'大家都在談新方向時，你會記得承諾、細節和後續，讓一件事不只靠一時熱情撐著。',
    ESFJ:'事情多、人也多時，你常能同時顧到流程和人的需要，讓服事做完之後，人也沒有被漏掉。',
    ISFJ:'安靜的人、小小的需要最容易被忽略，你常會記得那些名字、承諾和沒說出口的事。',
    ENTJ:'當方向不清、決定一直拖時，你會把問題說明白、把資源排好，幫大家真的往前走。',
    INTJ:'當大家忙著處理眼前問題時，你比較容易看到長期結構和風險，會想到「這個做法半年後還撐得住嗎？」',
    ENTP:'當大家太快有共識時，你常會丟出另一個可能，讓「以前都這樣」重新被拿出來想一次。',
    INTP:'當一個答案太快被接受時，你可能會多問一句「為什麼」，替團隊保留認真想清楚的空間。',
    ENFJ:'當大家各做各的時，你很會把人重新聚起來，讓一個方向不只是少數人的想法，而是大家願意一起走的事。',
    INFJ:'表面看起來都沒事時，你比較容易察覺沒說出口的情緒和長期方向，讓那些不容易被注意的事浮出來。',
    ENFP:'當事情只剩流程、大家有點忘了為什麼開始時，你常會重新把可能性打開，問一句「我們還能怎麼做？」',
    INFP:'當效率、規則或多數意見壓過核心價值時，你會守住自己認為重要的事，也提醒大家「做得到」不一定等於「值得做」。'
  };
  function renderContribution(){
    const result=document.getElementById('mbti-lookup-result');
    const host=document.querySelector('[data-field="profile-contribution"]');
    if(!result||!host) return;
    const type=result.dataset.currentType;
    if(type&&contributions[type]) host.textContent=contributions[type];
  }
  const result=document.getElementById('mbti-lookup-result');
  if(result){
    new MutationObserver(renderContribution).observe(result,{attributes:true,attributeFilter:['data-current-type']});
    renderContribution();
  }
})();

/* v257-interactive-drawer-script */
(function(){
  const configs={
    'mbti-lookup':{
      open:'收起我的小檔案',
      closed:'展開'
    },
    'ranking-compare':{
      open:'收起排行榜',
      closed:'展開'
    },
    'question-stats-section':{
      open:'收起答題統計',
      closed:'展開'
    },
    'church-team':{
      open:'收起組隊',
      closed:'展開'
    },
    'temperament-section':{
      open:'收起小劇場',
      closed:'展開'
    },
    'song-dedication-section':{
      open:'收起人格點歌',
      closed:'展開'
    }
  };
  function setDrawer(id,open,{scroll=false}={}){
    const section=document.getElementById(id);
    const button=document.querySelector(`[data-drawer-toggle="${id}"]`);
    if(!section || !button) return;
    section.classList.toggle('is-collapsed',!open);
    button.setAttribute('aria-expanded',open?'true':'false');
    const cfg=configs[id];
    button.innerHTML=`${open?cfg.open:cfg.closed} <b aria-hidden="true">${open?'↑':'↓'}</b>`;
    if(open && scroll){
      requestAnimationFrame(()=>{
        section.scrollIntoView({behavior:'smooth',block:'start'});
      });
    }
  }
  document.querySelectorAll('[data-drawer-toggle]').forEach(button=>{
    const id=button.dataset.drawerToggle;
    button.addEventListener('click',()=>{
      const section=document.getElementById(id);
      if(!section) return;
      const open=section.classList.contains('is-collapsed');
      setDrawer(id,open,{scroll:open});
    });
  });
  function openFromHash(){
    const hash=location.hash.replace('#','');
    if(hash==='mbti-profile' || hash==='mbti-lookup'){
      setDrawer('mbti-lookup',true);
    }
    if(hash==='ranking' || hash==='ranking-compare' || hash==='lay-ranking' || hash==='pastor-ranking'){
      setDrawer('ranking-compare',true);
    }
    if(hash==='faith-stats' || hash==='question-stats-section'){
      setDrawer('question-stats-section',true);
    }
    if(hash==='church-team'){
      setDrawer('church-team',true);
    }
    if(hash==='theater' || hash==='temperament-section'){
      setDrawer('temperament-section',true);
    }
    if(hash==='song' || hash==='song-dedication-section'){
      setDrawer('song-dedication-section',true);
    }
  }
  openFromHash();
  window.addEventListener('hashchange',openFromHash);
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href^="#"]');
    if(!a) return;
    const hash=(a.getAttribute('href')||'').replace('#','');
    if(hash==='mbti-profile' || hash==='mbti-lookup') setDrawer('mbti-lookup',true);
    if(hash==='ranking' || hash==='ranking-compare' || hash==='lay-ranking' || hash==='pastor-ranking') setDrawer('ranking-compare',true);
    if(hash==='faith-stats' || hash==='question-stats-section') setDrawer('question-stats-section',true);
    if(hash==='church-team') setDrawer('church-team',true);
    if(hash==='theater' || hash==='temperament-section') setDrawer('temperament-section',true);
    if(hash==='song' || hash==='song-dedication-section') setDrawer('song-dedication-section',true);
  },true);
})();

/* v279-mobile-whole-row-drawer-script */
(function(){
  const mq=window.matchMedia('(max-width:760px)');
  document.querySelectorAll('.interactive-drawer').forEach(section=>{
    section.addEventListener('click',function(e){
      if(!mq.matches || !section.classList.contains('is-collapsed')) return;
      if(e.target.closest('.interactive-drawer-toggle')) return;
      if(e.target.closest('a, input, select, textarea, label')) return;
      const btn=section.querySelector('.interactive-drawer-toggle');
      if(btn){
        e.preventDefault();
        btn.click();
      }
    });
  });
})();

/* v280-collapse-controls-at-section-end */
(function(){
  const drawers=[...document.querySelectorAll('.interactive-drawer')];
  drawers.forEach(section=>{
    const entry=section.querySelector(':scope > .interactive-drawer-entry') ||
                section.querySelector('.interactive-drawer-entry');
    if(!entry) return;
    const marker=document.createComment('drawer-entry-home');
    entry.parentNode.insertBefore(marker,entry);
    function sync(){
      const open=!section.classList.contains('is-collapsed');
      if(open){
        if(section.lastElementChild!==entry){
          section.appendChild(entry);
        }
      }else{
        if(marker.parentNode && marker.nextSibling!==entry){
          marker.parentNode.insertBefore(entry,marker.nextSibling);
        }
      }
    }
    sync();
    new MutationObserver(sync).observe(section,{
      attributes:true,
      attributeFilter:['class']
    });
  });
})();

/* v283-final-share-cleanup-script */
(function(){
  function cleanFinalShare(){
    document.querySelectorAll('#final-cta .chapter-share-btn.is-section-share').forEach(el=>el.remove());
  }
  cleanFinalShare();
  const target=document.getElementById('final-cta');
  if(target){
    new MutationObserver(cleanFinalShare).observe(target,{childList:true,subtree:true});
  }
})();

/* v304-idle-hint */
document.documentElement.classList.add('js-ready');
if('requestIdleCallback' in window){
  requestIdleCallback(function(){
    document.documentElement.classList.add('idle-ready');
  },{timeout:1200});
}else{
  setTimeout(function(){
    document.documentElement.classList.add('idle-ready');
  },250);
}

/* v308-character-image-loading-fix */
(function(){
  function isCharacterImage(img){
    if(!img || img.tagName !== 'IMG') return false;
    var src = img.getAttribute('src') || '';
    return src.indexOf('assets/characters/') !== -1 ||
      img.id === 'profile-character-img' ||
      img.id === 'temperament-theater-art' ||
      img.id === 'pastor-advisor-img' ||
      img.id === 'song-character-img' ||
      img.id === 'mystery-abraham-lay' ||
      img.id === 'mystery-abraham-pastor' ||
      img.hasAttribute('data-modern-art-img') ||
      img.hasAttribute('data-role-art-img') ||
      img.closest('.mbti-passport-ghost') ||
      img.closest('.rank-character-thumb');
  }

  function activate(img){
    if(!isCharacterImage(img)) return;
    img.loading = 'eager';
    img.decoding = 'async';
    img.fetchPriority = 'auto';
    img.style.contentVisibility = 'visible';
  }

  function scan(root){
    if(root && root.tagName === 'IMG') activate(root);
    if(root && root.querySelectorAll){
      root.querySelectorAll('img').forEach(activate);
    }
  }

  scan(document);

  new MutationObserver(function(records){
    records.forEach(function(record){
      if(record.type === 'attributes' && record.target.tagName === 'IMG'){
        activate(record.target);
      }
      record.addedNodes.forEach(function(node){
        if(node.nodeType === 1) scan(node);
      });
    });
  }).observe(document.documentElement,{
    subtree:true,
    childList:true,
    attributes:true,
    attributeFilter:['src']
  });
})();

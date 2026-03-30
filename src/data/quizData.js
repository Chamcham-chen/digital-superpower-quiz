export const quizQuestions = [
  {
    id: 1,
    title: "創意與情緒轉譯力",
    question: "主管請你籌辦「部門年度聚餐」，今天需發出帶動氣氛的邀請信。你的直覺行動是？",
    options: [
      { id: 'A', text: "從零開始用心撰寫，反覆推敲幽默感與熱情。", score: 250 },
      { id: 'B', text: "找出歷年經典範本，快速替換時間地點後發出。", score: 650 },
      { id: 'C', text: "給 AI 關鍵資訊產出兩種語氣草稿，人工微調後發出。", score: 1250 }
    ]
  },
  {
    id: 2,
    title: "資源協調與專案推動力",
    question: "專案啟動，需喬十幾位跨部門主管的會議時間，並分配會前準備。你的直覺行動是？",
    options: [
      { id: 'A', text: "逐一詢問大家空檔，並親手打好任務清單發信通知。", score: 250 },
      { id: 'B', text: "善用共用行事曆尋找交集時間，發送帶有標準議程的邀請。", score: 650 },
      { id: 'C', text: "用排程系統一鍵抓出空檔，請 AI 草擬任務表，微調後發出。", score: 1250 }
    ]
  },
  {
    id: 3,
    title: "資訊濃縮力",
    question: "剛結束兩小時跨部門大會，主管要你下班前交出「決議與待辦清單」。你的直覺行動是？",
    options: [
      { id: 'A', text: "翻開密密麻麻的筆記，靠絕佳記憶力親手打出完整紀錄。", score: 250 },
      { id: 'B', text: "調出會議錄音或逐字稿，篩選出重點，再依序填入標準模板中。", score: 650 },
      { id: 'C', text: "請 AI 助手將逐字稿摘要成表格，進行邏輯微調後交件。", score: 1250 }
    ]
  },
  {
    id: 4,
    title: "跨語系溝通力",
    question: "信箱收到一封國外客戶重要外文信件，需盡快理解並回覆。你的直覺行動是？",
    options: [
      { id: 'A', text: "憑藉外語能力逐句閱讀理解，親自撰寫出精準得體的回信。", score: 250 },
      { id: 'B', text: "搭配翻譯軟體掌握大意，套用平時整理好的商用金句庫拼湊回覆。", score: 650 },
      { id: 'C', text: "請 AI 瞬間總結重點，寫下中文邏輯讓 AI 草擬外文信，檢視後發出。", score: 1250 }
    ]
  },
  {
    id: 5,
    title: "新知吸收與解構力",
    question: "老闆突然丟來一個沒聽過的新專有名詞，要你下午開會前給初步看法。你的直覺行動是？",
    options: [
      { id: 'A', text: "立刻 Google 爬梳相關文章，努力在腦中拼湊完整知識架構。", score: 250 },
      { id: 'B', text: "專找相關領域的懶人包或圖解，快速抓出核心概念與摘要。", score: 650 },
      { id: 'C', text: "請 AI 用白話文解釋並列出優缺點，快速核實後轉化為個人見解。", score: 1250 }
    ]
  },
  {
    id: 6,
    title: "技術排障與自救力",
    question: "處理重要報表時，複雜的 Excel 公式突然跳出整排「#N/A」錯誤代碼。你的直覺行動是？",
    options: [
      { id: 'A', text: "發揮偵探般的耐心，點開公式一層一層檢查邏輯抓出錯誤。", score: 250 },
      { id: 'B', text: "複製錯誤代碼去專業論壇爬文，找到前人解法並依樣修正。", score: 650 },
      { id: 'C', text: "把代碼和原始公式丟給 AI 請求修正建議，驗證邏輯後一秒修復。", score: 1250 }
    ]
  },
  {
    id: 7,
    title: "邏輯與自動化建構力",
    question: "月初又要交跨部門的固定報表，面對下載數據、整理到寄出的繁瑣流程。你的直覺行動是？",
    options: [
      { id: 'A', text: "預留專屬時間，手動下載、核對並貼齊所有資料，確保絕對零失誤。", score: 250 },
      { id: 'B', text: "套用寫好的 Excel 樞紐分析與函數，將新資料倒進去微調產出。", score: 650 },
      { id: 'C', text: "早就串好專屬自動化流程，只需一鍵觸發和做最終檢視。", score: 1250 }
    ]
  }
];

export const resultTiers = [
  {
    minScore: 3000,
    maxScore: 3999,
    tierName: "踏實守護者",
    creature: "手搖發電小倉鼠",
    image: "hamster",
    quote: "「細節決定成敗！我用無比耐心，守護團隊最穩固的基石。」",
    analysis: "你是團隊中高度可靠的夥伴！對任務有驚人責任感與細緻度。你的價值在於「絕不妥協的精準度」。",
    suggestion: "試著挑選一個「最重複」的小動作嘗試開啟快捷鍵。省下 10% 體力，就能把細心用在更具創造力的事情上！"
  },
  {
    minScore: 4000,
    maxScore: 6999,
    tierName: "流程魔術師",
    creature: "聰明濾水貓頭鷹",
    image: "owl",
    quote: "「找出規律、建立標準！我懂得用智慧讓資訊流動更有序。」",
    analysis: "你具備極佳洞察力，不甘於盲目努力。懂得運用數位工具建立 SOP。你是辦公室中「聰明工作」的先鋒。",
    suggestion: "試著把「手動模板」與「AI 摘要」結合。讓 AI 幫你草擬初稿，你專注於專業審閱，效能將迎來翻倍成長！"
  },
  {
    minScore: 7000,
    maxScore: 8999,
    tierName: "自動化指揮官",
    creature: "光速傳送獵豹",
    image: "cheetah",
    quote: "「讓科技跑在前面！我致力於設計一擊必殺的完美流程。」",
    analysis: "血液中流著效率基因！對自動化優化有極高敏銳度，擅長指揮數位軍團完成任務，是幫團隊省時間的英雄。",
    suggestion: "你是數位尖兵！建議多嘗試「跨工具的 AI 整合」。除了自己高效，也試著把小秘訣分享給同事，你具備數位領袖的潛力。"
  },
  {
    minScore: 9000,
    maxScore: 10000,
    tierName: "數位造物主",
    creature: "自帶核反應爐的 AI 飛龍",
    image: "dragon",
    quote: "「人機協作巔峰！我用 AI 放大感官，創造無限可能。」",
    analysis: "AI 是你手腳一樣自然的夥伴。懂得下精準指令產出高品質成果，並運用專業知識進行畫龍點睛。",
    suggestion: "你是數位引路人！建議思考如何將 AI 應用到更複雜的策略決策中。你的「詠唱技巧」是公司珍貴資產，帶領團隊一起進化吧！"
  }
];

export const calculateResult = (score) => {
  return resultTiers.find(tier => score >= tier.minScore && score <= tier.maxScore) || resultTiers[0];
};

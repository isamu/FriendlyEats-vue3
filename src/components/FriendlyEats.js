export const data = {
  name: [
    "ビストロ",
    "割烹",
    "居酒屋",
    "串焼き",
    "パティスリー",
    "バー",
    "洋食屋",
    "和食",
    "食堂",
    "たこ焼き",
    "究極のかき氷",
    "驚異のアンパン",
    "オリエンタル料理",
  ],
  name2: [
    "ボンジュール",
    "ナポリ",
    "プルミエ",
    "クオモ",
    "えびすや",
    "おかみ",
    "あざみ",
    "銀座",
    "東京",
    "山田",
    "アトム",
    "まるはち",
    "ボンボン",
    "摩天楼",
    "モンシュー",
    "魔の巣",
    "アウトサイダー",
  ],
  categories: ["和食", "洋食", "スイーツ"],
  cities: [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ],
  ratings: [
    {
      rating: 1,
      text: "一回食べたら満足かな〜",
    },
    {
      rating: 2,
      text: "まぁまぁかな。",
    },
    {
      rating: 3,
      text: "普通に美味しい",
    },
    {
      rating: 4,
      text: "よかった。オススメしたい",
    },
    {
      rating: 5,
      text: "とても美味しい",
    },
  ],
};

export const priceOptions = ["$", "$$", "$$$", "$$$$"];
export const sortOrderOptions = ["Rating", "Reviews"];

export const getRandomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

export const getStar = (rating) => {
  const ret = [];
  for (let r = 0; r < 5; r += 1) {
    if (r < Math.floor(rating)) {
      ret.push({ id: r, value: "star" });
    } else {
      ret.push({ id: r, value: "star_border" });
    }
  }
  return ret;
};

export const getPrice = (price) => {
  const ret = [];
  for (let r = 0; r < price; r += 1) {
    ret.push({ id: r, value: "$" });
  }
  return ret;
};

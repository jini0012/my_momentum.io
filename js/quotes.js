const quotes = [
  { quote: "나는 해야 한다. 그러므로 나는 할 수 있다.", author: "칸트" },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨",
  },
  { quote: "피할수 없으면 즐겨라", author: "로버트 엘리엇" },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author: "마르쿠스 아우렐리우스 안토니우스",
  },
  {
    quote:
      "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "L.론허바드",
  },
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
    author: "제임스 오펜하임",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드",
  },
  { quote: "행복은 습관이다,그것을 몸에 지니라", author: "허버드" },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author: "앙드레 말로",
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "단테",
  },
  { quote: "자신감 있는 표정을 지으면 자신감이 생긴다", author: "찰스다윈" },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
    author: "괴테",
  },
  {
    quote:
      "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
    author: "아인슈타인",
  },
  {
    quote:
      "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
    author: "톨스토이",
  },
  {
    quote:
      "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
    author: "괴테",
  },
  {
    quote:
      "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
    author: "베토벤",
  },
  {
    quote:
      "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 흔히 우리는 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다.",
    author: "헬렌 켈러",
  },
  {
    quote: "자신을 내보여라. 그러면 재능이 드러날 것이다.",
    author: "발타사르 그라시안",
  },
  {
    quote: "겨울이 오면 봄이 멀지 않으리",
    author: "셸리",
  },
  {
    quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라",
    author: "나딘 스테어",
  },
];

const quote = document.querySelector(".quote div:first-child");
const author = document.querySelector(".quote div:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

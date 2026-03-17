// ── ひらがな画数テーブル ────────────────────────────────
const HIRAGANA = {
  'あ':3,'い':2,'う':2,'え':2,'お':3,
  'か':3,'き':4,'く':1,'け':3,'こ':2,
  'さ':2,'し':1,'す':2,'せ':3,'そ':2,
  'た':4,'ち':3,'つ':1,'て':1,'と':2,
  'な':4,'に':3,'ぬ':4,'ね':4,'の':1,
  'は':3,'ひ':2,'ふ':4,'へ':1,'ほ':4,
  'ま':3,'み':3,'む':4,'め':2,'も':3,
  'や':2,'ゆ':2,'よ':2,
  'ら':2,'り':2,'る':2,'れ':2,'ろ':3,
  'わ':2,'を':3,'ん':1,
  // 濁音・半濁音
  'が':5,'ぎ':6,'ぐ':3,'げ':5,'ご':4,
  'ざ':4,'じ':3,'ず':4,'ぜ':5,'ぞ':4,
  'だ':6,'ぢ':5,'づ':3,'で':3,'ど':4,
  'ば':5,'び':4,'ぶ':6,'べ':3,'ぼ':6,
  'ぱ':6,'ぴ':5,'ぷ':7,'ぺ':2,'ぽ':7,
  // 小文字
  'ぁ':3,'ぃ':2,'ぅ':2,'ぇ':2,'ぉ':3,
  'っ':1,'ゃ':2,'ゅ':2,'ょ':2,
}

// ── カタカナ画数テーブル ────────────────────────────────
const KATAKANA = {
  'ア':2,'イ':2,'ウ':3,'エ':3,'オ':3,
  'カ':2,'キ':3,'ク':2,'ケ':3,'コ':2,
  'サ':3,'シ':3,'ス':2,'セ':2,'ソ':2,
  'タ':3,'チ':3,'ツ':3,'テ':3,'ト':2,
  'ナ':2,'ニ':2,'ヌ':2,'ネ':4,'ノ':1,
  'ハ':2,'ヒ':2,'フ':2,'ヘ':1,'ホ':3,
  'マ':2,'ミ':3,'ム':2,'メ':2,'モ':3,
  'ヤ':2,'ユ':2,'ヨ':3,
  'ラ':2,'リ':2,'ル':2,'レ':1,'ロ':3,
  'ワ':2,'ヲ':3,'ン':2,'ヴ':5,
  // 濁音・半濁音
  'ガ':4,'ギ':5,'グ':4,'ゲ':5,'ゴ':4,
  'ザ':5,'ジ':5,'ズ':4,'ゼ':4,'ゾ':4,
  'ダ':5,'ヂ':5,'ヅ':5,'デ':5,'ド':4,
  'バ':4,'ビ':4,'ブ':4,'ベ':3,'ボ':5,
  'パ':5,'ピ':5,'プ':5,'ペ':4,'ポ':6,
  // 小文字・長音
  'ァ':2,'ィ':2,'ゥ':3,'ェ':3,'ォ':3,
  'ッ':3,'ャ':2,'ュ':2,'ョ':3,'ー':1,
}

// ── 数字（0〜9）画数テーブル ────────────────────────────
const NUMBERS = {
  '0':1,'1':1,'2':1,'3':1,'4':2,
  '5':2,'6':1,'7':1,'8':2,'9':1,
}

// ── 英字（大文字・小文字）画数テーブル ─────────────────
const ALPHA = {
  // 大文字
  'A':3,'B':2,'C':1,'D':2,'E':4,'F':3,'G':2,'H':3,'I':3,
  'J':2,'K':3,'L':2,'M':4,'N':3,'O':1,'P':2,'Q':2,'R':3,
  'S':1,'T':2,'U':1,'V':2,'W':4,'X':2,'Y':3,'Z':3,
  // 小文字
  'a':2,'b':2,'c':1,'d':2,'e':1,'f':2,'g':2,'h':2,'i':2,
  'j':2,'k':3,'l':1,'m':3,'n':2,'o':1,'p':2,'q':2,'r':2,
  's':1,'t':2,'u':1,'v':2,'w':4,'x':2,'y':3,'z':3,
}

// ── KanjiAPI キャッシュ ─────────────────────────────────
const kanjiCache = {}

async function fetchKanjiStrokes(char) {
  if (kanjiCache[char] !== undefined) return kanjiCache[char]
  try {
    const res = await fetch(
      `https://kanjialive.com/api/public/kanji/${encodeURIComponent(char)}`
    )
    if (!res.ok) { kanjiCache[char] = 1; return 1 }
    const data = await res.json()
    const strokes = data?.kanji?.strokes ?? 1
    kanjiCache[char] = strokes
    return strokes
  } catch {
    kanjiCache[char] = 1
    return 1
  }
}

// ── 1文字の画数を返す ───────────────────────────────────
async function getCharStrokes(char) {
  if (HIRAGANA[char] !== undefined) return HIRAGANA[char]
  if (KATAKANA[char] !== undefined) return KATAKANA[char]
  if (NUMBERS[char]  !== undefined) return NUMBERS[char]
  if (ALPHA[char]    !== undefined) return ALPHA[char]
  // 漢字（U+4E00〜U+9FAF）
  if (/[\u4E00-\u9FAF\u3400-\u4DBF]/.test(char)) return fetchKanjiStrokes(char)
  // 記号・スペースなど
  return 1
}

// ── SSID 全体の画数合計を返す ───────────────────────────
export async function ssidToStrokeTotal(ssid) {
  if (!ssid) return 0
  const strokes = await Promise.all([...ssid].map(getCharStrokes))
  return strokes.reduce((sum, s) => sum + s, 0)
}

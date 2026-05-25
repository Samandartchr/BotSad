import { CUSTOM_ZONE_DATA } from './zoneContent.js';

export const DISPLAY_ID = {
  '21':'2.1','131':'13.1','141':'14.1','21_1':'21','241':'24.1','251':'25.1'
};
export const displayId = id => DISPLAY_ID[id] ?? id;

const EN_T = ['Dendrology','Herbaceous Perennials','Rose Garden','Medicinal Plants','Steppe Flora','Conifers','Aquatic Plants','Bulb Collection','Ornamental Grasses','Shade Garden','Alpine Plants','Tropical House'];
const KK_T = ['Дендрология','Көпжылдық шөптесіндер','Раушан бағы','Дәрілік өсімдіктер','Дала флорасы','Қылқан жапырақтылар','Су өсімдіктері','Пияздық коллекция','Сәндік астықтар','Көлеңкелі бақша','Альпі өсімдіктері','Тропикалық үй'];
const RU_T = ['Дендрология','Травянистые многолетники','Розарий','Лекарственные растения','Степная флора','Хвойные','Водные растения','Луковичные','Декоративные злаки','Теневой сад','Альпийские растения','Тропикарий'];
const TR_T = ['Dendroloji','Çok Yıllık Bitkiler','Gül Bahçesi','Tıbbi Bitkiler','Bozkır Florası','İğne Yapraklılar','Su Bitkileri','Soğanlı Bitkiler','Süs Çimleri','Gölge Bahçesi','Alp Bitkileri','Tropikal Ev'];

export const ZONE_DATA = {};

ZONE_DATA['cont'] = {
  kk:{name:'Контейнерлік аймақ',desc:'Контейнерлерде өсірілетін сирек және экзотикалық өсімдіктер жиынтығы.',type:'Арнайы',plants:'120+'},
  ru:{name:'Контейнерная зона',desc:'Коллекция редких и экзотических растений, выращиваемых в контейнерах.',type:'Специальная',plants:'120+'},
  en:{name:'Container Zone',desc:'Rare and exotic species grown in containers under controlled conditions.',type:'Special',plants:'120+'},
  tr:{name:'Konteyner Bölgesi',desc:'Nadir ve egzotik türlerin konteynerlerde yetiştirildiği koleksiyon.',type:'Özel',plants:'120+'},
};
ZONE_DATA['okr'] = {
  kk:{name:'Қоршау аймағы',desc:'Ботаникалық бақтың сыртқы шекарасын белгілейтін аймақ.',type:'Шекара',plants:'—'},
  ru:{name:'Ограждение',desc:'Зона внешней границы ботанического сада.',type:'Периметр',plants:'—'},
  en:{name:'Perimeter',desc:'Outer boundary zone of the botanical garden.',type:'Boundary',plants:'—'},
  tr:{name:'Çevre Sınırı',desc:'Botanik bahçesinin dış sınır bölgesi.',type:'Sınır',plants:'—'},
};
for(const id of ['131','141','241','251','21_1']){
  const n=12+(parseInt(id)*3%30); const d=displayId(id);
  ZONE_DATA[id]={
    kk:{name:`${d}-зона`,desc:`${d}-зона — ботаникалық бақтың ішкі аймағы. Жүйелі бақылаулар жүргізілуде.`,type:'Ішкі аймақ',plants:`${n}+`},
    ru:{name:`Зона ${d}`,desc:`Зона ${d} — внутренняя подзона ботанического сада. Ведутся систематические наблюдения.`,type:'Подзона',plants:`${n}+`},
    en:{name:`Zone ${d}`,desc:`Zone ${d} is an internal sub-zone of the botanical garden under systematic observation.`,type:'Sub-zone',plants:`${n}+`},
    tr:{name:`Bölge ${d}`,desc:`Bölge ${d}, botanik bahçesinin iç alt bölgesidir. Sistematik gözlemler yürütülmektedir.`,type:'Alt bölge',plants:`${n}+`},
  };
}
for(let i=1;i<=48;i++){
  const ti=(i-1)%EN_T.length; const pc=15+(i*7%60); const d=displayId(String(i));
  ZONE_DATA[String(i)]={
    kk:{name:`${d}-зона`,desc:`${d}-зона — ботаникалық бақтың ${KK_T[ti].toLowerCase()} бөлімі. Зонада ${pc}-дан астам белгіленген өсімдік түрі бар, жүйелі зерттеулер жүргізілуде.`,type:KK_T[ti],plants:`${pc}+`},
    ru:{name:`Зона ${d}`,desc:`Зона ${d} — раздел ${RU_T[ti].toLowerCase()} ботанического сада. Насчитывает более ${pc} документированных видов, ведутся систематические исследования.`,type:RU_T[ti],plants:`${pc}+`},
    en:{name:`Zone ${d}`,desc:`Zone ${d} is the ${EN_T[ti]} section. Features over ${pc} documented species with ongoing systematic research.`,type:EN_T[ti],plants:`${pc}+`},
    tr:{name:`Bölge ${d}`,desc:`Bölge ${d}, ${TR_T[ti]} bölümüdür. ${pc}+ belgelenmiş tür barındırmakta ve araştırmalar sürdürülmektedir.`,type:TR_T[ti],plants:`${pc}+`},
  };
}

for (const [zoneId, translations] of Object.entries(CUSTOM_ZONE_DATA)) {
  ZONE_DATA[zoneId] ??= {};

  for (const [lang, content] of Object.entries(translations)) {
    ZONE_DATA[zoneId][lang] = {
      ...ZONE_DATA[zoneId]?.[lang],
      ...content,
    };
  }
}

export const MAP_2D_TO_3D = {
  '1779353153553':'1',  '1779353203097':'2',   '1779353212969':'21',
  '1779353256345':'3',  '1779353347888':'4',   '1779353355936':'5',
  '1779353527000':'6',  '1779353534520':'7',   '1779353543743':'8',
  '1779353564216':'9',  '1779353590024':'10',  '1779353604456':'11',
  '1779353143161':'12', '1779353224032':'13',  '1779353239624':'131',
  '1779353264800':'14', '1779353454416':'141', '1779353374343':'15',
  '1779353711151':'16', '1779353700311':'17',  '1779353691079':'18',
  '1779353624375':'19', '1779353633167':'20',  '1779353281097':'21_1',
  '1779353289217':'22', '1779353382784':'23',  '1779353904398':'24',
  '1779353926006':'241','1779353856862':'25',  '1779353652751':'251',
  '1779353418056':'26', '1779353428336':'27',  '1779353437072':'28',
  '1779353405080':'29', '1779353393224':'30',  '1779352729915':'31',
  '1779352739794':'32', '1779353075385':'33',  '1779352704739':'34',
  '1779352791219':'35', '1779352829819':'36',  '1779352929778':'37',
  '1779353001802':'38', '1779353041082':'39',  '1779352530332':'40',
  '1779352556604':'41', '1779352575403':'42',  '1779352593187':'43',
  '1779352603604':'44', '1779352645835':'45',  '1779352865306':'46',
  '1779352892714':'47', '1779352916538':'47',  '1779352881410':'48',
};

export const ZONE_ORDER = [
  '1','2','21','3','4','5','6','7','8','9','10','11',
  '12','13','131','14','141','15','16','17','18','19','20',
  '21_1','22','23','24','241','25','251','26','27','28',
  '29','30','31','32','33','34','35','36','37','38','39',
  '40','41','42','43','44','45','46','47','48',
];

export const MODEL_TO_ZONE_ID = {
  '1':'1',  '2':'2',  '3':'3',  '4':'4',  '5':'5',
  '6':'6',  '7':'7',  '8':'8',  '9':'9',
  '10_1':'10','11_1':'11','12_1':'12','13_1':'13','14_1':'14',
  '15_1':'15','16_1':'16','17_1':'17','18_1':'18','19_1':'19',
  '20_1':'20','21_2':'21_1','22_1':'22','23_1':'23','24_1':'24',
  '25':'25',  '26':'26',  '27':'27',  '28':'28',  '29':'29',
  '30_1':'30','31_1':'31','32_1':'32','33_1':'33','34_1':'34',
  '35':'35',  '36':'36',  '37':'37',  '38':'38',  '39':'39',
  '40_1':'40','41_1':'41','42_1':'42','43_1':'43','44_1':'44',
  '45_1':'45','46_1':'46','47_1':'47','48':'48',
  '21_1':'21','131_1':'131','141_1':'141','241_1':'241','251_1':'251',
  'cont':'cont',
};
export const ZONE_MODEL_NAMES = new Set(Object.keys(MODEL_TO_ZONE_ID));

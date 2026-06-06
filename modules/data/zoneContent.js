// Zone image manifest
// Keys: zone id or name (string)
// Values: array of image file names (relative to modules/data/zoneimg/{zoneId}/)
export const ZONE_IMAGE_MANIFEST = {
  // Examples:
  // '142': ['cover.jpg','1.jpg','2.jpg'],
  // '49': ['cover.jpg'],
  // 'kanal': ['kanal1.jpg','kanal2.jpg']
  '1': ['1.png'],
};

export default ZONE_IMAGE_MANIFEST;
/*
export const CUSTOM_ZONE_DATA = {
  cont: {
    kk: {
      name: 'Аллеялар мен орталық аймақ',
      desc: 'Бұл ботаникалық бақтың негізгі аймағы. Мұнда өрік ағаштары, 2 гүл өсіретін жылыжай және беделді адамдардың еккен ағаштары бар',
      type: 'Сәндік ағаштар мен гүлдер',
      plants: '50+',
    },
    ru: {
      name: 'Аллеи и центральная зона',
      desc: 'Это центральная часть ботанического сада. Здесь расположены дерева абрикосов, 2 цветочных теплицы и деревья, посаженные известными людьми.',
      type: 'Декоративные деревья и цветы',
      plants: '50+',
    },
    en: {
      name: 'Alleys and Central Area',
      desc: 'This is the main area of the botanical garden. It features apricot trees, 2 flower greenhouses, and trees planted by notable individuals.',
      type: 'Decorative Trees and Flowers',
      plants: '50+',
    },
    tr: {
      name: 'Alleyler ve Merkezi Bölge',
      desc: "Bu, botanik bahçesinin ana alanıdır. Kayısı ağaçları, 2 çiçek serası ve tanınmış kişiler tarafından dikilen ağaçlar bulunmaktadır.",
      type: 'Süs Ağaçları ve Çiçekler',
      plants: '50+',
    },
  },

  okr: {
    kk: {
      name: 'Айналасы',
      desc: 'Ботаникалық бақтың сыртқы шекарасы және қоршаған аймақ. Бұл аймақта бақтың негізгі кіреберістері мен инфрақұрылым нысандары орналасқан.',
      type: 'Шекара аймағы',
      plants: '—',
    },
    ru: {
      name: 'Окружение',
      desc: 'Внешняя граница и прилегающая территория ботанического сада. В этой зоне расположены главные входы и объекты инфраструктуры.',
      type: 'Граничная зона',
      plants: '—',
    },
    en: {
      name: 'Surroundings',
      desc: 'The outer boundary and adjacent area of the botanical garden. This zone contains the main entrances and infrastructure facilities.',
      type: 'Border Zone',
      plants: '—',
    },
    tr: {
      name: 'Çevre',
      desc: 'Botanik bahçesinin dış sınırı ve bitişik alanı. Bu bölgede ana girişler ve altyapı tesisleri yer almaktadır.',
      type: 'Sınır Bölgesi',
      plants: '—',
    },
  },

  kanal: {
    kk: {
      name: 'Канал және арықтар',
      desc: 'Бақтағы табиғи суару жүйесі: каналдар мен арықтар арқылы су учаскелерге жеткізіледі. Жүйе топырақ ылғалын сақтауға және ашық коллекцияларды суаруға көмектеседі.',
      type: 'Табиғи суару',
      plants: '—',
    },
    ru: {
      name: 'Канал и арыки',
      desc: 'Система естественного орошения: каналы и канавы распределяют воду по участкам сада. Она поддерживает влажность почвы и помогает поливать открытые коллекции.',
      type: 'Естественное орошение',
      plants: '—',
    },
    en: {
      name: 'Canal and Ditches',
      desc: 'Natural irrigation system where canals and ditches distribute water across garden areas. It helps maintain soil moisture and supports open-air collections.',
      type: 'Natural Irrigation',
      plants: '—',
    },
    tr: {
      name: 'Kanal ve Arklar',
      desc: 'Kanallar ve arklar aracılığıyla suyu bahçe alanlarına dağıtan doğal sulama sistemi. Toprak nemini korur ve açık koleksiyonların sulanmasına yardımcı olur.',
      type: 'Doğal Sulama',
      plants: '—',
    },
  },

  tamshy: {
    kk: {
      name: 'Тамшылатып суару',
      desc: 'Өсімдіктердің тамыр аймағына суды дәл жеткізетін тамшылатып суару желісі. Су шығынын азайтып, тұрақты күтімді қамтамасыз етеді.',
      type: 'Суару жүйесі',
      plants: '—',
    },
    ru: {
      name: 'Капельное орошение',
      desc: 'Сеть капельного полива, которая точно подаёт воду к прикорневой зоне растений. Система снижает расход воды и поддерживает регулярный уход за посадками.',
      type: 'Система орошения',
      plants: '—',
    },
    en: {
      name: 'Drip Irrigation',
      desc: 'Drip irrigation network that delivers water directly to plant root zones. The system reduces water use and supports consistent care for plantings.',
      type: 'Irrigation System',
      plants: '—',
    },
    tr: {
      name: 'Damla Sulama',
      desc: 'Suyu bitkilerin kök bölgesine doğrudan ulaştıran damla sulama ağı. Su tüketimini azaltır ve dikimlerin düzenli bakımını destekler.',
      type: 'Sulama Sistemi',
      plants: '—',
    },
  },

  skvaj: {
    kk: {
      name: 'Ұңғымалар',
      desc: 'Бақтың су қорын қамтамасыз ететін ұңғымалар. Олар суару жүйелері мен техникалық қажеттіліктер үшін тұрақты су көзін береді.',
      type: 'Су көзі',
      plants: '—',
    },
    ru: {
      name: 'Скважины',
      desc: 'Скважины, обеспечивающие водный ресурс ботанического сада. Они дают стабильный источник воды для орошения и технических нужд.',
      type: 'Источник воды',
      plants: '—',
    },
    en: {
      name: 'Wells',
      desc: 'Wells that provide the botanical garden with a stable water source for irrigation systems and technical needs.',
      type: 'Water Source',
      plants: '—',
    },
    tr: {
      name: 'Kuyular',
      desc: 'Botanik bahçesine sulama sistemleri ve teknik ihtiyaçlar için sürekli su kaynağı sağlayan kuyular.',
      type: 'Su Kaynağı',
      plants: '—',
    },
  },

  bochk: {
    kk: {
      name: 'Су сақтайтын бөшкелер',
      desc: 'Суды жинауға және уақытша сақтауға арналған бөшкелер. Олар суару кезінде қор ретінде пайдаланылады және күтім жұмыстарының үздіксіздігін сақтайды.',
      type: 'Су сақтау',
      plants: '—',
    },
    ru: {
      name: 'Бочки для хранения воды',
      desc: 'Ёмкости для накопления и временного хранения воды. Они используются как резерв при поливе и помогают поддерживать непрерывность садовых работ.',
      type: 'Хранение воды',
      plants: '—',
    },
    en: {
      name: 'Water Storage Barrels',
      desc: 'Barrels used to collect and temporarily store water. They serve as a reserve for irrigation and help keep garden maintenance uninterrupted.',
      type: 'Water Storage',
      plants: '—',
    },
    tr: {
      name: 'Su Depolama Varilleri',
      desc: 'Suyu toplamak ve geçici olarak depolamak için kullanılan variller. Sulama sırasında yedek kaynak sağlar ve bahçe bakımının sürekliliğini destekler.',
      type: 'Su Depolama',
      plants: '—',
    },
  },

  joldar: {
    kk: {
      name: 'Жолдар мен өткелдер',
      desc: 'Автокөліктерге, қызметтік техникаға және басқа көлік түрлеріне арналған бақ ішіндегі жолдар. Олар күтім, жеткізу және қауіпсіз қозғалыс үшін қажет.',
      type: 'Көлік инфрақұрылымы',
      plants: '—',
    },
    ru: {
      name: 'Дороги и проезды',
      desc: 'Дорожная сеть для автомобилей, служебной техники и другого транспорта внутри сада. Она нужна для ухода, доставки материалов и безопасного перемещения.',
      type: 'Транспортная инфраструктура',
      plants: '—',
    },
    en: {
      name: 'Roads and Service Routes',
      desc: 'Internal road network for cars, service equipment, and other transport. It supports maintenance, material delivery, and safe movement through the garden.',
      type: 'Transport Infrastructure',
      plants: '—',
    },
    tr: {
      name: 'Yollar ve Servis Geçitleri',
      desc: 'Bahçe içinde otomobiller, servis ekipmanları ve diğer taşıtlar için kullanılan yol ağı. Bakım, malzeme taşıma ve güvenli hareket için gereklidir.',
      type: 'Ulaşım Altyapısı',
      plants: '—',
    },
  },

  meteo: {
    kk: {
      name: 'Метеостанция және датчиктер',
      desc: 'Атмосфера мен жер жағдайын зерттеуге арналған метеостанция және датчиктер кешені. Температура, ылғалдылық, жел, жауын-шашын және топырақ көрсеткіштері бақыланады.',
      type: 'Климат және топырақ мониторингі',
      plants: '—',
    },
    ru: {
      name: 'Метеостанция и датчики',
      desc: 'Комплекс метеостанции и датчиков для изучения атмосферы и состояния земли. Отслеживаются температура, влажность, ветер, осадки и показатели почвы.',
      type: 'Мониторинг климата и почвы',
      plants: '—',
    },
    en: {
      name: 'Weather Station and Sensors',
      desc: 'Weather station and sensor complex for studying the atmosphere and ground conditions. Temperature, humidity, wind, precipitation, and soil indicators are monitored.',
      type: 'Climate and Soil Monitoring',
      plants: '—',
    },
    tr: {
      name: 'Meteoroloji İstasyonu ve Sensörler',
      desc: 'Atmosferi ve toprak koşullarını incelemek için meteoroloji istasyonu ve sensörlerden oluşan kompleks. Sıcaklık, nem, rüzgar, yağış ve toprak göstergeleri izlenir.',
      type: 'İklim ve Toprak İzleme',
      plants: '—',
    },
  },

  tseh: {
    kk: {
      name: 'Жеміс өңдеу цехы',
      desc: 'Жиналған жемістерді алғашқы өңдеуге, сұрыптауға және дайындауға арналған цех. Ол бақтың тәжірибелік және шаруашылық жұмыстарына қызмет етеді.',
      type: 'Өндірістік инфрақұрылым',
      plants: '—',
    },
    ru: {
      name: 'Цех обработки фруктов',
      desc: 'Цех для первичной обработки, сортировки и подготовки собранных фруктов. Он обслуживает практические и хозяйственные задачи ботанического сада.',
      type: 'Производственная инфраструктура',
      plants: '—',
    },
    en: {
      name: 'Fruit Processing Workshop',
      desc: 'Workshop for primary processing, sorting, and preparation of harvested fruit. It supports practical and maintenance work in the botanical garden.',
      type: 'Production Infrastructure',
      plants: '—',
    },
    tr: {
      name: 'Meyve İşleme Atölyesi',
      desc: 'Toplanan meyvelerin ilk işlenmesi, ayrılması ve hazırlanması için kullanılan atölye. Botanik bahçesinin uygulamalı ve işletme çalışmalarını destekler.',
      type: 'Üretim Altyapısı',
      plants: '—',
    },
  },

  shiporez: {
    kk: {
      name: 'Шипорез',
      desc: 'Ағаш материалдарын өңдеуге және шип кесуге арналған жабдық. Құрылымдық бөлшектерді, тіректерді және жөндеу элементтерін дайындауда қолданылады.',
      type: 'Ағаш өңдеу жабдығы',
      plants: '—',
    },
    ru: {
      name: 'Шипорез',
      desc: 'Оборудование для обработки древесины и нарезки шипов. Используется при подготовке конструктивных деталей, опор и элементов ремонта.',
      type: 'Деревообрабатывающее оборудование',
      plants: '—',
    },
    en: {
      name: 'Tenoning Machine',
      desc: 'Woodworking equipment for cutting tenons and processing timber. It is used to prepare structural details, supports, and repair elements.',
      type: 'Woodworking Equipment',
      plants: '—',
    },
    tr: {
      name: 'Zıvana Kesme Makinesi',
      desc: 'Ahşap işleme ve zıvana kesme için kullanılan ekipman. Yapısal parçalar, destekler ve onarım elemanları hazırlamakta kullanılır.',
      type: 'Ahşap İşleme Ekipmanı',
      plants: '—',
    },
  },

  jylyjai: {
    kk: {
      name: 'Гүл жылыжайлары',
      desc: 'Гүлдерді өсіруге арналған жылыжайлар. Мұнда температура мен ылғалдылық бақыланып, сәндік өсімдіктерді көбейту және күту жұмыстары жүргізіледі.',
      type: 'Жылыжай',
      plants: 'Гүлдер',
    },
    ru: {
      name: 'Теплицы для цветов',
      desc: 'Теплицы, в которых выращивают цветы. Здесь контролируются температура и влажность, ведутся работы по размножению и уходу за декоративными растениями.',
      type: 'Теплица',
      plants: 'Цветы',
    },
    en: {
      name: 'Flower Greenhouses',
      desc: 'Greenhouses where flowers are grown. Temperature and humidity are controlled for propagation and care of ornamental plants.',
      type: 'Greenhouse',
      plants: 'Flowers',
    },
    tr: {
      name: 'Çiçek Seraları',
      desc: 'Çiçeklerin yetiştirildiği seralar. Süs bitkilerinin çoğaltılması ve bakımı için sıcaklık ve nem kontrol edilir.',
      type: 'Sera',
      plants: 'Çiçekler',
    },
  },

  '1': {
    kk: {
      name: '1-аймақ',
      desc: 'Сәндік ағаштар. Мұнда шырша, қарағай, лиственница, көктерек түрлері бар. Ағаштардың биіктігі 6-10 метрге дейін жетеді. Бұл аймақ табиғи арна арқылы суарылады',
      type: 'Сәндік ағаштар',
      plants: '300+',
    },
    ru: {
      name: 'Зона 1',
      desc: 'Коллекция хвойных деревьев. Представлены виды ели, сосны, лиственницы, пихты. Высота деревьев достигает 6-10 метров. Эта зона орошается через естественный канал.',
      type: 'Хвойные деревья',
      plants: '300+',
    },
    en: {
      name: 'Zone 1',
      desc: 'Collection of coniferous trees. Species of spruce, pine, larch, and fir are represented. Tree heights reach 6-10 meters. This zone is irrigated through a natural channel.',
      type: 'Coniferous Trees',
      plants: '300+',
    },
    tr: {
      name: 'Bölge 1',
      desc: "Süs ağaçları koleksiyonu. Ladin, çam, sarıçam ve köknar türleri mevcuttur. Ağaçların yüksekliği 6-10 metreye kadar ulaşır. Bu bölge doğal bir kanal aracılığıyla sulanır.",
      type: 'Süs Ağaçları',
      plants: '300+',
    },
  },

  '2': {
    kk: {
      name: '2-аймақ',
      desc: 'Бос аймақ. Бұл аймаққа өрік ағаштарын егу жоспалануда. Аймақ табиғи арна арқылы суарылады.',
      type: 'Бос аймақ',
      plants: '-',
    },
    ru: {
      name: 'Зона 2',
      desc: 'Пустая зона. Планируется посадка абрикосовых деревьев. Зона орошается через естественный канал.',
      type: 'Пустая зона',
      plants: '-',
    },
    en: {
      name: 'Zone 2',
      desc: 'Empty zone. Planned for planting apricot trees. The zone is irrigated through a natural channel.',
      type: 'Empty Zone',
      plants: '-',
    },
    tr: {
      name: 'Bölge 2',
      desc: 'Boş bölge. Kayısı ağaçları dikilmesi planlanıyor. Bölge doğal bir kanal aracılığıyla sulanır.',
      type: 'Boş Bölge',
      plants: '-',
    },
  },

  '21': {
    kk: {
      name: '2.1-аймақ',
      desc: 'Бос аймақ. Бұл аймаққа өрік ағаштарын егу жоспарлануда. Аймақ табиғи арна арқылы суарылады және ұңғыма қойылған',
      type: 'Бос аймақ',
      plants: '-',
    },
    ru: {
      name: 'Зона 2.1',
      desc: 'Пустая зона. Планируется посадка абрикосовых деревьев. Зона орошается через естественный канал и оборудована скважиной.',
      type: 'Пустая зона',
      plants: '-',
    },
    en: {
      name: 'Zone 2.1',
      desc: 'Empty zone. Planned for planting apricot trees. The zone is irrigated through a natural channel and equipped with a well.',
      type: 'Empty Zone',
      plants: '-',
    },
    tr: {
      name: 'Bölge 2.1',
      desc: "Boş bölge. Kayısı ağaçları dikilmesi planlanıyor. Bölge doğal bir kanal aracılığıyla sulanır ve kuyu ile donatılmıştır.",
      type: 'Boş Bölge',
      plants: '-',
    },
  },

  '3': {
    kk: {
      name: '3-аймақ',
      desc: 'Алмұрт ағаштары. Бұл аймақта "Талгарка ранная" сұрыпты алмұрт ағаштары егілген. Аймақ аумағы 1.29 гектар және ол табиғи арна арқылы және тамшылатып суару жүйесі арқылы суарылады, тамшылатып суару 14 қатарды құрайды және оның жалпы ұзындығы 1792 метр. Сондай ақ аймақта 2 датчик орналасқан',
      type: 'Жеміс ағаштары',
      plants: '350+',
    },
    ru: {
      name: 'Зона 3',
      desc: 'Дерева груш. В этой зоне посажены груши сорта "Талгарка ранняя". Площадь зоны составляет 1.29 гектара, и она орошается через естественный канал и систему капельного полива, система капельного полива состоит из 14 рядов, общая длина которых составляет 1792 метра. Также в зоне расположены 2 датчика.',
      type: 'Плодовые деревья',
      plants: '350+',
    },
    en: {
      name: 'Zone 3',
      desc: 'Pear trees. This zone features pear trees of the "Talgarka Early" variety. The area of the zone is 1.29 hectares, and it is irrigated through a natural channel and a drip irrigation system, drip irrigation system consists of 14 rows, with a total length of 1792 meters. Additionally, there are 2 sensors located in the zone.',
      type: 'Fruit Garden',
      plants: '350+',
    },
    tr: {
      name: 'Bölge 3',
      desc: 'Armut ağaçları. Bu bölgede "Talgarka Early" çeşidi armut ağaçları bulunmaktadır. Bölgenin alanı 1.29 hektardır ve doğal bir kanal ve damla sulama sistemi aracılığıyla sulanır, damla sulama sistemi 14 satırdan oluşmaktadır ve toplam uzunluğu 1792 metredir. Ayrıca bölgede 2 sensör bulunmaktadır.',
      type: 'Meyve Bahçesi',
      plants: '350+',
    },
  },

  '4': {
    kk: {
      name: '4-аймақ',
      desc: 'Өрік ағаштары. Бұл аймақта "Краснощекий Никитский" сұрыпты өрік ағаштары егілген. Аймақ аумағы 1.85 гектар және ол табиғи арна арқылы және тамшылатып суару жүйесі арқылы суарылады, тамшылатып суару 23 қатарды құрайды және оның жалпы ұзындығы 3036 метр. Сондай ақ аймақта су сақтайтын бөшке орнатылған',
      type: 'Жеміс ағаштары',
      plants: '400+',
    },
    ru: {
      name: 'Зона 4',
      desc: 'Деревья абрикосов. В этой зоне посажены абрикосы сорта "Краснощекий Никитский". Площадь зоны составляет 1.85 гектара, и она орошается через естественный канал и систему капельного полива, система капельного полива состоит из 23 рядов, общая длина которых составляет 3036 метров. Также в зоне установлен бочка для хранения воды.',
      type: 'Плодовые деревья',
      plants: '400+',
    },
    en: {
      name: 'Zone 4',
      desc: 'Apricot trees. This zone features apricot trees of the "Krasnoshchekiy Nikitsky" variety. The area of the zone is 1.85 hectares, and it is irrigated through a natural channel and a drip irrigation system, drip irrigation system consists of 23 rows, with a total length of 3036 meters. Additionally, a water storage barrel is installed in the zone.',
      type: 'Fruit Trees',
      plants: '400+',
    },
    tr: {
      name: 'Bölge 4',
      desc: 'Kayısı ağaçları. Bu bölgede "Krasnoshchekiy Nikitsky" çeşidi kayısı ağaçları bulunmaktadır. Bölgenin alanı 1.85 hektardır ve doğal bir kanal ve damla sulama sistemi aracılığıyla sulanır, damla sulama sistemi 23 satırdan oluşmaktadır ve toplam uzunluğu 3036 metredir. Ayrıca bölgede su depolama varili kurulmuştur.',
      type: 'Meyve Ağaçları',
      plants: '400+',
    },
  },

  '5': {
    kk: {
      name: '5-аймақ',
      desc: 'Алша ағаштары. Бұл аймақта алша ағаштары егілген. Аймақ аумағы 0.22 гектар және ол табиғи арна арқылы суарылады',
      type: 'Жеміс бақ',
      plants: '83',
    },
    ru: {
      name: 'Зона 5',
      desc: 'Деревья алычи. В этой зоне посажены деревья алычи. Площадь зоны составляет 0.22 гектара, и она орошается через естественный канал.',
      type: 'Плодовый сад',
      plants: '83',
    },
    en: {
      name: 'Zone 5',
      desc: 'Cherry plum trees. This zone features cherry plum trees. The area of the zone is 0.22 hectares, and it is irrigated through a natural channel.',
      type: 'Fruit Garden',
      plants: '83',
    },
    tr: {
      name: 'Bölge 5',
      desc: 'Alıç ağaçları. Bu bölgede alıç ağaçları bulunmaktadır. Bölgenin alanı 0.22 hektardır ve doğal bir kanal aracılığıyla sulanır.',
      type: 'Meyve Bahçesi',
      plants: '83',
    },
  },

  '6': {
    kk: {
      name: '6-аймақ',
      desc: 'Өрік ағаштары. Бұл аймақта "Краснощекий Никитский" сұрыпты өрік ағаштары егілген. Аймақ аумағы 1.99 гектар және ол табиғи арна арқылы және тамшылатып суару жүйесі арқылы суарылады, тамшылатып суару 12 қатарды құрайды және оның жалпы ұзындығы 1200 метр.',
      type: 'Жеміс ағаштары',
      plants: '300+',
    },
    ru: {
      name: 'Зона 6',
      desc: 'Деревья абрикосов. В этой зоне посажены абрикосы сорта "Краснощекий Никитский". Площадь зоны составляет 1.99 гектара, и она орошается через естественный канал и систему капельного полива, система капельного полива состоит из 12 рядов, общая длина которых составляет 1200 метров.',
      type: 'Плодовые деревья',
      plants: '300+',
    },
    en: {
      name: 'Zone 6',
      desc: 'Apricot trees. This zone features apricot trees of the "Krasnoshchekiy Nikitsky" variety. The area of the zone is 1.99 hectares, and it is irrigated through a natural channel and a drip irrigation system, drip irrigation system consists of 12 rows, with a total length of 1200 meters.',
      type: 'Fruit Trees',
      plants: '300+',
    },
    tr: {
      name: 'Bölge 6',
      desc: 'Kayısı ağaçları. Bu bölgede "Krasnoshchekiy Nikitsky" çeşidi kayısı ağaçları bulunmaktadır. Bölgenin alanı 1.99 hektardır ve doğal bir kanal ve damla sulama sistemi aracılığıyla sulanır, damla sulama sistemi 12 satırdan oluşmaktadır ve toplam uzunluğu 1200 metredir.',
      type: 'Fruit Trees',
      plants: '300+',
    },
  },

  '7': {
    kk: {
      name: '7-аймақ',
      desc: 'Шие ағаштары. Бұл аймақта "Комсомольская" сұрыпты шие ағаштары егілген. Аймақ аумағы 0.33 гектар және ол табиғи арна арқылы суарылады',
      type: 'Жеміс ағаштары',
      plants: '31',
    },
    ru: {
      name: 'Зона 7',
      desc: 'Деревья вишни. В этой зоне посажены вишни сорта "Комсомольская". Площадь зоны составляет 0.33 гектара, и она орошается через естественный канал.',
      type: 'Плодовые деревья',
      plants: '31',
    },
    en: {
      name: 'Zone 7',
      desc: 'Cherry trees. This zone features cherry trees of the "Komsomolskaya" variety. The area of the zone is 0.33 hectares, and it is irrigated through a natural channel.',
      type: 'Fruit Trees',
      plants: '31',
    },
    tr: {
      name: 'Bölge 7',
      desc: 'Kiraz ağaçları. Bu bölgede "Komsomolskaya" çeşidi kiraz ağaçları bulunmaktadır. Bölgenin alanı 0.33 hektardır ve doğal bir kanal aracılığıyla sulanır.',
      type: 'Meyve Ağaçları',
      plants: '31',
    },
  },

  '8': {
    kk: {
      name: '8-аймақ',
      desc: 'Айва ағаштары. Бұл аймақта айва ағаштары егілген. Аймақ аумағы 0.95 гектар және ол табиғи арна арқылы суарылады',
      type: 'Жеміс ағаштары',
      plants: '219',
    },
    ru: {
      name: 'Зона 8',
      desc: 'Деревья айвы. В этой зоне посажены деревья айвы. Площадь зоны составляет 0.95 гектара, и она орошается через естественный канал.',
      type: 'Плодовые деревья',
      plants: '219',
    },
    en: {
      name: 'Zone 8',
      desc: 'Quince trees. This zone features quince trees. The area of the zone is 0.95 hectares, and it is irrigated through a natural channel.',
      type: 'Fruit Trees',
      plants: '219',
    },
    tr: {
      name: 'Bölge 8',
      desc: 'Ayva ağaçları. Bu bölgede ayva ağaçları bulunmaktadır. Bölgenin alanı 0.95 hektardır ve doğal bir kanal aracılığıyla sulanır.',
      type: 'Meyve Ağaçları',
      plants: '219',
    },
  },

  '9': {
    kk: {
      name: '9-аймақ',
      desc: 'Өрік ағаштары. Бұл аймақта "Краснощекий Никитский" сұрыпты өрік ағаштары егілген. Аймақ аумағы 4.55 гектар және ол табиғи арна арқылы суарылады.',
      type: 'Жеміс ағаштары',
      plants: '900+',
    },
    ru: {
      name: 'Зона 9',
      desc: 'Деревья абрикосов. В этой зоне посажены абрикосы сорта "Краснощекий Никитский". Площадь зоны составляет 4.55 гектара, и она орошается через естественный канал.',
      type: 'Плодовые деревья',
      plants: '900+',
    },
    en: {
      name: 'Zone 9',
      desc: 'Apricot trees. This zone features apricot trees of the "Krasnoshchekiy Nikitsky" variety. The area of the zone is 4.55 hectares, and it is irrigated through a natural channel.',
      type: 'Fruit Trees',
      plants: '900+',
    },
    tr: {
      name: 'Bölge 9',
      desc: 'Kayısı ağaçları. Bu bölgede "Krasnoshchekiy Nikitsky" çeşidi kayısı ağaçları bulunmaktadır. Bölgenin alanı 4.55 hektardır ve doğal bir kanal aracılığıyla sulanır.',
      type: 'Meyve Ağaçları',
      plants: '900+',
    },
  },

  '10': {
    kk: {
      name: '10-аймақ',
      desc: 'Алма ағаштары. Бұл аймақта "Голден делишес" сұрыпты алма ағаштары егілген. Аймақ аумағы 1.35 гектар және ол табиғи арна арқылы және тамшылатып суару жүйесі арқылы суарылады, тамшылатып суару 14 қатарды құрайды және оның жалпы ұзындығы 2310 метр. Сондай ақ аймақта датчик, су сақтайтын бөшке және 2 ұңғыма орнатылған',
      type: 'Жеміс ағаштары',
      plants: '292',
    },
    ru: {
      name: 'Зона 10',
      desc: 'Деревья яблонь. В этой зоне посажены яблони сорта "Голден делишес". Площадь зоны составляет 1.35 гектара, и она орошается через естественный канал и систему капельного полива, система капельного полива состоит из 14 рядов, общая длина которых составляет 2310 метров. Также в зоне установлены датчик, бочка для хранения воды и 2 скважины.',
      type: 'Плодовые деревья',
      plants: '292',
    },
    en: {
      name: 'Zone 10',
      desc: 'Apple trees. This zone features apple trees of the "Golden Delicious" variety. The area of the zone is 1.35 hectares, and it is irrigated through a natural channel and a drip irrigation system, drip irrigation system consists of 14 rows, with a total length of 2310 meters. Additionally, a sensor, water storage barrel, and 2 wells are installed in the zone.',
      type: 'Fruit Trees',
      plants: '292',
    },
    tr: {
      name: 'Bölge 10',
      desc: 'Elma ağaçları. Bu bölgede "Golden Delicious" çeşidi elma ağaçları bulunmaktadır. Bölgenin alanı 1.35 hektardır ve doğal bir kanal ve damla sulama sistemi aracılığıyla sulanır, damla sulama sistemi 14 satırdan oluşmaktadır ve toplam uzunluğu 2310 metredir. Ayrıca bölgede sensör, su depolama varili ve 2 kuyu kurulmuştur.',
      type: 'Meyve Ağaçları',
      plants: '292',
    },
  },

  '11': {
    kk: {
      name: '11-аймақ',
      desc: 'Жабайы өріктер. Бұл аймақта жабайы өріктер егілген. Аймақ аумағы 1.73 гектар және ол табиғи арна арқылы суарылады',
      type: 'Жеміс ағаштары',
      plants: '256',
    },
    ru: {
      name: 'Зона 11',
      desc: 'Деревья дикой абрикосы. В этой зоне посажены деревья дикой абрикосы. Площадь зоны составляет 1.73 гектара, и она орошается через естественный канал.',
      type: 'Плодовые деревья',
      plants: '256',
    },
    en: {
      name: 'Zone 11',
      desc: 'Wild apricot trees. This zone features wild apricot trees. The area of the zone is 1.73 hectares, and it is irrigated through a natural channel.',
      type: 'Fruit Trees',
      plants: '256',
    },
    tr: {
      name: 'Bölge 11',
      desc: 'Yabani kayısı ağaçları. Bu bölgede yabani kayısı ağaçları bulunmaktadır. Bölgenin alanı 1.73 hektardır ve doğal bir kanal aracılığıyla sulanır.',
      type: 'Meyve Ağaçları',
      plants: '256',
    },
  },

  '12': {
    kk: {
      name: '12-аймақ',
      desc: 'Сәндік ағаштар. Мұнда шырша, қарағай, лиственница, көктерек түрлері бар. Ағаштардың биіктігі 6-10 метрге дейін жетеді. Бұл аймақ табиғи арна арқылы суарылады',
      type: 'Сәндік ағаштар',
      plants: '300+',
    },
    ru: {
      name: 'Зона 12',
      desc: 'Коллекция хвойных деревьев. Представлены виды ели, сосны, лиственницы, пихты. Высота деревьев достигает 6-10 метров. Эта зона орошается через естественный канал.',
      type: 'Хвойные деревья',
      plants: '300+',
    },
    en: {
      name: 'Zone 12',
      desc: 'Collection of coniferous trees. Species of spruce, pine, larch, and fir are represented. Tree heights reach 6-10 meters. This zone is irrigated through a natural channel.',
      type: 'Coniferous Trees',
      plants: '300+',
    },
    tr: {
      name: 'Bölge 12',
      desc: "Süs ağaçları koleksiyonu. Ladin, çam, sarıçam ve köknar türleri mevcuttur. Ağaçların yüksekliği 6-10 metreye kadar ulaşır. Bu bölge doğal bir kanal aracılığıyla sulanır.",
      type: 'Süs Ağaçları',
      plants: '300+',
    },
  },

  '13': {
    kk: {
      name: '13-аймақ',
      desc: 'Сәндік ағаштар. Мұнда шырша, қарағай, лиственница, көктерек түрлері бар. Ағаштардың биіктігі 6-10 метрге дейін жетеді. Бұл аймақ табиғи арна арқылы суарылады',
      type: 'Сәндік ағаштар',
      plants: '300+',
    },
    ru: {
      name: 'Зона 13',
      desc: 'Коллекция хвойных деревьев. Представлены виды ели, сосны, лиственницы, пихты. Высота деревьев достигает 6-10 метров. Эта зона орошается через естественный канал.',
      type: 'Хвойные деревья',
      plants: '300+',
    },
    en: {
      name: 'Zone 13',
      desc: 'Collection of coniferous trees. Species of spruce, pine, larch, and fir are represented. Tree heights reach 6-10 meters. This zone is irrigated through a natural channel.',
      type: 'Coniferous Trees',
      plants: '300+',
    },
    tr: {
      name: 'Bölge 13',
      desc: "Süs ağaçları koleksiyonu. Ladin, çam, sarıçam ve köknar türleri mevcuttur. Ağaçların yüksekliği 6-10 metreye kadar ulaşır. Bu bölge doğal bir kanal aracılığıyla sulanır.",
      type: 'Süs Ağaçları',
      plants: '300+',
    },
  },

  '131': {
    kk: {
      name: '13.1-аймақ',
      desc: 'Бос аймақ. Бұл аймаққа өрік ағаштарын егу жоспалануда. Аймақ табиғи арна арқылы суарылады.',
      type: 'Бос аймақ',
      plants: '-',
    },
    ru: {
      name: 'Зона 13.1',
      desc: 'Пустая зона. Планируется посадка абрикосовых деревьев. Зона орошается через естественный канал.',
      type: 'Пустая зона',
      plants: '-',
    },
    en: {
      name: 'Zone 13.1',
      desc: 'Empty zone. Planned for planting apricot trees. The zone is irrigated through a natural channel.',
      type: 'Empty Zone',
      plants: '-',
    },
    tr: {
      name: 'Bölge 13.1',
      desc: 'Boş bölge. Kayısı ağaçları dikilmesi planlanıyor. Bölge doğal bir kanal aracılığıyla sulanır.',
      type: 'Boş Bölge',
      plants: '-',
    },
  },

  '14': {
    kk: {
      name: '14-аймақ',
      desc: 'Алма ағаштары. Бұл аймақта "Ренет симиренко" сұрыпты алма ағаштары егілген. Аймақ аумағы 0.89 гектар және ол табиғи арна арқылы суарылады',
      type: 'Жеміс ағаштары',
      plants: '188',
    },
    ru: {
      name: 'Зона 14',
      desc: 'Деревья яблонь. В этой зоне посажены яблони сорта "Ренет симиренко". Площадь зоны составляет 0.89 гектара, и она орошается через естественный канал.',
      type: 'Плодовые деревья',
      plants: '188',
    },
    en: {
      name: 'Zone 14',
      desc: 'Apple trees. This zone features apple trees of the "Renet Simirenko" variety. The area of the zone is 0.89 hectares, and it is irrigated through a natural channel.',
      type: 'Fruit Trees',
      plants: '188',
    },
    tr: {
      name: 'Bölge 14',
      desc: 'Elma ağaçları. Bu bölgede "Renet Simirenko" çeşidi elma ağaçları bulunmaktadır. Bölgenin alanı 0.89 hektardır ve doğal bir kanal aracılığıyla sulanır.',
      type: 'Meyve Ağaçları',
      plants: '188',
    },
  },

  '141': {
    kk: {
      name: '14.1-аймақ',
      desc: 'Ботаникалық бақтың орталығы. Бұл аймақ ботаникалық бақтың негізгі бөлігі болып табылады. Мұнда Жеміс өңдеу цехы, метеостанция және штаб орналасқан',
      type: 'Инфрақұрылым',
      plants: '-',
    },
    ru: {
      name: 'Зона 141',
      desc: 'Центр ботанического сада. Эта зона является основной частью ботанического сада. Здесь расположены цех по переработке фруктов, метеостанция и штаб.',
      type: 'Инфраструктура',
      plants: '-',
    },
    en: {
      name: 'Zone 141',
      desc: 'Center of the botanical garden. This zone is the main part of the botanical garden. It houses the fruit processing workshop, meteorological station, and headquarters.',
      type: 'Infrastructure',
      plants: '-',
    },
    tr: {
      name: 'Bölge 141',
      desc: 'Botanik bahçesinin merkezi. Bu bölge botanik bahçesinin ana bölümüdür. Burada meyve işleme atölyesi, meteoroloji istasyonu ve karargah bulunmaktadır.',
      type: 'İnfrastrüktür',
      plants: '-',
    },
  },

  '15': {
    kk: {
      name: '15-аймақ',
      desc: 'Өрік ағаштары. Бұл аймақта "Краснощекий Никитский" сұрыпты өрік ағаштары егілген. Аймақ аумағы 0.53 гектар және ол табиғи арна арқылы және тамшылатып суару жүйесі арқылы суарылады. Тамшылатып суару 15 қатарды құрайды және оның жалпы ұзындығы 1575 метр. Сондай ақ аймақта су сақтайтын бөшке және ұңғыма орнатылған',
      type: 'Жеміс ағаштары',
      plants: '108',
    },
    ru: {
      name: 'Зона 15',
      desc: 'Деревья абрикосов. В этой зоне посажены абрикосы сорта "Краснощекий Никитский". Площадь зоны составляет 0.53 гектара, и она орошается через естественный канал и систему капельного полива. Система капельного полива состоит из 15 рядов, общая длина которых составляет 1575 метров. Также в зоне установлены бочка для хранения воды и скважина.',
      type: 'Плодовые деревья',
      plants: '108',
    },
    en: {
      name: 'Zone 15',
      desc: 'Apricot trees. This zone features apricot trees of the "Krasnoshchekiy Nikitsky" variety. The area of the zone is 0.53 hectares, and it is irrigated through a natural channel and a drip irrigation system. The drip irrigation system consists of 15 rows, with a total length of 1575 meters. Additionally, a water storage barrel and a well are installed in the zone.',
      type: 'Fruit Trees',
      plants: '108',
    },
    tr: {
      name: 'Bölge 15',
      desc: 'Krasnoshchekiy Nikitsky çeşidi incir ağaçları. Bölge alanı 0.53 hektar ve doğal kanal ve damla sulama sistemiyle sulanır. Damla sulama sistemi 15 sıra içerir ve toplam uzunluğu 1575 metredir. Ayrıca, bölgeye su depolama fıçısi ve kuyu kurulmuştur.',
      type: 'Meyve Ağaçları',
      plants: '108',
    },
  },

  '16': {
    kk: {
      name: '16-аймақ',
      desc: 'Алмұрт ағаштары. Бұл аймақта "Талгарка ранная" сұрыпты алмұрт ағаштары егілген. Аймақ аумағы 2.35 гектар және ол табиғи арна арқылы суарылады. Сондай ақ бұл аймақта датчик орналасқан',
      type: 'Жеміс ағаштары',
      plants: '341',
    },
    ru: {
      name: 'Зона 16',
      desc: 'Деревья груш. В этой зоне посажены груши сорта "Талгарка ранняя". Площадь зоны составляет 2.35 гектара, и она орошается через естественный канал. Также в этой зоне расположен датчик.',
      type: 'Плодовые деревья',
      plants: '341',
    },
    en: {
      name: 'Zone 16',
      desc: 'Pear trees. This zone features pear trees of the "Talgarka Early" variety. The area of the zone is 2.35 hectares, and it is irrigated through a natural channel. Additionally, there is a sensor located in this zone.',
      type: 'Fruit Trees',
      plants: '341',
    },
    tr: {
      name: 'Bölge 16',
      desc: 'Armut ağaçları. Bu bölgede "Talgarka Early" çeşidi armut ağaçları bulunmaktadır. Bölgenin alanı 2.35 hektardır ve doğal bir kanal aracılığıyla sulanır. Ayrıca, bu bölgede bir sensör bulunmaktadır.',
      type: 'Meyve Ağaçları',
      plants: '341',
    },
  },

  '17': {
    kk: {
      name: '17-аймақ',
      desc: 'Жаңғақ ағаштары. Бұл аймақта жаңғақ ағаштары егілген. Аймақ аумағы 1.83 гектар және ол табиғи арна арқылы суарылады.',
      type: 'Жеміс ағаштары',
      plants: '132',
    },
    ru: {
      name: 'Зона 17',
      desc: 'Деревья грецкого ореха. В этой зоне посажены деревья грецкого ореха. Площадь зоны составляет 1.83 гектара, и она орошается через естественный канал.',
      type: 'Плодовые деревья',
      plants: '132',
    },
    en: {
      name: 'Zone 17',
      desc: 'Walnut trees. This zone features walnut trees. The area of the zone is 1.83 hectares, and it is irrigated through a natural channel.',
      type: 'Fruit Trees',
      plants: '132',
    },
    tr: {
      name: 'Bölge 17',
      desc: 'Ceviz ağaçları. Bu bölgede ceviz ağaçları bulunmaktadır. Bölgenin alanı 1.83 hektardır ve doğal bir kanal aracılığıyla sulanır.',
      type: 'Meyve Ağaçları',
      plants: '132',
    },
  },

  '18': {
    kk: {
      name: '18-аймақ',
      desc: 'Қараөрік ағаштары. Бұл аймақта қараөрік ағаштары егілген. Аймақ аумағы 2.02 гектар және ол табиғи арна арқылы және тамшылатып суару жүйесі арқылы суарылады, тамшылатып суару 18 қатарды құрайды және оның жалпы ұзындығы 2340 метр.',
      type: 'Жеміс ағаштары',
      plants: '479',
    },
    ru: {
      name: 'Зона 18: Тополиная аллея',
      desc: 'Дерева сливы. В этой зоне посажены деревья сливы. Площадь зоны составляет 2.02 гектара, и она орошается через естественный канал и систему капельного полива, система капельного полива состоит из 18 рядов, общая длина которых составляет 2340 метров.',
      type: 'Плодовые деревья',
      plants: '479',
    },
    en: {
      name: 'Zone 18: Poplar Alley',
      desc: 'Poplar trees. This zone features poplar trees. The area of the zone is 2.02 hectares, and it is irrigated through a natural channel and a drip irrigation system, drip irrigation system consists of 18 rows, with a total length of 2340 meters.',
      type: 'Fruit Trees',
      plants: '479',
    },
    tr: {
      name: 'Bölge 18: Kavak Ağaçlığı',
      desc: 'Kavak ağaçları. Bu bölgede kavak ağaçları bulunmaktadır. Bölgenin alanı 2.02 hektardır ve doğal bir kanal ve damla sulama sistemi aracılığıyla sulanır, damla sulama sistemi 18 satırdan oluşmaktadır ve toplam uzunluğu 2340 metredir.',
      type: 'Meyve Ağaçları',
      plants: '479',
    },
  },

  '19': {
    kk: {
      name: '19-аймақ',
      desc: 'Жабайы өріктер. Бұл аймақта жабайы өріктер егілген. Аймақ аумағы 1.63 гектар және ол табиғи арна арқылы суарылады',
      type: 'Жеміс ағаштары',
      plants: '176',
    },
    ru: {
      name: 'Зона 19',
      desc: 'Деревья дикой абрикосы. В этой зоне посажены деревья дикой абрикосы. Площадь зоны составляет 1.63 гектара, и она орошается через естественный канал.',
      type: 'Плодовые деревья',
      plants: '176',
    },
    en: {
      name: 'Zone 19',
      desc: 'Wild apricot trees. This zone features wild apricot trees. The area of the zone is 1.63 hectares, and it is irrigated through a natural channel.',
      type: 'Fruit Trees',
      plants: '176',
    },
    tr: {
      name: 'Bölge 19',
      desc: 'Yabani kayısı ağaçları. Bu bölgede yabani kayısı ağaçları bulunmaktadır. Bölgenin alanı 1.63 hektardır ve doğal bir kanal aracılığıyla sulanır.',
      type: 'Meyve Ağaçları',
      plants: '176',
    },
  },

  '20': {
    kk: {
      name: '20-аймақ',
      desc: 'Бос аймақ. Бұл аймаққа өрік ағаштарын егу жоспалануда. Аймақ табиғи арна арқылы суарылады.',
      type: 'Бос аймақ',
      plants: '-',
    },
    ru: {
      name: 'Зона 20',
      desc: 'Пустая зона. Планируется посадка абрикосовых деревьев. Зона орошается через естественный канал.',
      type: 'Пустая зона',
      plants: '-',
    },
    en: {
      name: 'Zone 20',
      desc: 'Empty zone. Planned for planting apricot trees. The zone is irrigated through a natural channel.',
      type: 'Empty Zone',
      plants: '-',
    },
    tr: {
      name: 'Bölge 20',
      desc: 'Boş bölge. Kayısı ağaçları dikilmesi planlanıyor. Bölge doğal bir kanal aracılığıyla sulanır.',
      type: 'Boş Bölge',
      plants: '-',
    },
  },

  '21_1': {
    kk: {
      name: '21-зона',
      desc: 'Алма ағаштары. Бұл аймақта "Ренет симиренко" сұрыпты алма ағаштары егілген. Аймақ аумағы 1.05 гектар және ол табиғи арна арқылы суарылады',
      type: 'Жеміс ағаштары',
      plants: '213',
    },
    ru: {
      name: 'Зона 21',
      desc: 'Деревья яблонь. В этой зоне посажены яблони сорта "Ренет симиренко". Площадь зоны составляет 1.05 гектара, и она орошается через естественный канал.',
      type: 'Плодовые деревья',
      plants: '213',
    },
    en: {
      name: 'Zone 21',
      desc: 'Apple trees. This zone features apple trees of the "Renet Simirenko" variety. The area of the zone is 1.05 hectares, and it is irrigated through a natural channel.',
      type: 'Fruit Trees',
      plants: '213',
    },
    tr: {
      name: 'Bölge 21',
      desc: 'Elma ağaçları. Bu bölgede "Renet Simirenko" çeşidi elma ağaçları bulunmaktadır. Bölgenin alanı 1.05 hektardır ve doğal bir kanal aracılığıyla sulanır.',
      type: 'Meyve Ağaçları',
      plants: '213',
    },
  },

  '22': {
    kk: {
      name: '22-аймақ',
      desc: 'Сәндік ағаштар. Мұнда шырша, қарағай, лиственница, көктерек түрлері бар. Ағаштардың биіктігі 6-10 метрге дейін жетеді. Бұл аймақ табиғи арна арқылы суарылады',
      type: 'Сәндік ағаштар',
      plants: '300+',
    },
    ru: {
      name: 'Зона 22',
      desc: 'Коллекция хвойных деревьев. Представлены виды ели, сосны, лиственницы, пихты. Высота деревьев достигает 6-10 метров. Эта зона орошается через естественный канал.',
      type: 'Хвойные деревья',
      plants: '300+',
    },
    en: {
      name: 'Zone 22',
      desc: 'Collection of coniferous trees. Species of spruce, pine, larch, and fir are represented. Tree heights reach 6-10 meters. This zone is irrigated through a natural channel.',
      type: 'Coniferous Trees',
      plants: '300+',
    },
    tr: {
      name: 'Bölge 22',
      desc: "Süs ağaçları koleksiyonu. Ladin, çam, sarıçam ve köknar türleri mevcuttur. Ağaçların yüksekliği 6-10 metreye kadar ulaşır. Bu bölge doğal bir kanal aracılığıyla sulanır.",
      type: 'Süs Ağaçları',
      plants: '300+',
    },
  },

  '23': {
    kk: {
      name: '23-зона',
      desc: 'Алма ағаштары. Бұл аймақта "Боробинка" сұрыпты алма ағаштары егілген. Аймақ аумағы 0.6 гектар және ол табиғи арна арқылы және тамшылатып суару жүйесі арқылы суарылады, тамшылатып суару 12 қатарды құрайды және оның жалпы ұзындығы 1416 метр. Сондай ақ аймақта ұңғыма орнатылған',
      type: 'Жеміс ағаштары',
      plants: '144',
    },
    ru: {
      name: 'Зона 23',
      desc: 'Деревья яблонь. В этой зоне посажены яблони сорта "Borobinka". Площадь зоны составляет 0.6 гектара, и она орошается через естественный канал и систему капельного полива, система капельного полива состоит из 12 рядов, общая длина которых составляет 1416 метров. Также в зоне установлена скважина.',
      type: 'Плодовые деревья',
      plants: '144',
    },
    en: {
      name: 'Zone 23',
      desc: 'Apple trees. This zone features apple trees of the "Borobinka" variety. The area of the zone is 0.6 hectares, and it is irrigated through a natural channel and a drip irrigation system, drip irrigation system consists of 12 rows, with a total length of 1416 meters. Additionally, a well is installed in the zone.',
      type: 'Fruit Trees',
      plants: '144',
    },
    tr: {
      name: 'Bölge 23',
      desc: 'Elma ağaçları. Bu bölgede "Borobinka" çeşidi elma ağaçları bulunmaktadır. Bölgenin alanı 0.6 hektardır ve doğal bir kanal ve damla sulama sistemi aracılığıyla sulanır, damla sulama sistemi 12 satırdan oluşmaktadır ve toplam uzunluğu 1416 metredir. Ayrıca, bölgeye bir kuyu kurulmuştur.',
      type: 'Meyve Ağaçları',
      plants: '144',
    },
  },

  '24': {
    kk: {
      name: '24-зона',
      desc: 'Алма ағаштары. Бұл аймақта алма ағаштары егілген. Аймақ аумағы 7.39 гектар және ол табиғи арна арқылы суарылады',
      type: 'Жеміс ағаштары',
      plants: '961',
    },
    ru: {
      name: 'Зона 24',
      desc: 'Деревья яблонь. В этой зоне посажены яблони. Площадь зоны составляет 7.39 гектара, и она орошается через естественный канал.',
      type: 'Плодовые деревья',
      plants: '961',
    },
    en: {
      name: 'Zone 24',
      desc: 'Apple trees. This zone features apple trees. The area of the zone is 7.39 hectares, and it is irrigated through a natural channel.',
      type: 'Fruit Trees',
      plants: '961',
    },
    tr: {
      name: 'Bölge 24',
      desc: 'Elma ağaçları. Bu bölgede elma ağaçları bulunmaktadır. Bölgenin alanı 7.39 hektardır ve doğal bir kanal aracılığıyla sulanır.',
      type: 'Meyve Ağaçları',
      plants: '961',
    },
  },

  '241': {
    kk: {
      name: '24.1-зона',
      desc: 'Техникалық база. Бұл аймақта ботаникалық бақтың техникалары мен жабдықтары орналасқан. Сондай ақ бұл аймақта 2 су сақтайтын бөшке мен шипорез орналасқан',
      type: 'Инфрақұрылым',
      plants: '-',
    },
    ru: {
      name: 'Зона 24.1',
      desc: 'Техническая база. В этой зоне расположены техника и оборудование ботанического сада. Также в этой зоне расположены 2 бочки для хранения воды и шипорез.',
      type: 'Инфраструктура',
      plants: '-',
    },
    en: {
      name: 'Zone 24.1',
      desc: 'Technical base. This zone houses the machinery and equipment of the botanical garden. Additionally, 2 tanks for water storage and a pruner are located in this zone.',
      type: 'Infrastructure',
      plants: '-',
    },
    tr: {
      name: 'Bölge 24.1',
      desc: "Teknik üs. Bu bölgede botanik bahçesinin makineleri ve ekipmanları bulunmaktadır. Ayrıca, bu bölgede 2 su depolama tankı ve bir şiporöz bulunmaktadır.",
      type: 'İnfrastrüktür',
      plants: '-',
    },
  },

  '25': {
    kk: {
      name: '25-зона',
      desc: 'Жүзім бағы. Бұл аймақта жүзім егілген. Аймақ аумағы 1.34 гектар және ол табиғи арна арқылы суарылады',
      type: 'Жеміс ағаштары',
      plants: '52 қатар',
    },
    ru: {
      name: 'Зона 25',
      desc: 'Виноградник. В этой зоне посажены виноградные лозы. Площадь зоны составляет 1.34 гектара, и она орошается через естественный канал.',
      type: 'Плодовые деревья',
      plants: '52 ряда',
    },
    en: {
      name: 'Zone 25',
      desc: 'Vineyard. This zone features grapevines. The area of the zone is 1.34 hectares, and it is irrigated through a natural channel.',
      type: 'Fruit Trees',
      plants: '52 rows',
    },
    tr: {
      name: 'Bölge 25',
      desc: 'Bağ. Bu bölgede üzüm asmaları bulunmaktadır. Bölgenin alanı 1.34 hektardır ve doğal bir kanal aracılığıyla sulanır.',
      type: 'Meyve Ağaçları',
      plants: '52 sıra',
    },
  },

  '251': {
    kk: {
      name: '25.1-зона',
      desc: 'Алма ағаштары. Бұл аймақта "Сиверс" сұрыпты алма ағаштары егілген. Аймақ аумағы 0.5 гектар және ол табиғи арна арқылы суарылады. Сондай ақ аймақта 2 су сақтайтын бөшке орналасқан',
      type: 'Жеміс ағаштары',
      plants: '96',
    },
    ru: {
      name: 'Зона 25.1',
      desc: 'Деревья яблонь. В этой зоне посажены яблони сорта "Sivers". Площадь зоны составляет 0.5 гектара, и она орошается через естественный канал. Также в зоне расположены 2 бочки для хранения воды.',
      type: 'Плодовые деревья',
      plants: '96',
    },
    en: {
      name: 'Zone 25.1',
      desc: 'Apple trees. This zone features apple trees of the "Sivers" variety. The area of the zone is 0.5 hectares, and it is irrigated through a natural channel. Additionally, there are 2 tanks for water storage located in the zone.',
      type: 'Fruit Trees',
      plants: '96',
    },
    tr: {
      name: 'Bölge 25.1',
      desc: 'Elma ağaçları. Bu bölgede "Sivers" çeşidi elma ağaçları bulunmaktadır. Bölgenin alanı 0.5 hektardır ve doğal bir kanal aracılığıyla sulanır. Ayrıca, bölgede 2 su depolama tankı bulunmaktadır.',
      type: 'Meyve Ağaçları',
      plants: '96 ',
    },
  },

  '26': {
    kk: {
      name: '26-зона',
      desc: 'Бұл аймақта сәндік ағаштар мен долана ағаштары бар. Сондай ақ жаңа ағаштар үшін де бос орындар бар',
      type: 'Микс',
      plants: '50+',
    },
    ru: {
      name: 'Зона 26',
      desc: 'В этой зоне представлены декоративные деревья и кизильник. Также есть свободные места для новых деревьев.',
      type: 'Микс',
      plants: '50+',
    },
    en: {
      name: 'Zone 26',
      desc: 'This zone features decorative trees and cotoneaster. There are also free spaces for new trees.',
      type: 'Mix',
      plants: '50+',
    },
    tr: {
      name: 'Bölge 26',
      desc: 'Bu bölgede süs ağaçları ve alıç bulunmaktadır. Ayrıca yeni ağaçlar için boş alanlar da mevcuttur.',
      type: 'Karışık',
      plants: '50+',
    },
  },

  '27': {
    kk: {
      name: '27-зона',
      desc: 'Бұл аймақта сәндік ағаштар мен долана ағаштары бар. Сондай ақ жаңа ағаштар үшін де бос орындар және 2 датчик орналасқагн',
      type: 'Микс',
      plants: '50+',
    },
    ru: {
      name: 'Зона 27',
      desc: 'В этой зоне представлены декоративные деревья и кизильник. Также есть свободные места для новых деревьев и расположены 2 датчика.',
      type: 'Микс',
      plants: '50+',
    },
    en: {
      name: 'Zone 27',
      desc: 'This zone features decorative trees and cotoneaster. There are also free spaces for new trees and 2 sensors are located.',
      type: 'Mix',
      plants: '50+',
    },
    tr: {
      name: 'Bölge 27',
      desc: 'Bu bölgede süs ağaçları ve alıç bulunmaktadır. Ayrıca yeni ağaçlar için boş alanlar ve 2 sensör bulunmaktadır.',
      type: 'Karışık',
      plants: '50+',
    },
  },

'28': {
kk: {
name: '28-аймақ',
desc: 'Бұл аймақта долана ағаштары және бос аймақтар бар. Аймақ табиғи арна арқылы суарылады.',
type: 'Микс',
plants: '50+',
},
ru: {
name: 'Зона 28',
desc: 'В этой зоне представлены деревья боярышника и свободные участки. Зона орошается через естественный канал.',
type: 'Микс',
plants: '50+',
},
en: {
name: 'Zone 28',
desc: 'This zone features hawthorn trees and free planting areas. The zone is irrigated through a natural channel.',
type: 'Mix',
plants: '50+',
},
tr: {
name: 'Bölge 28',
desc: 'Bu bölgede alıç ağaçları ve boş alanlar bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
type: 'Karışık',
plants: '50+',
},
},

'29': {
kk: {
name: '29-аймақ',
desc: 'Өрік ағаштары. Бұл аймақта "Субхан" сұрыпты өрік ағаштары егілген. Аймақ аумағы 0.94 гектар және ол табиғи арна арқылы және тамшылатып суару жүйесі арқылы суарылады. Тамшылатып суару 14 қатарды құрайды және оның жалпы ұзындығы 2170 метр. Сондай-ақ аймақта 3 датчик және 1 су сақтайтын бөшке орналасқан.',
type: 'Жеміс ағаштары',
plants: '136',
},
ru: {
name: 'Зона 29',
desc: 'Деревья абрикоса. В этой зоне посажены абрикосы сорта "Субхан". Площадь зоны составляет 0.94 гектара, и она орошается через естественный канал и систему капельного полива. Система капельного полива состоит из 14 рядов общей длиной 2170 метров. Также в зоне расположены 3 датчика и 1 бочка для хранения воды.',
type: 'Плодовые деревья',
plants: '136',
},
en: {
name: 'Zone 29',
desc: 'Apricot trees. This zone features apricot trees of the "Subhan" variety. The area of the zone is 0.94 hectares and it is irrigated through a natural channel and a drip irrigation system. The drip irrigation system consists of 14 rows with a total length of 2170 meters. Additionally, 3 sensors and 1 water storage barrel are located in the zone.',
type: 'Fruit Trees',
plants: '136',
},
tr: {
name: 'Bölge 29',
desc: 'Kayısı ağaçları. Bu bölgede "Subhan" çeşidi kayısı ağaçları bulunmaktadır. Bölgenin alanı 0.94 hektardır ve doğal kanal ile damla sulama sistemi aracılığıyla sulanır. Damla sulama sistemi 14 sıradan oluşur ve toplam uzunluğu 2170 metredir. Ayrıca bölgede 3 sensör ve 1 su depolama varili bulunmaktadır.',
type: 'Meyve Ağaçları',
plants: '136',
},
},

'30': {
kk: {
name: '30-аймақ',
desc: 'Өрік ағаштары. Бұл аймақта "Краснощекий Никитский" сұрыпты өрік ағаштары егілген. Аймақ аумағы 1.11 гектар және ол табиғи арна арқылы және тамшылатып суару жүйесі арқылы суарылады. Тамшылатып суару 22 қатарды құрайды және оның жалпы ұзындығы 3960 метр.',
type: 'Жеміс ағаштары',
plants: '250+',
},
ru: {
name: 'Зона 30',
desc: 'Деревья абрикоса. В этой зоне посажены абрикосы сорта "Краснощекий Никитский". Площадь зоны составляет 1.11 гектара, и она орошается через естественный канал и систему капельного полива. Система капельного полива состоит из 22 рядов общей длиной 3960 метров.',
type: 'Плодовые деревья',
plants: '250+',
},
en: {
name: 'Zone 30',
desc: 'Apricot trees. This zone features apricot trees of the "Krasnoshchekiy Nikitsky" variety. The area of the zone is 1.11 hectares and it is irrigated through a natural channel and a drip irrigation system. The drip irrigation system consists of 22 rows with a total length of 3960 meters.',
type: 'Fruit Trees',
plants: '250+',
},
tr: {
name: 'Bölge 30',
desc: 'Kayısı ağaçları. Bu bölgede "Krasnoshchekiy Nikitsky" çeşidi kayısı ağaçları bulunmaktadır. Bölgenin alanı 1.11 hektardır ve doğal kanal ile damla sulama sistemi aracılığıyla sulanır. Damla sulama sistemi 22 sıradan oluşur ve toplam uzunluğu 3960 metredir.',
type: 'Meyve Ağaçları',
plants: '250+',
},
},

'31': {
  kk: {
    name: '31-аймақ',
    desc: 'Сәндік вяз (вяз) ағаштары. Бұл аймақта сәндік вяз өсіріледі. Аймақ табиғи арна арқылы суарылады.',
    type: 'Сәндік вяз',
    plants: '300+',
  },
  ru: {
    name: 'Зона 31',
    desc: 'Декоративный вяз. В этой зоне выращиваются декоративные вязовые деревья. Зона орошается через естественный канал.',
    type: 'Декоративный вяз',
    plants: '300+',
  },
  en: {
    name: 'Zone 31',
    desc: 'Decorative elm. This zone features ornamental elm trees. The zone is irrigated through a natural channel.',
    type: 'Decorative Elm',
    plants: '300+',
  },
  tr: {
    name: 'Bölge 31',
    desc: 'Süs karaağaç (elm) ağaçları. Bu bölgede süs karaağaç türleri bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
    type: 'Süs Karaağaç',
    plants: '300+',
  },
},

  '32': {
  kk: {
      name: '32-аймақ',
      desc: 'Клен ағаштары. Бұл аймақта клен (maple) түрлері өсіріледі. Аймақ табиғи арна арқылы суарылады.',
      type: 'Клен',
    plants: '300+',
  },
  ru: {
      name: 'Зона 32',
      desc: 'Деревья клена. В этой зоне выращиваются виды клена. Зона орошается через естественный канал.',
      type: 'Клён',
    plants: '300+',
  },
  en: {
      name: 'Zone 32',
      desc: 'Maple trees. This zone features maple species. The zone is irrigated through a natural channel.',
      type: 'Maple',
    plants: '300+',
  },
  tr: {
      name: 'Bölge 32',
      desc: 'Akçaağaç (maple) ağaçları. Bu bölgede akçaağaç türleri bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
      type: 'Akçaağaç',
    plants: '300+',
  },
},
'33': {
kk: {
name: '33-аймақ',
desc: 'Бұл аймақта сәндік ағаштар мен қарақат өсімдіктері бар. Қарақат егілген аумақ 0.14 гектарды құрайды және өсімдік саны 42. Аймақ табиғи арна арқылы суарылады.',
type: 'Микс',
plants: '42+',
},
ru: {
name: 'Зона 33',
desc: 'В этой зоне представлены декоративные деревья и кусты смородины. Площадь участка со смородиной составляет 0.14 гектара, количество растений — 42. Зона орошается через естественный канал.',
type: 'Микс',
plants: '42+',
},
en: {
name: 'Zone 33',
desc: 'This zone features decorative trees and currant plants. The currant plantation covers 0.14 hectares and contains 42 plants. The zone is irrigated through a natural channel.',
type: 'Mix',
plants: '42+',
},
tr: {
name: 'Bölge 33',
desc: 'Bu bölgede süs ağaçları ve kuş üzümü bitkileri bulunmaktadır. Kuş üzümü ekili alanı 0.14 hektardır ve bitki sayısı 42’dir. Bölge doğal bir kanal aracılığıyla sulanır.',
type: 'Karışık',
plants: '42+',
},
},
'34': {
  kk: {
    name: '34-аймақ',
    desc: 'Сәндік ағаштар. Бұл аймақта сәндік ағаштар өсіріледі. Аймақ табиғи арна арқылы суарылады.',
    type: 'Сәндік ағаштар',
    plants: '300+',
  },
  ru: {
    name: 'Зона 34',
    desc: 'Декоративные деревья. В этой зоне выращиваются декоративные деревья. Зона орошается через естественный канал.',
    type: 'Декоративные деревья',
    plants: '300+',
  },
  en: {
    name: 'Zone 34',
    desc: 'Decorative trees. This zone features decorative trees. The zone is irrigated through a natural channel.',
    type: 'Decorative Trees',
    plants: '300+',
  },
  tr: {
    name: 'Bölge 34',
    desc: 'Süs ağaçları. Bu bölgede süs ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
    type: 'Süs Ağaçları',
    plants: '300+',
  },
},
'35': {
kk: {
name: '35-аймақ',
desc: 'Бұл аймақта сәндік ағаштар мен долана ағаштары бар. Аймақ табиғи арна арқылы суарылады.',
type: 'Микс',
plants: '50+',
},
ru: {
name: 'Зона 35',
desc: 'В этой зоне представлены декоративные деревья и деревья боярышника. Зона орошается через естественный канал.',
type: 'Микс',
plants: '50+',
},
en: {
name: 'Zone 35',
desc: 'This zone features decorative trees and hawthorn trees. The zone is irrigated through a natural channel.',
type: 'Mix',
plants: '50+',
},
tr: {
name: 'Bölge 35',
desc: 'Bu bölgede süs ağaçları ve alıç ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
type: 'Karışık',
plants: '50+',
},
},

'36': {
kk: {
name: '36-аймақ',
desc: 'Бұл аймақта сәндік ағаштар мен долана ағаштары бар. Аймақ табиғи арна арқылы суарылады.',
type: 'Микс',
plants: '50+',
},
ru: {
name: 'Зона 36',
desc: 'В этой зоне представлены декоративные деревья и деревья боярышника. Зона орошается через естественный канал.',
type: 'Микс',
plants: '50+',
},
en: {
name: 'Zone 36',
desc: 'This zone features decorative trees and hawthorn trees. The zone is irrigated through a natural channel.',
type: 'Mix',
plants: '50+',
},
tr: {
name: 'Bölge 36',
desc: 'Bu bölgede süs ağaçları ve alıç ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
type: 'Karışık',
plants: '50+',
},
},

'37': {
kk: {
name: '37-аймақ',
desc: 'Бұл аймақта сәндік ағаштар мен итмұрын өсімдіктері бар. Итмұрын егілген аумақ 0.1 гектарды құрайды және өсімдік саны 18. Аймақ табиғи арна арқылы суарылады.',
type: 'Микс',
plants: '18+',
},
ru: {
name: 'Зона 37',
desc: 'В этой зоне представлены декоративные деревья и кусты шиповника. Площадь участка с шиповником составляет 0.1 гектара, количество растений — 18. Зона орошается через естественный канал.',
type: 'Микс',
plants: '18+',
},
en: {
name: 'Zone 37',
desc: 'This zone features decorative trees and rosehip plants. The rosehip plantation covers 0.1 hectares and contains 18 plants. The zone is irrigated through a natural channel.',
type: 'Mix',
plants: '18+',
},
tr: {
name: 'Bölge 37',
desc: 'Bu bölgede süs ağaçları ve kuşburnu bitkileri bulunmaktadır. Kuşburnu ekili alanı 0.1 hektardır ve bitki sayısı 18’dir. Bölge doğal bir kanal aracılığıyla sulanır.',
type: 'Karışık',
plants: '18+',
},
},

'38': {
  kk: {
    name: '38-аймақ',
    desc: 'Сәндік ағаштар. Бұл аймақта сәндік ағаштар өсіріледі. Аймақ табиғи арна арқылы суарылады.',
    type: 'Сәндік ағаштар',
    plants: '300+',
  },
  ru: {
    name: 'Зона 38',
    desc: 'Декоративные деревья. В этой зоне выращиваются декоративные деревья. Зона орошается через естественный канал.',
    type: 'Декоративные деревья',
    plants: '300+',
  },
  en: {
    name: 'Zone 38',
    desc: 'Decorative trees. This zone features decorative trees. The zone is irrigated through a natural channel.',
    type: 'Decorative Trees',
    plants: '300+',
  },
  tr: {
    name: 'Bölge 38',
    desc: 'Süs ağaçları. Bu bölgede süs ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
    type: 'Süs Ağaçları',
    plants: '300+',
  },
},
'39': {
  kk: {
    name: '39-аймақ',
    desc: 'Сәндік ағаштар. Бұл аймақта сәндік ағаштар өсіріледі. Аймақ табиғи арна арқылы суарылады.',
    type: 'Сәндік ағаштар',
    plants: '300+',
  },
  ru: {
    name: 'Зона 39',
    desc: 'Декоративные деревья. В этой зоне выращиваются декоративные деревья. Зона орошается через естественный канал.',
    type: 'Декоративные деревья',
    plants: '300+',
  },
  en: {
    name: 'Zone 39',
    desc: 'Decorative trees. This zone features decorative trees. The zone is irrigated through a natural channel.',
    type: 'Decorative Trees',
    plants: '300+',
  },
  tr: {
    name: 'Bölge 39',
    desc: 'Süs ağaçları. Bu bölgede süs ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
    type: 'Süs Ağaçları',
    plants: '300+',
  },
},
'40': {
kk: {
name: '40-аймақ',
desc: 'Өрік ағаштары. Бұл аймақта "Самаркандский ранний" сұрыпты өрік ағаштары егілген. Аймақ аумағы 0.2 гектар және ол табиғи арна арқылы суарылады.',
type: 'Жеміс ағаштары',
plants: '41',
},
ru: {
name: 'Зона 40',
desc: 'Деревья абрикоса. В этой зоне посажены абрикосы сорта "Самаркандский ранний". Площадь зоны составляет 0.2 гектара, и она орошается через естественный канал.',
type: 'Плодовые деревья',
plants: '41',
},
en: {
name: 'Zone 40',
desc: 'Apricot trees. This zone features apricot trees of the "Samarkandskiy Ranniy" variety. The area of the zone is 0.2 hectares and it is irrigated through a natural channel.',
type: 'Fruit Trees',
plants: '41',
},
tr: {
name: 'Bölge 40',
desc: 'Kayısı ağaçları. Bu bölgede "Samarkandskiy Ranniy" çeşidi kayısı ağaçları bulunmaktadır. Bölgenin alanı 0.2 hektardır ve doğal bir kanal aracılığıyla sulanır.',
type: 'Meyve Ağaçları',
plants: '41',
},
},
'41': {
  kk: {
    name: '41-аймақ',
    desc: 'Сәндік ағаштар. Бұл аймақта сәндік ағаштар өсіріледі. Аймақ табиғи арна арқылы суарылады.',
    type: 'Сәндік ағаштар',
    plants: '300+',
  },
  ru: {
    name: 'Зона 41',
    desc: 'Декоративные деревья. В этой зоне выращиваются декоративные деревья. Зона орошается через естественный канал.',
    type: 'Декоративные деревья',
    plants: '300+',
  },
  en: {
    name: 'Zone 41',
    desc: 'Decorative trees. This zone features decorative trees. The zone is irrigated through a natural channel.',
    type: 'Decorative Trees',
    plants: '300+',
  },
  tr: {
    name: 'Bölge 41',
    desc: 'Süs ağaçları. Bu bölgede süs ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
    type: 'Süs Ağaçları',
    plants: '300+',
  },
},
'42': {
  kk: {
    name: '42-аймақ',
    desc: 'Сәндік ағаштар. Бұл аймақта сәндік ағаштар өсіріледі. Аймақ табиғи арна арқылы суарылады.',
    type: 'Сәндік ағаштар',
    plants: '300+',
  },
  ru: {
    name: 'Зона 42',
    desc: 'Декоративные деревья. В этой зоне выращиваются декоративные деревья. Зона орошается через естественный канал.',
    type: 'Декоративные деревья',
    plants: '300+',
  },
  en: {
    name: 'Zone 42',
    desc: 'Decorative trees. This zone features decorative trees. The zone is irrigated through a natural channel.',
    type: 'Decorative Trees',
    plants: '300+',
  },
  tr: {
    name: 'Bölge 42',
    desc: 'Süs ağaçları. Bu bölgede süs ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
    type: 'Süs Ağaçları',
    plants: '300+',
  },
},
'43': {
kk: {
name: '43-аймақ',
desc: 'Алма өрік ағаштары. Бұл аймақта алма өрік ағаштары өсіріледі. Аймақ табиғи арна арқылы суарылады.',
type: 'Жеміс ағаштары',
plants: '50+',
},
ru: {
name: 'Зона 43',
desc: 'Деревья алма-урюк. В этой зоне выращиваются деревья алма-урюк. Зона орошается через естественный канал.',
type: 'Плодовые деревья',
plants: '50+',
},
en: {
name: 'Zone 43',
desc: 'Apple-apricot trees. This zone features apple-apricot trees. The zone is irrigated through a natural channel.',
type: 'Fruit Trees',
plants: '50+',
},
tr: {
name: 'Bölge 43',
desc: 'Elma-kayısı ağaçları. Bu bölgede elma-kayısı ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
type: 'Meyve Ağaçları',
plants: '50+',
},
},

'44': {
kk: {
name: '44-аймақ',
desc: 'Қараөрік ағаштары. Бұл аймақта қараөрік ағаштары өсіріледі. Аймақ табиғи арна арқылы суарылады.',
type: 'Жеміс ағаштары',
plants: '50+',
},
ru: {
name: 'Зона 44',
desc: 'Деревья сливы. В этой зоне выращиваются деревья сливы. Зона орошается через естественный канал.',
type: 'Плодовые деревья',
plants: '50+',
},
en: {
name: 'Zone 44',
desc: 'Plum trees. This zone features plum trees. The zone is irrigated through a natural channel.',
type: 'Fruit Trees',
plants: '50+',
},
tr: {
name: 'Bölge 44',
desc: 'Erik ağaçları. Bu bölgede erik ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
type: 'Meyve Ağaçları',
plants: '50+',
},
},
'45': {
  kk: {
    name: '45-аймақ',
    desc: 'Сәндік ағаштар. Бұл аймақта сәндік ағаштар өсіріледі. Аймақ табиғи арна арқылы суарылады.',
    type: 'Сәндік ағаштар',
    plants: '300+',
  },
  ru: {
    name: 'Зона 45',
    desc: 'Декоративные деревья. В этой зоне выращиваются декоративные деревья. Зона орошается через естественный канал.',
    type: 'Декоративные деревья',
    plants: '300+',
  },
  en: {
    name: 'Zone 45',
    desc: 'Decorative trees. This zone features decorative trees. The zone is irrigated through a natural channel.',
    type: 'Decorative Trees',
    plants: '300+',
  },
  tr: {
    name: 'Bölge 45',
    desc: 'Süs ağaçları. Bu bölgede süs ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
    type: 'Süs Ağaçları',
    plants: '300+',
  },
},
'46': {
  kk: {
    name: '46-аймақ',
    desc: 'Сәндік ағаштар. Бұл аймақта сәндік ағаштар өсіріледі. Аймақ табиғи арна арқылы суарылады.',
    type: 'Сәндік ағаштар',
    plants: '300+',
  },
  ru: {
    name: 'Зона 46',
    desc: 'Декоративные деревья. В этой зоне выращиваются декоративные деревья. Зона орошается через естественный канал.',
    type: 'Декоративные деревья',
    plants: '300+',
  },
  en: {
    name: 'Zone 46',
    desc: 'Decorative trees. This zone features decorative trees. The zone is irrigated through a natural channel.',
    type: 'Decorative Trees',
    plants: '300+',
  },
  tr: {
    name: 'Bölge 46',
    desc: 'Süs ağaçları. Bu bölgede süs ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
    type: 'Süs Ağaçları',
    plants: '300+',
  },
},
'47': {
  kk: {
    name: '47-аймақ',
    desc: 'Сәндік ағаштар. Бұл аймақта сәндік ағаштар өсіріледі. Аймақ табиғи арна арқылы суарылады.',
    type: 'Сәндік ағаштар',
    plants: '300+',
  },
  ru: {
    name: 'Зона 47',
    desc: 'Декоративные деревья. В этой зоне выращиваются декоративные деревья. Зона орошается через естественный канал.',
    type: 'Декоративные деревья',
    plants: '300+',
  },
  en: {
    name: 'Zone 47',
    desc: 'Decorative trees. This zone features decorative trees. The zone is irrigated through a natural channel.',
    type: 'Decorative Trees',
    plants: '300+',
  },
  tr: {
    name: 'Bölge 47',
    desc: 'Süs ağaçları. Bu bölgede süs ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
    type: 'Süs Ağaçları',
    plants: '300+',
  },
},
  '48': {
  kk: {
    name: '48-аймақ',
    desc: 'Сәндік ағаштар. Бұл аймақта сәндік ағаштар өсіріледі. Аймақ табиғи арна арқылы суарылады.',
    type: 'Сәндік ағаштар',
    plants: '300+',
  },
  ru: {
    name: 'Зона 48',
    desc: 'Декоративные деревья. В этой зоне выращиваются декоративные деревья. Зона орошается через естественный канал.',
    type: 'Декоративные деревья',
    plants: '300+',
  },
  en: {
    name: 'Zone 48',
    desc: 'Decorative trees. This zone features decorative trees. The zone is irrigated through a natural channel.',
    type: 'Decorative Trees',
    plants: '300+',
  },
  tr: {
    name: 'Bölge 48',
    desc: 'Süs ağaçları. Bu bölgede süs ağaçları bulunmaktadır. Bölge doğal bir kanal aracılığıyla sulanır.',
    type: 'Süs Ağaçları',
    plants: '300+',
  },
},
};*/

/* Normalize generic zone names (auto-generate descriptive, localized names)
(function normalizeZoneNames() {
  const SKIP_KEYS = new Set(['cont','okr','kanal','tamshy','skvaj','bochk','joldar','meteo','tseh','shiporez','jylyjai']);
  const LANGS = ['kk','ru','en','tr'];

  const TRANSLATIONS = [
    { keys: ['pear','груш','алмұрт'], kk: 'Алмұрт', ru: 'Груша', en: 'Pear', tr: 'Armut' },
    { keys: ['apricot','абрикос','өрік'], kk: 'Өрік', ru: 'Абрикос', en: 'Apricot', tr: 'Kayısı' },
    { keys: ['apple','яблон','алма'], kk: 'Алма', ru: 'Яблоня', en: 'Apple', tr: 'Elma' },
    { keys: ['cherry','вишн','шие'], kk: 'Шие', ru: 'Вишня', en: 'Cherry', tr: 'Kiraz' },
    { keys: ['quince','айва'], kk: 'Айва', ru: 'Айва', en: 'Quince', tr: 'Ayva' },
    { keys: ['walnut','грецк','жаңғақ'], kk: 'Жаңғақ', ru: 'Грецкий орех', en: 'Walnut', tr: 'Ceviz' },
    { keys: ['poplar','топол','тополь'], kk: 'Тополь', ru: 'Тополь', en: 'Poplar', tr: 'Kavak' },
    { keys: ['vine','виног','үзім','grape'], kk: 'Жүзім бағы', ru: 'Виноградник', en: 'Vineyard', tr: 'Bağ' },
    { keys: ['conifer','хвой','шырша','spruce','pine','larch','fir'], kk: 'Қылқан жапырақты ағаштар', ru: 'Хвойные деревья', en: 'Coniferous trees', tr: 'İğne yapraklı ağaçlar' },
    { keys: ['hawthorn','боярышник','долана'], kk: 'Долана', ru: 'Боярышник', en: 'Hawthorn', tr: 'Alıç' },
    { keys: ['cotoneaster','кизильник'], kk: 'Кизильник', ru: 'Кизильник', en: 'Cotoneaster', tr: 'Alıç benzeri' },
    { keys: ['rosehip','шиповник','итмұрын'], kk: 'Итмұрын', ru: 'Шиповник', en: 'Rosehip', tr: 'Kuşburnu' },
    { keys: ['poplar alley','тополиная аллея'], kk: 'Тополь аллеясы', ru: 'Тополиная аллея', en: 'Poplar Alley', tr: 'Kavak Sokağı' },
  ];

  function extractCultivar(desc) {
    if (!desc) return null;
    const m = String(desc).match(/"([^\"]+)"/);
    return m ? m[1] : null;
  }

  function findSpeciesByDesc(desc) {
    if (!desc) return null;
    const low = desc.toLowerCase();
    for (const t of TRANSLATIONS) {
      for (const k of t.keys) {
        if (low.indexOf(k) !== -1) return t;
      }
    }
    return null;
  }

  function isGenericName(name, key, lang) {
    if (!name) return false;
    const idNorm = String(key).replace('_','.');
    const patterns = [
      new RegExp('^\\s*Zone\\s*' + idNorm + '\\s*$', 'i'),
      new RegExp('^\\s*Зона\\s*' + idNorm + '\\s*$', 'i'),
      new RegExp('^\\s*' + idNorm + '-аймақ\\s*$', 'i'),
      new RegExp('^\\s*Bölge\\s*' + idNorm + '\\s*$', 'i'),
      new RegExp('^\\s*' + idNorm + '(-|\\.)?аймақ\\s*$', 'i'),
      new RegExp('^\\s*' + idNorm + '(-|\\.)?зона\\s*$', 'i'),
      new RegExp('^\\s*' + idNorm + '\\s*$', 'i'),
    ];
    return patterns.some(p => p.test(name));
  }

  const usedNames = { kk: new Set(), ru: new Set(), en: new Set(), tr: new Set() };

  Object.keys(CUSTOM_ZONE_DATA).forEach(key => {
    if (SKIP_KEYS.has(key)) return;
    const item = CUSTOM_ZONE_DATA[key];
    // normalize id display
    const idDisplay = String(key).replace('_', '.');

    // ensure sets contain existing names to avoid collisions
    LANGS.forEach(l => {
      if (item[l] && item[l].name) usedNames[l].add(item[l].name);
    });

    LANGS.forEach(lang => {
      const cur = item[lang] && item[lang].name ? item[lang].name : '';
      if (!isGenericName(cur, key, lang)) return; // skip if already descriptive

      // try to detect cultivar and species from the same-language desc, fallback to ru/en
      const descSame = (item[lang] && item[lang].desc) || '';
      const descRu = (item.ru && item.ru.desc) || '';
      const descEn = (item.en && item.en.desc) || '';
      const descKk = (item.kk && item.kk.desc) || '';
      const descTr = (item.tr && item.tr.desc) || '';
      const cultivar = extractCultivar(descSame) || extractCultivar(descRu) || extractCultivar(descEn);

      let t = findSpeciesByDesc(descSame) || findSpeciesByDesc(descRu) || findSpeciesByDesc(descEn) || findSpeciesByDesc(descKk) || findSpeciesByDesc(descTr);
      let speciesLabel = t ? t[lang] : null;
      if (!speciesLabel) {
        // fallback to type field if species not found
        speciesLabel = (item[lang] && item[lang].type) || (item.en && item.en.type) || 'Zone';
      }

      let baseName = idDisplay + '. ' + speciesLabel;
      if (cultivar) baseName += ' "' + cultivar + '"';

      // ensure uniqueness per language
      let finalName = baseName;
      if (usedNames[lang].has(finalName)) {
        finalName = baseName + ' (' + idDisplay + ')';
      }
      if (!item[lang]) item[lang] = {};
      item[lang].name = finalName;
      usedNames[lang].add(finalName);
    });
  });
})();*/

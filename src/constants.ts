export interface ScrollySection {
  id: string;
  title: string;
  description: string;
  year: string;
  image?: string;
  accentColor?: string;
}

export interface Article {
  id: string;
  title: string;
  headline: string;
  subHeadline: string;
  readingTime: string;
  issueNo: string;
  sections: ScrollySection[];
}

export const ARTICLES: Article[] = [
  {
    id: "kadin-haklari",
    title: "Atatürk ve Kadın Hakları",
    headline: "Atatürk ve Kadın Hakları",
    subHeadline: "Modern Türkiye'nin inşasında kadınların toplumsal ve siyasal yaşamdaki rolü, Gazi Mustafa Kemal Atatürk'ün vizyonuyla şekillendi.",
    readingTime: "08 Dakika",
    issueNo: "042",
    sections: [
      {
        id: "kh-foundation",
        year: "1923",
        title: "Cumhuriyet ve Yeni Temeller",
        description: "Cumhuriyetin ilanı ile Türk kadını için yepyeni bir dönem başladı. Toplumsal yaşamın her alanında eşitlik hedeflendi.",
      },
      {
        id: "kh-education",
        year: "1924",
        title: "Tevhid-i Tedrisat Kanunu",
        description: "Eğitimde birlik sağlanarak kız ve erkek çocukların eşit eğitim almasının önü açıldı. Modern Türkiye'nin temeli eğitimle atıldı.",
      },
      {
        id: "kh-civil-code",
        year: "1926",
        title: "Türk Medeni Kanunu",
        description: "Aile yapısında devrim niteliğinde bir değişim. Çok eşlilik yasaklandı, boşanma ve miras haklarında kadın-erkek eşitliği sağlandı.",
      },
      {
        id: "kh-local-voting",
        year: "1930",
        title: "Belediye Seçimleri",
        description: "Kadınlar ilk kez siyasi bir hak elde etti: Belediye seçimlerinde seçme ve seçilme hakkı. Yerel yönetimlerde kadın sesi yükseldi.",
      },
      {
        id: "kh-full-suffrage",
        year: "1934",
        title: "Tam Siyasi Haklar",
        description: "Türkiye, birçok Avrupa ülkesinden önce kadınlara milletvekili seçme ve seçilme hakkını tanıdı. 18 kadın milletvekili meclise girdi.",
      },
      {
        id: "kh-legacy",
        year: "Bugün",
        title: "Bitmeyen Bir Miras",
        description: "Atatürk'ün vizyonuyla atılan bu adımlar, çağdaş Türkiye'nin en güçlü sütunlarından biri olmaya devam ediyor.",
      }
    ]
  },
  {
    id: "bayrak-kanunu",
    title: "Türk Bayrağı Kanunu",
    headline: "Türk Bayrağı Kanunu",
    subHeadline: "Bağımsızlığın sembolü al bayrağımızın standartları ve kullanım ilkeleri, 1936 yılında yasalaşan tarihi bir düzenleme ile koruma altına alındı.",
    readingTime: "06 Dakika",
    issueNo: "043",
    sections: [
      {
        id: "bk-origin",
        year: "Tarihçe",
        title: "Al Bayrağın Kökeni",
        description: "Türk bayrağının ay ve yıldızlı şekli, asırlara dayanan bir geleneğin ve bağımsızlık mücadelesinin en kutsal simgesidir.",
      },
      {
        id: "bk-provision",
        year: "1936",
        title: "Bayrak Kanunu'nun İlanı",
        description: "29 Mayıs 1936 tarihinde kabul edilen 2994 sayılı kanunla bayrağın şekli, boyutları ve nerelere çekileceği kesin kurallara bağlandı.",
      },
      {
        id: "bk-standard",
        year: "Standartlar",
        title: "Altın Oran ve Geometri",
        description: "Bayrağın genişliği, boyu, ayın merkezi ve yıldızın konumu matematiksel bir kesinlikle belirlenerek ulusal bir standart oluşturuldu.",
      },
      {
        id: "bk-usage",
        year: "Protokol",
        title: "Kullanım ve Saygı",
        description: "Bayrağın yırtık, sökük veya kirli kullanılamayacağı, oturulan yerlere serilemeyeceği gibi etik kurallar yasa ile tescillendi.",
      },
      {
        id: "bk-tuzuk",
        year: "1937",
        title: "Bayrak Tüzüğü",
        description: "Kanunun uygulanmasına dair detaylar 1937'de yayınlanan tüzükle pekiştirilerek bayrak her türlü saygısızlığa karşı hukuki bir kale gibi korundu.",
      }
    ]
  },
  {
    id: "ataturk-hayati",
    title: "Gazi Mustafa Kemal Atatürk",
    headline: "Bir Ulusun Yeniden Doğuşu: Atatürk",
    subHeadline: "Selanik'ten Cumhuriyet'e uzanan, bir milletin kaderini değiştiren dâhice bir yaşamın kilometre taşları.",
    readingTime: "12 Dakika",
    issueNo: "001",
    sections: [
      {
        id: "at-birth",
        year: "1881",
        title: "Selanik'te Bir Güneş Doğuyor",
        description: "Mustafa Kemal, 1881 yılında Selanik'te doğdu. Mütevazı bir ailede başlayan yaşamı, büyük bir vatanseverliğin tohumlarını taşıyordu.",
      },
      {
        id: "at-military",
        year: "1905",
        title: "Kurmay Yüzbaşı",
        description: "Harp Akademisi'ni bitirerek orduya katıldı. Trablusgarp ve Balkan Savaşları'nda gösterdiği deha, büyük bir liderin ayak sesleriydi.",
      },
      {
        id: "at-samsun",
        year: "1919",
        title: "Milli Mücadele'nin Başlangıcı",
        description: "19 Mayıs 1919'da Samsun'a çıkarak işgal altındaki bir milletin bağımsızlık ateşini yaktı. Amasya, Erzurum ve Sivas'ta kongreler topladı.",
      },
      {
        id: "at-republic",
        year: "1923",
        title: "Cumhuriyet İlânı",
        description: "Büyük zaferin ardından 29 Ekim 1923'te Türkiye Cumhuriyeti'ni kurdu. 'Egemenlik kayıtsız şartsız milletindir' ilkesini sonsuza dek mühürledi.",
      },
      {
        id: "at-reforms",
        year: "1924-1938",
        title: "Büyük İnkılâplar",
        description: "Eğitimden hukuka, kılık kıyafetten alfabeye kadar her alanda devrimler yaparak Türk toplumunu çağdaş uygarlık seviyesine taşıdı.",
      },
      {
        id: "at-legacy",
        year: "Sonsuzluk",
        title: "Bitmeyen Fikirler",
        description: "10 Kasım 1938'de bedenen aramızdan ayrılsa da, fikirleri ve kurduğu Cumhuriyet ile Türk milletinin yolunu aydınlatmaya devam ediyor.",
      }
    ]
  }
];

export const ABOUT_CONTENT = {
  title: "Hakkımızda",
  presentation: "SUNUŞ",
  text: "Çağdaş Türkiye Cumhuriyeti’nin kurucu önderi Mustafa Kemal Atatürk, binlerce yıllık geçmişe dayanan Türk milletinin içinden çıkmış bir liderdir. O, Türk toplumuna etki etmiş, yön vermiş tarihsel bir şahsiyettir. Bu yüzden çağdaş Türkiye’nin siyasal tarihi Mustafa Kemal Atatürk ile özdeşleşmiştir. Son dönem Türk siyasal tarihini iyi anlamak, Atatürk’ün yaşam sürecini ve dönemini, doğru tespitler ışığında iyi analiz etmekle mümkündür. Bu nedenle onun yaşam sürecini ve bu süreçte yaşanan olayları ve uygulamaları doğru bilgiler etrafında ortaya koymak gerekmektedir. Hızla değişen çok boyutlu ve çok sesli dünyada bazı değerleri koruyabilmek ve topluma kavratabilmek için doğru bilgiye etkin bir şekilde ulaşabilmek önemlidir."
};

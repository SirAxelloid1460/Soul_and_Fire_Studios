/* ============================================================
   Soul and Fire Studios — i18n (multi-idioma)
   - Selector de idioma + autodetección del navegador + memoria
   ============================================================ */
(function () {
  'use strict';

  var DEFAULT = 'en'; // idioma de respaldo si el del navegador no está disponible

  var T = {
    es: {
      'meta.title': 'Soul and Fire Studios — Estudio Indie de Videojuegos',
      'meta.desc': 'Soul and Fire Studios — estudio indie de videojuegos. Creamos mundos con alma y fuego.',
      'nav.news': 'Noticias', 'nav.team': 'Nosotros', 'nav.contact': 'Contacto',
      'hero.tag': 'Estudio indie de videojuegos. Forjamos mundos con alma y fuego — nuevos proyectos muy pronto.',
      'hero.cta1': 'Conócenos', 'hero.cta2': 'Apóyanos en Patreon',
      'news.tag': 'Noticias', 'news.title': 'Lo último del estudio',
      'news.empty': 'Aún no hay noticias por aquí. Estamos forjando cosas nuevas — ¡vuelve pronto!',
      'team.tag': 'Nosotros', 'team.title': 'El equipo tras la llama',
      'team.sub': 'El pequeño equipo apasionado que da vida a Soul and Fire Studios.',
      'role.founder': 'Fundador · Programación', 'role.pixel': 'Pixel Art', 'role.illu': 'Ilustración', 'role.writer': 'Guion & Narrativa',
      'bio.founder': 'Dirige el estudio y programa el gameplay y los sistemas de los juegos.',
      'bio.pixel': 'Da vida al arte y las animaciones en pixel art de los proyectos.',
      'bio.illu': 'Ilustra el arte de los proyectos que no son pixel art.',
      'bio.writer': 'Escribe el lore, la trama y los diálogos de nuestros mundos.',
      'patreon.tag': 'Apóyanos', 'patreon.title': 'Únete a nuestro Patreon',
      'patreon.text': 'Ayúdanos a seguir creando mundos con alma y fuego. Como mecenas tendrás adelantos exclusivos, betas, arte entre bastidores y mucho más.',
      'patreon.btn': 'Apóyanos en Patreon ↗',
      'contact.tag': 'Contacto', 'contact.title': '¿Hablamos?',
      'contact.text': 'Prensa, colaboraciones o simplemente para saludar. Escríbenos por email o Instagram, o apóyanos en Patreon — ¡nos encanta conocer gente que ama los videojuegos tanto como nosotros!',
      'contact.email': 'Email',
      'footer.tagline': 'Hecho con alma y fuego.'
    },
    en: {
      'meta.title': 'Soul and Fire Studios — Indie Game Studio',
      'meta.desc': 'Soul and Fire Studios — an indie game studio. We craft worlds with soul and fire.',
      'nav.news': 'News', 'nav.team': 'About', 'nav.contact': 'Contact',
      'hero.tag': 'Indie game studio. We forge worlds with soul and fire — new projects coming soon.',
      'hero.cta1': 'Meet us', 'hero.cta2': 'Support us on Patreon',
      'news.tag': 'News', 'news.title': 'Latest from the studio',
      'news.empty': "No news here yet. We're forging new things — check back soon!",
      'team.tag': 'About us', 'team.title': 'The team behind the flame',
      'team.sub': 'The small, passionate team that brings Soul and Fire Studios to life.',
      'role.founder': 'Founder · Programming', 'role.pixel': 'Pixel Art', 'role.illu': 'Illustration', 'role.writer': 'Writing & Narrative',
      'bio.founder': 'Leads the studio and programs the gameplay and systems of our games.',
      'bio.pixel': 'Brings the pixel art and animations of our projects to life.',
      'bio.illu': 'Illustrates the art for our non-pixel-art projects.',
      'bio.writer': 'Writes the lore, plot and dialogue of our worlds.',
      'patreon.tag': 'Support us', 'patreon.title': 'Join our Patreon',
      'patreon.text': "Help us keep creating worlds with soul and fire. As a patron you'll get exclusive previews, betas, behind-the-scenes art and much more.",
      'patreon.btn': 'Support us on Patreon ↗',
      'contact.tag': 'Contact', 'contact.title': "Let's talk",
      'contact.text': 'Press, collaborations or just to say hi. Reach us via email or Instagram, or support us on Patreon — we love meeting people who love games as much as we do!',
      'contact.email': 'Email',
      'footer.tagline': 'Made with soul and fire.'
    },
    pt: {
      'meta.title': 'Soul and Fire Studios — Estúdio Indie de Jogos',
      'meta.desc': 'Soul and Fire Studios — estúdio indie de jogos. Criamos mundos com alma e fogo.',
      'nav.news': 'Notícias', 'nav.team': 'Sobre', 'nav.contact': 'Contato',
      'hero.tag': 'Estúdio indie de jogos. Forjamos mundos com alma e fogo — novos projetos em breve.',
      'hero.cta1': 'Conheça-nos', 'hero.cta2': 'Apoie-nos no Patreon',
      'news.tag': 'Notícias', 'news.title': 'As novidades do estúdio',
      'news.empty': 'Ainda não há notícias por aqui. Estamos forjando coisas novas — volte em breve!',
      'team.tag': 'Sobre nós', 'team.title': 'A equipe por trás da chama',
      'team.sub': 'A pequena equipe apaixonada que dá vida ao Soul and Fire Studios.',
      'role.founder': 'Fundador · Programação', 'role.pixel': 'Pixel Art', 'role.illu': 'Ilustração', 'role.writer': 'Roteiro & Narrativa',
      'bio.founder': 'Lidera o estúdio e programa a jogabilidade e os sistemas dos jogos.',
      'bio.pixel': 'Dá vida à arte e às animações em pixel art dos projetos.',
      'bio.illu': 'Ilustra a arte dos projetos que não são pixel art.',
      'bio.writer': 'Escreve o lore, a trama e os diálogos dos nossos mundos.',
      'patreon.tag': 'Apoie-nos', 'patreon.title': 'Junte-se ao nosso Patreon',
      'patreon.text': 'Ajude-nos a continuar criando mundos com alma e fogo. Como apoiador, você terá prévias exclusivas, betas, arte dos bastidores e muito mais.',
      'patreon.btn': 'Apoie-nos no Patreon ↗',
      'contact.tag': 'Contato', 'contact.title': 'Vamos conversar?',
      'contact.text': 'Imprensa, parcerias ou só para dizer oi. Fale com a gente por e-mail ou Instagram, ou apoie-nos no Patreon — adoramos conhecer quem ama jogos tanto quanto nós!',
      'contact.email': 'E-mail',
      'footer.tagline': 'Feito com alma e fogo.'
    },
    fr: {
      'meta.title': 'Soul and Fire Studios — Studio de Jeux Indé',
      'meta.desc': 'Soul and Fire Studios — studio de jeux vidéo indépendant. Nous créons des mondes avec âme et feu.',
      'nav.news': 'Actualités', 'nav.team': 'À propos', 'nav.contact': 'Contact',
      'hero.tag': 'Studio de jeux vidéo indépendant. Nous forgeons des mondes avec âme et feu — de nouveaux projets bientôt.',
      'hero.cta1': 'Découvrez-nous', 'hero.cta2': 'Soutenez-nous sur Patreon',
      'news.tag': 'Actualités', 'news.title': 'Les dernières nouvelles du studio',
      'news.empty': "Pas encore d'actualités ici. Nous forgeons de nouvelles choses — revenez bientôt !",
      'team.tag': 'À propos', 'team.title': "L'équipe derrière la flamme",
      'team.sub': 'La petite équipe passionnée qui donne vie à Soul and Fire Studios.',
      'role.founder': 'Fondateur · Programmation', 'role.pixel': 'Pixel Art', 'role.illu': 'Illustration', 'role.writer': 'Scénario & Récit',
      'bio.founder': 'Dirige le studio et programme le gameplay et les systèmes des jeux.',
      'bio.pixel': 'Donne vie au pixel art et aux animations des projets.',
      'bio.illu': 'Illustre les projets qui ne sont pas en pixel art.',
      'bio.writer': "Écrit l'univers, l'intrigue et les dialogues de nos mondes.",
      'patreon.tag': 'Soutenez-nous', 'patreon.title': 'Rejoignez notre Patreon',
      'patreon.text': 'Aidez-nous à continuer de créer des mondes avec âme et feu. En tant que mécène, vous aurez des aperçus exclusifs, des bêtas, des coulisses et bien plus encore.',
      'patreon.btn': 'Soutenez-nous sur Patreon ↗',
      'contact.tag': 'Contact', 'contact.title': 'On discute ?',
      'contact.text': "Presse, collaborations ou juste pour dire bonjour. Écrivez-nous par e-mail ou Instagram, ou soutenez-nous sur Patreon — nous adorons rencontrer des gens qui aiment les jeux autant que nous !",
      'contact.email': 'E-mail',
      'footer.tagline': 'Fait avec âme et feu.'
    },
    de: {
      'meta.title': 'Soul and Fire Studios — Indie-Spielestudio',
      'meta.desc': 'Soul and Fire Studios — ein Indie-Spielestudio. Wir erschaffen Welten mit Seele und Feuer.',
      'nav.news': 'News', 'nav.team': 'Über uns', 'nav.contact': 'Kontakt',
      'hero.tag': 'Indie-Spielestudio. Wir schmieden Welten mit Seele und Feuer — neue Projekte bald.',
      'hero.cta1': 'Lerne uns kennen', 'hero.cta2': 'Unterstütze uns auf Patreon',
      'news.tag': 'News', 'news.title': 'Neuigkeiten aus dem Studio',
      'news.empty': 'Hier gibt es noch keine News. Wir schmieden Neues — schau bald wieder vorbei!',
      'team.tag': 'Über uns', 'team.title': 'Das Team hinter der Flamme',
      'team.sub': 'Das kleine, leidenschaftliche Team, das Soul and Fire Studios zum Leben erweckt.',
      'role.founder': 'Gründer · Programmierung', 'role.pixel': 'Pixel Art', 'role.illu': 'Illustration', 'role.writer': 'Drehbuch & Story',
      'bio.founder': 'Leitet das Studio und programmiert das Gameplay und die Systeme der Spiele.',
      'bio.pixel': 'Erweckt die Pixel-Art und Animationen der Projekte zum Leben.',
      'bio.illu': 'Illustriert die Kunst für unsere Nicht-Pixel-Art-Projekte.',
      'bio.writer': 'Schreibt die Lore, Handlung und Dialoge unserer Welten.',
      'patreon.tag': 'Unterstütze uns', 'patreon.title': 'Tritt unserem Patreon bei',
      'patreon.text': 'Hilf uns, weiter Welten mit Seele und Feuer zu erschaffen. Als Unterstützer erhältst du exklusive Vorschauen, Betas, Einblicke hinter die Kulissen und vieles mehr.',
      'patreon.btn': 'Unterstütze uns auf Patreon ↗',
      'contact.tag': 'Kontakt', 'contact.title': 'Reden wir?',
      'contact.text': 'Presse, Kooperationen oder einfach nur Hallo sagen. Schreib uns per E-Mail oder Instagram, oder unterstütze uns auf Patreon — wir lieben es, Menschen zu treffen, die Spiele so sehr lieben wie wir!',
      'contact.email': 'E-Mail',
      'footer.tagline': 'Mit Seele und Feuer gemacht.'
    },
    it: {
      'meta.title': 'Soul and Fire Studios — Studio di Videogiochi Indie',
      'meta.desc': 'Soul and Fire Studios — studio di videogiochi indie. Creiamo mondi con anima e fuoco.',
      'nav.news': 'Notizie', 'nav.team': 'Chi siamo', 'nav.contact': 'Contatti',
      'hero.tag': 'Studio di videogiochi indie. Forgiamo mondi con anima e fuoco — nuovi progetti in arrivo.',
      'hero.cta1': 'Scopri di più', 'hero.cta2': 'Sostienici su Patreon',
      'news.tag': 'Notizie', 'news.title': 'Le ultime dallo studio',
      'news.empty': 'Ancora nessuna notizia qui. Stiamo forgiando cose nuove — torna presto!',
      'team.tag': 'Chi siamo', 'team.title': 'Il team dietro la fiamma',
      'team.sub': 'Il piccolo team appassionato che dà vita a Soul and Fire Studios.',
      'role.founder': 'Fondatore · Programmazione', 'role.pixel': 'Pixel Art', 'role.illu': 'Illustrazione', 'role.writer': 'Sceneggiatura & Narrativa',
      'bio.founder': 'Guida lo studio e programma il gameplay e i sistemi dei giochi.',
      'bio.pixel': 'Dà vita alla pixel art e alle animazioni dei progetti.',
      'bio.illu': "Illustra l'arte dei progetti che non sono in pixel art.",
      'bio.writer': 'Scrive il lore, la trama e i dialoghi dei nostri mondi.',
      'patreon.tag': 'Sostienici', 'patreon.title': 'Unisciti al nostro Patreon',
      'patreon.text': 'Aiutaci a continuare a creare mondi con anima e fuoco. Come sostenitore avrai anteprime esclusive, beta, contenuti dietro le quinte e molto altro.',
      'patreon.btn': 'Sostienici su Patreon ↗',
      'contact.tag': 'Contatti', 'contact.title': 'Parliamone',
      'contact.text': 'Stampa, collaborazioni o solo per salutare. Scrivici via email o Instagram, oppure sostienici su Patreon — adoriamo conoscere chi ama i videogiochi quanto noi!',
      'contact.email': 'Email',
      'footer.tagline': 'Fatto con anima e fuoco.'
    },
    ja: {
      'meta.title': 'Soul and Fire Studios — インディーゲームスタジオ',
      'meta.desc': 'Soul and Fire Studios — インディーゲームスタジオ。魂と炎で世界を創ります。',
      'nav.news': 'ニュース', 'nav.team': '私たち', 'nav.contact': 'お問い合わせ',
      'hero.tag': 'インディーゲームスタジオ。魂と炎で世界を紡ぎます — 新作プロジェクトは近日公開。',
      'hero.cta1': '私たちについて', 'hero.cta2': 'Patreonで応援する',
      'news.tag': 'ニュース', 'news.title': 'スタジオの最新情報',
      'news.empty': 'まだニュースはありません。新しいものを準備中です — またチェックしてね！',
      'team.tag': '私たちについて', 'team.title': '炎の向こうのチーム',
      'team.sub': 'Soul and Fire Studios を支える、小さくも情熱的なチームです。',
      'role.founder': '創設者・プログラミング', 'role.pixel': 'ピクセルアート', 'role.illu': 'イラスト', 'role.writer': '脚本・ストーリー',
      'bio.founder': 'スタジオを率い、ゲームのゲームプレイとシステムをプログラミングします。',
      'bio.pixel': 'プロジェクトのピクセルアートとアニメーションに命を吹き込みます。',
      'bio.illu': 'ピクセルアート以外のプロジェクトのアートを手がけます。',
      'bio.writer': '世界観・物語・セリフを執筆します。',
      'patreon.tag': '応援する', 'patreon.title': '私たちのPatreonに参加',
      'patreon.text': '魂と炎で世界を創り続けるために、ぜひ力を貸してください。支援者には限定の先行情報、ベータ版、制作の舞台裏などをお届けします。',
      'patreon.btn': 'Patreonで応援する ↗',
      'contact.tag': 'お問い合わせ', 'contact.title': '話しましょう',
      'contact.text': '取材、コラボ、ご挨拶でもお気軽に。メールやInstagramでご連絡を、またはPatreonでの応援もうれしいです — ゲームを愛する皆さんとの出会いが大好きです！',
      'contact.email': 'メール',
      'footer.tagline': '魂と炎を込めて。'
    }
  };

  var AVAILABLE = Object.keys(T);

  function t(lang, key) {
    return (T[lang] && T[lang][key]) || (T[DEFAULT] && T[DEFAULT][key]) || T.es[key] || key;
  }

  function detect() {
    try {
      var saved = localStorage.getItem('sf_lang');
      if (saved && T[saved]) return saved;
    } catch (e) {}
    var navs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < navs.length; i++) {
      var code = (navs[i] || '').toLowerCase().split('-')[0];
      if (T[code]) return code;
    }
    return DEFAULT;
  }

  function apply(lang) {
    if (!T[lang]) lang = DEFAULT;
    document.documentElement.lang = lang;
    document.title = t(lang, 'meta.title');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t(lang, 'meta.desc'));

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      nodes[i].textContent = t(lang, key);
    }

    var sel = document.getElementById('langSelect');
    if (sel && sel.value !== lang) sel.value = lang;

    try { localStorage.setItem('sf_lang', lang); } catch (e) {}
  }

  function init() {
    var sel = document.getElementById('langSelect');
    var lang = detect();
    apply(lang);
    if (sel) {
      sel.value = lang;
      sel.addEventListener('change', function () { apply(sel.value); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

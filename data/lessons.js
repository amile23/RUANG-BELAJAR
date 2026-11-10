/* Ringkasan materi per bab. Kunci = id materi dari topics.js.
   Bentuk: { intro, points:[...], examples:[{q,a}], traps:[...] }
   Tiga bab di bawah ini contoh bawaan. Sisanya diisi dari materi yang kamu kirim. */
window.RB = window.RB || {};
RB.lessons = {
  mat1: {
    intro: 'Persamaan kuadrat berbentuk ax² + bx + c = 0 dengan a ≠ 0. Akarnya bisa dicari dengan pemfaktoran, melengkapkan kuadrat, atau rumus abc.',
    points: [
      'Rumus abc: x = (−b ± √(b² − 4ac)) / 2a.',
      'Diskriminan D = b² − 4ac. D > 0: dua akar real berbeda. D = 0: satu akar kembar. D < 0: tidak ada akar real.',
      'Jumlah akar x₁ + x₂ = −b/a. Hasil kali akar x₁ · x₂ = c/a.',
      'Titik puncak parabola y = ax² + bx + c ada di x = −b/2a.',
      'Parabola terbuka ke atas jika a > 0 (punya nilai minimum) dan ke bawah jika a < 0 (punya nilai maksimum).'
    ],
    examples: [
      { q: 'Tentukan akar x² − 5x + 6 = 0.', a: 'Faktorkan: (x − 2)(x − 3) = 0, jadi x = 2 atau x = 3.' },
      { q: 'Berapa diskriminan 2x² + 3x + 5 = 0?', a: 'D = 3² − 4·2·5 = 9 − 40 = −31. Tidak ada akar real.' }
    ],
    traps: [
      'Lupa tanda minus pada −b saat memakai rumus abc.',
      'Menukar jumlah dan hasil kali akar (−b/a dan c/a).',
      'D < 0 hanya berarti tidak ada akar real, bukan berarti persamaannya tidak punya solusi sama sekali.'
    ]
  },
  kim5: {
    intro: 'Asam–basa adalah bab inti Kimia. Kamu perlu mengenali kekuatan asam–basa, tiga teori asam–basa, menghitung pH, dan memakai satuan konsentrasi dengan benar.',
    points: [
      'Elektrolit kuat terionisasi sempurna (lampu terang): asam kuat, basa kuat, dan garam yang mudah larut. Elektrolit lemah terionisasi sebagian (lampu redup). Nonelektrolit (glukosa, urea, etanol) tidak menghantar listrik.',
      'Asam kuat: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄. Basa kuat: hidroksida alkali (LiOH, NaOH, KOH, …) dan Ca(OH)₂, Sr(OH)₂, Ba(OH)₂. Selain itu umumnya lemah.',
      'Arrhenius: asam melepas H⁺ dalam air, basa melepas OH⁻. Brønsted–Lowry: asam = donor proton (H⁺), basa = akseptor proton. Lewis: asam = akseptor pasangan elektron, basa = donor pasangan elektron.',
      'Pasangan konjugasi hanya berbeda satu H⁺. Asam konjugasi = tambah H⁺. Basa konjugasi = kurangi H⁺. Makin kuat asam, makin lemah basa konjugasinya. Ka × Kb = Kw.',
      'pH = −log [H⁺], pOH = −log [OH⁻], pH + pOH = 14 (25 °C), Kw = 10⁻¹⁴.',
      'Asam kuat: [H⁺] = M × valensi asam. Basa kuat: [OH⁻] = M × valensi basa. Contoh H₂SO₄ valensi 2, Ca(OH)₂ valensi 2.',
      'Asam lemah: [H⁺] = √(Ka × M) = α × M. Basa lemah: [OH⁻] = √(Kb × M) = α × M. Ka = α² × M.',
      'Pengenceran asam kuat 10× menaikkan pH 1 satuan (selama belum mendekati 7). Pengenceran tidak pernah membuat asam menjadi basa.',
      'Campuran dua asam kuat: [H⁺] = (V₁[H⁺]₁ + V₂[H⁺]₂) / (V₁ + V₂). Cara sama untuk dua basa kuat dengan [OH⁻].',
      'Molaritas = mol / liter = (gram / Mr) × (1000 / mL). Dari persen massa: M = 10 × % × ρ / Mr. Pengenceran: M₁V₁ = M₂V₂.',
      '% massa = massa zat terlarut / massa larutan × 100%. Molalitas = mol zat terlarut / kg pelarut. ppm = mg zat per kg larutan. Fraksi mol = mol zat / mol total.',
      'Indikator: lakmus merah–biru; fenolftalein tak berwarna (asam) menjadi merah muda (basa, pH > 8,3).'
    ],
    examples: [
      { q: 'Hitung pH larutan H₂SO₄ 0,005 M.', a: '[H⁺] = 0,005 × 2 = 10⁻² M. pH = 2.' },
      { q: 'Hitung pH asam lemah HA 0,1 M dengan Ka = 10⁻⁵.', a: '[H⁺] = √(10⁻⁵ × 10⁻¹) = 10⁻³ M. pH = 3.' },
      { q: 'Tentukan basa konjugasi dari H₂PO₄⁻.', a: 'Kurangi satu H⁺: HPO₄²⁻.' },
      { q: 'H₂SO₄ 98% massa jenis 1,8 g/mL, Mr = 98. Berapa molaritasnya?', a: 'M = 10 × 98 × 1,8 / 98 = 18 M.' }
    ],
    traps: [
      'Lupa valensi, misalnya H₂SO₄ memberi 2 H⁺ dan Ca(OH)₂ memberi 2 OH⁻.',
      'Memakai rumus akar (asam lemah) pada asam kuat, atau sebaliknya.',
      'Berhenti di pOH padahal yang ditanya pH.',
      'Menganggap air selalu hanya pelarut. Dalam Brønsted–Lowry air bisa bertindak sebagai asam atau basa.',
      'Pola TKA: tabel uji daya hantar atau uji indikator limbah. Tentukan kuat/lemah dulu dari terang lampu, lalu pilih rumusnya.'
    ]
  },
  kim6: {
    intro: 'Garam hasil reaksi asam dan basa bisa membuat larutan bersifat asam, basa, atau netral, tergantung ion mana yang bereaksi dengan air (hidrolisis). Bab ini juga memuat cara menghitung pH campuran asam dan basa, termasuk larutan penyangga.',
    points: [
      'Hanya ion dari asam lemah atau basa lemah yang terhidrolisis. Ion dari asam kuat (Cl⁻, Br⁻, I⁻, NO₃⁻, SO₄²⁻, ClO₄⁻) dan basa kuat (Na⁺, K⁺, Ca²⁺, Ba²⁺, …) tidak terhidrolisis.',
      'Basa kuat + asam kuat (NaCl, K₂SO₄): tidak terhidrolisis, pH = 7.',
      'Basa kuat + asam lemah (CH₃COONa): anion terhidrolisis, A⁻ + H₂O ⇌ HA + OH⁻, larutan basa (pH > 7). [OH⁻] = √(Kw/Ka × [A⁻]).',
      'Basa lemah + asam kuat (NH₄Cl): kation terhidrolisis, M⁺ + H₂O ⇌ MOH + H⁺, larutan asam (pH < 7). [H⁺] = √(Kw/Kb × [M⁺]).',
      'Basa lemah + asam lemah (CH₃COONH₄): terhidrolisis sempurna. [H⁺] = √(Kw × Ka / Kb). Ka > Kb asam, Ka < Kb basa, Ka = Kb netral.',
      'Konsentrasi ion yang terhidrolisis = molaritas garam × jumlah ion itu dalam rumus (misal (CH₃COO)₂Ca memberi 2 ion asetat, (NH₄)₂SO₄ memberi 2 ion NH₄⁺).',
      'Kh = Kw / Ka (garam basa) atau Kw / Kb (garam asam).',
      'pH campuran asam + basa: hitung mol H⁺ dan mol OH⁻, lalu lihat sisanya.',
      'Habis tepat (tidak ada sisa): pakai rumus hidrolisis garam (pH titik ekivalen).',
      'Sisa asam atau basa kuat: pH dari sisa yang kuat, [H⁺] atau [OH⁻] = mol sisa / volume total.',
      'Sisa asam atau basa lemah (bersama garamnya): terbentuk larutan penyangga.',
      'Penyangga asam: [H⁺] = Ka × (mol asam lemah / mol basa konjugasi). Penyangga basa: [OH⁻] = Kb × (mol basa lemah / mol asam konjugasi).',
      'Penyangga menahan perubahan pH pada penambahan sedikit asam, sedikit basa, atau pengenceran.'
    ],
    examples: [
      { q: 'Hitung pH CH₃COONa 0,1 M, Ka CH₃COOH = 10⁻⁵.', a: '[OH⁻] = √(10⁻¹⁴/10⁻⁵ × 10⁻¹) = √10⁻¹⁰ = 10⁻⁵. pOH = 5, pH = 9.' },
      { q: '100 mL CH₃COOH 0,2 M dicampur 50 mL NaOH 0,2 M (Ka = 10⁻⁵). Hitung pH.', a: 'Mol asam 20 mmol, mol NaOH 10 mmol. Sisa asam 10 mmol, garam terbentuk 10 mmol: penyangga. [H⁺] = 10⁻⁵ × 10/10 = 10⁻⁵, pH = 5.' },
      { q: '100 mL HCl 0,3 M + 100 mL NaOH 0,1 M. Hitung pH.', a: 'H⁺ 30 mmol, OH⁻ 10 mmol. Sisa H⁺ 20 mmol dalam 200 mL = 0,1 M. pH = 1.' }
    ],
    traps: [
      'Menganggap semua garam bersifat netral.',
      'Memakai Ka untuk garam padahal yang diketahui Kb (atau sebaliknya). Pakai Kh = Kw/K yang tepat.',
      'Lupa membagi mol garam dengan volume total campuran.',
      'Memakai rumus penyangga saat asam lemah habis tepat. Itu sudah hidrolisis.',
      'Pola TKA: pencampuran larutan dengan volume dan molaritas berbeda. Selalu mulai dengan tabel mol (mula, bereaksi, sisa) sebelum memilih rumus.'
    ]
  },
  kim17: {
    intro: 'Titrasi menentukan konsentrasi suatu larutan dengan meneteskan larutan lain yang konsentrasinya diketahui sampai tepat habis bereaksi. Kamu perlu menghitung konsentrasi dari data, memilih indikator, dan membaca kurva titrasi.',
    points: [
      'Titrat (analit) = larutan yang dicari konsentrasinya, di labu. Titran = larutan standar di buret.',
      'Titik ekivalen: asam dan basa tepat habis, mol H⁺ = mol OH⁻. Titik akhir: indikator berubah warna. Indikator dipilih supaya titik akhir sedekat mungkin dengan titik ekivalen.',
      'Rumus: Va × Ma × valensi asam = Vb × Mb × valensi basa.',
      'Jika titrasi diulang, pakai volume rata-rata (abaikan data yang menyimpang jauh).',
      'Kurva titrasi: asam kuat–basa kuat, pH ekivalen = 7. Asam lemah–basa kuat, pH ekivalen > 7. Basa lemah–asam kuat, pH ekivalen < 7. pH ekivalen dihitung dengan rumus hidrolisis garam.',
      'Pada titrasi asam lemah dengan basa kuat, ada daerah penyangga sebelum ekivalen. Saat separuh asam bereaksi (setengah ekivalen), pH = pKa.',
      'Pilih indikator yang trayek pH-nya mencakup pH ekivalen: asam kuat–basa kuat bromtimol biru atau fenolftalein, asam lemah–basa kuat fenolftalein (8,3–10), basa lemah–asam kuat metil merah (4,2–6,3) atau metil jingga (3,1–4,4).',
      'Trayek indikator: metil jingga 3,1–4,4 (merah–kuning), metil merah 4,2–6,3 (merah–kuning), bromtimol biru 6,0–7,6 (kuning–biru), fenolftalein 8,3–10,0 (tak berwarna–merah).',
      'Titrasi redoks: iodometri memakai KI berlebih agar oksidator melepas I₂, lalu I₂ dititrasi dengan natrium tiosulfat. Indikator amilum (biru tua dengan I₂) ditambahkan mendekati titik akhir, titik akhir saat warna biru hilang.'
    ],
    examples: [
      { q: '25 mL larutan CH₃COOH dititrasi NaOH 0,1 M. Volume NaOH rata-rata 20 mL. Berapa molaritas asam?', a: 'Valensi masing-masing 1. 25 × Ma = 20 × 0,1, jadi Ma = 0,08 M.' },
      { q: 'Titrasi 50 mL CH₃COOH 0,2 M dengan NaOH 0,2 M (Ka = 10⁻⁵). Berapa pH di titik ekivalen?', a: 'Ekivalen saat NaOH 50 mL. Garam = 10 mmol / 100 mL = 0,1 M. [OH⁻] = √(10⁻⁹ × 10⁻¹) = 10⁻⁵. pH = 9. Indikator cocok: fenolftalein.' }
    ],
    traps: [
      'Lupa valensi, misalnya H₂SO₄ dititrasi NaOH butuh faktor 2.',
      'Memakai titik netral pH 7 sebagai titik ekivalen untuk semua titrasi. Hanya benar untuk asam kuat–basa kuat.',
      'Lupa faktor pengenceran bila sampel diencerkan sebelum dititrasi (kalikan kembali).',
      'Menganggap titik akhir selalu sama dengan titik ekivalen. Keduanya berdekatan, tetapi tidak identik.',
      'Pola TKA: kurva titrasi dengan tabel trayek indikator. Tentukan pH ekivalen dari jenis asam–basa, lalu cari indikator yang trayeknya melingkupi pH itu.'
    ]
  },
  ing2: {
    intro: 'Conditional sentence terdiri dari klausa if dan klausa utama. Pilih tipenya dari seberapa nyata kondisi itu.',
    points: [
      'Type 0 (fakta umum): If + simple present, simple present. If you heat ice, it melts.',
      'Type 1 (mungkin terjadi): If + simple present, will + verb. If it rains, I will stay home.',
      'Type 2 (tidak nyata sekarang): If + simple past, would + verb. If I were you, I would study.',
      'Type 3 (tidak terjadi di masa lalu): If + past perfect, would have + past participle.',
      'Untuk type 2 formal, "were" dipakai untuk semua subjek (If I were, If she were).',
      'Wish tentang masa lalu memakai past perfect: I wish I had known.'
    ],
    examples: [
      { q: 'If I ___ rich, I would travel the world.', a: 'were (type 2, kondisi tidak nyata sekarang).' },
      { q: 'If he had studied, he ___ the test.', a: 'would have passed (type 3).' }
    ],
    traps: [
      'Memakai will di klausa if: If it will rain adalah salah.',
      'Mencampur tipe, misalnya If + simple past lalu will.',
      'Mengira "would" boleh dipakai di klausa if pada kalimat biasa.'
    ]
  }
  ,
  kim12: {
    intro: 'Atom terdiri dari inti (proton + neutron) dan elektron yang bergerak di sekitarnya. Dari sini kamu bisa menentukan jumlah partikel, model atom, bilangan kuantum, dan konfigurasi elektron.',
    points: [
      'Notasi atom ᴬ_Z X: A = nomor massa (proton + neutron), Z = nomor atom (jumlah proton). Neutron = A − Z.',
      'Atom netral: elektron = proton. Kation bermuatan +n: elektron = Z − n. Anion bermuatan −n: elektron = Z + n.',
      'Isotop: Z sama. Isobar: A sama. Isoton: neutron sama. Isoelektron: jumlah elektron sama.',
      'Urutan model atom: Dalton (bola pejal), Thomson (elektron tersebar di bola positif), Rutherford (inti kecil, elektron mengelilingi), Bohr (lintasan dengan energi tertentu), model modern (orbital, elektron bersifat peluang).',
      'Kelemahan Rutherford: elektron yang mengelilingi inti seharusnya kehilangan energi dan jatuh ke inti. Kelemahan Bohr: hanya cocok untuk atom hidrogen dan tidak menjelaskan ikatan kimia dengan baik.',
      'Bilangan kuantum utama n = 1, 2, 3, … (kulit). Azimut l = 0 sampai n − 1 (l = 0 s, 1 p, 2 d, 3 f). Magnetik m = −l sampai +l. Spin s = +½ atau −½.',
      'Jumlah orbital: s = 1, p = 3, d = 5, f = 7. Tiap orbital maksimum 2 elektron, jadi s = 2, p = 6, d = 10, f = 14 elektron.',
      'Urutan pengisian (Aufbau): 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s.',
      'Aturan Hund: orbital setingkat diisi satu-satu dulu dengan spin searah, baru berpasangan. Larangan Pauli: tidak ada dua elektron dengan keempat bilangan kuantum sama.',
      'Pengecualian: Cr = [Ar] 3d⁵ 4s¹ dan Cu = [Ar] 3d¹⁰ 4s¹, karena d setengah penuh atau penuh lebih stabil.',
      'Saat membentuk kation, elektron dilepas dari kulit terluar (n terbesar) dulu, jadi 4s dilepas sebelum 3d.',
      'Keadaan tereksitasi: ada elektron yang berada di orbital lebih tinggi padahal orbital lebih rendah belum penuh.'
    ],
    examples: [
      { q: 'Tentukan jumlah proton, neutron, dan elektron ion ³⁷₁₇Cl⁻.', a: 'Proton = 17. Neutron = 37 − 17 = 20. Elektron = 17 + 1 = 18.' },
      { q: 'Tentukan keempat bilangan kuantum elektron terakhir atom Al (Z = 13).', a: 'Konfigurasi 1s² 2s² 2p⁶ 3s² 3p¹. Elektron terakhir di 3p, jadi n = 3, l = 1. Satu elektron di orbital p pertama: m = −1, s = +½.' },
      { q: 'Ion X²⁺ punya 18 elektron. Berapa nomor atom X?', a: 'Atom netral X punya 18 + 2 = 20 elektron, jadi Z = 20 (kalsium).' }
    ],
    traps: [
      'Menghitung elektron kation dengan menambah muatan. Kation justru kehilangan elektron.',
      'Melepas elektron 3d lebih dulu daripada 4s saat membuat ion logam transisi.',
      'Lupa l harus lebih kecil dari n, jadi n = 2, l = 2 tidak mungkin.',
      'Salah urutan m: m = −1, 0, +1 untuk p. Elektron pertama menempati m paling negatif dengan spin +½.',
      'Pola TKA: pernyataan Tepat/Tidak Tepat atau pilih pernyataan yang benar. Tulis dulu konfigurasi elektronnya, baru cek tiap pernyataan.'
    ]
  },
  kim14: {
    intro: 'Letak unsur di tabel periodik ditentukan konfigurasi elektronnya. Dari letak itu kamu bisa membaca tren sifat: jari-jari, energi ionisasi, keelektronegatifan, dan sifat logam.',
    points: [
      'Nomor periode = jumlah kulit (n terbesar). Golongan A = jumlah elektron valensi (kulit terluar s + p).',
      'Golongan B: jumlahkan elektron (n−1)d dan ns. 3–7 elektron → golongan IIIB–VIIB, 8–10 → VIIIB, 11 → IB, 12 → IIB.',
      'Blok: akhir di s → blok s, di p → blok p, di d → transisi, di f → transisi dalam (lantanida dan aktinida).',
      'Ke kanan dalam periode: jari-jari mengecil; energi ionisasi, afinitas elektron, keelektronegatifan, sifat nonlogam, sifat asam, dan sifat oksidator naik.',
      'Ke bawah dalam golongan: jari-jari membesar; energi ionisasi dan keelektronegatifan turun; sifat logam, sifat basa, dan sifat reduktor naik.',
      'Anomali energi ionisasi pertama: Be > B, Mg > Al (subkulit s penuh stabil) dan N > O, P > S (p setengah penuh stabil).',
      'Kation lebih kecil dari atom asalnya. Anion lebih besar. Pada spesi isoelektron, makin besar nomor atom makin kecil jari-jarinya.',
      'Bilangan oksidasi tertinggi golongan A = nomor golongan. Terendah (untuk nonlogam) = nomor golongan − 8.',
      'Kereaktifan: logam alkali dan alkali tanah makin reaktif ke bawah. Halogen makin reaktif ke atas (F paling reaktif).',
      'Gas mulia memiliki energi ionisasi paling tinggi di tiap periode dan hampir tidak membentuk senyawa.'
    ],
    examples: [
      { q: 'Unsur dengan konfigurasi [Ar] 3d⁶ 4s² ada di golongan dan periode berapa?', a: 'Kulit terbesar n = 4, jadi periode 4. Elektron d + s = 6 + 2 = 8, jadi golongan VIIIB.' },
      { q: 'Urutkan jari-jari: Na, Mg, Al, Cl.', a: 'Satu periode, jari-jari mengecil ke kanan: Na > Mg > Al > Cl.' },
      { q: 'Urutkan jari-jari spesi isoelektron O²⁻, F⁻, Na⁺.', a: 'Semua punya 10 elektron. Proton Na paling banyak, jadi tarikan ke inti paling kuat: O²⁻ > F⁻ > Na⁺.' }
    ],
    traps: [
      'Mengira energi ionisasi selalu naik rapi ke kanan. Ada anomali Be/B dan N/O.',
      'Menghitung golongan B hanya dari elektron 4s. Harus ditambah elektron 3d.',
      'Mencampur tren periode dan golongan, misalnya jari-jari naik ke kanan.',
      'Pada soal tren, sering ada gas mulia. Keelektronegatifannya biasanya diabaikan.',
      'Pola TKA: tabel periodik dengan huruf pengganti unsur. Tentukan dulu letak tiap huruf, baru bandingkan sifatnya.'
    ]
  },
  kim15: {
    intro: 'Atom berikatan supaya mencapai konfigurasi stabil seperti gas mulia (oktet, atau duplet untuk H dan He). Jenis ikatan menentukan sifat zat, bentuk molekul, dan titik didihnya.',
    points: [
      'Ikatan ion: logam + nonlogam, terjadi serah terima elektron. Sifat: titik leleh tinggi, keras tetapi rapuh, larut dalam air, padatan tidak menghantar listrik tetapi lelehan dan larutannya menghantar.',
      'Ikatan kovalen: nonlogam + nonlogam, pasangan elektron dipakai bersama. Titik leleh umumnya rendah dan tidak menghantar listrik (kecuali yang terion dalam air, seperti HCl).',
      'Kovalen polar: beda keelektronegatifan ada dan bentuk molekul tidak simetris. Kovalen nonpolar: molekul simetris atau atom sejenis.',
      'Kovalen koordinasi: pasangan elektron berasal dari satu atom saja, contoh NH₄⁺, H₃O⁺, dan NH₃BF₃.',
      'Ikatan logam: kation logam dalam lautan elektron valensi, sehingga logam menghantar listrik dan bisa ditempa.',
      'Penyimpangan oktet: kurang dari 8 (BF₃, BeCl₂), lebih dari 8 (PCl₅, SF₆), atau elektron ganjil (NO, NO₂).',
      'Rumus senyawa ion: silang muatan. Rumus kovalen sederhana: tiap atom memenuhi kekurangan elektron valensinya, misalnya C (butuh 4) + F (butuh 1) → CF₄.',
      'Gaya antarmolekul, dari lemah ke kuat: gaya London (semua molekul, makin kuat jika Mr makin besar) < dipol–dipol (molekul polar) < ikatan hidrogen (H terikat pada F, O, atau N).',
      'Titik didih naik jika gaya antarmolekul kuat. Itu sebabnya HF dan H₂O punya titik didih yang menyimpang naik dibanding hidrida seagolongan.',
      'Bentuk molekul (VSEPR): hitung domain elektron atom pusat = pasangan ikatan (X) + pasangan bebas (E).',
      'AX₂ linear (180°, sp). AX₃ segitiga datar (120°, sp²). AX₄ tetrahedral (109,5°, sp³). AX₅ trigonal bipiramida (sp³d). AX₆ oktahedral (sp³d²).',
      'Dengan pasangan bebas: AX₂E bentuk V. AX₃E trigonal piramida (NH₃). AX₂E₂ bentuk V (H₂O). AX₄E jungkat-jungkit. AX₃E₂ bentuk T. AX₂E₃ linear. AX₅E piramida segiempat. AX₄E₂ segiempat datar.',
      'Hibridisasi mengikuti jumlah domain: 2 sp, 3 sp², 4 sp³, 5 sp³d, 6 sp³d².',
      'Molekul dengan ikatan polar bisa nonpolar jika bentuknya simetris, contoh CO₂ dan CCl₄.'
    ],
    examples: [
      { q: 'Unsur X (Z = 12) dan Y (Z = 17) berikatan. Apa rumus dan jenis ikatannya?', a: 'X: 2 8 2 melepas 2 elektron (X²⁺). Y: 2 8 7 menerima 1 elektron (Y⁻). Rumusnya XY₂, ikatan ion.' },
      { q: 'Tentukan bentuk molekul SF₄ dan hibridisasinya.', a: 'S punya 6 elektron valensi, 4 dipakai ikatan dengan F, tersisa 1 pasangan bebas. Domain = 5, tipe AX₄E: bentuk jungkat-jungkit, hibridisasi sp³d.' },
      { q: 'Mengapa titik didih HF lebih tinggi daripada HCl?', a: 'Antarmolekul HF terjadi ikatan hidrogen (H terikat pada F), yang lebih kuat daripada gaya dipol–dipol HCl.' }
    ],
    traps: [
      'Mengira ikatan hidrogen adalah ikatan antaratom. Ia gaya antarmolekul.',
      'Menyebut semua senyawa dengan ikatan polar pasti polar. Lihat bentuk molekulnya.',
      'Lupa menghitung pasangan elektron bebas atom pusat saat menentukan bentuk.',
      'Membandingkan titik didih hanya dari Mr, padahal ikatan hidrogen bisa menimpa pengaruh Mr.',
      'Pola TKA: wacana tentang gas vulkanik atau senyawa sehari-hari, lalu pernyataan Tepat/Tidak Tepat. Ambil data unsur dari wacana, gambar Lewis cepat, baru nilai tiap pernyataan.'
    ]
  },
  kim16: {
    intro: 'Bab ini dasar semua hitungan kimia: menamai senyawa, menulis reaksi yang setara, dan memakai hukum dasar kimia untuk membaca data percobaan.',
    points: [
      'Rumus molekul menyatakan jenis dan jumlah atom sebenarnya. Rumus empiris adalah perbandingan atom paling sederhana, contoh C₆H₁₂O₆ → CH₂O.',
      'Senyawa kovalen biner diberi awalan Yunani: mono 1, di 2, tri 3, tetra 4, penta 5, heksa 6, hepta 7, okta 8, nona 9, deka 10. Awalan mono tidak dipakai untuk unsur pertama.',
      'Senyawa ion: nama kation + nama anion. Logam yang punya beberapa biloks diberi angka Romawi, contoh Fe₂O₃ = besi(III) oksida.',
      'Ion yang sering muncul: NH₄⁺ amonium, OH⁻ hidroksida, NO₃⁻ nitrat, SO₄²⁻ sulfat, CO₃²⁻ karbonat, PO₄³⁻ fosfat, CH₃COO⁻ asetat.',
      'Asam: HCl asam klorida, H₂SO₄ asam sulfat, HNO₃ asam nitrat, CH₃COOH asam asetat. Basa: NaOH, Ca(OH)₂, dan seterusnya (logam + hidroksida).',
      'Menyetarakan reaksi: samakan jumlah tiap atom di kiri dan kanan. Mulai dari atom yang muncul di satu senyawa, unsur bebas disetarakan terakhir. Wujud: (s), (l), (g), (aq).',
      'Hukum Lavoisier: massa zat sebelum dan sesudah reaksi sama (sistem tertutup).',
      'Hukum Proust: perbandingan massa unsur dalam suatu senyawa selalu tetap.',
      'Hukum Dalton: jika dua unsur membentuk lebih dari satu senyawa, massa unsur kedua (untuk massa unsur pertama yang sama) berbanding sebagai bilangan bulat sederhana.',
      'Hukum Gay-Lussac: pada P dan T sama, volume gas yang bereaksi dan hasilnya berbanding sebagai bilangan bulat sederhana (sama dengan perbandingan koefisien).',
      'Hipotesis Avogadro: gas bervolume sama pada P dan T sama mengandung jumlah molekul yang sama.'
    ],
    examples: [
      { q: 'Setarakan: C₃H₈ + O₂ → CO₂ + H₂O.', a: 'C: 3 CO₂. H: 4 H₂O. O di kanan = 6 + 4 = 10, jadi 5 O₂. Hasil: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.' },
      { q: 'Perbandingan massa Mg : O dalam MgO = 3 : 2. Berapa MgO jika 6 g Mg direaksikan dengan 6 g O₂?', a: '6 g Mg butuh 4 g O. O sisa 2 g. MgO = 6 + 4 = 10 g.' },
      { q: 'Beri nama P₄O₁₀ dan CO.', a: 'P₄O₁₀ = tetrafosfor dekaoksida. CO = karbon monoksida (mono tidak dipakai di depan).' }
    ],
    traps: [
      'Mengubah indeks (angka kecil) saat menyetarakan. Yang boleh diubah hanya koefisien.',
      'Menulis "monokarbon monoksida". Mono tidak dipakai untuk unsur pertama.',
      'Memakai hukum Proust padahal soal membahas dua senyawa berbeda dari unsur sama (itu Dalton).',
      'Lupa pereaksi bersisa. Massa hasil ditentukan oleh pereaksi yang habis.',
      'Pola TKA: percobaan dengan tabel massa. Tanyakan: apakah massa total sama (Lavoisier), atau rasio massa tetap (Proust)?'
    ]
  },
  kim1: {
    intro: 'Stoikiometri adalah hitungan kimia berbasis mol. Kuncinya: ubah semua zat menjadi mol dulu, bandingkan dengan koefisien reaksi, lalu ubah ke satuan yang ditanya.',
    points: [
      'Mol = massa / Mr = jumlah partikel / 6,02 × 10²³ = volume gas (STP) / 22,4 = M × V (liter).',
      'STP (0 °C, 1 atm): 1 mol gas = 22,4 L. RTP (25 °C, 1 atm): 1 mol gas = 24 L. Suhu dan tekanan lain: PV = nRT.',
      'Pada P dan T sama, perbandingan volume gas = perbandingan mol = perbandingan koefisien.',
      'Molaritas M = mol / volume (L). Pengenceran: M₁V₁ = M₂V₂.',
      'Langkah hitungan reaksi: setarakan, ubah yang diketahui ke mol, bandingkan koefisien, ubah ke satuan yang ditanya.',
      'Pereaksi pembatas: bagi mol tiap pereaksi dengan koefisiennya. Hasil terkecil adalah pembatas. Hasil reaksi dihitung dari pembatas.',
      'Rumus empiris dari persen massa: anggap 100 g, ubah ke mol, bagi dengan mol terkecil, bulatkan. Rumus molekul = (RE)ₙ, dengan n = Mr / Mr RE.',
      'Garam hidrat (contoh CuSO₄·xH₂O): massa yang hilang saat dipanaskan adalah air. Cari mol air dan mol garam anhidrat, lalu x = mol air / mol garam.',
      'Persen massa unsur dalam senyawa = (jumlah Ar unsur / Mr senyawa) × 100%.'
    ],
    examples: [
      { q: 'N₂ + 3H₂ → 2NH₃. Jika 2 mol N₂ direaksikan dengan 3 mol H₂, siapa pembatas dan berapa NH₃?', a: 'N₂: 2/1 = 2. H₂: 3/3 = 1. H₂ pembatas. NH₃ = 3 × 2/3 = 2 mol. N₂ bersisa 2 − 1 = 1 mol.' },
      { q: 'Senyawa 40% C, 6,7% H, 53,3% O dengan Mr 180. Rumus molekulnya?', a: 'Mol C : H : O = 3,33 : 6,7 : 3,33 = 1 : 2 : 1, jadi RE = CH₂O (Mr 30). n = 180/30 = 6, jadi C₆H₁₂O₆.' }
    ],
    traps: [
      'Membandingkan massa pereaksi langsung tanpa diubah ke mol.',
      'Menentukan pembatas dari mol terkecil saja. Harus dibagi koefisien dulu.',
      'Memakai 22,4 L padahal soal menyebut suhu 25 °C (RTP) atau suhu lain.',
      'Lupa mengubah mL menjadi L saat menghitung molaritas.',
      'Pola TKA: wacana industri (pupuk, Haber–Bosch, pembuatan asam fosfat). Reaksi sering sudah diberikan di teks, tugasmu tinggal setarakan dan hitung mol.'
    ]
  }
  ,
  kim2: {
    intro: 'Termokimia membahas kalor yang ikut dalam reaksi. Perubahan kalor pada tekanan tetap disebut perubahan entalpi (ΔH). Tanda ΔH menunjukkan apakah reaksi melepas atau menyerap kalor.',
    points: [
      'Eksoterm: sistem melepas kalor ke lingkungan, ΔH negatif, suhu lingkungan naik, entalpi produk lebih rendah daripada reaktan.',
      'Endoterm: sistem menyerap kalor dari lingkungan, ΔH positif, suhu lingkungan turun (terasa dingin), entalpi produk lebih tinggi.',
      'ΔH pembentukan standar (ΔHf°): pembentukan 1 mol senyawa dari unsur-unsurnya yang paling stabil. ΔHf unsur bebas = 0.',
      'ΔH penguraian: kebalikan pembentukan. ΔH pembakaran: 1 mol zat dibakar sempurna dengan O₂ (selalu eksoterm). ΔH penetralan: pembentukan 1 mol air dari H⁺ + OH⁻ (eksoterm, sekitar −57 kJ/mol).',
      'Molekul diatomik: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂. Unsur lain ditulis monoatomik (C, S, Fe, …).',
      'Persamaan termokimia: dibalik → tanda ΔH dibalik. Dikali x → ΔH dikali x. Dijumlahkan → ΔH dijumlahkan.',
      'Kalorimeter sederhana: q = m × c × ΔT, dengan m massa larutan. Kalor reaksi = −q larutan. ΔH per mol = −q / mol zat.',
      'Jika kalorimeter ikut menyerap kalor: q total = (m × c × ΔT) + (C × ΔT), dengan C kapasitas kalor wadah.',
      'Hukum Hess: ΔH hanya bergantung pada keadaan awal dan akhir, jadi ΔH total = jumlah ΔH tiap tahap.',
      'Dari ΔHf: ΔH reaksi = Σ ΔHf produk − Σ ΔHf reaktan (dikali koefisien).',
      'Dari energi ikatan: ΔH reaksi = Σ energi ikatan yang diputus (reaktan) − Σ energi ikatan yang dibentuk (produk). Gambar struktur Lewis dulu untuk tahu ikatan apa saja.',
      'Jumlah ikatan tiap atom: C 4, H 1, O 2, N 3, F/Cl/Br/I 1.',
      'Mengenali jenis ΔH dari persamaan: pembentukan → hasil tepat 1 mol senyawa dan semua pereaksi adalah unsur (boleh pecahan). Penguraian → 1 mol senyawa menjadi unsur-unsurnya. Pembakaran → ada O₂ sebagai pereaksi dan hasil CO₂, H₂O.',
      'Kalor suatu proses = mol × ΔH. Mol dari massa = gram / Mr, mol gas STP = volume / 22,4.',
      'Diagram siklus Hess: ΔH jalur langsung sama dengan jumlah ΔH jalur memutar. Jika unsur → A (ΔH₁) dan unsur → B (ΔH₂), maka A → B memiliki ΔH = ΔH₂ − ΔH₁.',
      'Kalorimeter bom bervolume tetap: q = (m air × c + C bom) × ΔT, lalu ΔH = −q / mol zat.'
    ],
    examples: [
      { q: 'Sebanyak 50 mL HCl 1 M dan 50 mL NaOH 1 M dicampur di kalorimeter. Suhu naik 6,5 °C. (massa jenis 1 g/mL, c = 4,2 J/g °C). Berapa ΔH netralisasi per mol?', a: 'm = 100 g. q = 100 × 4,2 × 6,5 = 2.730 J. Mol air = 0,05. ΔH = −2.730 / 0,05 = −54.600 J/mol = −54,6 kJ/mol.' },
      { q: 'C + O₂ → CO₂ ΔH = −394 kJ dan CO + ½O₂ → CO₂ ΔH = −283 kJ. Hitung ΔH untuk C + ½O₂ → CO.', a: 'Pakai reaksi pertama apa adanya, balik reaksi kedua (ΔH jadi +283). Jumlahkan: −394 + 283 = −111 kJ.' },
      { q: 'H₂ + Cl₂ → 2HCl. Energi ikatan H–H 436, Cl–Cl 243, H–Cl 432 kJ/mol. Hitung ΔH.', a: 'Putus: 436 + 243 = 679. Bentuk: 2 × 432 = 864. ΔH = 679 − 864 = −185 kJ (eksoterm).' },
      { q: 'Ca + H₂ + O₂ → CaO + H₂O memiliki ΔH₁ = −800 kJ dan Ca + H₂ + O₂ → Ca(OH)₂ memiliki ΔH₂ = −1.050 kJ. Hitung ΔH untuk CaO + H₂O → Ca(OH)₂.', a: 'Dua jalur berawal dari unsur yang sama. ΔH = ΔH₂ − ΔH₁ = −1.050 − (−800) = −250 kJ.' }
    ],
    traps: [
      'Menukar rumus energi ikatan: yang benar putus dikurangi bentuk, bukan sebaliknya.',
      'Lupa membalik tanda ΔH saat reaksi dibalik, atau lupa mengali ΔH saat reaksi dikali.',
      'Menghitung ΔH per mol tanpa membagi dengan mol zat yang bereaksi, atau lupa tanda minus untuk reaksi eksoterm di kalorimeter.',
      'Menganggap penetralan endoterm. Penetralan asam–basa melepas kalor (suhu campuran naik).',
      'Pola TKA: wacana (kompres dingin instan, penghangat instan, bahan bakar) lalu diagram tingkat energi atau data kalorimeter. Tentukan dulu eksoterm atau endoterm dari diagramnya.',
      'Soal pembentukan: kalau persamaan menghasilkan 2 mol senyawa, ΔH-nya harus dibagi 2 dulu untuk menjadi ΔHf.',
      'Soal "kalor untuk menguraikan sekian gram": hitung ΔH per mol dulu, baru kalikan dengan mol dari massa. Periksa juga satuan Ar/Mr yang dipakai soal.'
    ]
  },
  kim3: {
    intro: 'Laju reaksi menyatakan seberapa cepat pereaksi berkurang atau hasil bertambah per satuan waktu. Bab ini meminta kamu membaca data percobaan untuk menentukan persamaan laju dan menjelaskan faktor yang mempercepat reaksi.',
    points: [
      'Laju = perubahan konsentrasi per waktu, satuan M/s (mol L⁻¹ s⁻¹). Perbandingan laju zat-zat dalam satu reaksi sama dengan perbandingan koefisiennya.',
      'Persamaan laju: v = k [A]ᵐ [B]ⁿ. m dan n adalah orde reaksi dan hanya bisa ditentukan dari percobaan (bukan dari koefisien, kecuali reaksi satu tahap).',
      'Orde total = m + n. Orde 0: laju tidak berubah dengan konsentrasi. Orde 1: konsentrasi ×2 → laju ×2. Orde 2: konsentrasi ×2 → laju ×4.',
      'Cara menentukan orde dari data: ambil dua percobaan yang hanya berbeda pada konsentrasi zat yang dicari, lalu bandingkan perubahan lajunya.',
      'Tetapan laju k bergantung pada jenis reaksi dan suhu. Ganti suhu, k berubah.',
      'Teori tumbukan: reaksi terjadi jika tumbukan efektif, yaitu orientasi tepat dan energi ≥ energi aktivasi (Ea). Ea makin kecil, reaksi makin cepat.',
      'Faktor yang mempercepat: konsentrasi lebih besar, luas permukaan lebih besar (serbuk), suhu lebih tinggi, tekanan gas lebih besar, dan katalis.',
      'Suhu: jika laju naik n kali tiap kenaikan ΔT, maka v₂ = v₁ × n^((T₂−T₁)/ΔT). Waktu reaksi berbanding terbalik dengan laju.',
      'Katalis menurunkan Ea lewat jalur reaksi lain. Ia tidak habis (kembali pada akhir reaksi), tidak mengubah ΔH, dan tidak mengubah hasil akhir.',
      'Waktu paruh orde 1: t½ = 0,693 / k, tidak bergantung pada konsentrasi awal. Setelah n kali waktu paruh, sisa = awal × (½)ⁿ.',
      'Kemolaran (M) = mol zat terlarut / liter larutan. Dari larutan pekat: M = kadar(%) × massa jenis(g/mL) × 10 / Mr. Pengenceran: M₁V₁ = M₂V₂.',
      'Grafik v terhadap [A]: orde 0 garis datar, orde 1 garis lurus naik dari titik (0,0), orde 2 melengkung naik seperti parabola.',
      'Satuan k bergantung orde total (laju dalam M/s): orde 0 → M s⁻¹, orde 1 → s⁻¹, orde 2 → M⁻¹ s⁻¹, orde 3 → M⁻² s⁻¹.',
      'Pada diagram energi, Ea = puncak − energi reaktan. Katalis hanya menurunkan puncak, level reaktan dan produk tetap, jadi ΔH tidak berubah. Laju percobaan juga bisa dinyatakan 1/t (t = waktu sampai tanda tertentu, misalnya larutan keruh).'
    ],
    examples: [
      { q: 'Data: percobaan 1 [A]=0,1 [B]=0,1 v=2; percobaan 2 [A]=0,2 [B]=0,1 v=8; percobaan 3 [A]=0,1 [B]=0,2 v=4. Tentukan persamaan laju.', a: 'Percobaan 1→2: [A] ×2, laju ×4, jadi orde A = 2. Percobaan 1→3: [B] ×2, laju ×2, jadi orde B = 1. v = k [A]² [B].' },
      { q: 'Laju reaksi naik 2 kali tiap kenaikan 10 °C. Pada 25 °C reaksi selesai dalam 80 detik. Berapa lama pada 55 °C?', a: 'Kenaikan 30 °C = 3 kali 10 °C, laju ×2³ = 8. Waktu = 80 / 8 = 10 detik.' },
      { q: 'Larutan H₂SO₄ pekat berkadar 97% dengan massa jenis 1,8 g/mL (Mr = 98). Hitung kemolarannya.', a: 'M = 97 × 1,8 × 10 / 98 = 1.746 / 98 ≈ 17,8 M.' }
    ],
    traps: [
      'Mengambil orde dari koefisien reaksi. Orde harus dari data percobaan.',
      'Membandingkan dua percobaan yang konsentrasi dua zatnya berubah sekaligus.',
      'Menganggap katalis mengubah ΔH atau menambah hasil. Katalis hanya mempercepat.',
      'Lupa bahwa waktu berbanding terbalik dengan laju (laju ×8 berarti waktu ÷8).',
      'Pola TKA: tabel percobaan atau grafik, lalu pernyataan Benar/Salah. Cari dulu orde tiap zat, baru cek pernyataan satu per satu.',
      'Pada percobaan waktu (1/t), waktu lebih singkat berarti laju lebih besar. Jangan membaca waktu sebagai laju.'
    ]
  },
  kim4: {
    intro: 'Pada reaksi reversibel, reaksi bisa berjalan dua arah sampai laju maju sama dengan laju balik. Saat itu konsentrasi tetap (setimbang dinamis). Bab ini meminta kamu menghitung K dan memprediksi arah pergeseran.',
    points: [
      'Setimbang dinamis: laju maju = laju balik dan konsentrasi tiap zat konstan (reaksi tetap berjalan, tetapi tidak ada perubahan yang terlihat).',
      'Homogen: semua zat satu fase. Heterogen: fase berbeda.',
      'Kc = [produk]^koefisien / [reaktan]^koefisien. Hanya gas dan larutan (aq) yang ditulis. Padatan dan cairan murni tidak ditulis. Kp hanya memuat gas, memakai tekanan parsial.',
      'Tekanan parsial: P gas = (mol gas / mol total gas) × P total.',
      'Hitungan memakai tabel M–B–S (mula-mula, bereaksi, setimbang). Yang dimasukkan ke rumus K harus konsentrasi setimbang (mol ÷ volume).',
      'K hanya berubah oleh suhu. Endoterm: suhu naik → K naik. Eksoterm: suhu naik → K turun.',
      'Reaksi dibalik → K menjadi 1/K. Reaksi dikali x → K dipangkatkan x. Reaksi dijumlahkan → K dikalikan.',
      'Kuosien reaksi Qc (rumus sama dengan K, tetapi dengan konsentrasi sembarang): Qc < K bergeser ke kanan, Qc > K bergeser ke kiri, Qc = K setimbang.',
      'Kp = Kc (RT)^Δn, dengan Δn = koefisien gas produk − koefisien gas reaktan. R = 0,082 L atm/mol K, T dalam kelvin.',
      'Derajat disosiasi α = mol terurai / mol mula-mula.',
      'Le Chatelier: sistem melawan gangguan. Tambah zat → bergeser menjauhi zat itu. Kurangi zat → bergeser ke arah zat itu.',
      'Suhu naik → bergeser ke arah endoterm. Suhu turun → ke arah eksoterm.',
      'Tekanan naik (volume turun) → bergeser ke sisi dengan jumlah koefisien gas lebih kecil. Jika jumlah koefisien gas sama, tidak bergeser.',
      'Katalis tidak menggeser kesetimbangan, hanya mempercepat tercapainya. Menambah gas inert pada volume tetap juga tidak menggeser.'
    ],
    examples: [
      { q: '2 mol N₂O₄ dalam wadah 2 L terurai: N₂O₄ ⇌ 2NO₂ dengan α = 0,5. Hitung Kc.', a: 'Terurai 1 mol. Setimbang: N₂O₄ = 1 mol (0,5 M), NO₂ = 2 mol (1 M). Kc = (1)² / 0,5 = 2.' },
      { q: 'N₂ + 3H₂ ⇌ 2NH₃ ΔH = −92 kJ. Bagaimana meningkatkan hasil NH₃?', a: 'Tekanan dinaikkan (4 mol gas → 2 mol), suhu tidak terlalu tinggi (eksoterm), dan NH₃ dikeluarkan. Katalis hanya mempercepat.' }
    ],
    traps: [
      'Memasukkan padatan atau cairan murni ke rumus K.',
      'Memasukkan mol langsung ke rumus Kc padahal harus konsentrasi (mol ÷ volume), kecuali jika volume sama dan Δn = 0.',
      'Mengira katalis atau tekanan mengubah nilai K. K hanya berubah oleh suhu.',
      'Menghitung pergeseran tekanan dengan semua zat, padahal hanya gas yang dihitung.',
      'Pola TKA: proses industri (Haber–Bosch, kontak, reduksi besi) dengan pernyataan Tepat/Tidak Tepat tentang strategi produksi. Tulis reaksi, tandai ΔH dan koefisien gas, baru nilai tiap strategi.'
    ]
  }
  ,
  kim13: {
    intro: 'Reaksi redoks adalah reaksi dengan perpindahan elektron, yang terlihat dari berubahnya bilangan oksidasi (biloks). Bab ini melatih menentukan biloks, mengenali oksidator dan reduktor, dan menyetarakan reaksi.',
    points: [
      'Aturan biloks: unsur bebas = 0. Jumlah biloks dalam senyawa = 0, dalam ion = muatan ion. H = +1, O = −2, logam IA = +1, IIA = +2, Al = +3. Halogen dengan logam = −1.',
      'Pengecualian: O dalam peroksida (H₂O₂, Na₂O₂) = −1, O dalam OF₂ = +2, H dalam hidrida logam (NaH, CaH₂) = −1.',
      'Oksidasi = biloks naik, melepas elektron, bertambah oksigen. Reduksi = biloks turun, menangkap elektron, berkurang oksigen.',
      'Reduktor = zat yang mengalami oksidasi (biloksnya naik). Oksidator = zat yang mengalami reduksi (biloksnya turun).',
      'Ciri reaksi redoks: ada unsur bebas di salah satu sisi, atau ada atom (selain H, O, logam IA/IIA) yang biloksnya berubah. Reaksi yang biloksnya tidak berubah (asam + basa, pengendapan) bukan redoks.',
      'Autoredoks (disproporsionasi): satu zat sekaligus teroksidasi dan tereduksi, contoh Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O. Konproporsionasi: hasil oksidasi dan reduksi berupa zat yang sama, contoh 2H₂S + SO₂ → 3S + 2H₂O.',
      'Mol elektron = mol zat × perubahan biloks (perhatikan jumlah atomnya).',
      'Menyetarakan dengan biloks: (1) tentukan atom yang biloksnya berubah, (2) samakan jumlah atom itu di kiri dan kanan, (3) hitung total biloks tiap sisi, (4) cari selisihnya, (5) samakan jumlah elektron lepas dan terima, (6) samakan muatan dengan H⁺ (asam) atau OH⁻ (basa), (7) samakan H dengan H₂O.',
      'Pemeriksaan akhir: jumlah atom O di kiri dan kanan harus sama, dan muatan total harus sama.',
      'Reaksi molekul (tanpa ion), samakan atom lain dulu (logam IA, IIA, lalu sisa), dan senyawa asam atau basa biasanya disetarakan terakhir.'
    ],
    examples: [
      { q: 'Tentukan biloks Mn dalam MnO₄⁻ dan Cr dalam Cr₂O₇²⁻.', a: 'MnO₄⁻: Mn + 4(−2) = −1, jadi Mn = +7. Cr₂O₇²⁻: 2Cr + 7(−2) = −2, jadi 2Cr = +12 dan Cr = +6.' },
      { q: 'Setarakan (suasana asam): MnO₄⁻ + C₂O₄²⁻ + H⁺ → Mn²⁺ + CO₂ + H₂O.', a: 'Mn turun 5 (+7 ke +2), tiap C naik 1 (C₂ naik 2). KPK 10: 2 MnO₄⁻ dan 5 C₂O₄²⁻ dan 10 CO₂. Muatan kiri −12 dan kanan +4, tambah 16 H⁺, lalu 8 H₂O. Hasil: 2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O.' },
      { q: 'Pada Zn + CuSO₄ → ZnSO₄ + Cu, tentukan oksidator dan reduktor.', a: 'Zn naik dari 0 ke +2 (reduktor, teroksidasi). Cu turun dari +2 ke 0 (CuSO₄ adalah oksidator).' }
    ],
    traps: [
      'Menghitung biloks satu atom padahal ada lebih dari satu (misal C₂O₄²⁻ total C₂ = +6).',
      'Menyebut zat hasil sebagai oksidator. Oksidator dan reduktor adalah pereaksi.',
      'Lupa pengecualian O dalam peroksida (−1).',
      'Menyetarakan muatan di suasana basa dengan H⁺, seharusnya OH⁻.',
      'Pola TKA: wacana tentang klorin, hipoklorit, atau pembuatan amonia. Tulis biloks di atas tiap atom yang berubah, baru jawab pertanyaan oksidator atau reduktor.'
    ]
  },
  kim18: {
    intro: 'Larutan penyangga (buffer) menahan perubahan pH ketika ditambah sedikit asam, sedikit basa, atau diencerkan. Ia terdiri dari pasangan asam/basa lemah dengan konjugatnya.',
    points: [
      'Penyangga asam: asam lemah + basa konjugasinya (dari garam), contoh CH₃COOH + CH₃COONa. Penyangga basa: basa lemah + asam konjugasinya, contoh NH₃ + NH₄Cl.',
      'Penyangga asam: [H⁺] = Ka × (mol asam lemah / mol basa konjugasi). Penyangga basa: [OH⁻] = Kb × (mol basa lemah / mol asam konjugasi).',
      'Jika garam melepas lebih dari satu ion konjugat (misal (CH₃COO)₂Ca memberi 2 ion), mol konjugat = mol garam × jumlah ion itu.',
      'Jika volume sama, boleh memakai konsentrasi saja. Jika konsentrasi lemah = konjugat, pH = pKa (atau pOH = pKb).',
      'Cara langsung: campur asam/basa lemah dengan garamnya. Cara tidak langsung: campur asam/basa lemah dengan basa/asam kuat, dengan syarat yang lemah bersisa.',
      'Cara tidak langsung: lemah berlebih dengan kuat. Mol garam yang terbentuk = mol yang kuat. Mol lemah sisa = mol lemah awal − mol kuat.',
      'Penambahan sedikit asam kuat: konjugat berkurang, lemah bertambah. Penambahan sedikit basa kuat: lemah berkurang, konjugat bertambah. Perubahan mol sebesar mol H⁺ atau OH⁻ yang ditambahkan.',
      'Pengenceran: mol lemah dan konjugat tetap, perbandingannya tetap, sehingga pH hampir tidak berubah.',
      'Penyangga dalam tubuh: darah memakai pasangan H₂CO₃/HCO₃⁻ (pH sekitar 7,4). Di dalam sel ada penyangga fosfat.',
      'Penyangga bekerja pada batas tertentu. Jika asam atau basa yang ditambahkan melebihi komponen penyangga, pH berubah drastis.'
    ],
    examples: [
      { q: '100 mL CH₃COOH 0,1 M dicampur 100 mL CH₃COONa 0,1 M (Ka = 10⁻⁵). Hitung pH.', a: 'Mol asam = mol garam = 10 mmol. [H⁺] = 10⁻⁵ × 10/10 = 10⁻⁵, pH = 5.' },
      { q: 'Penyangga 0,2 mol CH₃COOH dan 0,2 mol CH₃COONa (Ka = 10⁻⁵) ditambah 0,02 mol HCl. Berapa pH?', a: 'Asam menjadi 0,22 mol, garam menjadi 0,18 mol. [H⁺] = 10⁻⁵ × 0,22/0,18 = 1,22 × 10⁻⁵, pH ≈ 4,9. Hanya turun 0,1.' },
      { q: 'Perbandingan CH₃COOH : CH₃COO⁻ agar pH = 6 (Ka = 10⁻⁵)?', a: '[H⁺] = 10⁻⁶ = 10⁻⁵ × (asam/garam), jadi asam : garam = 1 : 10.' }
    ],
    traps: [
      'Memakai rumus penyangga ketika lemah habis tepat. Itu hidrolisis garam.',
      'Menukar posisi: asam lemah di atas (pembilang) untuk [H⁺], bukan garam.',
      'Lupa jumlah ion konjugat per rumus garam (misal (NH₄)₂SO₄ memberi 2 NH₄⁺).',
      'Menghitung perubahan dengan konsentrasi padahal mol yang berubah saat ditambah asam atau basa.',
      'Pola TKA: kasus klinis darah atau minuman, menjelaskan bagaimana penyangga menetralkan asam. Tulis dua reaksi: konjugat + H⁺ dan lemah + OH⁻.'
    ]
  },
  kim7: {
    intro: 'Garam yang sukar larut tetap melarut dalam jumlah sangat kecil sehingga terbentuk kesetimbangan antara padatan dan ion-ionnya. Ksp menyatakan tetapan kesetimbangan itu dan dipakai untuk menghitung kelarutan serta memprediksi pengendapan.',
    points: [
      'Kelarutan (s) = mol zat yang larut per liter larutan jenuh (mol/L).',
      'Untuk AₘBₙ(s) ⇌ mAⁿ⁺ + nBᵐ⁻: Ksp = [Aⁿ⁺]ᵐ [Bᵐ⁻]ⁿ. Padatan tidak ditulis.',
      'Dalam air: AB → Ksp = s². AB₂ atau A₂B → Ksp = 4s³. AB₃ → Ksp = 27s⁴. Rumus umum Ksp = mᵐ nⁿ s^(m+n).',
      'Untuk membandingkan kelarutan, bandingkan Ksp hanya jika tipenya sama (jumlah ion sama). Jika berbeda, hitung s masing-masing.',
      'Ion senama (ion yang sama dengan salah satu ion garam) memperkecil kelarutan. Hitung dari Ksp memakai konsentrasi ion senama yang sudah ada, dan abaikan s yang sangat kecil.',
      'Qsp memakai rumus sama dengan Ksp tetapi dengan konsentrasi sesaat. Qsp < Ksp: belum jenuh, tidak mengendap. Qsp = Ksp: tepat jenuh. Qsp > Ksp: mengendap.',
      'Saat dua larutan dicampur, hitung dulu konsentrasi ion setelah pencampuran (volume bertambah) sebelum menghitung Qsp.',
      'pH berpengaruh: hidroksida logam lebih larut dalam asam (OH⁻ bereaksi dengan H⁺). Pada pH tinggi kelarutannya turun.',
      'Pembentukan ion kompleks (misal AgCl dengan NH₃ membentuk [Ag(NH₃)₂]⁺) menaikkan kelarutan.',
      'Suhu naik umumnya menaikkan kelarutan padatan. Pengendapan bertahap: pada konsentrasi ion sama, garam dengan Ksp lebih kecil (tipe sama) mengendap lebih dulu.'
    ],
    examples: [
      { q: 'Ksp Mg(OH)₂ = 4 × 10⁻¹². Hitung kelarutan dalam air.', a: 'Tipe AB₂: Ksp = 4s³. 4s³ = 4 × 10⁻¹², s³ = 10⁻¹², s = 10⁻⁴ M.' },
      { q: 'Ksp AgCl = 10⁻¹⁰. Hitung kelarutannya dalam NaCl 0,1 M.', a: '[Cl⁻] ≈ 0,1 M. [Ag⁺] = Ksp/[Cl⁻] = 10⁻¹⁰/10⁻¹ = 10⁻⁹. Jadi s = 10⁻⁹ M (jauh lebih kecil daripada 10⁻⁵ M di air murni).' },
      { q: 'Pada pH berapa Mg(OH)₂ (Ksp = 4 × 10⁻¹²) mulai mengendap dari larutan Mg²⁺ 0,01 M?', a: '[OH⁻]² = Ksp/[Mg²⁺] = 4 × 10⁻¹⁰, [OH⁻] = 2 × 10⁻⁵. pOH = 5 − log 2, pH = 9 + log 2.' }
    ],
    traps: [
      'Menulis padatan di dalam rumus Ksp.',
      'Salah menghitung konsentrasi OH⁻ pada Ca(OH)₂ (ingat [OH⁻] = 2s).',
      'Membandingkan kelarutan dari Ksp saja untuk garam yang tipenya berbeda.',
      'Lupa mengencerkan konsentrasi saat dua larutan dicampur sebelum menghitung Qsp.',
      'Pola TKA: pengolahan limbah dengan penambahan ion pengendap. Hitung konsentrasi setelah dicampur, hitung Qsp, lalu bandingkan dengan Ksp.'
    ]
  }
  ,
  kim19: {
    intro: 'Sel volta mengubah energi kimia dari reaksi redoks spontan menjadi energi listrik. Dengan data potensial reduksi standar (E°), kamu bisa menentukan anoda, katoda, potensial sel, dan apakah suatu reaksi spontan. Bab ini juga mencakup korosi dan baterai.',
    points: [
      'Deret Volta: K–Ba–Ca–Na–Mg–Al–Mn–Zn–Cr–Fe–Cd–Co–Ni–Sn–Pb–(H)–Cu–Hg–Ag–Pt–Au. Makin ke kiri, reduktor makin kuat dan E° makin kecil. Logam dapat mereduksi ion logam di sebelah kanannya.',
      'Logam di kiri H mendesak H₂ dari asam encer (misalnya Zn + 2HCl → ZnCl₂ + H₂). Logam di kanan H tidak.',
      'Anoda = tempat oksidasi, E° lebih kecil, kutub negatif pada sel volta. Katoda = tempat reduksi, E° lebih besar, kutub positif pada sel volta.',
      'Elektron mengalir lewat kawat dari anoda ke katoda. Massa anoda berkurang (logam melarut), massa katoda bertambah (logam mengendap).',
      'E° sel = E° katoda − E° anoda (E° besar − E° kecil). Koefisien reaksi tidak dikalikan ke E°. E° sel positif berarti reaksi spontan.',
      'Notasi sel: anoda | ion anoda || ion katoda | katoda. Contoh Zn | Zn²⁺ || Cu²⁺ | Cu.',
      'Kondisi standar: 25 °C, 1 M, 1 atm. Di luar standar: E sel = E° sel − (0,0592/n) log Q, dengan Q = [produk]/[reaktan] berdasarkan koefisien.',
      'Korosi besi: Fe teroksidasi oleh O₂ dengan bantuan air. Dipercepat oleh air, elektrolit (garam, asam), permukaan tidak rata, dan kontak dengan logam yang E°-nya lebih besar (misalnya besi dipaku tembaga).',
      'Pencegahan korosi: cat, oli, plastik; galvanisasi (lapisan seng); pelapisan krom; perlindungan katodik dengan logam yang lebih mudah teroksidasi dari Fe (Mg atau Zn sebagai logam korban).',
      'Pelapisan timah (Sn) hanya melindungi selama utuh. Jika tergores, Fe justru berkarat lebih cepat karena E° Sn lebih besar daripada Fe.',
      'Sel primer (sekali pakai): baterai kering Zn/MnO₂, baterai perak oksida. Sel sekunder (dapat diisi ulang): aki timbal (Pb/PbO₂), karena reaksinya dapat dibalik dengan arus listrik. Sel bahan bakar: H₂ dan O₂ menghasilkan listrik dan air.'
    ],
    examples: [
      { q: 'Zn²⁺ + 2e → Zn E° = −0,76 V dan Cu²⁺ + 2e → Cu E° = +0,34 V. Tentukan anoda, katoda, dan E° sel.', a: 'Zn memiliki E° lebih kecil, jadi Zn adalah anoda (oksidasi) dan Cu katoda (reduksi). E° sel = 0,34 − (−0,76) = +1,10 V. Reaksi spontan: Zn + Cu²⁺ → Zn²⁺ + Cu.' },
      { q: 'Sel Zn|Zn²⁺(0,01 M)||Cu²⁺(1 M)|Cu. Hitung E sel (E° = 1,10 V, n = 2).', a: 'Q = [Zn²⁺]/[Cu²⁺] = 0,01. log Q = −2. E = 1,10 − (0,0592/2)(−2) = 1,10 + 0,0592 ≈ 1,16 V.' }
    ],
    traps: [
      'Menukar anoda dan katoda. Anoda selalu tempat oksidasi (E° kecil).',
      'Mengalikan E° dengan koefisien reaksi. E° adalah sifat intensif dan tidak dikalikan.',
      'Salah membalik tanda E° sel: E° katoda dikurangi E° anoda, bukan sebaliknya.',
      'Menganggap logam pelapis yang E°-nya lebih besar dari Fe tetap melindungi saat tergores.',
      'Pola TKA: teks tentang baterai atau korosi kapal. Cari E° tiap logam, tentukan siapa yang teroksidasi lebih dulu, lalu kaitkan dengan pertanyaan.'
    ]
  },
  kim20: {
    intro: 'Elektrolisis memakai arus listrik untuk memaksa reaksi redoks yang tidak spontan. Kamu perlu menentukan hasil di katoda dan anoda, lalu menghitung massa atau volume memakai hukum Faraday.',
    points: [
      'Sel elektrolisis: energi listrik menjadi energi kimia. Katoda = kutub negatif (reduksi), anoda = kutub positif (oksidasi). Kebalikan dengan sel volta.',
      'Katoda (hanya melihat kation): ion K⁺, Na⁺, Ca²⁺, Mg²⁺, Al³⁺, Mn²⁺ dalam larutan tidak tereduksi karena air lebih mudah: 2H₂O + 2e⁻ → H₂ + 2OH⁻. Kation lain (Cu²⁺, Ag⁺, Zn²⁺, Fe³⁺ dst) tereduksi menjadi logam. Ion H⁺ dari asam menjadi H₂.',
      'Lelehan (tanpa air): semua kation direduksi menjadi logam, misalnya Na⁺ + e⁻ → Na dan Al³⁺ + 3e⁻ → Al.',
      'Anoda inert (C, Pt, Au): halida (Cl⁻, Br⁻, I⁻) menjadi X₂. OH⁻ menjadi O₂ dan H₂O. Sisa asam oksi (SO₄²⁻, NO₃⁻, CO₃²⁻, PO₄³⁻) tidak teroksidasi, maka air teroksidasi: 2H₂O → 4H⁺ + O₂ + 4e⁻.',
      'Anoda reaktif (bukan C, Pt, Au): anoda sendiri teroksidasi dan larut menjadi ion (Cu → Cu²⁺ + 2e⁻).',
      'Penyepuhan: benda yang dilapisi di katoda, logam pelapis di anoda, larutan mengandung ion logam pelapis. Pemurnian tembaga: tembaga kotor di anoda, tembaga murni di katoda.',
      'Industri: logam aktif (Na, Al, Mg) diperoleh dari lelehan. Larutan NaCl menghasilkan Cl₂, H₂, dan NaOH.',
      'Hukum Faraday: mol elektron = i × t / 96.500 (i dalam ampere, t dalam detik). 1 Faraday = 1 mol elektron = 96.500 C.',
      'Massa zat: w = (Ar / valensi) × (i × t / 96.500). Atau hitung dulu mol elektron, bagi dengan elektron per atom/molekul hasil untuk dapat mol zat.',
      'Pada beberapa sel disusun seri, jumlah elektron sama, sehingga mol zat sebanding dengan 1/(elektron per zat).',
      'Elektron yang sama menghasilkan OH⁻ di katoda (mol OH⁻ = mol e⁻ untuk 2H₂O + 2e⁻) atau H⁺ di anoda (mol H⁺ = mol e⁻ untuk 2H₂O → 4H⁺ + O₂ + 4e⁻), dipakai menghitung pH.'
    ],
    examples: [
      { q: 'Elektrolisis larutan CuSO₄ dengan elektroda karbon, arus 5 A selama 1.930 detik. Berapa massa Cu di katoda (Ar Cu = 63,5)?', a: 'Mol elektron = 5 × 1.930 / 96.500 = 0,1. Cu²⁺ + 2e⁻ → Cu, jadi mol Cu = 0,05. Massa = 0,05 × 63,5 = 3,175 g.' },
      { q: 'Tentukan hasil elektrolisis larutan NaCl dengan elektroda C.', a: 'Katoda: 2H₂O + 2e⁻ → H₂ + 2OH⁻ (Na⁺ tidak tereduksi). Anoda: 2Cl⁻ → Cl₂ + 2e⁻. Larutan di sekitar katoda menjadi basa.' }
    ],
    traps: [
      'Menganggap Na⁺ atau Al³⁺ menjadi logam di larutan. Dalam larutan yang tereduksi air.',
      'Lupa memeriksa jenis anoda. Anoda reaktif ikut larut.',
      'Memakai massa langsung tanpa valensi (Al³⁺ butuh 3 elektron per atom).',
      'Menukar katoda dan anoda dari sel volta. Di elektrolisis katoda negatif.',
      'Pola TKA: elektrolisis garam atau penyepuhan dengan arus dan waktu. Tulis reaksi katoda dan anoda dulu, hitung mol elektron, lalu mol zat.'
    ]
  },
  kim8: {
    intro: 'Hidrokarbon adalah senyawa yang hanya tersusun dari karbon dan hidrogen. Bab ini meminta kamu menamai senyawa, mengenali isomer, memprediksi reaksi, dan mengaitkan minyak bumi dengan dampaknya.',
    points: [
      'Atom C punya 4 elektron valensi, dapat membentuk rantai panjang, ikatan tunggal, rangkap dua, dan rangkap tiga. Senyawa organik umumnya kovalen, titik didih rendah, mudah terbakar, larut pelarut nonpolar.',
      'Klasifikasi atom C dalam rantai: primer (mengikat 1 C lain), sekunder (2), tersier (3), kuartener (4).',
      'Alkana: ikatan tunggal, CₙH₂ₙ₊₂. Alkena: ada ikatan rangkap dua, CₙH₂ₙ. Alkuna: ada ikatan rangkap tiga, CₙH₂ₙ₋₂. Sikloalkana: CₙH₂ₙ.',
      'Alkil: metil CH₃–, etil C₂H₅–, propil C₃H₇–, butil C₄H₉–.',
      'Tata nama alkana bercabang: pilih rantai terpanjang, nomori dari ujung yang paling dekat cabang, tulis cabang berurutan alfabet, awalan di/tri/tetra tidak diurutkan. Format: posisi–nama cabang + nama rantai utama (contoh 2,3-dimetilpentana).',
      'Alkena dan alkuna: pilih rantai terpanjang yang mengandung ikatan rangkap, nomori dari ujung terdekat ikatan rangkap, tulis posisi rangkap di depan akhiran (2-butena, 1-pentuna).',
      'Sifat fisik: titik didih naik dengan bertambahnya jumlah C (Mr). Untuk isomer, rantai lurus titik didihnya lebih tinggi daripada yang bercabang.',
      'Pembakaran sempurna menghasilkan CO₂ dan H₂O. Pembakaran tidak sempurna menghasilkan CO atau jelaga (C). CO beracun karena mengikat hemoglobin.',
      'Substitusi (khas alkana): atom H diganti atom lain, contoh CH₄ + Cl₂ → CH₃Cl + HCl (dengan cahaya).',
      'Adisi (khas alkena/alkuna): ikatan rangkap terbuka menerima atom baru (H₂, X₂, HX). Aturan Markovnikov: H dari HX menempel pada C rangkap yang sudah mengikat lebih banyak H.',
      'Eliminasi: terbentuk ikatan rangkap dengan melepas molekul kecil (kebalikan adisi). Aturan Zaitsev: H yang dilepas dari C yang mengikat lebih sedikit H.',
      'Polimerisasi adisi: molekul kecil beradisi menjadi rantai panjang, contoh etena menjadi polietena.',
      'Isomer: rumus molekul sama, struktur beda. Isomer rangka (rantai), isomer posisi (letak ikatan rangkap atau gugus), dan isomer geometri cis–trans (ada pada alkena bila tiap C rangkap mengikat dua gugus yang berbeda).',
      'Jumlah isomer: C₄H₁₀ ada 2, C₅H₁₂ ada 3.',
      'Uji alkena atau alkuna: air bromin berubah dari cokelat menjadi tak berwarna. Hasil pembakaran dialirkan ke air kapur: keruh menandakan CO₂.',
      'Minyak bumi dipisahkan dengan destilasi bertingkat berdasarkan titik didih: gas (C₁–C₄), bensin (C₅–C₁₀), kerosin, solar, pelumas, dan residu (aspal).',
      'Bilangan oktan menyatakan mutu bensin: isooktana = 100, n-heptana = 0. Oktan 92 setara 92% isooktana dan 8% n-heptana. Menaikkan oktan: isomerisasi rantai lurus menjadi bercabang, menambah aromatik, atau aditif antiketukan.',
      'Dampak pembakaran bahan bakar fosil: CO₂ (pemanasan global), CO (racun), SO₂ dan NOx (hujan asam), serta pencemaran air oleh tumpahan minyak.'
    ],
    examples: [
      { q: 'Berapa jumlah atom C pada 4-etil-2-metilheksana?', a: 'Rantai utama heksana = 6 C, etil = 2 C, metil = 1 C. Total = 9 C.' },
      { q: 'Tentukan produk adisi propena dengan HBr.', a: 'Propena CH₃–CH=CH₂. H menempel pada C yang lebih banyak H (ujung =CH₂), Br pada C tengah. Produk 2-bromopropana (Markovnikov).' },
      { q: 'Berapa liter O₂ yang diperlukan untuk membakar sempurna 2 L C₃H₈ pada P dan T sama?', a: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Volume berbanding koefisien, jadi 2 L × 5 = 10 L O₂.' }
    ],
    traps: [
      'Memilih rantai utama yang bukan paling panjang, atau mengabaikan ikatan rangkap saat memilih rantai alkena.',
      'Menomori dari ujung yang salah. Selalu pilih nomor terkecil untuk ikatan rangkap (alkena) atau cabang (alkana).',
      'Menganggap semua alkena punya isomer cis–trans. Perlu dua gugus berbeda pada tiap C rangkap.',
      'Lupa aturan Markovnikov saat adisi HX pada alkena tak simetris.',
      'Pola TKA: infografik minyak bumi atau teks bahan bakar. Cari rumus dan jenis reaksi yang diminta, lalu kaitkan dengan dampak lingkungan.'
    ]
  }
  ,
  utb11: {
    intro: 'Simpulan logis mengajarkan cara menilai benar–salahnya kalimat majemuk dan menarik kesimpulan yang pasti benar dari dua pernyataan. Di UTBK, bab ini muncul sebagai soal penalaran deduktif. Kuncinya: hafal tabel kebenaran sekali, lalu pakai ekuivalensi untuk menyederhanakan.',
    points: [
      'Pernyataan adalah kalimat yang bisa dinilai Benar (B) atau Salah (S). Negasi (ingkaran, ditulis ~p) membalik nilainya.',
      'Konjungsi p ∧ q (kata "dan"): benar hanya jika p dan q sama-sama benar. Selain itu salah.',
      'Disjungsi p ∨ q (kata "atau"): salah hanya jika p dan q sama-sama salah. Selain itu benar.',
      'Implikasi p ⇒ q ("jika p maka q"): salah hanya jika p benar dan q salah. Kalau p salah, implikasi selalu benar.',
      'Biimplikasi p ⇔ q ("p jika dan hanya jika q"): benar jika p dan q bernilai sama (sama-sama B atau sama-sama S).',
      'Tiga bentuk dari p ⇒ q: konvers q ⇒ p, invers ~p ⇒ ~q, kontraposisi ~q ⇒ ~p. Hanya kontraposisi yang ekuivalen (nilai kebenarannya sama) dengan p ⇒ q. Konvers dan invers ekuivalen satu sama lain, tetapi tidak dengan implikasinya.',
      'Ingkaran: ~(p ∧ q) ≡ ~p ∨ ~q dan ~(p ∨ q) ≡ ~p ∧ ~q (De Morgan: "dan" jadi "atau", tiap bagian diingkar).',
      'Ingkaran implikasi: ~(p ⇒ q) ≡ p ∧ ~q. Implikasi juga bisa ditulis p ⇒ q ≡ ~p ∨ q.',
      'Biimplikasi p ⇔ q ≡ (p ⇒ q) ∧ (q ⇒ p). Ingkarannya ~(p ⇔ q) ≡ (p ∧ ~q) ∨ (~p ∧ q).',
      'Ingkaran kuantor: "semua" diingkar menjadi "ada yang tidak", dan "ada" diingkar menjadi "tidak ada" (atau "semua tidak").',
      'Tautologi: bernilai benar untuk semua kemungkinan (contoh p ∨ ~p). Kontradiksi: selalu salah (contoh p ∧ ~p).',
      'Modus ponens: p ⇒ q dan p benar, maka q. Modus tollens: p ⇒ q dan ~q, maka ~p. Silogisme: p ⇒ q dan q ⇒ r, maka p ⇒ r.'
    ],
    examples: [
      { q: 'Tentukan ingkaran dari "Jika Adiva belajar rutin, maka nilainya naik".', a: 'Ingkaran p ⇒ q adalah p ∧ ~q: "Adiva belajar rutin dan nilainya tidak naik".' },
      { q: 'Premis 1: Jika rapat selesai, maka ruang dikunci. Premis 2: Jika ruang dikunci, maka lampu dimatikan. Apa kesimpulannya?', a: 'Pola silogisme: Jika rapat selesai, maka lampu dimatikan.' },
      { q: 'Premis 1: Jika hujan, maka lapangan basah. Premis 2: Lapangan tidak basah. Apa kesimpulannya?', a: 'Modus tollens: hari tidak hujan.' }
    ],
    traps: [
      'Menganggap konvers atau invers sama nilainya dengan implikasi. Hanya kontraposisi yang pasti sama.',
      'Mengingkar "jika p maka q" dengan "jika p maka tidak q". Yang benar adalah "p dan tidak q".',
      'Menarik kesimpulan dari q benar pada p ⇒ q (misalnya "jalan basah, maka hujan"). Itu tidak sah, karena jalan bisa basah oleh sebab lain.',
      'Lupa bahwa implikasi dengan p salah selalu benar (contoh "jika 2 = 3 maka 5 = 7" tetap benar).',
      'Saat mengingkar "dan"/"atau", lupa mengganti kata hubungnya sekaligus mengingkar kedua bagian.',
      'Pola UTBK: dua premis lalu lima pilihan kesimpulan. Ubah ke simbol, cocokkan dengan modus ponens, tollens, atau silogisme, lalu cek pilihan satu per satu.'
    ]
  },
  utb12: {
    intro: 'Penalaran analitik menguji kemampuan menarik kesimpulan dari bacaan yang berisi aturan atau batasan, misalnya urutan tampil, posisi duduk, atau pemilihan anggota tim. Semua informasi ada di soal, jadi kuncinya rapi mencatat batasan dan teliti saat menggabungkannya.',
    points: [
      'Susunan soal: pengantar (masalah yang dibahas), petunjuk atau batasan (syarat yang harus dipatuhi), dan pertanyaan.',
      'Batasan bisa berupa poin bernomor atau paragraf biasa. Ubah menjadi catatan singkat atau simbol sebelum mengerjakan.',
      'Kerjakan dari batasan yang paling pasti: yang menyebut posisi tepat, kata "wajib", "tidak boleh", atau "harus bersama". Batasan bersyarat ("jika … maka …") dipakai belakangan.',
      'Pakai alat bantu: garis urutan untuk soal "sebelum/sesudah", tabel untuk menempatkan orang ke posisi, dan daftar "wajib / dilarang / berpasangan" untuk soal memilih.',
      'Untuk soal pilihan jawaban, uji tiap pilihan terhadap satu batasan sekaligus dan coret yang melanggar. Pilihan yang tersisa adalah jawaban.',
      'Waspadai kata "pasti" (berlaku di semua kemungkinan), "mungkin/dapat" (berlaku di sebagian kemungkinan), dan "tidak mungkin".',
      'Informasi tambahan yang muncul di dalam pertanyaan (misalnya "jika X tampil pertama") hanya berlaku untuk soal itu, tidak untuk soal lain pada bacaan yang sama.',
      'Membaca memindai (scanning): cari cepat nama, angka, dan kata kunci seperti "sebelum", "setelah", "tepat", "tidak boleh", tanpa membaca pelan-pelan semua kata. Latih supaya hemat waktu.'
    ],
    examples: [
      { q: 'Lima siswa (Rani, Dito, Mira, Tio, Wulan) tampil satu per satu. Dito tampil setelah Mira. Mira tampil setelah Rani. Tio tampil setelah Dito. Wulan tampil sebelum Rani. Siapa yang tampil ketiga?', a: 'Susun garis urutan: Wulan < Rani < Mira < Dito < Tio. Yang ketiga adalah Mira.' },
      { q: 'Tiga topping dipilih dari cokelat, keju, stroberi, kacang, kelapa. (1) Jika stroberi dipakai, keju dipakai. (2) Cokelat dan kacang tidak boleh bersama. (3) Kelapa wajib dipakai. Apakah kelapa, stroberi, cokelat boleh?', a: 'Tidak. Stroberi dipakai, tetapi keju tidak, sehingga melanggar batasan (1).' }
    ],
    traps: [
      'Terburu-buru menjawab sebelum semua batasan terpakai. Cek jawaban terhadap setiap batasan.',
      'Membaca "A setelah B" sebagai "A langsung setelah B". Kata "tepat" atau "langsung" yang berarti bersebelahan.',
      'Memakai informasi tambahan dari satu soal untuk soal berikutnya.',
      'Menyamakan "mungkin" dengan "pasti".',
      'Pola UTBK: satu bacaan, 2–4 pertanyaan. Gambar tabel atau garis urutan sekali, lalu pakai ulang untuk semua pertanyaan.'
    ]
  }
};

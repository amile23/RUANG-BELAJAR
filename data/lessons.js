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
  ,
  utb13: {
    intro: 'Soal kesesuaian pernyataan meminta kamu memilih pernyataan yang cocok dengan informasi dalam teks, tabel, atau diagram. Semua jawaban ada di bahan yang diberikan. Jangan memakai pengetahuan sendiri, cukup cocokkan pilihan dengan data.',
    points: [
      'Informasi eksplisit: tertulis langsung dalam bahan. Informasi implisit: tidak tertulis, tetapi bisa disimpulkan dengan pasti dari yang tertulis.',
      'Teks: baca pertanyaannya dulu, ambil kata kunci tiap pilihan, lalu cari kalimat pendukung di teks. Pilihan benar punya dasar kalimat, pilihan salah tidak.',
      'Jebakan di pilihan teks: menambah informasi yang tidak ada, membalik sebab dan akibat, dan kata terlalu ekstrem seperti "semua", "selalu", "hanya", "tidak pernah".',
      'Tabel: baca judul, satuan, dan kepala kolom dulu. Kenaikan atau penurunan = nilai baru − nilai lama. Pastikan membandingkan baris dan kolom yang tepat.',
      'Diagram garis: lihat arah tren (naik, turun, datar) dan titik tertingginya. Diagram batang: bandingkan tinggi atau panjang batang dan baca label nilainya. Diagram lingkaran: tiap bagian adalah porsi dari total.',
      'Rumus yang sering dipakai: rata-rata = jumlah data / banyak data. Persentase bagian = bagian / total × 100%. Sudut sektor = bagian / total × 360°. Sisa = 100% − bagian yang diketahui.',
      'Bedakan "persen" dan "poin persentase". Naik dari 60% ke 75% adalah naik 15 poin persentase (atau 25% relatif terhadap 60%).',
      'Perhatikan skala sumbu pada diagram. Sumbu yang tidak mulai dari nol membuat selisih tampak lebih besar daripada kenyataan.'
    ],
    examples: [
      { q: 'Diagram lingkaran menunjukkan 200 peserta lomba: Puisi 40, Pidato 60, Cerpen 25, Debat 75. Berapa persen peserta Debat?', a: '75 / 200 × 100% = 37,5%.' },
      { q: 'Nilai rata-rata kelas tiap bulan: Jan 70, Feb 74, Mar 72, Apr 80. Pada bulan apa kenaikannya paling besar?', a: 'Selisih: Feb +4, Mar −2, Apr +8. Kenaikan terbesar terjadi pada April.' }
    ],
    traps: [
      'Memilih pernyataan yang menurutmu benar di dunia nyata padahal tidak ada di bahan soal.',
      'Terkecoh kata "semua", "selalu", dan "hanya". Cek apakah teks benar-benar mengatakannya.',
      'Salah membaca satuan (ribu, juta, persen) atau salah membandingkan baris tahun.',
      'Menjawab persentase dari total yang salah. Pastikan penyebutnya total keseluruhan.',
      'Pola UTBK: satu teks atau grafik, lalu empat sampai lima pernyataan. Coret satu per satu pernyataan yang tidak punya dasar di bahan.'
    ]
  },
  utb14: {
    intro: 'Penalaran kuantitatif pertama: bilangan berpangkat, pecahan, dan geometri dasar. Ini fondasi untuk hampir semua soal hitungan UTBK, TKA Matematika, dan ulangan di sekolah.',
    points: [
      'Bilangan berpangkat: aⁿ berarti a dikali dirinya sebanyak n kali.',
      'Sifat pangkat: aᵐ × aⁿ = aᵐ⁺ⁿ. aᵐ ÷ aⁿ = aᵐ⁻ⁿ. (aᵐ)ⁿ = aᵐˣⁿ. (ab)ᵐ = aᵐbᵐ. (a/b)ᵐ = aᵐ/bᵐ.',
      'a⁰ = 1 (a tidak nol). a⁻ᵐ = 1 / aᵐ. Pangkat negatif berarti dibalik, bukan hasilnya negatif.',
      'Membandingkan pecahan positif: penyebut sama, pembilang besar berarti pecahan lebih besar. Pembilang sama, penyebut besar berarti pecahan lebih kecil. Jika keduanya beda, samakan penyebut atau bandingkan perkalian silang.',
      'Pecahan negatif: bandingkan dulu bentuk positifnya. Makin besar pecahan positifnya, makin kecil pecahan negatifnya.',
      'Operasi pecahan: a/c + b/d = (ad + bc)/cd. Perkalian: pembilang × pembilang, penyebut × penyebut. Pembagian: kalikan dengan kebalikan pecahan pembagi.',
      'Persegi: K = 4s dan L = s². Persegi panjang: K = 2(p + l) dan L = p × l. Segitiga: K = a + b + c dan L = ½ × alas × tinggi (tinggi tegak lurus alas).',
      'Lingkaran: K = πd = 2πr dan L = πr². Pakai π = 22/7 jika jari-jari kelipatan 7, selain itu π = 3,14.'
    ],
    examples: [
      { q: 'Sederhanakan 3² × 3⁴ ÷ 3⁵.', a: 'Pangkat dijumlahkan lalu dikurangi: 2 + 4 − 5 = 1. Hasilnya 3¹ = 3.' },
      { q: 'Mana yang lebih besar, 3/7 atau 5/12?', a: 'Samakan penyebut 84: 3/7 = 36/84 dan 5/12 = 35/84. Jadi 3/7 lebih besar.' },
      { q: 'Hitung luas lingkaran berjari-jari 14 cm (π = 22/7).', a: 'L = 22/7 × 14 × 14 = 22 × 2 × 14 = 616 cm².' }
    ],
    traps: [
      'Menjumlahkan pangkat padahal bilangan pokoknya berbeda (2³ × 3² tidak sama dengan 6⁵).',
      'Menganggap a⁻ᵐ bernilai negatif. Hasilnya tetap positif, hanya berupa kebalikan.',
      'Membandingkan pecahan dengan hanya melihat penyebutnya yang besar. Pecahan itu belum tentu lebih besar.',
      'Menjumlahkan pecahan dengan menjumlahkan penyebutnya.',
      'Memakai sisi miring sebagai tinggi segitiga. Tinggi harus tegak lurus dengan alas.',
      'Pola UTBK: soal cerita pendek dengan angka yang bisa disederhanakan. Cari sifat pangkat atau faktor persekutuan sebelum menghitung panjang-panjang.'
    ]
  },
  utb15: {
    intro: 'Penalaran kuantitatif kedua: aritmetika sosial (untung rugi, bunga, diskon, pajak), perbandingan senilai dan berbalik nilai, serta skala. Soalnya berupa cerita sehari-hari yang hanya butuh persentase dan perbandingan.',
    points: [
      'Untung = harga jual − harga beli (Hj > Hb). Rugi = harga beli − harga jual (Hb > Hj). Impas jika Hj = Hb.',
      '% untung = untung / harga beli × 100%. % rugi = rugi / harga beli × 100%. Penyebutnya selalu harga beli (modal).',
      'Jika untung p%, maka Hj = (100 + p)% × Hb. Jika rugi p%, maka Hj = (100 − p)% × Hb.',
      'Bunga tunggal: bunga = M₀ × %B × n. Total = M₀(1 + %B × n). Sesuaikan satuan n dengan suku bunga (per tahun berarti n dalam tahun, 9 bulan = 9/12 tahun).',
      'Diskon: besar diskon = %D × harga awal. Harga setelah diskon = (100% − %D) × harga awal. Diskon bertingkat dihitung berurutan, bukan dijumlahkan.',
      'Pajak: PPN = %PPN × harga sebelum pajak. Harga yang dibayar = (100 + %PPN)% × harga. Pajak UMKM = % pajak × omzet (omzet = jumlah hasil penjualan).',
      'Perbandingan senilai: dua besaran naik atau turun searah, x₁/y₁ = x₂/y₂. Grafiknya garis lurus yang melalui titik (0, 0).',
      'Perbandingan berbalik nilai: satu naik, yang lain turun, x₁ × y₁ = x₂ × y₂. Grafiknya melengkung dan tidak melalui (0, 0).',
      'Skala = jarak pada peta / jarak sebenarnya (satuan harus sama). Skala 1 : 500.000 berarti 1 cm pada peta mewakili 500.000 cm = 5 km.',
      'Skala termometer: C : R : (F − 32) : (K − 273) = 5 : 4 : 9 : 5.'
    ],
    examples: [
      { q: 'Barang dibeli Rp80.000 lalu dijual Rp92.000. Berapa persen untungnya?', a: 'Untung 12.000. % untung = 12.000 / 80.000 × 100% = 15%.' },
      { q: 'Harga baju Rp240.000 diberi diskon 20% lalu diskon tambahan 10%. Berapa harga akhir?', a: 'Setelah 20%: 240.000 × 0,8 = 192.000. Lalu 192.000 × 0,9 = 172.800.' },
      { q: '12 pekerja menyelesaikan proyek dalam 15 hari. Berapa hari jika 9 pekerja?', a: 'Berbalik nilai: 12 × 15 = 9 × h, h = 20 hari.' }
    ],
    traps: [
      'Menghitung persentase untung atau rugi dari harga jual. Dasarnya harga beli.',
      'Menjumlahkan diskon bertingkat (20% + 10% = 30%). Hasilnya tidak sama.',
      'Salah satuan pada bunga: suku bunga per tahun dipakai dengan lama dalam bulan.',
      'Menyamakan perbandingan senilai dengan berbalik nilai. Tanyakan: kalau satu naik, yang lain naik atau turun?',
      'Lupa mengubah satuan pada skala (cm ke km).',
      'Pola UTBK: cerita belanja, tabungan, atau peta. Tulis diketahui dan ditanya, tentukan jenis perbandingan, baru hitung.'
    ]
  }
  ,
  utb16: {
    intro: 'Pembentukan kata dan frasa adalah bagian tata bahasa yang sering keluar di PBM UTBK, TKA Bahasa Indonesia, dan ulangan sekolah. Intinya: tiap imbuhan punya fungsi dan makna, dan frasa adalah gabungan kata yang belum berupa kalimat.',
    points: [
      'Imbuhan (afiks) ditambahkan pada kata dasar. Awalan (prefiks): meng-, ber-, ter-, di-, pe-, per-. Akhiran (sufiks): -an, -kan, -i. Gabungan awalan dan akhiran (konfiks): ke-an, pe-an, per-an, ber-an. Ada juga gabungan me-kan dan me-i.',
      'Awalan ber- dapat bermakna mempunyai (berambisi), memakai (bersepatu), melakukan (bekerja), dan saling (berpelukan).',
      'Awalan meng- (me-) bermakna melakukan perbuatan (mengusir), membuat jadi, atau menghasilkan. Bentuknya berubah menurut huruf awal kata dasar: me- (l, m, n, r, w, y), mem- (b, p, f, v), men- (d, c, j, t, z), meng- (vokal, g, h, k), meny- (s), menge- (kata satu suku).',
      'Huruf k, p, t, s di awal kata dasar luluh setelah me-: kirim → mengirim, pukul → memukul, tulis → menulis, sapu → menyapu.',
      'Aturan lesap awalan meng- dan peng-: huruf k, t, s, dan p di awal kata dasar lesap bila diikuti huruf vokal dan kata dasarnya lebih dari satu suku kata. Contoh: meng- + kalah jadi mengalah, peng- + tadah jadi penadah.',
      'Kalau k, t, s, atau p diikuti huruf konsonan (kr, pl, tr, dan sejenisnya), huruf pertama tidak lesap. Contoh: meng- + plester jadi memplester, peng- + kritik jadi pengkritik.',
      'Catatan di slide-mu: untuk kata dasar yang diawali pr (produksi, prakarsa), huruf p tetap lesap setelah peng- (pemroduksi, pemrakarsa). Jangan dihafal dulu sebelum aturan utama di atas kuat; bentuk ini jarang muncul dan penulisannya bervariasi di kamus.',
      'Tambahan umum (halaman 6 sampai 8 dari 13 tidak ada di PDF-mu, jadi bagian ini kuisi dari aturan umum): kata dasar satu suku kata mendapat penge-/menge-: cat jadi mengecat dan pengecat, tik jadi mengetik, bom jadi mengebom. Inilah mengapa lesap k, t, s, p hanya berlaku untuk kata dasar lebih dari satu suku kata.',
      'Tambahan umum: awalan ber- berubah menjadi be- bila kata dasar diawali r atau suku pertamanya berakhir er (bekerja, beternak, berenang dari be- + renang), dan menjadi bel- pada belajar. Awalan ter- dan per- mengikuti pola yang sama (terasa, pelajar).',
      'Awalan ter- bermakna tidak sengaja (terjatuh), paling (terbesar), dapat di- (terbaca), atau sudah di- (tertutup).',
      'Akhiran -an bermakna hasil (catatan), alat (timbangan), atau sesuatu yang di- (makanan).',
      'Akhiran -kan bermakna untuk atau melakukan bagi orang lain (membelikan adik buku) dan membuat jadi (menidurkan). Akhiran -i bermakna memberikan atau memberi sesuatu (menyelimuti), atau melakukan berulang (memukuli).',
      'Konfiks ke-an bermakna terlalu (kekecilan), keadaan (kesehatan), atau mengalami hal yang tidak menyenangkan (kehujanan). Pe-an bermakna proses (pembersihan). Per-an bermakna tempat atau hal (perkebunan). Me-kan bermakna membuat jadi (memalukan: membuat menjadi malu).',
      'Frasa: gabungan dua kata atau lebih yang tidak berpredikat (nonpredikatif), memiliki satu makna, dan mengisi satu fungsi dalam kalimat (subjek, predikat, objek, pelengkap, atau keterangan).',
      'Frasa dibedakan menurut jenis kata inti: nominal (gadis cantik, inti kata benda), verbal (hanya bercanda, inti kata kerja), adjektival (tidak gelisah, inti kata sifat), numeral (tiga ekor, inti kata bilangan), pronominal (kita berdua), adverbial, dan preposisional (diawali kata depan: di sawah, dengan segera).',
      'Inti adalah bagian utama frasa, pewatas adalah penjelasnya. Pada "rumah besar", inti rumah dan pewatas besar.',
      'Berdasarkan hubungan unsurnya, frasa koordinatif menghubungkan unsur setara (ayah dan ibu), frasa atributif terdiri dari inti dan pewatas (buku baru), dan frasa apositif menjelaskan unsur lain (Pak Budi, guru kami).'
    ],
    examples: [
      { q: 'Bentuk kata dari me- + kirim, me- + pukul, me- + sapu.', a: 'Huruf awal k, p, s luluh: mengirim, memukul, menyapu.' },
      { q: 'Apa makna imbuhan pada kata "kehujanan" dan "pembersihan"?', a: 'ke-an pada kehujanan berarti mengalami (terkena hujan). pe-an pada pembersihan berarti proses membersihkan.' },
      { q: 'Tentukan jenis frasa "sedang membaca" dan "dua puluh orang".', a: '"Sedang membaca" frasa verbal (inti membaca, pewatas sedang). "Dua puluh orang" frasa numeral.' }
    ],
    traps: [
      'Tidak meluluhkan huruf k, p, t, s (menkirim, mempukul). Bentuk yang benar mengirim, memukul.',
      'Menganggap semua kalimat pendek sebagai frasa. Jika ada subjek dan predikat (Ibu memasak), itu klausa atau kalimat, bukan frasa.',
      'Menyamakan -an dengan -kan atau -i. Cari makna dari imbuhannya, bukan dari bunyinya.',
      'Menentukan jenis frasa dari pewatas, bukan dari inti. Lihat jenis kata inti dulu.',
      'Pola UTBK: kalimat dengan kata berimbuhan yang digarisbawahi, lalu pertanyaan makna imbuhan atau jenis frasa. Uraikan kata ke kata dasar + imbuhan dulu.'
    ]
  },
  utb17: {
    intro: 'Bab makna kata membahas jenis makna dan hubungan antarmakna (sinonim, antonim, hipernim–hiponim). Soalnya sering berupa kata yang diganti, dilawankan, atau diklasifikasikan. Kuncinya: pahami arti kata dulu, baru tentukan hubungannya.',
    points: [
      'Makna leksikal: makna dasar sebuah kata, seperti dalam kamus ("makan" = memasukkan makanan ke mulut lalu mengunyah).',
      'Makna gramatikal: makna yang muncul setelah kata mendapat imbuhan atau diulang, atau berada dalam kalimat ("makanan" = sesuatu yang dimakan, "penulis" = orang yang menulis).',
      'Makna denotasi: makna sebenarnya (apa adanya, dapat diamati). Makna konotasi: makna tambahan yang berkaitan dengan nilai rasa atau bukan arti sebenarnya ("makan uang kas" = menggunakan uang yang bukan haknya).',
      'Makna asosiasi: makna lambang atau perumpamaan, yaitu kata dihubungkan dengan hal lain (putih melambangkan kesucian, merah melambangkan keberanian).',
      'Sinonim: kata-kata yang maknanya sama atau mirip (sukar = sulit, bertemu = berjumpa). Dua sinonim dapat saling menggantikan dalam kalimat, tetapi tidak selalu cocok dalam semua konteks.',
      'Antonim: kata-kata yang maknanya berlawanan (tinggi × rendah, bersih × kotor, hemat × boros). Untuk mencari antonim, pastikan dulu arti kata.',
      'Hipernim: kata yang maknanya lebih umum (hewan, bunga). Hiponim: kata yang maknanya lebih khusus yang termasuk dalam hipernim (kucing, anjing, kuda adalah hiponim dari hewan).',
      'Bedakan hiponimi dengan hubungan bagian–keseluruhan (meronimi). Daun adalah bagian dari pohon, bukan jenis pohon, jadi bukan hiponim.',
      'Polisemi: satu kata dengan beberapa makna yang masih berhubungan (kepala: bagian tubuh, kepala surat, kepala sekolah). Homonim: kata yang bunyi atau tulisannya sama tetapi maknanya tidak berhubungan (bisa = racun, bisa = dapat).'
    ],
    examples: [
      { q: 'Tentukan jenis makna kata "kepala" pada "Ayahnya menjadi kepala sekolah".', a: 'Bukan bagian tubuh. Itu makna lain yang masih berhubungan (pemimpin), jadi contoh polisemi.' },
      { q: 'Apa hubungan antara "kendaraan" dan "sepeda"?', a: 'Kendaraan lebih umum (hipernim), sepeda lebih khusus (hiponim).' },
      { q: 'Apakah "bijaksana" dan "arif" bersinonim?', a: 'Ya, keduanya bermakna mampu mengambil keputusan dengan pertimbangan yang baik.' }
    ],
    traps: [
      'Mengira sinonim selalu bisa menggantikan di semua kalimat. Cek apakah kalimatnya tetap wajar.',
      'Menjawab antonim dari kata yang salah arti. Pastikan arti kata dalam kalimat dulu.',
      'Menukar hipernim dan hiponim. Hipernim lebih umum, hiponim lebih khusus.',
      'Mencampur denotasi dan konotasi. Denotasi berarti makna sebenarnya, konotasi punya nilai rasa atau bermakna kiasan.',
      'Pola UTBK: sinonim, antonim, atau makna kata dalam konteks kalimat. Coba ganti kata dengan pilihan jawaban dan cek apakah artinya tetap sama.'
    ]
  }
  ,
  utb18: {
    intro: 'Struktur kalimat adalah dasar semua soal PBM tentang kalimat. Kalau kamu bisa menemukan subjek, predikat, objek, pelengkap, dan keterangan, soal kalimat efektif dan variasi kalimat jadi jauh lebih mudah.',
    points: [
      'Kalimat minimal punya subjek (S) dan predikat (P). Objek (O), pelengkap (Pel), dan keterangan (K) bersifat tambahan.',
      'Subjek: hal yang dibicarakan. Biasanya kata benda atau frasa benda, dan tidak diawali kata depan. Cara mencari: tanyakan "siapa atau apa yang …?" pada predikat.',
      'Predikat: bagian yang menerangkan subjek. Biasanya kata kerja, tetapi bisa juga kata sifat, kata benda, atau bilangan (Adik sakit. Kakaknya mahasiswa.).',
      'Objek: muncul setelah predikat berupa kata kerja aktif transitif, tidak diawali kata depan, dan dapat menjadi subjek ketika kalimat dipasifkan.',
      'Pelengkap: melengkapi predikat dan biasanya muncul bersama verba intransitif, verba pasif, atau kopula (adalah, ialah, merupakan). Pelengkap tidak bisa menjadi subjek kalimat pasif.',
      'Keterangan: keterangan tempat, waktu, cara, tujuan, sebab, dan sebagainya. Posisinya bisa berpindah dan sering diawali kata depan (di, ke, pada, dengan, untuk) atau kata hubung.',
      'Pola inti S + P + O berarti predikatnya verba aktif transitif. Pola S + P (+ Pel/K) berarti verba intransitif, kopula, atau pasif.',
      'Kalimat aktif transitif: punya objek dan dapat dipasifkan (Kakak membaca buku → Buku dibaca kakak). Kalimat aktif intransitif: tidak punya objek dan tidak dapat dipasifkan (Bayi itu menangis).',
      'Kalimat pasif: subjek dikenai perbuatan. Ciri: awalan di-, ter-, atau ke-an, pelaku dapat muncul dengan kata oleh. Objek kalimat aktif menjadi subjek kalimat pasif.',
      'Variasi kalimat yang benar harus tetap mempertahankan makna, mengikuti kaidah bahasa, dan memperhatikan subjek serta predikat.',
      'Cara membuat variasi: membuat kalimat inversi (P S, misalnya "Indah sekali pemandangan itu"), memindahkan keterangan ke awal atau akhir, atau mengubah aktif menjadi pasif.',
      'Kata depan yang menyelip setelah verba transitif mengubah objek menjadi keterangan dan membuat kalimat kehilangan objek (Mereka membahas tentang masalah itu). Hapus kata depannya.'
    ],
    examples: [
      { q: 'Tentukan S, P, O, K pada "Adik membaca komik di kamar".', a: 'Adik = S, membaca = P, komik = O, di kamar = K.' },
      { q: 'Ubah "Petani menanam padi" menjadi kalimat pasif.', a: '"Padi ditanam petani." Objek (padi) menjadi subjek.' },
      { q: 'Mengapa "Dalam rapat itu membahas anggaran" salah?', a: 'Keterangan "dalam rapat itu" diawali kata depan sehingga tidak bisa menjadi subjek. Perbaikan: "Rapat itu membahas anggaran" atau "Dalam rapat itu dibahas anggaran".' }
    ],
    traps: [
      'Menganggap kata benda setelah kata depan sebagai subjek. Subjek tidak boleh diawali kata depan.',
      'Menganggap semua kata kerja bisa dipasifkan. Hanya verba transitif.',
      'Memberi objek pada verba intransitif atau kopula. "Ibu adalah guru" memiliki pelengkap, bukan objek.',
      'Salah mengubah aktif ke pasif karena lupa menukar posisi S dan O.',
      'Pola UTBK: kalimat dengan bagian digarisbawahi lalu pertanyaan fungsinya, atau kalimat yang tidak punya subjek atau objek. Cari predikat dulu, baru subjek dan objeknya.'
    ]
  },
  utb19: {
    intro: 'Kalimat efektif adalah kalimat yang menyampaikan gagasan dengan tepat dan mudah dipahami. Soal PBM biasanya meminta memilih kalimat yang paling efektif atau memperbaiki kalimat yang salah. Cek bertahap: struktur, logika, kesejajaran, kehematan, kecermatan.',
    points: [
      'Kelengkapan struktur: kalimat minimal punya subjek dan predikat, dan punya objek bila predikatnya verba aktif transitif.',
      'Kalimat sering kehilangan subjek karena diawali kata depan (Di sekolah itu membuka kelas baru) dan kehilangan predikat karena subjek diperpanjang dengan "yang" (Para siswa yang berlatih keras itu).',
      'Kelogisan: informasi harus masuk akal. Penyebab ketidaklogisan adalah salah pilihan kata (mempersingkat biaya, seharusnya menekan biaya) atau hubungan subjek dan predikat yang salah.',
      'Jika anak kalimat tidak punya subjek, subjeknya mengikuti klausa induk. Bila itu menjadi tidak logis, tulis subjek anak kalimat atau ubah induknya menjadi pasif. Contoh: "Karena terlambat, Dani dihukum guru."',
      'Kesejajaran: bentuk kata dan imbuhan dalam rincian harus sama dan bermakna sama. Kata kerja dirangkai kata kerja (menambah, melatih, meningkatkan), kata benda dirangkai kata benda.',
      'Imbuhan harus bermakna sama: pendidikan (peng-an, proses) sejajar dengan pelatihan (peng-an, proses), bukan dengan latihan (-an, hasil).',
      'Kehematan: hindari kata bersinonim dalam satu kalimat (agar supaya, hanya … saja), pleonasme atau kata tambahan berlebih (naik ke atas, sangat … sekali), dan reduplikasi yang mengulang makna jamak (para guru-guru, banyak buku-buku).',
      'Kecermatan: kalimat tidak boleh multitafsir (ambigu), informasinya tepat, dan mudah dipahami.',
      'Ambigu biasanya muncul pada frasa yang bisa diterangkan dua cara, misalnya "Rumah dosen yang tua itu dijual": yang tua rumahnya atau dosennya?',
      'Tanda baca juga menentukan makna. Koma dapat memisahkan keterangan dari subjek: "Di dapur, ibu memasak" berbeda dengan "Di dapur ibu memasak".',
      'Urutan cek cepat untuk soal: (1) cari S dan P, (2) lihat kata yang salah makna, (3) cek rincian sejajar, (4) coret kata mubazir, (5) cek ambigu dan tanda baca.'
    ],
    examples: [
      { q: 'Perbaiki: "Kegiatan ini bertujuan menambah wawasan, melatih keberanian, dan peningkatan kerja sama."', a: '"… dan meningkatkan kerja sama." Semua rincian berupa verba.' },
      { q: 'Perbaiki: "Para guru-guru menghadiri rapat."', a: '"Para guru menghadiri rapat." Kata para sudah bermakna jamak.' },
      { q: 'Perbaiki: "Pemandangan itu sangat indah sekali."', a: '"Pemandangan itu sangat indah" atau "indah sekali". Sangat dan sekali sama-sama penguat, sehingga mubazir.' }
    ],
    traps: [
      'Memilih kalimat yang paling panjang karena terlihat lengkap. Kalimat efektif justru hemat.',
      'Mengira kata "para" boleh dipakai dengan kata ulang.',
      'Lupa mengecek subjek ketika kalimat diawali kata depan.',
      'Mencampur bentuk kata benda dan kata kerja dalam satu rincian.',
      'Mengabaikan koma. Satu koma bisa mengubah siapa yang melakukan sesuatu.',
      'Pola UTBK: tiga atau empat kalimat dengan satu yang efektif, atau satu kalimat dengan bagian yang diperbaiki. Eliminasi satu per satu berdasarkan lima kriteria di atas.'
    ]
  }
  ,
  utb20: {
    intro: 'Soal wacana di UTBK biasanya menanyakan ide pokok, simpulan, tujuan penulis, atau keberpihakan penulis. Semuanya berangkat dari satu kemampuan: menemukan inti teks lalu membaca arah penulis.',
    points: [
      'Ide pokok adalah inti permasalahan dalam sebuah paragraf. Sebutan lain: gagasan utama, gagasan pokok, ide utama, pikiran utama, pokok pikiran, dan inti paragraf.',
      'Ide pokok ada di kalimat utama, yaitu kalimat yang berisi informasi umum. Kalimat lainnya adalah kalimat penjelas.',
      'Kalimat penjelas berfungsi menjelaskan kalimat utama. Cirinya: berupa pemerincian, contoh, data atau bukti, dan bersifat khusus.',
      'Posisi kalimat utama: di awal paragraf (deduktif), di akhir (induktif), di awal dan akhir (campuran), di tengah, atau menyebar. Pada paragraf menyebar tidak ada satu kalimat utama, jadi ide pokok harus disimpulkan dari seluruh kalimat.',
      'Cara cepat mencari ide pokok: baca paragraf dengan cermat, cari kata kunci yang sering muncul, lalu pilih kalimat umum yang dijelaskan kalimat lainnya.',
      'Simpulan adalah pendapat akhir dari sebuah teks atau kutipan. Penandanya konjungsi seperti jadi, oleh karena itu, oleh sebab itu, dan dengan demikian.',
      'Langkah menentukan simpulan: baca teks dengan cermat, perhatikan kata kunci, tentukan ide pokok, lalu rumuskan simpulan berdasarkan ide pokok. Simpulan tidak boleh memuat informasi baru yang tidak ada di teks.',
      'Tujuan penulis adalah maksud yang ingin disampaikan penulis dalam teks. Untuk mengetahuinya, pahami ide pokok dan jenis teks.',
      'Jenis teks dan tujuannya: deskripsi (memberi gambaran suatu objek), narasi (menceritakan peristiwa), persuasif (membujuk atau memengaruhi pembaca), argumentasi (memberi bukti dan meyakinkan pembaca), eksposisi (menyampaikan informasi).',
      'Keberpihakan penulis adalah kecenderungan penulis mendukung pihak atau hal yang dibahas. Untuk memahaminya diperlukan tiga hal: ide pokok, jenis teks, dan kata kunci.',
      'Petunjuk keberpihakan: pilihan kata bernilai positif atau negatif, kata ajakan atau saran (hendaknya, patut, mari), serta data yang hanya mendukung satu pihak. Teks yang memaparkan dua sisi secara seimbang cenderung netral.'
    ],
    examples: [
      { q: 'Paragraf: "Membaca sebelum tidur memberi banyak manfaat. Pikiran menjadi lebih tenang. Kebiasaan ini menambah kosakata. Tidur pun lebih nyenyak." Apa ide pokoknya?', a: 'Kalimat pertama (umum, dijelaskan kalimat lain): membaca sebelum tidur memberi banyak manfaat.' },
      { q: 'Teks berisi ajakan "Mari hemat air mulai dari rumah". Apa jenis dan tujuannya?', a: 'Teks persuasif, tujuannya membujuk atau memengaruhi pembaca.' },
      { q: 'Paragraf memuji sebuah program dan menyarankan agar dilanjutkan. Bagaimana keberpihakan penulisnya?', a: 'Mendukung program tersebut (kata bernilai positif dan ada saran melanjutkan).' }
    ],
    traps: [
      'Memilih kalimat yang berisi contoh atau data sebagai ide pokok. Itu kalimat penjelas.',
      'Mengambil simpulan yang menambah informasi baru di luar teks.',
      'Menyamakan teks persuasif dengan argumentasi. Persuasif membujuk dengan ajakan, argumentasi meyakinkan dengan bukti.',
      'Menebak keberpihakan dari topik, bukan dari pilihan kata dan arah argumen penulis.',
      'Pola UTBK: paragraf pendek, lalu pertanyaan ide pokok atau simpulan. Baca pertanyaannya dulu, lalu cari kata kunci yang sering muncul.'
    ]
  },
  utb21: {
    intro: 'Analogi menguji kemampuan melihat hubungan antara dua kata, lalu menerapkan hubungan yang sama pada pasangan kata lain. Kuncinya bukan menghafal kata, tetapi menentukan jenis hubungannya.',
    points: [
      'Analogi adalah persamaan atau persesuaian antara dua hal yang berlainan. Soal analogi mengukur kemampuan mengetahui hubungan antara dua kata atau lebih. Bentuk soalnya: A : B = C : ?',
      'Tiga hal yang diperlukan: memahami makna kata, fungsi kata, dan hubungan antarkata. Logika dan nalar berbahasa sangat dipakai.',
      'Hubungan fungsi: benda dan kegunaannya (pisau : memotong).',
      'Hubungan ukuran atau urutan: yang satu lebih besar, lebih tinggi, atau lebih awal daripada yang lain (bukit : gunung).',
      'Hubungan bagian: bagian dan keseluruhannya (roda : sepeda).',
      'Hubungan sebab–akibat: yang satu menyebabkan yang lain (kemarau : kekeringan).',
      'Hubungan jenis: salah satu jenis dari kelompok yang lebih umum (mawar : bunga).',
      'Hubungan lain yang sering muncul: sinonim (pandai : cerdas), antonim (tinggi : rendah), pelaku dan alat (pelukis : kuas), tempat kerja (guru : sekolah), dan bahan (roti : tepung).',
      'Langkah mengerjakan: (1) tentukan kata kunci atau jenis hubungannya, (2) ubah pasangan kata pertama menjadi kalimat, (3) pakai kalimat yang sama pada pilihan jawaban.',
      'Urutan harus searah dengan soal. Kalau pasangan pertama "bagian : keseluruhan", pasangan kedua juga harus "bagian : keseluruhan", tidak dibalik.'
    ],
    examples: [
      { q: 'Jam : waktu = termometer : …', a: 'Jam menunjukkan waktu, termometer mengukur suhu. Jawab: suhu (hubungan fungsi).' },
      { q: 'Hujan : banjir = kemarau : …', a: 'Hujan menyebabkan banjir, kemarau menyebabkan kekeringan (sebab–akibat).' },
      { q: 'Mawar : bunga = kakaktua : …', a: 'Mawar adalah jenis bunga, kakaktua adalah jenis burung.' }
    ],
    traps: [
      'Memilih kata yang "berhubungan" tanpa menentukan jenis hubungannya, sehingga terkecoh pilihan yang hanya berkaitan.',
      'Membalik urutan pasangan (bagian : keseluruhan menjadi keseluruhan : bagian).',
      'Memilih hubungan yang terlalu umum, padahal ada jenis hubungan yang lebih tepat.',
      'Tidak membuat kalimat penghubung. Kalimat sederhana seperti "A adalah bagian dari B" membantu mengecek pilihan jawaban.',
      'Pola UTBK: A : B = C : ? dengan lima pilihan. Eliminasi pilihan yang urutannya tidak searah atau hubungannya berbeda.'
    ]
  },
  utb22: {
    intro: 'Bahasa panda (kriptografi) adalah soal sandi: kata asli diubah menjadi kode dengan pola tertentu. Kamu diminta menemukan polanya dari contoh, lalu menerapkannya pada kata lain. Rajin berlatih akan membuatnya sangat cepat.',
    points: [
      'Langkah umum: (1) perhatikan kode dan kata asli yang sama pada clue, (2) susun kode pada clue sampai mendapatkan kode yang diinginkan, (3) perhatikan pilihan jawaban jika ada huruf baru yang tidak ada pada clue.',
      'Trik awal: tulis alfabet dengan nomor (A=1, B=2, … Z=26). Banyak soal selesai hanya dengan membandingkan nomor huruf.',
      'Pergeseran: setiap huruf diganti huruf yang bergeser sebanyak pola tertentu. Polanya bisa sama untuk semua huruf, atau berbeda dan berulang (misalnya +2, −1, +2, −1).',
      'Contoh pergeseran +1 untuk semua huruf: PASIR menjadi QBTJS. Contoh pola +1, −1 bergantian: BATU menjadi CZUT.',
      'Substitusi dengan pola tertentu: huruf atau angka diganti secara teratur, biasanya berupa tabel. Tabel menunjukkan huruf pada kode menggantikan huruf aslinya, tetapi bisa juga sebaliknya. Baca arah tabel dulu.',
      'Huruf terapit: setiap huruf asli diapit oleh huruf sebelum dan sesudahnya pada kode. Jumlah huruf kode dua kali lebih banyak daripada kata asli. Contoh: BUKU menjadi ACTVJLTV.',
      'Cara mendeteksi huruf terapit: panjang kode tepat dua kali kata asli. Kode dibaca berpasangan, lalu cari huruf yang berada di antara pasangan tersebut.',
      'Pencerminan: alfabet dilipat di tengah (26 huruf). Hanya ada satu pola: A↔Z, B↔Y, C↔X, dan seterusnya. Rumusnya: huruf ke-n berpasangan dengan huruf ke-(27 − n).',
      'Contoh pencerminan: BESI menjadi YVHR, KOPI menjadi PLKR. Pencerminan bisa dipakai balik: mencerminkan kode menghasilkan kata asli.',
      'Setelah dapat pola, cek ke semua huruf di clue, jangan hanya satu huruf. Kalau ada satu huruf yang tidak cocok, kemungkinan polanya berbeda (misalnya pergeseran bergantian).'
    ],
    examples: [
      { q: 'Kode pencerminan untuk SAPI?', a: 'S↔H, A↔Z, P↔K, I↔R, jadi HZKR.' },
      { q: 'Kode huruf terapit untuk ROTI?', a: 'R→QS, O→NP, T→SU, I→HJ, jadi QSNPSUHJ.' },
      { q: 'Pola pergeseran +2, −1 diterapkan pada KATA. Apa kodenya?', a: 'K+2=M, A−1=Z, T+2=V, A−1=Z, jadi MZVZ.' }
    ],
    traps: [
      'Menebak pola dari satu huruf saja. Uji ke seluruh huruf pada clue.',
      'Lupa arah tabel substitusi (kode ke asli atau asli ke kode).',
      'Salah menghitung geseran di ujung alfabet. Setelah Z kembali ke A.',
      'Mencampur pencerminan dengan pergeseran. Pencerminan selalu berpasangan dengan jumlah nomor 27.',
      'Pola UTBK: satu atau dua contoh kata beserta kodenya, lalu kata baru yang harus dikodekan atau diterjemahkan.'
    ]
  }
  ,
  utb23: {
    intro: 'Soal ejaan di PBM biasanya memberi kalimat dengan tanda baca yang salah atau kurang, lalu menanyakan versi yang benar. Kuncinya hafal fungsi tiap tanda, terutama koma, titik koma, titik dua, dan tanda hubung.',
    points: [
      'Koma (,) dipakai: (1) di antara unsur perincian atau pembilangan yang lebih dari dua; (2) sebelum kata penghubung seperti tetapi, sedangkan, melainkan; (3) memisahkan anak kalimat yang mendahului induk kalimat; (4) memisahkan petikan langsung dari bagian kalimat lain; (5) di antara nama dan alamat, bagian-bagian alamat, tempat dan tanggal, serta nama tempat dan wilayah yang ditulis berurutan; (6) mengapit keterangan tambahan (aposisi); (7) mencegah salah tafsir.',
      'Kebalikan aturan 3: kalau anak kalimat berada di belakang induk kalimat, biasanya tidak ada koma. Jadi “Jika hujan reda, kami berangkat” memakai koma, tetapi “Kami berangkat jika hujan reda” tidak.',
      'Titik koma (;) dipakai: (1) memisahkan kalimat setara dalam kalimat majemuk sebagai pengganti kata penghubung; (2) di akhir butir perincian yang berupa klausa; (3) memisahkan kelompok perincian yang di dalamnya sudah memakai koma.',
      'Titik dua (:) dipakai sebelum perincian, tetapi hanya kalau bagian sebelumnya sudah berupa pernyataan lengkap. Kalau kalimat belum lengkap sebelum perincian (misalnya berhenti di kata kerja), jangan pakai titik dua.',
      'Titik dua juga dipakai di antara jilid atau nomor dan halaman, surah dan ayat, judul dan anak judul, serta nama kota dan penerbit dalam daftar pustaka.',
      'Tanda hubung (-) punya enam fungsi: menyambung tanggal-bulan-tahun berangka (07-10-1985); memperjelas bagian kata agar tidak ambigu (ber-evolusi); merangkai huruf dengan angka (ke-17, 1960-an); merangkai kata atau imbuhan dengan singkatan huruf kapital (ber-SIM, KTP-mu); merangkai imbuhan dengan nama diri berhuruf kapital (se-Indonesia, se-Jawa Barat); merangkai unsur Indonesia dengan unsur daerah atau asing (men-download, di-sowan-i).',
      'Tanda pisah (—) punya dua fungsi: mengapit keterangan tambahan atau aposisi, dan menggantikan kata sampai dengan (Jakarta—Bandung). Tanda pisah lebih panjang daripada tanda hubung.',
      'Tanda petik ganda (“…”) mengapit: petikan langsung; judul sajak, lagu, film, artikel, atau bab buku yang dipakai di dalam kalimat; dan istilah ilmiah kurang dikenal atau kata yang punya arti khusus.',
      'Tanda petik tunggal (‘…’) mengapit petikan di dalam petikan lain, dan makna, terjemahan, atau ungkapan (tadulako ‘panglima’).',
      'Tanda kurung ((…)) mengapit: keterangan tambahan; huruf atau kata yang boleh dimunculkan atau dihilangkan; dan huruf atau angka penanda perincian. Tanda kurung siku ([…]) dipakai untuk menandai koreksi atas kesalahan di naskah asli tulisan orang lain, dan mengapit keterangan di dalam kalimat penjelas yang sudah berkurung.'
    ],
    examples: [
      { q: 'Beri tanda baca yang tepat: Ayah membeli ikan sayur dan buah di pasar.', a: 'Ayah membeli ikan, sayur, dan buah di pasar. Perincian lebih dari dua unsur dipisah koma, dan koma juga ada sebelum dan.' },
      { q: 'Mana yang benar: “Aldila membutuhkan: buku, pulpen, dan tas” atau “Aldila membutuhkan buku, pulpen, dan tas”?', a: 'Yang kedua. Sebelum perincian, kalimat belum lengkap (berhenti di kata kerja), jadi tidak memakai titik dua. Bentuk “Aldila membutuhkan perlengkapan sekolah: buku, pulpen, dan tas” boleh karena pernyataannya sudah lengkap.' },
      { q: 'Tanda apa yang tepat di antara kedua kalimat setara: Ayah mencuci motor_ ibu memasak di dapur?', a: 'Titik koma (;), karena menggantikan kata penghubung di antara dua kalimat setara.' },
      { q: 'Tulis dengan tepat: rapat yang ke 5 (huruf dan angka).', a: 'ke-5, karena tanda hubung merangkai huruf dengan angka.' }
    ],
    traps: [
      'Memberi koma sebelum anak kalimat yang berada di belakang induk kalimat.',
      'Memakai titik dua setelah kata kerja atau kata penghubung yang kalimatnya belum lengkap (misalnya “terdiri dari: …”).',
      'Tertukar titik koma dan koma: titik koma menggantikan kata penghubung, koma biasanya masih ditemani kata penghubung.',
      'Menyamakan tanda hubung (-) dengan tanda pisah (—). “Jakarta—Bandung” memakai tanda pisah karena artinya sampai dengan.',
      'Lupa tanda hubung pada imbuhan + nama diri (se-Indonesia) dan imbuhan + singkatan (ber-SIM).',
      'Menulis petikan langsung tanpa koma sebelum tanda petik, misalnya “Ayah berkata “Besok …”.'
    ]
  },
  utb24: {
    intro: 'Penulisan huruf kapital mengikuti 13 aturan PUEBI. Slide yang kamu kirim menyorot dua poin utama: penulisan nama diri dan kata sapaan. Setelah itu ada aturan huruf miring.',
    points: [
      'Nama diri menunjukkan identitas dan diawali huruf kapital: Indonesia, Badui, Islam, Bogor, Inggris, Jawa.',
      'Nama jenis menunjukkan ciri umum suatu benda atau konsep dan tidak diawali huruf kapital: bahasa, suku, agama. Kata ini tetap huruf kecil walaupun diikuti nama diri: bahasa Indonesia, suku Jawa, agama Islam.',
      'Nama diri yang dipakai sebagai nama jenis kehilangan huruf kapital. Pasangan yang sering muncul: asinan Bogor (asalnya dari Bogor) dan kacang bogor (jenis kacang); film Inggris (dari Inggris) dan kunci inggris (nama alat); suku Jawa dan gula jawa.',
      'Kata sapaan adalah kata untuk menyapa seseorang, misalnya Anda, Saudara, Tuan, Nyonya, Ibu, Bapak, Kakak, Adik. Kalau dipakai untuk menyapa atau mengacu pada orang yang disapa, huruf pertamanya kapital.',
      'Kalau kata itu hanya menyebut hubungan kekerabatan umum, bukan menyapa, huruf pertamanya kecil: “Aku memiliki dua kakak”, “Aku bertemu dengan ayah dan ibumu”, “Aku memiliki banyak saudara di kampung”.',
      'Cara cepat membedakan: tanya “apakah kata ini dipakai untuk memanggil atau menyapa seseorang?”. Kalau ya, kapital. Kalau cuma menyatakan hubungan atau jumlah (dua kakak, banyak saudara, ayah dan ibumu), huruf kecil.',
      'Huruf miring dipakai untuk menuliskan judul buku, nama majalah, atau nama surat kabar yang dikutip dalam tulisan (buku Catatan Hati Seorang Siswa).',
      'Huruf miring juga dipakai untuk menegaskan atau mengkhususkan huruf, bagian kata, kata, atau kelompok kata dalam kalimat: Huruf terakhir kata cinta adalah huruf a.',
      'Huruf miring juga dipakai untuk kata atau ungkapan dalam bahasa daerah atau bahasa asing yang belum diserap: upacara peusijuek (tepung tawar). Ingat: kata serapan tidak dimiringkan.'
    ],
    examples: [
      { q: 'Mana yang benar: “kacang Bogor” atau “kacang bogor”?', a: '“kacang bogor”. Kacang bogor adalah nama jenis kacang, jadi tidak memakai huruf kapital. “Asinan Bogor” memakai kapital karena asal daerahnya Bogor.' },
      { q: 'Mana yang benar: “Kapan kakak pergi?” tanya orang itu, atau “Kapan Kakak pergi?” tanya orang itu?', a: 'Yang kedua. Kakak dipakai untuk menyapa, jadi kapital.' },
      { q: 'Bagian mana yang dimiringkan pada “Naraya membaca buku Catatan Hati Seorang Siswa”?', a: 'Catatan Hati Seorang Siswa, karena itu judul buku.' }
    ],
    traps: [
      'Menulis nama jenis dengan kapital hanya karena mengandung nama tempat (kunci inggris, gula jawa).',
      'Menulis bahasa, suku, dan agama dengan kapital: yang kapital hanya nama diri di belakangnya.',
      'Menulis kata kekerabatan dengan kapital padahal tidak sedang menyapa (dua kakak, banyak saudara).',
      'Lupa kapital pada Anda, Saudara, dan kata sapaan lain saat dipakai menyapa.',
      'Memiringkan kata serapan. Yang dimiringkan hanya kata daerah atau asing yang belum diserap.'
    ]
  },
  utb25: {
    intro: 'Penulisan kata mencakup banyak aturan kecil: serangkai atau terpisah, kata depan, partikel, singkatan, dan bilangan. Soalnya biasanya meminta memilih penulisan yang benar dari empat pilihan yang mirip.',
    points: [
      'Kata majemuk adalah gabungan dua kata atau lebih yang membentuk makna baru tetapi masih berkaitan dengan kata pembentuknya. Kata majemuk ditulis terpisah. Contoh: rumah tangga (hal yang berkaitan dengan urusan rumah atau keluarga).',
      'Gabungan kata yang hanya mendapat awalan atau akhiran saja ditulis terpisah: berlipat ganda. Gabungan kata yang mendapat awalan sekaligus akhiran ditulis serangkai: melipatgandakan, mempertanggungjawabkan.',
      'Gabungan kata yang sudah padu, yaitu seolah-olah dua kata tetapi dianggap satu kata, ditulis serangkai: dukacita, sukacita, kasatmata, saputangan. Contoh lain yang lazim: matahari, olahraga, apabila.',
      'Tambahan umum (halaman 4/18 tidak ada di PDF-mu, bagian ini kuisi dari PUEBI): bentuk terikat adalah unsur yang tidak bisa berdiri sendiri, misalnya antar-, anti-, pasca-, non-, sub-, maha-, multi-, tuna-, dan ultra-. Bentuk terikat ditulis serangkai dengan kata dasar: antarkota, antibiotik, pascasarjana, nonformal, subbagian, mahasiswa, multilateral, tunanetra, ultramodern.',
      'Tambahan umum: kalau bentuk terikat diikuti kata yang diawali huruf kapital, dipakai tanda hubung: non-Indonesia, pan-Afrika, anti-Amerika. Bentuk maha yang diikuti kata berimbuhan atau berupa sifat Tuhan ditulis terpisah dengan huruf kapital: Maha Pengasih, Maha Esa.',
      'Kata depan (di, ke, dari, pada, kepada, untuk, dalam) ditulis terpisah dari kata sesudahnya. Awalan di- ditulis serangkai dengan kata kerja: diletakkan, tetapi kata depan terpisah: di atas meja.',
      'Fungsi kata depan: dari (asal); untuk (tujuan atau bagi); kepada (tujuan orang); ke (arah atau tujuan); pada (posisi, dan keterangan waktu); di (posisi atau tempat); dalam (tempat yang mengandung isi, dan waktu dalam jangka tertentu).',
      'Pakai kata depan sesuai konteks. Untuk orang yang dituju, pakai kepada (“surat ditujukan kepada Siska”). Pada lebih cocok untuk posisi atau waktu.',
      'Partikel adalah kata yang tidak bisa berdiri sendiri: -lah, -kah, pun, dan per. Yang menjadi fokus UTBK adalah pun dan per.',
      'Pun ditulis terpisah bila bermakna ‘juga’ atau ‘saja’: apa pun yang kamu lakukan (apa saja). Pun ditulis serangkai bila bagian dari konjungsi: adapun, andaipun, ataupun, bagaimanapun, biarpun, kalaupun, kendatipun, maupun, meskipun, sungguhpun, sekalipun, walaupun.',
      'Per ditulis terpisah bila bermakna ‘demi’, ‘mulai’, atau ‘tiap’: satu per satu, per Oktober 2020, per bulan. Per ditulis serangkai untuk pecahan: dua pertiga, tiga perempat.',
      'Singkatan adalah bentuk pendek dari satu kata atau lebih yang dieja huruf demi huruf. Aturan 1: tiap kata yang disingkat diberi titik: a.n., s.d., S.H., dr., S.Pd. Aturan ini tidak berlaku untuk singkatan lembaga, dokumen, mata uang, dan satuan ukuran: PT, KTP, Rp, km.',
      'Aturan 2: singkatan yang terdiri atas tiga huruf diakhiri satu titik: dll., dsb., Yth., dkk. Aturan 3: singkatan dari huruf awal, baik nama diri maupun bukan, ditulis kapital tanpa titik: KTP, SD, PTN, BNN, PMI, KBBI.',
      'Akronim (tambahan dari PUEBI, tidak ada di slide yang kamu kirim) adalah singkatan yang dibaca sebagai kata. Akronim nama diri diawali huruf kapital (Bappenas), akronim bukan nama diri huruf kecil semua (pemilu, tilang).',
      'Bilangan yang hanya terdiri dari satu atau dua kata ditulis dengan huruf (tujuh belas), sedangkan yang lebih dari dua kata ditulis dengan angka (173). Bilangan penomoran selalu angka, meski pendek: halaman 18.',
      'Bilangan tingkatan boleh ditulis dengan tiga cara: angka Romawi (Perang Dunia II), angka Arab dengan ke- (Perang Dunia ke-2), atau huruf (Perang Dunia Kedua). Angka tidak boleh berada di awal kalimat: tulis “Sebanyak 35 orang …”, bukan “35 orang …”.',
      'Bilangan dalam perincian ditulis dengan angka (3 pisang, 5 terung, dan 7 peria). Bilangan yang diikuti ukuran panjang, berat, luas, isi, waktu, dan nilai uang ditulis dengan angka (2 meter, 3 kilogram, 4 bulan). Jumlah yang sangat besar ditulis sebagian dengan huruf: 250 juta, 2 triliun.'
    ],
    examples: [
      { q: 'Pilih yang benar: “berlipat ganda” atau “berlipatganda”? Dan “melipat gandakan” atau “melipatgandakan”?', a: '“berlipat ganda” (hanya awalan, terpisah) dan “melipatgandakan” (awalan dan akhiran, serangkai).' },
      { q: 'Pilih yang benar: “Apa pun yang terjadi” atau “Apapun yang terjadi”?', a: '“Apa pun yang terjadi”. Pun di sini bermakna ‘saja’ (apa saja), jadi ditulis terpisah.' },
      { q: 'Benarkan: “35 orang menjadi korban kecelakaan itu.”', a: '“Sebanyak 35 orang menjadi korban kecelakaan itu.” Angka tidak boleh di awal kalimat.' }
    ],
    traps: [
      'Menulis kata depan di, ke, dari serangkai dengan kata benda tempat (di atas, ke kantor), atau menulis awalan di- terpisah (di letakkan).',
      'Memakai pada untuk orang yang dituju, padahal pakai kepada.',
      'Menulis pun serangkai pada apa pun, siapa pun, atau sebaliknya memisahkan pun pada meskipun, walaupun, ataupun.',
      'Menulis per serangkai pada satu per satu, atau memisah per pada pecahan (dua per tiga).',
      'Memberi titik pada singkatan lembaga atau satuan ukuran (K.T.P., k.m., Rp.), atau lupa titik pada singkatan gelar (S.Pd., S.H.).',
      'Memulai kalimat dengan angka.',
    ]
  }
  ,
  utb26: {
    intro: 'Kata serapan adalah kata dari bahasa selain bahasa Indonesia yang sudah dipakai sebagai bagian dari bahasa Indonesia. Soal ejaan biasanya meminta bentuk baku, jadi yang perlu dihafal adalah pola perubahan huruf dari bentuk asing ke bentuk Indonesia.',
    points: [
      'Kata serapan dipakai sebagai bahasa Indonesia, jadi penulisannya tidak memakai huruf miring. Yang dimiringkan hanya kata asing atau daerah yang belum diserap.',
      'Proses pembentukan kata serapan ada dua: adopsi dan adaptasi.',
      'Adopsi: kata asing diserap tanpa mengubah bentuknya sedikit pun. Contoh: pro, multi, film.',
      'Adaptasi: penulisan dan pelafalan kata asing disesuaikan dengan bahasa Indonesia. Ini yang paling sering diujikan.',
      'Pola huruf x: x di tengah kata menjadi ks (extra jadi ekstra). x di awal kata tidak berubah (xenophobia jadi xenofobia, hanya ph-nya yang berubah jadi f).',
      'Pola akhiran: -ive menjadi -if (executive jadi eksekutif, active jadi aktif); -ity menjadi -itas (university jadi universitas).',
      'Pola huruf c dan ch: bisa menjadi c, k, atau s tergantung lafal aslinya. Contoh: central jadi sentral, charisma jadi karisma, check jadi cek, echelon jadi eselon.',
      'Pola huruf y menjadi i (system jadi sistem) dan ph menjadi f (photo jadi foto).',
      'Pola konsonan rangkap sh, dh, dz, dan th: berubah menjadi s, d, z, atau t. Contoh: sholat jadi salat, Ramadhan jadi Ramadan, ustadz jadi ustaz, athlete jadi atlet.',
      'Vokal atau konsonan yang tidak dibunyikan di akhir kata dapat dihilangkan: permanent jadi permanen, extreme jadi ekstrem.',
      'Dua konsonan sama yang berdampingan cukup ditulis satu: mall jadi mal, stress jadi stres.',
      'Cara cepat di ujian: baca bentuk asingnya dengan lafal Indonesia, lalu cocokkan dengan pola di atas. Pilihan yang masih memuat huruf asing (ph, th, dh, ch, y, x di tengah kata) hampir pasti bukan bentuk baku.'
    ],
    examples: [
      { q: 'Tulis bentuk baku dari system, executive, dan photo.', a: 'sistem (y jadi i), eksekutif (x di tengah jadi ks, -ive jadi -if), foto (ph jadi f).' },
      { q: 'Apa bedanya adopsi dan adaptasi? Beri satu contoh masing-masing.', a: 'Adopsi mengambil kata tanpa mengubah bentuk (film). Adaptasi menyesuaikan penulisan dan pelafalan (university jadi universitas).' },
      { q: 'Mana yang baku: sholat, solat, atau salat? Dan ustadz, ustad, atau ustaz?', a: 'salat dan ustaz. sh jadi s, dz jadi z.' },
      { q: 'Apakah kata “stres” ditulis miring dalam kalimat?', a: 'Tidak. Stres sudah menjadi kata serapan, bagian dari bahasa Indonesia.' }
    ],
    traps: [
      'Memakai bentuk setengah jadi: sistim, kharisma, ekstrim, atlit, stress, mall, ramadhan.',
      'Menyamakan x di awal kata dengan x di tengah. Di awal tetap x, di tengah menjadi ks.',
      'Lupa bahwa c bisa menjadi tiga huruf berbeda: sentral (s), karisma (k), cek (c).',
      'Memiringkan kata serapan. Yang dimiringkan hanya kata asing atau daerah yang belum diserap.',
      'Catatan sumber: di slide, charisma tertulis charism. Aku tulis charisma yang benar.'
    ]
  }
  ,
  utb27: {
    intro: 'Konjungsi (kata hubung) menghubungkan kata dengan kata, frasa dengan frasa, klausa dengan klausa, atau kalimat dengan kalimat. Soal PBM biasanya meminta kamu memilih konjungsi yang tepat, jadi kuncinya menentukan dulu jenis hubungan maknanya.',
    points: [
      'Konjungsi dibagi dua kelompok besar: konjungsi intrakalimat (bekerja di dalam satu kalimat) dan konjungsi antarkalimat (menghubungkan kalimat dengan kalimat). Konjungsi intrakalimat dibagi lagi menjadi koordinatif, korelatif, dan subordinatif.',
      'Konjungsi koordinatif menghubungkan dua unsur atau lebih yang setara. Contoh dan fungsinya: dan (penambahan), serta (pendampingan), atau (pemilihan), sedangkan dan padahal (pertentangan), tetapi dan melainkan (perlawanan).',
      'Konjungsi korelatif menghubungkan kata, frasa, atau klausa yang berstatus setara, dan terdiri atas dua bagian yang terpisah. Pasangannya: tidak …, tetapi …; tidak hanya …, tetapi juga …; bukan …, melainkan …; bukan hanya …, melainkan juga …; baik … maupun …; jangankan …, … pun …; entah … entah …; apa(kah) … atau ….',
      'Konjungsi subordinatif menghubungkan induk kalimat dengan anak kalimat. Hubungan dan contohnya: waktu (ketika, setelah, sebelum, sesudah); syarat (jika, kalau, apabila); perlawanan atau konsesif (biarpun, meski(pun), sekalipun, walau(pun)); sebab (karena, sebab); akibat atau hasil (maka, sehingga); tujuan (agar, supaya); penjelasan atau komplementasi (bahwa).',
      'Konjungsi antarkalimat dipakai di awal kalimat kedua. Hubungan dan contohnya: penambahan (selain itu, di sisi lain, sementara itu); pertentangan (namun, akan tetapi, meski demikian, kendati demikian, walau demikian); urutan waktu (lalu, kemudian); sebab-akibat (oleh karena itu, oleh sebab itu); penyimpulan (jadi, dengan demikian); penegasan (bahkan).',
      'Langkah mengerjakan soal konjungsi: (1) baca kalimat atau kedua kalimat, (2) tentukan hubungan maknanya (waktu, syarat, sebab, akibat, tujuan, pertentangan, dan sebagainya), (3) pilih konjungsi yang cocok dengan hubungan itu, lalu (4) pastikan jenisnya benar (di dalam kalimat atau antarkalimat).',
      'Bedakan sebab dan akibat. Setelah karena atau sebab, yang muncul adalah penyebab (Karena hujan deras, ...). Setelah sehingga atau maka, yang muncul adalah hasilnya (..., sehingga banjir terjadi).',
      'Pasangan korelatif harus lengkap dan tidak boleh tertukar. “Bukan …, tetapi …” tidak lazim, yang benar “bukan …, melainkan …”. Dan “baik … maupun …” tidak dipasangkan dengan atau.'
    ],
    examples: [
      { q: 'Isi dengan konjungsi yang tepat: Dia tidak hanya pintar, … juga rajin.', a: 'tetapi. Pasangannya “tidak hanya …, tetapi juga …” (korelatif).' },
      { q: 'Konjungsi apa yang tepat: … sudah larut malam, Rani masih belajar?', a: 'Meskipun (subordinatif, hubungan perlawanan atau konsesif).' },
      { q: 'Isi dengan konjungsi antarkalimat: Ia sudah berlatih keras. …, ia gagal lolos seleksi.', a: 'Namun (pertentangan).' },
      { q: 'Apa beda “karena” dan “sehingga”?', a: 'Karena memperkenalkan sebab. Sehingga memperkenalkan akibat atau hasil.' }
    ],
    traps: [
      'Memilih konjungsi hanya karena kedengarannya enak, bukan karena hubungan maknanya.',
      'Tertukar sebab dan akibat (karena dengan sehingga).',
      'Memakai konjungsi intrakalimat di awal kalimat baru (misalnya Karena itu atau Tetapi sebagai pembuka), padahal pembuka kalimat memakai konjungsi antarkalimat seperti Oleh karena itu dan Namun.',
      'Menukar pasangan korelatif: tidak hanya … melainkan juga, bukan … tetapi, baik … atau.',
      'Mengira padahal selalu subordinatif. Di slide-mu padahal dimasukkan ke koordinatif bersama sedangkan (hubungan pertentangan). Sebagian buku menggolongkannya lain, jadi pegang maknanya: pertentangan.'
    ]
  },
  utb28: {
    intro: 'Wacana adalah satuan bahasa terlengkap, berupa karangan atau laporan utuh seperti novel, buku, artikel, pidato, atau khotbah. Di PBM kamu perlu paham kepaduan paragraf, hubungan antarparagraf, serta ide pokok, simpulan, dan tujuan penulis.',
    points: [
      'Unsur yang dibahas pada wacana: ide pokok, kepaduan paragraf, hubungan antarparagraf, tujuan penulisan teks, dan simpulan.',
      'Ide pokok adalah inti permasalahan yang umum dan mampu mewakili ide lain dalam sebuah paragraf. Ide pokok biasanya dikemas dalam kalimat utama, dan kalimat lainnya menjelaskan.',
      'Posisi kalimat utama: di awal paragraf (deduktif), di akhir paragraf (induktif), di awal dan akhir (deduktif-induktif), di tengah paragraf (ineratif). Pada paragraf naratif dan deskriptif, ide pokok sering menyebar dan tidak terpusat pada satu kalimat.',
      'Kepaduan paragraf punya tiga syarat: memiliki satu gagasan pokok, tidak mengandung kalimat sumbang (kalimat yang tidak berkaitan dengan gagasan pokok), dan dapat ditandai dengan adanya kohesi.',
      'Kohesi adalah keterkaitan bentuk antarkalimat. Jenisnya: kata ganti orang (aku, kamu, dia, ia, beliau, -nya, mereka); kata tunjuk (ini, itu, tersebut, demikian, di sana, berikut); konjungsi antarkalimat (oleh karena itu, oleh sebab itu, jadi, maka dari itu, bahkan); repetisi (pengulangan kata yang sama); dan sinonim (persamaan makna kata).',
      'Hubungan antarparagraf adalah keterkaitan paragraf satu dengan paragraf lain yang terjalin secara logis. Ada dua bentuk: eksplisit (ditandai penanda seperti konjungsi) dan implisit (tidak ada penanda, harus disimpulkan dari isi).',
      'Jenis hubungan antarparagraf: perincian atau contoh, pemaparan atau penjelasan, sebab-akibat, penambahan, simpulan, dan pertentangan.',
      'Simpulan adalah pendapat akhir dari sebuah kutipan, berupa penyajian ringkas berdasarkan ide pokok. Caranya: baca teks dengan cermat, perhatikan kata kunci yang sering muncul, tentukan ide pokok, lalu pilih simpulan yang tepat berdasarkan ide pokok itu.',
      'Tujuan penulis dilihat dari jenis teks: deskripsi (memberi gambaran sebuah objek), narasi (menceritakan peristiwa), persuasi (membujuk atau memengaruhi pembaca), argumentasi (memberi bukti atau meyakinkan pembaca), dan eksposisi (menyampaikan informasi).',
      'Cara menemukan kalimat sumbang: tentukan dulu ide pokok paragraf, lalu cari kalimat yang membahas hal lain. Kalimat itu tidak perlu dihapus dari bacaan aslinya, tetapi menurut soal ia mengganggu kepaduan.'
    ],
    examples: [
      { q: 'Pada paragraf yang kalimat utamanya ada di kalimat pertama, apa nama polanya?', a: 'Deduktif. Kalau kalimat utama di akhir, induktif.' },
      { q: 'Dalam “Rina mengikuti lomba. Ia berlatih setiap hari. Ia berharap menang.”, kata mana yang menjadi kohesi?', a: 'Ia, kata ganti orang yang mengacu pada Rina.' },
      { q: 'Paragraf kedua memberi dua contoh dari pernyataan di paragraf pertama. Apa hubungan antarparagrafnya?', a: 'Perincian atau contoh.' }
    ],
    traps: [
      'Memilih kalimat utama hanya karena letaknya di awal. Kalimat utama adalah kalimat yang paling umum dan dijelaskan kalimat lain.',
      'Menyamakan kalimat penjelas (contoh, data) dengan kalimat utama.',
      'Menganggap kalimat sumbang adalah kalimat yang salah. Kalimat itu bisa benar, tetapi tidak berkaitan dengan gagasan pokok.',
      'Memilih simpulan yang memuat informasi baru yang tidak ada di teks.',
      'Mengira setiap hubungan antarparagraf harus punya konjungsi. Hubungan implisit tidak punya penanda.'
    ]
  }
};

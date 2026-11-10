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
    intro: 'pH mengukur tingkat keasaman larutan. pH = −log [H⁺] dan pOH = −log [OH⁻]. Pada 25°C berlaku pH + pOH = 14.',
    points: [
      'pH < 7 asam, pH = 7 netral, pH > 7 basa (pada 25°C).',
      'Asam kuat terionisasi sempurna: [H⁺] = Ma × valensi asam.',
      'Basa kuat: [OH⁻] = Mb × valensi basa.',
      'Asam lemah: [H⁺] = √(Ka × Ma). Basa lemah: [OH⁻] = √(Kb × Mb).',
      'Kw = [H⁺][OH⁻] = 10⁻¹⁴ pada 25°C.'
    ],
    examples: [
      { q: 'Berapa pH larutan HCl 0,01 M?', a: 'HCl asam kuat valensi 1, jadi [H⁺] = 10⁻² M dan pH = 2.' },
      { q: 'Berapa pH larutan NaOH 0,001 M?', a: '[OH⁻] = 10⁻³ M, pOH = 3, jadi pH = 14 − 3 = 11.' }
    ],
    traps: [
      'Lupa valensi, misalnya H₂SO₄ memberi 2 H⁺ per molekul.',
      'Memakai rumus akar (untuk asam lemah) pada asam kuat.',
      'Berhenti di pOH padahal yang ditanya pH.'
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
      'Jumlah ikatan tiap atom: C 4, H 1, O 2, N 3, F/Cl/Br/I 1.'
    ],
    examples: [
      { q: 'Sebanyak 50 mL HCl 1 M dan 50 mL NaOH 1 M dicampur di kalorimeter. Suhu naik 6,5 °C. (massa jenis 1 g/mL, c = 4,2 J/g °C). Berapa ΔH netralisasi per mol?', a: 'm = 100 g. q = 100 × 4,2 × 6,5 = 2.730 J. Mol air = 0,05. ΔH = −2.730 / 0,05 = −54.600 J/mol = −54,6 kJ/mol.' },
      { q: 'C + O₂ → CO₂ ΔH = −394 kJ dan CO + ½O₂ → CO₂ ΔH = −283 kJ. Hitung ΔH untuk C + ½O₂ → CO.', a: 'Pakai reaksi pertama apa adanya, balik reaksi kedua (ΔH jadi +283). Jumlahkan: −394 + 283 = −111 kJ.' },
      { q: 'H₂ + Cl₂ → 2HCl. Energi ikatan H–H 436, Cl–Cl 243, H–Cl 432 kJ/mol. Hitung ΔH.', a: 'Putus: 436 + 243 = 679. Bentuk: 2 × 432 = 864. ΔH = 679 − 864 = −185 kJ (eksoterm).' }
    ],
    traps: [
      'Menukar rumus energi ikatan: yang benar putus dikurangi bentuk, bukan sebaliknya.',
      'Lupa membalik tanda ΔH saat reaksi dibalik, atau lupa mengali ΔH saat reaksi dikali.',
      'Menghitung ΔH per mol tanpa membagi dengan mol zat yang bereaksi, atau lupa tanda minus untuk reaksi eksoterm di kalorimeter.',
      'Menganggap penetralan endoterm. Penetralan asam–basa melepas kalor (suhu campuran naik).',
      'Pola TKA: wacana (kompres dingin instan, penghangat instan, bahan bakar) lalu diagram tingkat energi atau data kalorimeter. Tentukan dulu eksoterm atau endoterm dari diagramnya.'
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
      'Waktu paruh orde 1: t½ = 0,693 / k, tidak bergantung pada konsentrasi awal. Setelah n kali waktu paruh, sisa = awal × (½)ⁿ.'
    ],
    examples: [
      { q: 'Data: percobaan 1 [A]=0,1 [B]=0,1 v=2; percobaan 2 [A]=0,2 [B]=0,1 v=8; percobaan 3 [A]=0,1 [B]=0,2 v=4. Tentukan persamaan laju.', a: 'Percobaan 1→2: [A] ×2, laju ×4, jadi orde A = 2. Percobaan 1→3: [B] ×2, laju ×2, jadi orde B = 1. v = k [A]² [B].' },
      { q: 'Laju reaksi naik 2 kali tiap kenaikan 10 °C. Pada 25 °C reaksi selesai dalam 80 detik. Berapa lama pada 55 °C?', a: 'Kenaikan 30 °C = 3 kali 10 °C, laju ×2³ = 8. Waktu = 80 / 8 = 10 detik.' }
    ],
    traps: [
      'Mengambil orde dari koefisien reaksi. Orde harus dari data percobaan.',
      'Membandingkan dua percobaan yang konsentrasi dua zatnya berubah sekaligus.',
      'Menganggap katalis mengubah ΔH atau menambah hasil. Katalis hanya mempercepat.',
      'Lupa bahwa waktu berbanding terbalik dengan laju (laju ×8 berarti waktu ÷8).',
      'Pola TKA: tabel percobaan atau grafik, lalu pernyataan Benar/Salah. Cari dulu orde tiap zat, baru cek pernyataan satu per satu.'
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
};

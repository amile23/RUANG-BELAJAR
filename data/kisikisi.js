/* Peta kisi-kisi. Isinya dari: PDF kisi-kisi TKA 2026 (resmi), ruangtes.id (UTBK),
   PDF IELTS Reading Strategy + Task 1 Checklist + IELTS Prep, buku Matriks kelas XI.
   Satu item = [nama, isi bab, cara kerjanya (strategi singkat), id materi di Peta Belajar (pisah koma)] */
window.RB = window.RB || {};
RB.kisi = [
{id:'tka',n:'TKA',c:'#E59A2F',
 fmt:'Mapel pilihanmu: Matematika, B. Indonesia, B. Inggris, Biologi, Kimia. Kisi-kisi di bawah dibaca langsung dari PDF kisi-kisi resmi TKA-SMA 2026 yang kamu kirim.',
 sumber:'KISI-KISI TKA-SMA 2026 (PDF-mu). PDF-nya berupa gambar, jadi dibaca dengan OCR; beberapa kata bisa kurang tepat.',
 strat:[
  'TKA menilai pemahaman dan penalaran, bukan hafalan. Latihan terbaik: soal cerita dan teks wacana.',
  'Karena bab TKA Matematika hampir sama dengan UTBK dan rapor, satu kali belajar menolong tiga tujuan.',
  'Kimia & Biologi: soal sering berupa wacana atau data. Biasakan baca grafik/tabel sebelum membaca pilihan.',
  'B. Indonesia & Inggris: tiga level yang sama (paham teks → simpulkan → nilai/apresiasi). Latih level 3, itu yang paling jarang dilatih.'],
 groups:[
  {g:'Matematika',items:[
   ['Bilangan real','Jenis & sifat bilangan, operasi, bilangan berpangkat bulat/pecahan','Hafal sifat pangkat. Muncul lagi di UTBK dan rapor.','mat3'],
   ['Persamaan & pertidaksamaan linear','Sistem persamaan dan pertidaksamaan linear, maksimal 3 variabel; program linear','Ubah cerita jadi persamaan dulu. Program linear: gambar daerah, uji titik pojok.','mat2,mat16'],
   ['Fungsi','Domain, kodomain, range; linear, kuadrat, rasional; invers; komposisi','Invers: tukar x dan y lalu selesaikan. Komposisi: kerjakan dari dalam ke luar.','mat15,mat1'],
   ['Barisan & deret','Aritmetika dan geometri; bunga tunggal & majemuk; pertumbuhan dan peluruhan','Bunga tunggal = aritmetika, bunga majemuk = geometri.','mat4'],
   ['Geometri datar & ruang','Hubungan sudut/garis/bidang, kesebangunan, kekongruenan, Pythagoras','Gambar ulang soalnya dan tandai sisi yang bersesuaian.','mat17,mat6'],
   ['Transformasi geometri','Translasi, refleksi, rotasi, dilatasi, dan komposisinya','Kerjakan satu transformasi per langkah, urutan tidak boleh tertukar.','mat17,mat8'],
   ['Pengukuran','Keliling, luas, volume, luas permukaan, jarak titik–garis–bidang','Jarak pada bangun ruang: cari segitiga siku-siku tersembunyinya.','mat6,mat17'],
   ['Trigonometri','Perbandingan sin, cos, tan, cot, sec, csc','Hafal sudut istimewa lewat segitiga 30-60-90 dan 45-45-90.','mat5'],
   ['Data & peluang','Diagram dan tabel, pemusatan dan penyebaran (tunggal & kelompok), aturan pencacahan/peluang (kalimat terakhir di PDF terpotong)','Pada data kelompok, pakai titik tengah kelas.','mat7']]},
  {g:'Bahasa Indonesia',items:[
   ['Pemahaman tekstual','Kata serapan, latar/karakter/fenomena dari kosakata, menyusun kerangka teks','Untuk kerangka: cari kalimat utama tiap paragraf.','ind9,ind1'],
   ['Pemahaman inferensial','Ide pokok & gagasan pendukung, hubungan antarkalimat/paragraf, prediksi lanjutan teks','Tanya: kalimat ini menjelaskan, memberi contoh, atau menyebabkan kalimat sebelumnya?','ind1,ind2'],
   ['Evaluasi & apresiasi','Relevansi dengan kehidupan, keakuratan informasi, ketepatan bahasa, kesesuaian bagian teks, respons emosional pada puisi/prosa/drama','Beri alasan dari teks, bukan dari selera. Latih teks sastra secara khusus.','ind5,ind8,ind3']]},
  {g:'Bahasa Inggris',items:[
   ['Pemahaman tekstual','Mencari informasi eksplisit, mengklasifikasi, membuat kerangka, meringkas, mensintesis','Cari kata kunci dan sinonimnya di teks.','ing4,ing5'],
   ['Pemahaman inferensial','Detail pendukung, topik/ide pokok/target pembaca/tujuan/pesan moral, urutan & prediksi, perbandingan, sebab-akibat, karakter tokoh','Karakter: lihat tindakan dan kata-katanya, bukan tebakan.','ing4'],
   ['Evaluasi & apresiasi','Realitas vs fantasi, fakta vs opini, kecukupan dan validitas informasi, kesesuaian, menanggapi isi teks','Fakta bisa dibuktikan, opini ada kata penilaian (should, best, believe).','ing9']]},
  {g:'Biologi',items:[
   ['Keanekaragaman hayati','Prinsip klasifikasi, keanekaragaman hayati Indonesia dan permasalahannya','Hafal tingkat takson dan contoh khas Indonesia.','bio11'],
   ['Bakteri','Struktur bakteri Gram positif/negatif, resistensi, peran bagi manusia','Gram positif: dinding peptidoglikan tebal (ungu).','bio11'],
   ['Ekosistem','Komponen, interaksi, pelestarian, solusi masalah','Gambar rantai/jaring makanan lalu hitung aliran energi.','bio12'],
   ['Metabolisme sel','Katabolisme, anabolisme, sifat dan cara kerja enzim','Grafik enzim: perhatikan suhu optimum, pH optimum, dan saturasi.','bio2,bio1'],
   ['Transpor & pertukaran zat','Sistem sirkulasi, respirasi, ekskresi, dan keterkaitan strukturnya','Telusuri jalur zat dari organ ke organ.','bio4,bio5'],
   ['Sistem imun','Mekanisme kekebalan tubuh','Bedakan imun bawaan dan adaptif, aktif dan pasif.','bio4'],
   ['Sistem koordinasi','Mekanisme sistem saraf dan hormon','Buat tabel: rangsangan → reseptor → jalur → efektor.','bio6'],
   ['Sistem reproduksi','Struktur dan fungsi organ reproduksi pria dan wanita','Siklus menstruasi: hafal urutan hormon dan fase.','bio7']]},
  {g:'Kimia',items:[
   ['Kimia dasar','Struktur atom, model atom, sistem periodik, ikatan, geometri molekul, interaksi antarmolekul, hukum dasar, stoikiometri','Stoikiometri: ubah semuanya ke mol dulu.','kim12,kim1'],
   ['Kimia analitik','Larutan, kesetimbangan larutan, asam–basa & pH, koloid','Tulis reaksi setara lebih dulu, baru hitung pH.','kim5,kim6,kim7,kim9'],
   ['Kimia fisik','Termokimia, laju & dinamika reaksi, kesetimbangan, elektrokimia (bagian ini terbaca sebagian)','Termokimia: tanda ΔH tergantung eksoterm/endoterm.','kim2,kim3,kim4,kim13'],
   ['Kimia organik','Struktur dan reaktivitas senyawa karbon','Kenali gugus fungsi dulu, sifatnya mengikuti gugus.','kim8'],
   ['Konteks soal: sehari-hari, lingkungan, industri','Contoh: pembakaran, hujan asam, efek rumah kaca, proses Haber-Bosch, kontak, elektrolisis NaOH, petrokimia, farmasi','Soal berupa wacana. Garis bawahi data dan tanyakan: konsep bab mana yang dipakai?','kim4,kim13,kim5']]}
 ]},

{id:'utbk',n:'UTBK',c:'#7A8B3C',
 fmt:'UTBK-SNBT: 7 seksi, 160 soal, 195 menit (menurut ruangtes.id). Halaman tersebut menulis jumlah soal per topik sebagai perkiraan dan ada beberapa info yang tidak konsisten. Cek lagi ke SNPMB resmi.',
 sumber:'ruangtes.id/kisi-kisi/utbk',
 strat:[
  'Mulai dari seksi yang kamu kuat untuk mengumpulkan poin, lalu pindah ke yang sulit.',
  'Penalaran Matematika dan Pengetahuan Kuantitatif memakai bab SMA yang sama dengan TKA dan rapor, jadi tumpang tindih besar.',
  'Literasi Inggris mirip IELTS Reading dan TKA Inggris, tinggal ganti tipe soal.',
  'Latihan lewat soal bertimer. UTBK kalah di waktu, bukan di konsep.'],
 groups:[
  {g:'1 · Penalaran Umum (30 soal, 30 mnt)',items:[
   ['Penalaran induktif','Generalisasi, analogi pola, sebab-akibat, prediksi tren','Cari pola dari 2–3 contoh, lalu uji ke contoh keempat.','utb2,utb7'],
   ['Penalaran deduktif','Silogisme, validitas argumen, implikasi logis','Gambar diagram Venn untuk silogisme.','utb2,utb7'],
   ['Penalaran kuantitatif','Operasi bilangan, perbandingan, deret, tafsir data','Tulis data dalam tabel kecil sebelum menghitung.','utb2,utb3']]},
  {g:'2 · Pengetahuan & Pemahaman Umum (20 soal, 15 mnt)',items:[
   ['Pengetahuan umum','Wawasan umum, isu kebangsaan, sains populer, sejarah ringkas','Baca satu berita sains/nasional per hari, 5 menit.','utb4'],
   ['Pemahaman bahasa','Sinonim, antonim, kosakata, makna kontekstual','Pelajari kata baru lewat kalimat, bukan daftar.','utb4,ind9'],
   ['Teks pendek','Ide pokok, simpulan, makna istilah','Baca pertanyaan dulu, baru teks.','utb4,ind1']]},
  {g:'3 · Pemahaman Bacaan & Menulis (20 soal, 25 mnt)',items:[
   ['Ejaan & tata bahasa','PUEBI, kata baku, imbuhan, kalimat efektif','Hafal 20 kata baku yang sering keliru dulu.','ind3,utb4'],
   ['Kohesi & koherensi','Konjungsi, rujukan, kepaduan antarparagraf','Tentukan hubungan antarkalimat (sebab, kontras, urutan).','ind2,utb4'],
   ['Penyuntingan','Kata baku, struktur, makna ganda, redundansi','Coret kata yang berulang makna, lalu cek ejaan.','ind3,utb4']]},
  {g:'4 · Pengetahuan Kuantitatif (20 soal, 20 mnt)',items:[
   ['Aritmetika','Pecahan, persentase, rasio, rata-rata, KPK–FPB','Latih hitung cepat tanpa kalkulator.','utb3,mat3'],
   ['Aljabar','Persamaan, sistem persamaan, pertidaksamaan, fungsi sederhana','Sama dengan bab TKA Matematika.','utb3,mat2,mat15'],
   ['Geometri','Bangun datar dan ruang, sudut, kesebangunan, koordinat','Gambar ulang sketsa soal.','utb3,mat17'],
   ['Statistika & peluang','Mean/median/modus, simpangan, peluang, kombinasi/permutasi','Bedakan permutasi (urutan penting) dan kombinasi.','mat7,utb3']]},
  {g:'5 · Literasi Bahasa Indonesia (30 soal, 43 mnt)',items:[
   ['Teks informasional','Menemukan informasi, menyimpulkan, mengevaluasi argumen','Tandai klaim, bukti, dan kesimpulan penulis.','utb10,ind5'],
   ['Teks sastra','Tema, tokoh, suasana, makna kiasan, amanat','Tentukan suasana dari pilihan kata, bukan dari ringkasan cerita.','utb10,ind8']]},
  {g:'6 · Literasi Bahasa Inggris (20 soal, 20 mnt)',items:[
   ['Informational text','Main idea, inference, vocabulary in context, author’s purpose','Mirip IELTS Reading dan TKA Inggris.','utb6,ing4,iel3'],
   ['Literary text','Theme, character, tone, figurative language','Tone ada di pilihan kata sifat dan kata kerja penulis.','utb6,ing4']]},
  {g:'7 · Penalaran Matematika (20 soal, 42 mnt)',items:[
   ['Bilangan','Bulat, pecahan, desimal, persen, eksponen, akar, logaritma dasar','Soal sering berupa konteks sehari-hari.','utb5,mat3'],
   ['Aljabar & fungsi','Persamaan, pertidaksamaan, sistem, fungsi linear/kuadrat, komposisi','Terjemahkan cerita ke persamaan.','utb5,mat1,mat15'],
   ['Geometri','Bangun datar/ruang, kesebangunan, trigonometri dasar, koordinat','Sketsa dulu, rumus kemudian.','utb5,mat17,mat5'],
   ['Data & ketidakpastian','Statistika deskriptif, peluang, kombinasi/permutasi, tafsir data','Baca judul dan satuan grafik.','utb5,utb8,mat7']]}
 ]},

{id:'iel',n:'IELTS',c:'#C75AC0',
 fmt:'4 skill: Listening, Reading (3 teks, 40 soal, 60 menit), Writing (Task 1 & 2), Speaking (3 bagian). Pilih Academic atau General sesuai tujuanmu. Kampus biasanya Academic.',
 sumber:'PDF IELTS Reading Strategy, IELTS Academic Writing Task 1 Checklist, dan IELTS Prep 3 Months milikmu.',
 strat:[
  'Reading: jawaban selalu urut sesuai teks. Cari lokasinya dulu, baru baca detail di situ.',
  'Writing & Speaking biasanya skor paling rendah. Mulai latihan lebih awal dan rekam dirimu.',
  'Kosakata akademik yang sama dipakai di UTBK dan TKA Inggris, jadi latihan satu menolong tiga.',
  'Mulai dengan tes resmi gratis untuk tahu posisi awalmu, lalu latihan per tipe soal.'],
 groups:[
  {g:'Reading · 12 tipe soal',items:[
   ['Short Answer','Jawab singkat dari teks','Perhatikan batas jumlah kata. Jangan beropini.','iel10,iel3'],
   ['Multiple Choice','Pilih satu atau lebih jawaban','Prediksi jawaban sendiri, lalu cek kenapa tiap pilihan salah. Kata penentu seperti “all/only” sering menjebak.','iel10'],
   ['Summary Completion','Lengkapi ringkasan','Tebak jenis kata (benda/kerja/sifat) lalu cek tata bahasa.','iel10'],
   ['Matching Sentences','Pasangkan awal dan akhir kalimat','Baca awal kalimat dulu tanpa melihat akhirannya.','iel10'],
   ['Sentence Completion','Lengkapi kalimat dengan kata dari teks','Waspada sinonim, jawaban jarang memakai kata yang sama persis.','iel10'],
   ['True / False / Not Given','Cocokkan pernyataan dengan fakta teks','Not Given = informasinya tidak ada. Jangan pakai pengetahuan luar. Waspadai kata “some, all, mainly”.','iel3,iel10'],
   ['Yes / No / Not Given','Cocokkan pernyataan dengan opini penulis','Hanya opini penulis yang dinilai, bukan fakta atau opini orang lain.','iel3,iel10'],
   ['Matching Headings','Pilih judul tiap paragraf','Kerjakan dulu sebelum tipe lain. Baca kalimat pertama dan terakhir paragraf.','iel3,iel10'],
   ['Labelling a Diagram','Beri label pada gambar','Lihat gambar sebentar saja, fokus cari bagian teks yang menjelaskannya.','iel10'],
   ['Matching Names','Pasangkan nama tokoh dengan pernyataannya','Mulai dari nama yang hanya muncul sekali.','iel10'],
   ['Matching Information','Pasangkan pernyataan ke paragraf','Kerjakan paling akhir. Cari angka, nama, dan sinonimnya.','iel10'],
   ['Table Completion','Lengkapi tabel atau diagram alur','Pahami judul tabel dulu, perhatikan batas kata.','iel10']]},
  {g:'Writing',items:[
   ['Task 1 (Academic): grafik, tabel, proses','Laporan data, 4 kriteria penilaian (Task Achievement, Coherence & Cohesion, Lexical Resource, Grammar)','Overview yang jelas adalah bagian terpenting. Bahas fitur utama saja, tanpa opini dan tanpa analisis.','iel4'],
   ['Task 2: esai','Opini, diskusi, masalah–solusi','Satu paragraf = satu ide, dengan contoh. Tulis tiap hari 1 paragraf.','iel5']]},
  {g:'Listening & Speaking',items:[
   ['Listening','4 bagian, tipe soal berbeda','Baca soal sebelum audio diputar dan tebak jawabannya.','iel2,iel8'],
   ['Speaking Part 1–3','Perkenalan, monolog, diskusi','Rekam suara sendiri dan dengar ulang.','iel6']]}
 ]},

{id:'kls',n:'Kelas 11',c:'#CF456D',
 fmt:'Rapor dan ulangan kelas 11 semester 1. Yang pasti dari PDF-mu baru Matematika (buku Matriks). Mapel lain masih memakai perkiraan bab umum sampai kamu mengirim silabus atau kisi-kisi ulangan sekolahmu.',
 sumber:'Buku “Matriks untuk SMA/SMK Kelas XI” (PDF-mu). Bab mapel lain: perkiraan, belum dicocokkan dengan sekolahmu.',
 strat:[
  'Kerjakan ulangan dari bab yang paling dekat jadwalnya. Planner otomatis menaikkan prioritas mapel yang punya ulangan dalam 21 hari.',
  'Sebisa mungkin pilih bab sekolah yang juga keluar di TKA, UTBK, atau IELTS (ditandai banyak target). Bab itu paling hemat waktu.',
  'Waktu lomba, cukup 1 misi kecil per hari. Rapor aman kalau tidak putus sama sekali.'],
 groups:[
  {g:'Matematika (dari buku Matriks)',items:[
   ['Pengertian, notasi, ordo matriks','Baris, kolom, elemen, ordo m×n','Selalu tulis ordo di awal: baris dulu, kolom kemudian.','mat8'],
   ['Jenis-jenis matriks','Baris, kolom, persegi, diagonal, identitas, segitiga, simetris','Hafal ciri tiap jenis. Soal definisi sering muncul di ulangan.','mat8'],
   ['Transpose & kesamaan matriks','Tukar baris–kolom; dua matriks sama jika ordo dan elemennya sama','(AB)ᵀ = BᵀAᵀ.','mat8'],
   ['Operasi matriks & sifat','Jumlah, kurang, kali skalar, perkalian matriks','Perkalian: kolom A harus sama dengan baris B. Tidak komutatif.','mat8'],
   ['Determinan','Ordo 2×2 dan 3×3 (Sarrus)','2×2: ad−bc. Determinan 0 berarti tidak punya invers.','mat8'],
   ['Invers matriks','Invers 2×2 dan penyelesaian sistem persamaan','Tukar a dan d, ubah tanda b dan c, bagi determinan.','mat8']]},
  {g:'Mapel sekolah lain (perkiraan)',items:[
   ['Fisika','Vektor & kinematika, Newton, energi & momentum, fluida, kalor, termodinamika, gelombang, rotasi','Gambarkan gaya (free-body diagram) sebelum menghitung.','fis1,fis2,fis3,fis5,fis6,fis7,fis8,fis9'],
   ['Biologi','Sel, metabolisme, sistem organ, genetika','Banyak bab yang sama dengan TKA Biologi.','bio1,bio2,bio4,bio5,bio6,bio7,bio8'],
   ['Kimia','Termokimia, laju, kesetimbangan, asam–basa, penyangga, Ksp, hidrokarbon','Banyak bab yang sama dengan TKA Kimia.','kim2,kim3,kim4,kim5,kim6,kim7,kim8'],
   ['Bahasa Indonesia & Inggris','Teks eksposisi, argumentasi, struktur teks; tenses, conditional, passive','Sama dengan bab TKA dan UTBK.','ind1,ind2,ind3,ing1,ing2,ing3']]}
 ]}
];

/* Hal-hal yang belum ada di web ini dan perlu dikirim Adiva. Dicek manual oleh Claude saat kamu memberi materi. */
RB.gap = [
 {t:'Jadwal ulangan & kisi-kisi dari sekolah',d:'Untuk tiap mapel kelas 11 semester 1: bab yang diujikan dan tanggalnya. Isi jenis (UH/UTS/UAS), tanggal, dan bab di tab Ulangan, lalu kirim fotonya ke Claude kalau mau dibuatkan ringkasan dan soal bab itu.'},
 {t:'Nilai rapor dan target',d:'Nilai sekarang tiap mapel dan target rapor. Isi di tab Rapor & Target supaya planner tahu mapel mana yang perlu didorong.'},
 {t:'Jadwal lomba & organisasi',d:'Tanggal lomba dan rapat/acara organisasi, supaya hari padat otomatis jadi hari ringan.'},
 {t:'TKA: Matematika wajib atau tingkat lanjut (TL)?',d:'Dalam PDF ada edisi Matematika, Matematika TL, B. Indonesia TL, dan B. Inggris TL. Web ini memakai edisi biasa. Kabari kalau kamu ambil TL.'},
 {t:'TKA Biologi & Kimia lengkap',d:'OCR membaca halaman Biologi dan Kimia hanya sebagian (misalnya Biologi tidak menampilkan genetika/evolusi, Kimia elektrokimia terbaca sebagian). Kirim foto halaman PDF yang jelas kalau ada bagian yang terlewat.'},
 {t:'Tanggal resmi TKA dan UTBK',d:'Tanggal di web masih perkiraan dari pola 2026. Kirim tanggal dari pengumuman resmi ketika sudah keluar.'},
 {t:'IELTS: Academic atau General, target band',d:'Web mengasumsikan Academic dan target band 7. Kabari kalau berbeda, dan kapan rencana tes IELTS-mu supaya tanggalnya masuk jadwal.'},
 {t:'IELTS: materi Listening dan Speaking',d:'PDF-mu fokus ke Reading dan Writing Task 1. Belum ada materi Listening, Speaking, dan Writing Task 2.'},
 {t:'UTBK: materi tiap seksi',d:'Sudah ada peta 7 seksi. Materi dan contoh soalnya belum ada. Kirim contoh soal pola yang sering keluar.'},
 {t:'Pola soal dari kamu',d:'Kirim 5–10 contoh soal per bab (foto atau PDF). Claude membuat soal baru dengan pola sama, bukan menyalin soalnya.'},
 {t:'File prep-plan-5.pdf',d:'Isinya checklist UCAT (tes masuk kedokteran Inggris/Australia), bukan IELTS/UTBK/TKA. Tidak dipakai kecuali kamu mau mendaftar kedokteran luar negeri.'},
 {t:'Logo Universitas Indonesia',d:'Web memakai lencana “FK UI” buatan sendiri. Kirim file logo resmi yang boleh kamu pakai, lalu Claude menaruhnya di folder assets/ dan otomatis tampil.'}
];

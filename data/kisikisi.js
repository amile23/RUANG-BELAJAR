/* Peta kisi-kisi. Isinya dari: PDF kisi-kisi TKA 2026 (resmi), ruangtes.id (UTBK),
   ETS/TOEFL (pencarian web), buku Matriks kelas XI.
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
   ['Kimia dasar','Struktur atom, model atom, sistem periodik, ikatan, geometri molekul, interaksi antarmolekul, hukum dasar, stoikiometri','Stoikiometri: ubah semuanya ke mol dulu.','kim12,kim14,kim15,kim16,kim1'],
   ['Kimia analitik','Larutan, kesetimbangan larutan, asam–basa & pH, koloid','Tulis reaksi setara lebih dulu, baru hitung pH.','kim5,kim6,kim17,kim7,kim9'],
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
  'Literasi Inggris mirip TOEFL Reading dan TKA Inggris, tinggal ganti tipe soal.',
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
   ['Informational text','Main idea, inference, vocabulary in context, author’s purpose','Mirip TOEFL Reading dan TKA Inggris.','utb6,ing4,iel3'],
   ['Literary text','Theme, character, tone, figurative language','Tone ada di pilihan kata sifat dan kata kerja penulis.','utb6,ing4']]},
  {g:'7 · Penalaran Matematika (20 soal, 42 mnt)',items:[
   ['Bilangan','Bulat, pecahan, desimal, persen, eksponen, akar, logaritma dasar','Soal sering berupa konteks sehari-hari.','utb5,mat3'],
   ['Aljabar & fungsi','Persamaan, pertidaksamaan, sistem, fungsi linear/kuadrat, komposisi','Terjemahkan cerita ke persamaan.','utb5,mat1,mat15'],
   ['Geometri','Bangun datar/ruang, kesebangunan, trigonometri dasar, koordinat','Sketsa dulu, rumus kemudian.','utb5,mat17,mat5'],
   ['Data & ketidakpastian','Statistika deskriptif, peluang, kombinasi/permutasi, tafsir data','Baca judul dan satuan grafik.','utb5,utb8,mat7']]}
 ]},

{id:'iel',n:'TOEFL',c:'#C75AC0',
 fmt:'TOEFL iBT format baru (sejak 21 Januari 2026): 4 bagian Reading, Listening, Speaking, Writing. Reading dan Listening adaptif (soal kedua menyesuaikan jawaban pertama). Total sekitar 2 jam. Skor tiap bagian dan total memakai skala 1–6 (naik 0,5), dan skala lama 0–120 masih ditampilkan sampai sekitar 2028. Kalau kampus meminta TOEFL ITP, bentuknya berbeda.',
 sumber:'ETS dan beberapa situs persiapan TOEFL (dicari 10 Nov 2026). Nama tugas diambil dari ringkasan situs persiapan, jadi cek lagi di ets.org/toefl. PDF IELTS-mu sudah tidak dipakai.',
 strat:[
  'Kenali formatnya dulu. Kerjakan satu practice test resmi ETS untuk tahu posisi awalmu, lalu latih bagian yang paling rendah.',
  'Reading dan Listening adaptif, jadi modul pertama paling menentukan. Kerjakan teliti, jangan terburu-buru.',
  'Speaking dan Writing paling berubah di format baru, jadi mulai latihan lebih awal. Rekam suaramu dan tulis tiap hari 1 kalimat atau paragraf.',
  'Kosakata akademik yang sama dipakai di UTBK dan TKA Inggris, jadi latihan satu menolong tiga.'],
 groups:[
  {g:'Reading',items:[
   ['Complete the Words','Paragraf pendek dengan beberapa kata yang hurufnya terpotong, kamu lengkapi','Baca seluruh paragraf dulu untuk konteks, baru tebak kata dari huruf awal dan makna kalimat.','iel7'],
   ['Read in Daily Life','Teks sehari-hari seperti pengumuman, email, iklan, atau jadwal','Tentukan dulu tujuan teks (siapa menulis untuk apa), baru cari detail yang ditanya.','iel3'],
   ['Read an Academic Passage','Bacaan akademik pendek: ide pokok, detail, kosakata, simpulan','Tandai ide tiap paragraf dengan 3–4 kata. Jawaban selalu bisa ditemukan di teks.','iel3,iel10,ing4,utb6']]},
  {g:'Listening',items:[
   ['Listen and Choose a Response','Dengar satu ucapan, pilih jawaban yang paling pas','Tangkap maksud ucapan (meminta, menawarkan, bertanya), bukan kata per kata.','iel2'],
   ['Conversation','Percakapan dua orang di lingkungan kampus','Catat siapa ingin apa dan masalahnya apa.','iel2,iel8'],
   ['Announcement','Pengumuman kampus atau kelas','Perhatikan perubahan jadwal, tempat, dan tindakan yang diminta.','iel2,iel8'],
   ['Academic Talk','Penjelasan singkat dari dosen','Tangkap ide pokok dan contoh. Soal sering menanyakan hubungan contoh dengan idenya.','iel2,iel8']]},
  {g:'Writing',items:[
   ['Build a Sentence','Susun kata yang acak menjadi kalimat yang benar','Cari subjek dan kata kerja dulu, lalu pasang keterangannya.','iel4,ing1'],
   ['Write an Email','Email singkat sesuai situasi yang diberikan','Pakai pola: salam, tujuan, rincian, harapan, penutup. Nadanya sopan.','iel4'],
   ['Write for an Academic Discussion','Menanggapi diskusi antara dosen dan teman','Tulis pendapat yang jelas, satu alasan kuat dengan contoh, lalu hubungkan dengan pendapat teman.','iel5,ing6']]},
  {g:'Speaking',items:[
   ['Listen and Repeat','Dengar kalimat, lalu ulangi persis','Latih menyimpan kalimat di kepala dan ucapkan dengan ritme yang sama.','iel6'],
   ['Take an Interview','Menjawab pertanyaan dari pewawancara virtual','Jawab langsung, beri satu alasan dan contoh pendek. Rekam dan dengarkan ulang.','iel6']]}
 ]},

{id:'kls',n:'Kelas 11',c:'#CF456D',
 fmt:'Rapor dan ulangan kelas 11 semester 1. Yang pasti dari PDF-mu baru Matematika (buku Matriks). Mapel lain masih memakai perkiraan bab umum sampai kamu mengirim silabus atau kisi-kisi ulangan sekolahmu.',
 sumber:'Buku “Matriks untuk SMA/SMK Kelas XI” (PDF-mu). Bahasa Inggris tidak dimasukkan ke rapor dan ulangan. Bab mapel lain: perkiraan, belum dicocokkan dengan sekolahmu.',
 strat:[
  'Kerjakan ulangan dari bab yang paling dekat jadwalnya. Planner otomatis menaikkan prioritas mapel yang punya ulangan dalam 21 hari.',
  'Sebisa mungkin pilih bab sekolah yang juga keluar di TKA, UTBK, atau TOEFL (ditandai banyak target). Bab itu paling hemat waktu.',
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
   ['Bahasa Indonesia','Teks eksposisi, argumentasi, struktur dan kebahasaan teks','Sama dengan bab TKA dan UTBK.','ind1,ind2,ind3']]}
 ]}
];

/* Hal-hal yang belum ada di web ini dan perlu dikirim Adiva. Dicek manual oleh Claude saat kamu memberi materi. */
RB.gap = [
 {t:'Jadwal ulangan & kisi-kisi dari sekolah',d:'Untuk tiap mapel kelas 11 semester 1: bab yang diujikan dan tanggalnya. Isi jenis (UH/UTS/UAS), tanggal, dan bab di tab Ulangan, lalu kirim fotonya ke Claude kalau mau dibuatkan ringkasan dan soal bab itu.'},
 {t:'Nilai rapor dan target',d:'Nilai sekarang tiap mapel dan target rapor. Isi di tab Rapor & Target supaya planner tahu mapel mana yang perlu didorong.'},
 {t:'Jadwal lomba & organisasi',d:'Tanggal lomba dan rapat/acara organisasi, supaya hari padat otomatis jadi hari ringan.'},
 {t:'TKA: Matematika wajib atau tingkat lanjut (TL)?',d:'Dalam PDF ada edisi Matematika, Matematika TL, B. Indonesia TL, dan B. Inggris TL. Web ini memakai edisi biasa. Kabari kalau kamu ambil TL.'},
 {t:'TKA Biologi & Kimia lengkap',d:'Kimia dasar (struktur atom, sistem periodik, ikatan, perhitungan kimia) Kimia fisik (termokimia, laju reaksi, kesetimbangan), serta asam–basa, titrasi, dan hidrolisis sudah masuk dari 9 PDF yang kamu kirim. Kimia yang belum ada materinya: larutan penyangga (PDF khusus), Ksp, koloid, redoks & elektrokimia, hidrokarbon & senyawa karbon. Biologi: OCR kisi-kisi tidak menampilkan genetika/evolusi. Kirim materi bab-bab itu kalau ada.'},
 {t:'Tanggal resmi TKA dan UTBK',d:'Tanggal di web masih perkiraan dari pola 2026. Kirim tanggal dari pengumuman resmi ketika sudah keluar.'},
 {t:'TOEFL: iBT atau ITP, target skor, tanggal tes',d:'Web mengasumsikan TOEFL iBT format 2026. Kalau kampus meminta TOEFL ITP, kabari supaya peta bab disesuaikan. Isi target skor di tab Rapor & Target.'},
 {t:'TOEFL: materi latihan',d:'Belum ada materi dan soal TOEFL. Kirim sumber latihanmu (buku, PDF, atau soal yang pernah kamu kerjakan) dan Claude membuat latihan polanya.'},
 {t:'UTBK: materi tiap seksi',d:'Sudah ada peta 7 seksi. Materi dan contoh soalnya belum ada. Kirim contoh soal pola yang sering keluar.'},
 {t:'Pola soal dari kamu',d:'Kirim 5–10 contoh soal per bab (foto atau PDF). Claude membuat soal baru dengan pola sama, bukan menyalin soalnya.'},
 {t:'File prep-plan-5.pdf',d:'Isinya checklist UCAT (tes masuk kedokteran Inggris/Australia), bukan TOEFL/UTBK/TKA. Tidak dipakai kecuali kamu mau mendaftar kedokteran luar negeri.'},
 {t:'Logo Universitas Indonesia',d:'Web memakai lencana “FK UI” buatan sendiri. Kirim file logo resmi yang boleh kamu pakai, lalu Claude menaruhnya di folder assets/ dan otomatis tampil.'}
];

/* Buku catatan: isi lengkap per sub-bab (rumus, contoh tiap tipe soal, jebakan). Ditulis ulang dengan kata-kata sendiri. */
window.RB = window.RB || {};
RB.buku = {
 "utb29": {
  "intro": "Bab ini adalah fondasi semua soal hitungan UTBK: bilangan bulat, faktor, KPK–FPB, bilangan prima, pangkat, akar, sisa pembagian, dan angka satuan. Soalnya sering dibungkus cerita (lampu menyala bergantian, membagi barang), jadi kuncinya adalah mengenali kata kunci: kata \"bersamaan lagi\" artinya KPK, kata \"dibagi sama banyak\" artinya FPB.",
  "points": [
   "FPB = faktor persekutuan terbesar: ambil faktor prima yang sama dengan pangkat terkecil.",
   "KPK = kelipatan persekutuan terkecil: ambil semua faktor prima dengan pangkat terbesar.",
   "Jalan pintas: FPB(a,b) × KPK(a,b) = a × b (hanya untuk dua bilangan).",
   "Banyak faktor positif n = p₁^a · p₂^b · … adalah (a+1)(b+1)….",
   "Bilangan prima: hanya punya 2 faktor (1 dan dirinya). 2 adalah satu-satunya prima genap. 1 bukan prima.",
   "Pangkat: aᵐ·aⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ.",
   "Akar: √(a·b) = √a·√b. Sederhanakan dengan mencari faktor kuadrat sempurna (4, 9, 16, 25, 36, …).",
   "Angka satuan aⁿ berulang dalam siklus. Siklus 7: 7, 9, 3, 1 (panjang 4). Siklus 2: 2, 4, 8, 6. Siklus 3: 3, 9, 7, 1. Siklus 4: 4, 6. Siklus 5, 6, 0, 1 tetap."
  ],
  "notes": [
   {
    "h": "Cara cepat FPB dan KPK",
    "t": [
     "Faktorkan dulu kedua bilangan menjadi bilangan prima. Contoh: 12 = 2² × 3 dan 18 = 2 × 3².",
     "- **FPB**: ambil faktor yang muncul di keduanya, pangkat terkecil → 2 × 3 = 6.",
     "- **KPK**: ambil semua faktor, pangkat terbesar → 2² × 3² = 36.",
     "Cek cepat: 6 × 36 = 216 = 12 × 18. Cocok.",
     "Tanda soal cerita: **\"bersamaan lagi\", \"bertemu lagi\", \"berbunyi bersama\"** → KPK. **\"dibagi sama banyak\", \"kelompok terbanyak\", \"ubin terbesar\"** → FPB."
    ]
   },
   {
    "h": "Faktor dan bilangan prima",
    "t": [
     "Untuk menghitung banyak faktor, faktorkan ke prima lalu tambah 1 pada tiap pangkat dan kalikan.",
     "- 72 = 2³ × 3² → (3+1)(2+1) = 12 faktor.",
     "- 100 = 2² × 5² → 3 × 3 = 9 faktor. Bilangan kuadrat sempurna selalu punya faktor ganjil.",
     "Untuk tes apakah n prima, cukup coba bagi dengan prima sampai √n. Contoh 97: coba 2, 3, 5, 7 (karena 10² = 100 > 97). Tidak ada yang habis → 97 prima."
    ]
   },
   {
    "h": "Sisa pembagian dan angka satuan",
    "t": [
     "Soal pangkat besar tidak boleh dihitung langsung. Cari polanya.",
     "- Angka satuan: tulis siklus satuan, lalu bagi pangkat dengan panjang siklus dan lihat sisanya. Sisa 0 berarti elemen terakhir siklus.",
     "- Sisa pembagian: hitung sisa a¹, a², a³, … terhadap pembagi sampai sisa berulang, lalu pakai pola itu.",
     "Contoh: 3¹⁰⁰ dibagi 5. Sisa 3, 4, 2, 1 lalu berulang (panjang 4). 100 habis dibagi 4 → sisa elemen terakhir = 1."
    ]
   }
  ],
  "types": [
   {
    "n": "KPK dalam soal cerita (kejadian berulang)",
    "ciri": "Dua kejadian berulang dengan periode berbeda, ditanya kapan terjadi bersamaan lagi.",
    "cara": "Cari KPK kedua periode.",
    "q": "Lampu merah menyala tiap 12 detik, lampu biru tiap 18 detik. Keduanya menyala bersamaan pada detik 0. Keduanya menyala bersamaan lagi pada detik ke ….",
    "o": [
     "6",
     "36",
     "72",
     "216"
    ],
    "a": "B",
    "e": "12 = 2² × 3, 18 = 2 × 3². KPK = 2² × 3² = 36. Jadi bersamaan lagi pada detik ke-36."
   },
   {
    "n": "FPB dalam soal cerita (membagi rata)",
    "ciri": "Barang dibagi ke kelompok sama banyak, ditanya kelompok terbanyak atau ukuran terbesar.",
    "cara": "Cari FPB jumlah semua barang.",
    "q": "Ada 48 buku dan 72 pensil. Semuanya dibagi ke beberapa kelompok sama banyak tanpa sisa. Banyak kelompok paling banyak adalah ….",
    "o": [
     "12",
     "24",
     "36",
     "144"
    ],
    "a": "B",
    "e": "FPB(48,72): 48 = 2⁴·3 dan 72 = 2³·3². FPB = 2³·3 = 24. Tiap kelompok mendapat 2 buku dan 3 pensil."
   },
   {
    "n": "Banyak faktor positif",
    "ciri": "Ditanya banyaknya faktor atau pembagi suatu bilangan.",
    "cara": "Faktorkan ke prima, tambah 1 tiap pangkat, kalikan.",
    "q": "Banyak faktor positif dari 72 adalah ….",
    "o": [
     "6",
     "9",
     "12",
     "18"
    ],
    "a": "C",
    "e": "72 = 2³ × 3². Banyak faktor = (3+1)(2+1) = 12."
   },
   {
    "n": "Angka satuan pangkat besar",
    "ciri": "Pangkat sangat besar, ditanya angka terakhir.",
    "cara": "Tulis siklus satuan, bagi pangkat dengan panjang siklus.",
    "q": "Angka satuan dari 7²⁰²³ adalah ….",
    "o": [
     "1",
     "3",
     "7",
     "9"
    ],
    "a": "B",
    "e": "Satuan 7ⁿ berulang: 7, 9, 3, 1 (panjang 4). 2023 ÷ 4 sisa 3 → elemen ke-3 = 3."
   },
   {
    "n": "Sisa pembagian pangkat",
    "ciri": "Ditanya sisa aⁿ dibagi bilangan kecil.",
    "cara": "Cari pola sisa, lalu pakai siklusnya.",
    "q": "Sisa pembagian 3¹⁰⁰ oleh 5 adalah ….",
    "o": [
     "1",
     "2",
     "3",
     "4"
    ],
    "a": "A",
    "e": "Sisa 3¹, 3², 3³, 3⁴ oleh 5: 3, 4, 2, 1, lalu berulang. 100 habis dibagi 4 → sisa = 1."
   },
   {
    "n": "Penyederhanaan pangkat",
    "ciri": "Banyak pangkat dengan dasar berbeda tetapi bisa disamakan.",
    "cara": "Samakan dasar (2, 4, 8 → 2), lalu jumlahkan atau kurangkan pangkat.",
    "q": "Nilai dari (2⁶ × 4²) ÷ 8² adalah ….",
    "o": [
     "4",
     "8",
     "16",
     "32"
    ],
    "a": "C",
    "e": "4 = 2² dan 8 = 2³. Pangkatnya 6 + 2·2 − 2·3 = 4. Jadi 2⁴ = 16."
   }
  ],
  "traps": [
   "Menukar FPB dan KPK. FPB selalu ≤ bilangan terkecil, KPK selalu ≥ bilangan terbesar.",
   "Menganggap 1 sebagai bilangan prima, atau lupa 2 itu prima.",
   "Pada banyak faktor, lupa menambah 1 pada pangkat (hasilnya jadi pangkat-nya dikalikan saja).",
   "Menghitung pangkat besar langsung. Selalu cari pola siklus.",
   "Pada soal \"bersamaan lagi untuk ke-k kali\", jawabannya k × KPK, bukan KPK saja."
  ]
 },
 "utb30": {
  "intro": "Pecahan, persen, perbandingan, skala, dan rata-rata adalah bahan hampir semua soal cerita UTBK. Kebiasaan yang paling menolong: tulis dulu \"dibandingkan terhadap apa\" (jumlah awal, harga awal, atau total), karena banyak jebakan terletak di situ.",
  "points": [
   "p% dari y = (p/100) × y.",
   "Persentase perubahan = (perubahan ÷ nilai AWAL) × 100%.",
   "Naik p% lalu turun q%: faktor akhir = (1 + p/100)(1 − q/100). Bukan p − q.",
   "Perbandingan a : b dengan jumlah T → bagian pertama = a/(a+b) × T.",
   "Senilai (makin besar, makin besar): bagi silang. Berbalik nilai (makin banyak pekerja, makin sedikit hari): kalikan, total beban tetap.",
   "Skala 1 : n artinya 1 cm di peta = n cm sebenarnya. 100.000 cm = 1 km.",
   "Rata-rata gabungan = (jumlah semua data) ÷ (banyak semua data), bukan rata-rata dari dua rata-rata.",
   "Kecepatan rata-rata = jarak total ÷ waktu total. Untuk pergi-pulang jarak sama: 2v₁v₂/(v₁+v₂)."
  ],
  "notes": [
   {
    "h": "Persen dan perubahan persen",
    "t": [
     "Cara paling aman: ubah ke angka nyata. Misal harga awal = 100.",
     "- Naik 30% → 130. Lalu turun 20% dari 130 → 104. Jadi naik 4%.",
     "- Turun 20% lalu naik 25%: 100 → 80 → 100. Kembali ke awal (0%).",
     "Persen \"dari sisa\" selalu dihitung dari yang tersisa saat itu, bukan dari jumlah awal."
    ]
   },
   {
    "h": "Perbandingan, skala, dan pekerjaan",
    "t": [
     "- Uang A : B = 2 : 7 dan jumlah 108.000 → satu bagian = 108.000 ÷ 9 = 12.000 → A = 24.000.",
     "- Skala 1 : 250.000 dan jarak peta 4 cm → 1.000.000 cm = 10 km.",
     "- 4 pekerja selesai 15 hari = 60 pekerja-hari. Kalau 6 pekerja → 60 ÷ 6 = 10 hari."
    ]
   },
   {
    "h": "Rata-rata",
    "t": [
     "- Rata-rata 10 siswa = 70 dan 15 siswa = 80 → jumlah 700 + 1.200 = 1.900, banyak 25 → rata-rata 76.",
     "- Satu data ditambahkan: jumlah baru − jumlah lama = nilai data baru.",
     "- Satu data dikeluarkan: (jumlah lama − data itu) ÷ (banyak lama − 1)."
    ]
   }
  ],
  "types": [
   {
    "n": "Naik lalu turun (persen bertingkat)",
    "ciri": "Dua perubahan persen berturut-turut, ditanya perubahan akhir.",
    "cara": "Misalkan awal 100, kerjakan berurutan.",
    "q": "Harga barang naik 20% lalu turun 20% dari harga setelah naik. Dibanding harga semula, harga akhir ….",
    "o": [
     "tetap",
     "turun 4%",
     "naik 4%",
     "turun 20%"
    ],
    "a": "B",
    "e": "100 → 120 → 96. Harga akhir 96, turun 4%."
   },
   {
    "n": "Perbandingan berbalik nilai",
    "ciri": "Lebih banyak pekerja/mesin, lebih cepat selesai.",
    "cara": "Hitung total beban, bagi dengan jumlah baru.",
    "q": "5 pekerja menyelesaikan proyek dalam 12 hari. Jika 8 pekerja (kemampuan sama), selesai dalam … hari.",
    "o": [
     "7",
     "7,5",
     "8",
     "19,2"
    ],
    "a": "B",
    "e": "Beban = 5 × 12 = 60. 60 ÷ 8 = 7,5 hari."
   },
   {
    "n": "Rata-rata gabungan",
    "ciri": "Dua kelompok dengan rata-rata berbeda digabung.",
    "cara": "Jumlahkan total nilai, bagi banyak orang.",
    "q": "10 siswa rata-rata 70 dan 15 siswa rata-rata 80. Rata-rata seluruhnya ….",
    "o": [
     "75",
     "76",
     "77",
     "78"
    ],
    "a": "B",
    "e": "(10×70 + 15×80) ÷ 25 = 1.900 ÷ 25 = 76. Bukan 75 karena banyak siswa tidak sama."
   },
   {
    "n": "Kecepatan rata-rata pergi-pulang",
    "ciri": "Pergi dan pulang jarak sama, kecepatan beda.",
    "cara": "Pakai 2v₁v₂/(v₁+v₂), bukan rata-rata biasa.",
    "q": "Pergi 60 km/jam, pulang 40 km/jam lewat jalur sama. Kecepatan rata-rata … km/jam.",
    "o": [
     "45",
     "48",
     "50",
     "52"
    ],
    "a": "B",
    "e": "2·60·40/(60+40) = 4.800/100 = 48 km/jam."
   },
   {
    "n": "Skala peta",
    "ciri": "Jarak di peta diubah ke jarak nyata.",
    "cara": "Kalikan dengan penyebut skala, ubah cm ke km (÷100.000).",
    "q": "Peta berskala 1 : 250.000. Jarak dua kota di peta 4 cm. Jarak sebenarnya … km.",
    "o": [
     "1",
     "10",
     "100",
     "1.000"
    ],
    "a": "B",
    "e": "4 × 250.000 = 1.000.000 cm = 10 km."
   }
  ],
  "traps": [
   "Menghitung persen perubahan terhadap nilai AKHIR. Yang benar terhadap nilai AWAL.",
   "Menjumlahkan persen bertingkat (naik 30% turun 20% bukan naik 10%).",
   "Memakai rata-rata dari dua rata-rata padahal jumlah anggotanya berbeda.",
   "Mencampur senilai dan berbalik nilai. Tanya diri: kalau satu naik, yang lain naik atau turun?",
   "Salah konversi satuan skala (cm ke km)."
  ]
 },
 "utb15": {
  "notes": [
   {
    "h": "Peta rumus aritmetika sosial",
    "t": [
     "- **Untung** = harga jual − harga beli. **Rugi** = harga beli − harga jual.",
     "- **Persen untung/rugi** selalu terhadap harga BELI.",
     "- **Diskon bertingkat**: dikalikan, bukan dijumlahkan. Diskon 20% lalu 10% → ×0,8 ×0,9 = ×0,72 (jadi 28%, bukan 30%).",
     "- **Pajak/PPN** menambah: ×(1 + persen).",
     "- **Bunga tunggal**: B = M × persen × waktu. Bunga dihitung dari modal awal terus.",
     "- **Bunga majemuk**: M × (1 + persen)ⁿ. Bunga ikut berbunga.",
     "- **Impas**: pendapatan = biaya. Kalau ada barang rusak, bagi total modal dengan barang yang bisa dijual."
    ]
   },
   {
    "h": "Urutan berpikir untuk soal bertingkat",
    "t": [
     "Tulis rantai perhitungan dari awal: harga label → diskon 1 → diskon 2 → pajak → total.",
     "Untuk soal mundur (cari harga awal), bagi dengan faktor total, jangan kurangkan persen."
    ]
   }
  ],
  "types": [
   {
    "n": "Persen untung",
    "ciri": "Harga beli dan jual diketahui, ditanya persen untung.",
    "cara": "Untung ÷ harga beli × 100%.",
    "q": "Barang dibeli Rp80.000,00 dan dijual Rp100.000,00. Persentase keuntungan ….",
    "o": [
     "20%",
     "25%",
     "30%",
     "80%"
    ],
    "a": "B",
    "e": "Untung = 20.000. 20.000 ÷ 80.000 = 25%. (Bukan 20% karena dibagi harga BELI.)"
   },
   {
    "n": "Diskon bertingkat",
    "ciri": "Dua diskon berturut-turut.",
    "cara": "Kalikan faktor tiap diskon.",
    "q": "Harga Rp200.000,00 diskon 20% lalu diskon tambahan 10%. Harga akhir ….",
    "o": [
     "Rp140.000,00",
     "Rp144.000,00",
     "Rp150.000,00",
     "Rp160.000,00"
    ],
    "a": "B",
    "e": "200.000 × 0,8 × 0,9 = 144.000. Bukan 140.000 (itu kalau dijumlah 30%)."
   },
   {
    "n": "Bunga tunggal dengan bulan",
    "ciri": "Waktu dalam bulan, bunga per tahun.",
    "cara": "Ubah bulan jadi tahun (÷12).",
    "q": "Menabung Rp2.000.000,00, bunga tunggal 6% per tahun, selama 9 bulan. Bunga ….",
    "o": [
     "Rp60.000,00",
     "Rp90.000,00",
     "Rp100.000,00",
     "Rp120.000,00"
    ],
    "a": "B",
    "e": "2.000.000 × 6% × 9/12 = 90.000."
   },
   {
    "n": "Bunga majemuk",
    "ciri": "Bunga ikut berbunga tiap periode.",
    "cara": "Kalikan faktor (1 + persen) sebanyak periodenya.",
    "q": "Modal Rp1.000.000,00 berbunga majemuk 10% per tahun. Setelah 2 tahun menjadi ….",
    "o": [
     "Rp1.200.000,00",
     "Rp1.210.000,00",
     "Rp1.220.000,00",
     "Rp1.100.000,00"
    ],
    "a": "B",
    "e": "1.000.000 × 1,1 × 1,1 = 1.210.000. (Bunga tunggal hanya 1.200.000.)"
   }
  ]
 },
 "utb31": {
  "intro": "Aljabar di UTBK jarang menyuruh \"selesaikan persamaan\" mentah; soalnya biasanya menanyakan sifat akar (jumlah, hasil kali, diskriminan), nilai mutlak, pertidaksamaan, atau nilai maksimum/minimum fungsi kuadrat. Kuasai alat-alat ini dan sebagian besar soal selesai dalam satu–dua langkah.",
  "points": [
   "Linear: ax + b = c → x = (c − b)/a. Pertidaksamaan: tanda berbalik kalau dikali/dibagi bilangan negatif.",
   "Kuadrat ax² + bx + c = 0: jumlah akar = −b/a, hasil kali akar = c/a.",
   "x₁² + x₂² = (x₁+x₂)² − 2x₁x₂. Pola ini keluar terus.",
   "Diskriminan D = b² − 4ac. D > 0 dua akar beda, D = 0 akar kembar, D < 0 tidak ada akar real.",
   "|x − a| = b → x = a + b atau x = a − b. |x − a| < b → a − b < x < a + b. |x − a| > b → x < a − b atau x > a + b.",
   "Parabola y = ax² + bx + c: sumbu simetri x = −b/2a, nilai ekstrem = y di x itu (maksimum jika a < 0, minimum jika a > 0).",
   "Puncak juga = c − b²/(4a)."
  ],
  "notes": [
   {
    "h": "Memakai jumlah dan hasil kali akar",
    "t": [
     "Tidak perlu mencari akarnya. Contoh: x² − 7x + 10 = 0, jumlah = 7, hasil kali = 10.",
     "- x₁² + x₂² = 7² − 2·10 = 29.",
     "- 1/x₁ + 1/x₂ = (x₁+x₂)/(x₁x₂) = 7/10.",
     "- (x₁ − x₂)² = (x₁+x₂)² − 4x₁x₂ = 49 − 40 = 9."
    ]
   },
   {
    "h": "Diskriminan untuk soal \"nilai k\"",
    "t": [
     "Kata kunci: **akar kembar** → D = 0. **Dua akar berbeda** → D > 0. **Tidak memotong sumbu-X** → D < 0.",
     "Contoh: x² + kx + 9 = 0 kembar → k² − 36 = 0 → k = 6 atau k = −6 (ada dua nilai)."
    ]
   },
   {
    "h": "Nilai mutlak dan pertidaksamaan",
    "t": [
     "Nilai mutlak = jarak ke nol. |x − 3| < 2 artinya jarak x ke 3 kurang dari 2, jadi 1 < x < 5.",
     "Menghitung bilangan bulat dalam rentang: buang ujungnya kalau tandanya < atau >, ikutkan kalau ≤ atau ≥."
    ]
   }
  ],
  "types": [
   {
    "n": "Jumlah kuadrat akar",
    "ciri": "Ditanya x₁² + x₂² atau bentuk simetris lain.",
    "cara": "Cari jumlah dan hasil kali dulu.",
    "q": "Akar-akar x² − 7x + 10 = 0 adalah x₁ dan x₂. Nilai x₁² + x₂² = ….",
    "o": [
     "19",
     "29",
     "39",
     "49"
    ],
    "a": "B",
    "e": "x₁+x₂ = 7, x₁x₂ = 10. 49 − 20 = 29."
   },
   {
    "n": "Syarat akar kembar",
    "ciri": "Ditanya nilai parameter agar akar kembar/berbeda/tidak real.",
    "cara": "Pakai diskriminan.",
    "q": "Persamaan x² + kx + 9 = 0 memiliki akar kembar. Nilai k yang mungkin adalah ….",
    "o": [
     "3",
     "6",
     "±3",
     "±6"
    ],
    "a": "D",
    "e": "D = k² − 36 = 0 → k² = 36 → k = ±6."
   },
   {
    "n": "Persamaan nilai mutlak",
    "ciri": "Bentuk |ax + b| = c.",
    "cara": "Pecah jadi dua persamaan.",
    "q": "Jumlah semua x yang memenuhi |2x − 1| = 5 adalah ….",
    "o": [
     "−1",
     "1",
     "2",
     "3"
    ],
    "a": "B",
    "e": "2x − 1 = 5 → x = 3. 2x − 1 = −5 → x = −2. Jumlah = 1."
   },
   {
    "n": "Pertidaksamaan: hitung bilangan",
    "ciri": "Ditanya banyak bilangan asli/bulat yang memenuhi.",
    "cara": "Selesaikan dulu pertidaksamaan, lalu hitung.",
    "q": "Banyak bilangan asli x yang memenuhi 3x − 2 < 10 adalah ….",
    "o": [
     "2",
     "3",
     "4",
     "5"
    ],
    "a": "B",
    "e": "3x < 12 → x < 4. Bilangan asli: 1, 2, 3 → 3 buah (4 tidak ikut)."
   },
   {
    "n": "Nilai ekstrem parabola",
    "ciri": "Ditanya nilai maksimum/minimum.",
    "cara": "Cari x puncak = −b/2a, lalu substitusi.",
    "q": "Nilai maksimum f(x) = −x² + 6x − 5 adalah ….",
    "o": [
     "3",
     "4",
     "5",
     "9"
    ],
    "a": "B",
    "e": "x = −6/(2·(−1)) = 3. f(3) = −9 + 18 − 5 = 4."
   }
  ],
  "traps": [
   "Pada akar kembar, lupa bahwa k bisa positif dan negatif (±).",
   "Lupa membalik tanda pertidaksamaan saat dibagi bilangan negatif.",
   "Mengira |x| = −3 punya solusi (nilai mutlak tidak pernah negatif).",
   "Mengambil x puncak sebagai jawaban padahal yang ditanya nilai y-nya.",
   "Salah menghitung jumlah bilangan bulat di antara dua batas (ujung tidak ikut kalau tanda < atau >)."
  ]
 },
 "utb32": {
  "intro": "Soal cerita sistem persamaan: umur, harga, roda kendaraan, tarif, pekerjaan bersama. Langkahnya selalu sama: (1) tentukan apa yang dimisalkan, (2) terjemahkan tiap kalimat jadi persamaan, (3) selesaikan dengan eliminasi/substitusi, (4) jawab PERTANYAAN yang diminta (sering bukan x atau y-nya, tetapi gabungan).",
  "points": [
   "Misal dengan huruf yang mudah diingat (p untuk pensil, b untuk buku).",
   "Eliminasi: samakan koefisien satu variabel, lalu jumlah/kurangkan persamaan.",
   "Umur: n tahun lalu = (umur − n); n tahun lagi = (umur + n). Selisih umur selalu tetap.",
   "Tarif linear: total = tarif tetap + tarif per satuan × jumlah. Dua data cukup menentukan keduanya.",
   "Dua pekerja: kecepatan gabungan = 1/a + 1/b, waktu = 1/(1/a + 1/b) = ab/(a+b).",
   "Kendaraan: jumlah kepala = jumlah kendaraan, roda = 2m + 4b."
  ],
  "notes": [
   {
    "h": "Resep 4 langkah",
    "t": [
     "- **Misalkan**: tulis jelas, mis. m = motor, b = mobil.",
     "- **Terjemahkan**: setiap kalimat satu persamaan.",
     "- **Selesaikan**: eliminasi biasanya paling cepat.",
     "- **Jawab yang ditanya**: cek lagi kata terakhir di soal (jumlah? selisih? salah satu saja?)."
    ]
   },
   {
    "h": "Jalan pintas yang sering berguna",
    "t": [
     "Kalau yang ditanya \"harga 1 pensil + 1 buku\", jumlahkan dua persamaan dulu, kadang langsung ketemu tanpa mencari p dan b satu-satu.",
     "Soal roda: andaikan semuanya motor (2 roda), kelebihan roda dibagi 2 = jumlah mobil."
    ]
   },
   {
    "h": "Soal umur",
    "t": [
     "Selisih umur dua orang tidak pernah berubah. Gunakan itu untuk menyederhanakan.",
     "Contoh: Ayah 3 kali umur anak. 6 tahun lalu ayah 5 kali umur anak. Misal anak = x → 3x − 6 = 5(x − 6) → x = 12."
    ]
   }
  ],
  "types": [
   {
    "n": "Harga dua barang",
    "ciri": "Dua belanja berbeda, ditanya harga gabungan atau salah satu.",
    "cara": "Eliminasi dua persamaan.",
    "q": "Ani membeli 2 pensil dan 3 buku seharga Rp19.000. Bayu membeli 3 pensil dan 1 buku seharga Rp11.000. Harga 1 pensil dan 1 buku ….",
    "o": [
     "Rp6.000",
     "Rp7.000",
     "Rp8.000",
     "Rp9.000"
    ],
    "a": "B",
    "e": "Dari 3p + b = 11.000 → b = 11.000 − 3p. Masuk ke 2p + 3b = 19.000: 2p + 33.000 − 9p = 19.000 → p = 2.000, b = 5.000. Jumlah 7.000."
   },
   {
    "n": "Umur",
    "ciri": "Perbandingan umur dulu dan sekarang.",
    "cara": "Misal umur sekarang, tulis persamaan dulu.",
    "q": "Umur ayah 3 kali umur anak. 6 tahun lalu umur ayah 5 kali umur anak. Umur anak sekarang … tahun.",
    "o": [
     "10",
     "12",
     "14",
     "18"
    ],
    "a": "B",
    "e": "3x − 6 = 5(x − 6) → 3x − 6 = 5x − 30 → 2x = 24 → x = 12."
   },
   {
    "n": "Kendaraan: kepala dan roda",
    "ciri": "Jumlah kendaraan dan jumlah roda diberikan.",
    "cara": "Dua persamaan: m + b dan 2m + 4b.",
    "q": "Ada 20 kendaraan (motor dan mobil) dengan total 70 roda. Banyak motor ….",
    "o": [
     "5",
     "10",
     "15",
     "20"
    ],
    "a": "A",
    "e": "m + b = 20 dan 2m + 4b = 70. Kalikan pertama dengan 2: 2m + 2b = 40. Kurangkan: 2b = 30 → b = 15 → m = 5."
   },
   {
    "n": "Tarif tetap + per satuan",
    "ciri": "Dua pengukuran tarif, ditanya tarif lain.",
    "cara": "Cari tarif per satuan dari selisih, lalu tarif tetap.",
    "q": "Untuk 3 km dibayar Rp19.000 dan untuk 12 km Rp46.000 (tarif awal + tarif per km tetap). Untuk 17 km dibayar ….",
    "o": [
     "Rp55.000",
     "Rp61.000",
     "Rp64.000",
     "Rp68.000"
    ],
    "a": "B",
    "e": "Per km = (46.000 − 19.000)/9 = 3.000. Tarif awal = 19.000 − 9.000 = 10.000. 17 km = 10.000 + 51.000 = 61.000."
   },
   {
    "n": "Pekerjaan bersama",
    "ciri": "Dua orang dengan waktu sendiri-sendiri bekerja bersama.",
    "cara": "Jumlahkan kecepatan 1/a + 1/b.",
    "q": "Andi selesai 20 hari sendiri, Budi 30 hari sendiri. Bekerja bersama selesai … hari.",
    "o": [
     "10",
     "12",
     "15",
     "25"
    ],
    "a": "B",
    "e": "1/20 + 1/30 = 5/60 = 1/12 → 12 hari."
   }
  ],
  "traps": [
   "Menjawab nilai x padahal ditanya x + y (atau sebaliknya).",
   "Salah mengurutkan umur dulu: umur dulu = umur sekarang − n, bukan + n.",
   "Menjumlah waktu kerja (20 + 30) bukan kecepatan kerja.",
   "Lupa mengecek hasil dengan memasukkannya ke persamaan lain."
  ]
 },
 "utb33": {
  "intro": "Fungsi di UTBK keluar sebagai komposisi, invers, domain, serta titik potong dan gradien garis. Semuanya soal prosedur: kerjakan dari dalam ke luar untuk komposisi, balik langkah untuk invers, dan pegang batasan (akar ≥ 0, penyebut ≠ 0) untuk domain.",
  "points": [
   "(f ∘ g)(x) = f(g(x)): kerjakan g dulu, hasilnya masuk ke f. Urutan penting, f∘g ≠ g∘f.",
   "Invers f(x) = ax + b: f⁻¹(y) = (y − b)/a.",
   "Domain √(…): isi akar ≥ 0. Domain 1/(…): penyebut ≠ 0.",
   "Titik potong sumbu-X: set y = 0. Sumbu-Y: set x = 0.",
   "Gradien melalui (x₁,y₁) dan (x₂,y₂): m = (y₂ − y₁)/(x₂ − x₁).",
   "Sejajar: gradien sama. Tegak lurus: m₁ · m₂ = −1.",
   "Persamaan garis dengan gradien m melalui (x₁,y₁): y − y₁ = m(x − x₁)."
  ],
  "notes": [
   {
    "h": "Komposisi dan invers",
    "t": [
     "- (f∘g)(4): hitung g(4) dulu, misalnya 5, lalu f(5).",
     "- Mencari f⁻¹(k) tanpa merumuskan seluruh invers: **selesaikan f(x) = k**. Contoh f(x) = 2x + 7, f⁻¹(13): 2x + 7 = 13 → x = 3."
    ]
   },
   {
    "h": "Domain dan range",
    "t": [
     "Tulis syaratnya dulu: akar → isi ≥ 0; pecahan → penyebut ≠ 0; logaritma → isi > 0.",
     "Contoh f(x) = √(5x − 14): 5x ≥ 14 → x ≥ 2,8. Bilangan bulat terkecil = 3."
    ]
   },
   {
    "h": "Garis lurus",
    "t": [
     "Dua titik → gradien → persamaan garis.",
     "Garis y = mx + c: m gradien, c titik potong sumbu-Y. Titik potong sumbu-X = −c/m."
    ]
   }
  ],
  "types": [
   {
    "n": "Komposisi fungsi",
    "ciri": "Dua fungsi, ditanya nilai komposisi.",
    "cara": "Kerjakan dari dalam ke luar.",
    "q": "f(x) = 3x − 2 dan g(x) = 2x − 3. Nilai (f ∘ g)(4) = ….",
    "o": [
     "11",
     "13",
     "17",
     "19"
    ],
    "a": "B",
    "e": "g(4) = 5. f(5) = 15 − 2 = 13. (Kebalikannya g∘f(4) = 17.)"
   },
   {
    "n": "Nilai invers",
    "ciri": "Ditanya f⁻¹(k).",
    "cara": "Selesaikan f(x) = k.",
    "q": "f(x) = 2x + 7. Nilai f⁻¹(13) = ….",
    "o": [
     "3",
     "6",
     "10",
     "20"
    ],
    "a": "A",
    "e": "2x + 7 = 13 → x = 3."
   },
   {
    "n": "Domain fungsi akar",
    "ciri": "Ditanya bilangan terkecil/terbesar dalam domain.",
    "cara": "Isi akar ≥ 0.",
    "q": "Bilangan bulat terkecil dalam domain f(x) = √(5x − 14) adalah ….",
    "o": [
     "2",
     "3",
     "4",
     "5"
    ],
    "a": "B",
    "e": "5x − 14 ≥ 0 → x ≥ 2,8 → bilangan bulat terkecil 3."
   },
   {
    "n": "Garis sejajar",
    "ciri": "Garis baru sejajar garis lain dan melalui titik.",
    "cara": "Gradien sama, lalu y − y₁ = m(x − x₁).",
    "q": "Persamaan garis sejajar y = 4x + 2 dan melalui (3, 2) adalah ….",
    "o": [
     "y = 4x − 10",
     "y = 4x + 10",
     "y = −4x + 14",
     "y = 4x + 2"
    ],
    "a": "A",
    "e": "m = 4. y − 2 = 4(x − 3) → y = 4x − 10."
   },
   {
    "n": "Titik potong sumbu",
    "ciri": "Ditanya titik potong dengan sumbu-X atau sumbu-Y.",
    "cara": "Sumbu-X: y = 0. Sumbu-Y: x = 0.",
    "q": "Grafik y = −3x + 9 memotong sumbu-X di ….",
    "o": [
     "(0, 3)",
     "(3, 0)",
     "(9, 0)",
     "(0, 9)"
    ],
    "a": "B",
    "e": "y = 0 → −3x + 9 = 0 → x = 3. Titik (3, 0). (Sumbu-Y adalah (0, 9).)"
   }
  ],
  "traps": [
   "Menukar urutan komposisi (f∘g vs g∘f).",
   "Mengira f⁻¹(x) = 1/f(x). Invers bukan kebalikan (1/…).",
   "Lupa syarat akar dan penyebut pada domain.",
   "Menukar koordinat titik potong: sumbu-X berbentuk (x, 0), sumbu-Y berbentuk (0, y)."
  ]
 },
 "utb34": {
  "intro": "Barisan dan deret di UTBK hampir selalu salah satu dari: suku ke-n aritmetika/geometri, jumlah n suku, deret geometri tak hingga, sisipan, atau soal cerita (bola memantul, tumpukan). Hafalkan enam rumus, lalu fokus pada pengenalan pola soal.",
  "points": [
   "Aritmetika: Uₙ = a + (n−1)b. Sₙ = n/2 · (2a + (n−1)b) = n/2 · (a + Uₙ).",
   "Geometri: Uₙ = a·rⁿ⁻¹. Sₙ = a(rⁿ − 1)/(r − 1) untuk r > 1, atau a(1 − rⁿ)/(1 − r) untuk r < 1.",
   "Geometri tak hingga (|r| < 1): S∞ = a/(1 − r).",
   "Sisipan k bilangan di antara a dan b (aritmetika): beda baru = (b − a)/(k + 1).",
   "Suku tengah aritmetika = rata-rata suku pertama dan terakhir. Uₙ = Sₙ − Sₙ₋₁.",
   "Bola pantul rasio r dari tinggi h: panjang lintasan total = h(1 + r)/(1 − r)."
  ],
  "notes": [
   {
    "h": "Cara mengenali jenis barisan",
    "t": [
     "- **Selisih tetap** (8, 12, 16) → aritmetika, beda b = 4.",
     "- **Perbandingan tetap** (5, 15, 45) → geometri, rasio r = 3.",
     "Kalau hanya diberi dua suku (mis. U₅ dan U₇), cari beda atau rasio dari kedua suku itu dulu."
    ]
   },
   {
    "h": "Bola memantul",
    "t": [
     "Bola dijatuhkan dari h, memantul r kali tinggi sebelumnya, terus-menerus.",
     "- Jarak turun: h + hr + hr² + … = h/(1 − r).",
     "- Jarak naik: hr + hr² + … = hr/(1 − r).",
     "- Total = turun + naik. Contoh h = 8, r = 1/2: turun 16, naik 8 → total 24 m."
    ]
   },
   {
    "h": "Deret kelipatan",
    "t": [
     "Jumlah kelipatan 5 sampai 50: 5 + 10 + … + 50 = 5(1 + 2 + … + 10) = 5 × 55 = 275.",
     "Banyak suku = batas ÷ kelipatan."
    ]
   }
  ],
  "types": [
   {
    "n": "Suku ke-n aritmetika",
    "ciri": "Ditanya suku jauh dari pola awal.",
    "cara": "Uₙ = a + (n−1)b.",
    "q": "Barisan 8, 12, 16, … Suku ke-26 adalah ….",
    "o": [
     "104",
     "108",
     "112",
     "212"
    ],
    "a": "B",
    "e": "b = 4. U₂₆ = 8 + 25·4 = 108."
   },
   {
    "n": "Jumlah n suku aritmetika",
    "ciri": "Ditanya jumlah deret.",
    "cara": "Sₙ = n/2 · (2a + (n−1)b).",
    "q": "Jumlah 20 suku pertama 7 + 12 + 17 + … adalah ….",
    "o": [
     "1.000",
     "1.090",
     "1.100",
     "2.040"
    ],
    "a": "B",
    "e": "a = 7, b = 5. S₂₀ = 10 · (14 + 95) = 1.090."
   },
   {
    "n": "Suku ke-n geometri",
    "ciri": "Pola dikali tetap.",
    "cara": "Uₙ = a·rⁿ⁻¹.",
    "q": "Barisan 5, 15, 45, … Suku ke-8 adalah ….",
    "o": [
     "3.645",
     "10.935",
     "32.805",
     "105"
    ],
    "a": "B",
    "e": "r = 3. U₈ = 5·3⁷ = 5·2.187 = 10.935."
   },
   {
    "n": "Deret geometri tak hingga",
    "ciri": "Rasio pecahan, jumlah sampai tak hingga.",
    "cara": "Periksa |r| < 1, lalu a/(1 − r).",
    "q": "Jumlah deret tak hingga 6 + 2 + 2/3 + … adalah ….",
    "o": [
     "8",
     "9",
     "12",
     "18"
    ],
    "a": "B",
    "e": "r = 1/3. S = 6/(1 − 1/3) = 6 ÷ 2/3 = 9."
   },
   {
    "n": "Bola memantul",
    "ciri": "Cerita bola dengan rasio pantulan.",
    "cara": "Total = h(1+r)/(1−r).",
    "q": "Bola dijatuhkan dari 8 m, memantul 1/2 kali tinggi sebelumnya terus-menerus. Panjang lintasan total … m.",
    "o": [
     "16",
     "24",
     "32",
     "40"
    ],
    "a": "B",
    "e": "8 × (1 + 1/2)/(1 − 1/2) = 8 × 1,5/0,5 = 24 m."
   }
  ],
  "traps": [
   "Memakai n bukan (n−1) pada Uₙ = a + (n−1)b.",
   "Memakai rumus tak hingga padahal |r| ≥ 1.",
   "Pada bola pantul, lupa bahwa lintasan awal hanya turun satu kali.",
   "Pada sisipan, menggunakan k bukan (k+1) sebagai pembagi.",
   "Menyamakan \"jumlah n suku\" dengan \"suku ke-n\"."
  ]
 },
 "utb35": {
  "intro": "Geometri bangun datar di UTBK jarang rumit; kuncinya mengenali segitiga siku-siku tersembunyi (Pythagoras), memakai rumus luas dengan benar, dan teliti pada soal \"luas daerah arsir\" (luas besar dikurangi luas kecil). Hafal tripel Pythagoras supaya tidak perlu menghitung akar.",
  "points": [
   "Pythagoras: a² + b² = c². Tripel: 3-4-5, 5-12-13, 8-15-17, 7-24-25 dan kelipatannya (6-8-10, 9-12-15, 12-16-20, 15-20-25).",
   "Jarak (x₁,y₁) ke (x₂,y₂) = √((x₂−x₁)² + (y₂−y₁)²).",
   "Luas segitiga = ½ × alas × tinggi. Persegi panjang = p × l. Trapesium = ½ × (a+b) × t. Layang-layang/belah ketupat = ½ × d₁ × d₂.",
   "Lingkaran: K = 2πr, L = πr². Pakai π = 22/7 kalau r kelipatan 7.",
   "Jumlah sudut dalam segitiga 180°. Segi-4 360°.",
   "Segitiga sama kaki: tinggi membagi alas dua sama panjang → bentuk siku-siku."
  ],
  "notes": [
   {
    "h": "Menemukan segitiga siku-siku",
    "t": [
     "- Jarak dua titik: selisih x dan selisih y adalah dua sisi siku-siku.",
     "- Segitiga sama kaki dengan alas 18 dan kaki 15: tinggi = √(15² − 9²) = 12.",
     "- Persegi panjang: diagonal membentuk segitiga siku-siku dengan p dan l."
    ]
   },
   {
    "h": "Luas daerah arsir",
    "t": [
     "Tulis: luas arsir = luas bentuk besar − luas bentuk kecil (atau jumlah bagian).",
     "Contoh: lingkaran r = 7 di dalam persegi sisi 14. Luas persegi 196, lingkaran 154, arsir = 42."
    ]
   },
   {
    "h": "Perbandingan sudut",
    "t": [
     "Sudut segitiga 2 : 2 : 5. Jumlah bagian 9, satu bagian 180° ÷ 9 = 20°. Terbesar = 5 × 20° = 100°."
    ]
   }
  ],
  "types": [
   {
    "n": "Jarak dua titik",
    "ciri": "Dua koordinat, ditanya jarak.",
    "cara": "Selisih x dan y → Pythagoras.",
    "q": "Jarak A(1, −2) dan B(9, 13) adalah ….",
    "o": [
     "15",
     "17",
     "19",
     "23"
    ],
    "a": "B",
    "e": "Selisih x = 8, selisih y = 15. √(64 + 225) = √289 = 17."
   },
   {
    "n": "Luas segitiga siku-siku dari sisi miring",
    "ciri": "Sisi miring dan satu sisi siku diketahui.",
    "cara": "Cari sisi satunya dengan Pythagoras.",
    "q": "Segitiga siku-siku dengan sisi miring 20 cm dan satu sisi siku 12 cm. Luasnya … cm².",
    "o": [
     "96",
     "120",
     "192",
     "240"
    ],
    "a": "A",
    "e": "Sisi lain = √(400 − 144) = 16. Luas = ½ × 12 × 16 = 96."
   },
   {
    "n": "Luas arsir",
    "ciri": "Lingkaran di dalam persegi.",
    "cara": "Luas persegi − luas lingkaran.",
    "q": "Lingkaran r = 7 cm menyinggung semua sisi sebuah persegi. Luas di luar lingkaran tetapi di dalam persegi … cm² (π = 22/7).",
    "o": [
     "42",
     "154",
     "196",
     "238"
    ],
    "a": "A",
    "e": "Sisi persegi = 14 → luas 196. Lingkaran = 22/7 × 49 = 154. Selisih 42."
   },
   {
    "n": "Segitiga sama kaki",
    "ciri": "Alas dan kaki diketahui, ditanya luas.",
    "cara": "Tinggi = √(kaki² − (alas/2)²).",
    "q": "Segitiga sama kaki beralas 18 cm dengan kaki 15 cm. Luasnya … cm².",
    "o": [
     "108",
     "135",
     "162",
     "216"
    ],
    "a": "A",
    "e": "Tinggi = √(225 − 81) = 12. Luas = ½ × 18 × 12 = 108."
   },
   {
    "n": "Perbandingan sudut",
    "ciri": "Sudut-sudut dalam bentuk rasio.",
    "cara": "Bagi 180° sesuai jumlah bagian.",
    "q": "Sudut segitiga berbanding 2 : 2 : 5. Sudut terbesar … derajat.",
    "o": [
     "80",
     "90",
     "100",
     "110"
    ],
    "a": "C",
    "e": "180 ÷ 9 = 20. Terbesar 5 × 20 = 100."
   }
  ],
  "traps": [
   "Salah mengira alas segitiga sama kaki sebagai tinggi.",
   "Lupa ½ pada luas segitiga atau layang-layang.",
   "Memakai diameter sebagai jari-jari (atau sebaliknya).",
   "Memakai π = 22/7 saat r bukan kelipatan 7 (hasilnya jadi pecahan jelek, biasanya tanda kesalahan)."
  ]
 },
 "utb36": {
  "intro": "Bangun ruang di UTBK: volume dan luas permukaan tabung, kerucut, bola, balok, prisma; diagonal ruang; serta soal air naik karena benda dimasukkan. Semuanya cukup dengan rumus dasar dan Pythagoras, tetapi hati-hati satuan dan \"yang ditanya volume atau luas?\".",
  "points": [
   "Tabung: V = πr²t. Selimut = 2πrt. Luas permukaan = 2πr(r + t).",
   "Kerucut: V = ⅓πr²t. Garis pelukis s = √(r² + t²). Selimut = πrs.",
   "Bola: V = 4/3 πr³. Luas permukaan = 4πr².",
   "Balok: V = plt. Luas permukaan = 2(pl + pt + lt). Diagonal ruang = √(p² + l² + t²).",
   "Kubus: rusuk s. V = s³, luas permukaan = 6s², diagonal ruang = s√3.",
   "Prisma: V = luas alas × tinggi. Limas/kerucut: ⅓ × luas alas × tinggi.",
   "Air naik karena benda tenggelam: volume benda = luas alas bak × kenaikan tinggi air."
  ],
  "notes": [
   {
    "h": "Tripel untuk diagonal ruang balok",
    "t": [
     "Sering muncul: (1,2,2)→3, (2,3,6)→7, (2,6,9)→11, (4,4,7)→9, (3,4,12)→13, (6,6,7)→11.",
     "Kalau lihat angka itu di soal balok, diagonal ruang langsung ketahuan."
    ]
   },
   {
    "h": "Air naik dan air tuang",
    "t": [
     "- Bak beralas 20 × 25 dan kubus rusuk 10 masuk: kenaikan = 1.000 ÷ 500 = 2 cm.",
     "- Air dituang dari tabung ke tabung: volume tetap. Jari-jari 2 kali lipat → luas alas 4 kali → tinggi air jadi 1/4 (atau sebaliknya 4 kali)."
    ]
   },
   {
    "h": "Memakai π",
    "t": [
     "Kalau jawabannya diminta dalam π, biarkan π tetap sebagai simbol (mis. 36π).",
     "Kalau diberi π = 22/7, pastikan r kelipatan 7 supaya hasilnya bulat."
    ]
   }
  ],
  "types": [
   {
    "n": "Volume tabung",
    "ciri": "r dan t diketahui.",
    "cara": "V = πr²t.",
    "q": "Volume tabung r = 7 cm dan t = 8 cm (π = 22/7) adalah … cm³.",
    "o": [
     "616",
     "1.232",
     "1.848",
     "2.464"
    ],
    "a": "B",
    "e": "22/7 × 49 × 8 = 22 × 7 × 8 = 1.232."
   },
   {
    "n": "Garis pelukis dan volume kerucut",
    "ciri": "Pythagoras di penampang kerucut.",
    "cara": "s = √(r² + t²).",
    "q": "Kerucut r = 6 cm dan t = 8 cm. Panjang garis pelukisnya … cm.",
    "o": [
     "10",
     "12",
     "14",
     "48"
    ],
    "a": "A",
    "e": "√(36 + 64) = 10. (Volume = ⅓π·36·8 = 96π.)"
   },
   {
    "n": "Volume bola",
    "ciri": "Jari-jari diketahui.",
    "cara": "V = 4/3 πr³.",
    "q": "Volume bola berjari-jari 3 cm adalah … cm³.",
    "o": [
     "12π",
     "27π",
     "36π",
     "108π"
    ],
    "a": "C",
    "e": "4/3 × π × 27 = 36π."
   },
   {
    "n": "Diagonal ruang balok",
    "ciri": "Tiga ukuran diketahui.",
    "cara": "√(p² + l² + t²).",
    "q": "Balok 2 cm × 6 cm × 9 cm. Diagonal ruangnya … cm.",
    "o": [
     "9",
     "11",
     "13",
     "17"
    ],
    "a": "B",
    "e": "√(4 + 36 + 81) = √121 = 11."
   },
   {
    "n": "Air naik karena benda",
    "ciri": "Benda dimasukkan ke bak air.",
    "cara": "Volume benda ÷ luas alas bak.",
    "q": "Bak beralas 20 cm × 25 cm berisi air. Kubus rusuk 10 cm dimasukkan hingga tenggelam. Air naik … cm.",
    "o": [
     "1",
     "2",
     "4",
     "10"
    ],
    "a": "B",
    "e": "1.000 ÷ 500 = 2 cm."
   }
  ],
  "traps": [
   "Memakai diameter di rumus yang butuh jari-jari.",
   "Lupa faktor ⅓ pada kerucut/limas.",
   "Mencampur luas selimut dengan luas permukaan (yang kedua juga menghitung tutup/alas).",
   "Pada air naik, memakai luas permukaan benda, padahal yang dipakai luas ALAS bak."
  ]
 },
 "utb37": {
  "intro": "Statistika di UTBK: mean, median, modus, jangkauan, kuartil, tabel frekuensi, dan soal \"data ditambah/dikurangi\". Intinya selalu ada dua cara berpikir: pakai jumlah total (untuk mean) dan pakai urutan data (untuk median, kuartil).",
  "points": [
   "Mean = jumlah data ÷ banyak data. Jumlah data = mean × banyak data.",
   "Median = data tengah setelah diurutkan. Banyak data genap: rata-rata dua data tengah.",
   "Modus = nilai paling sering muncul.",
   "Jangkauan = data terbesar − data terkecil. Jangkauan antarkuartil = Q₃ − Q₁.",
   "Tiap data dikali a lalu ditambah b → mean ikut: a·mean + b. Simpangan dikali |a|, tidak terpengaruh b.",
   "Mean dari tabel frekuensi = Σ(nilai × frekuensi) ÷ Σ frekuensi.",
   "Menambah satu data: jumlah baru = mean baru × (n+1). Selisih dengan jumlah lama = data baru."
  ],
  "notes": [
   {
    "h": "Data ditambah atau dikeluarkan",
    "t": [
     "Selalu ubah mean menjadi jumlah dulu.",
     "- Mean 8 siswa = 85 → jumlah 680. Satu siswa bernilai 50 keluar → 630 untuk 7 siswa → mean 90.",
     "- Mean 7 siswa = 64, tambah 1 siswa menjadi mean 67 → jumlah baru 8 × 67 = 536, lama 448 → data baru 88."
    ]
   },
   {
    "h": "Kuartil untuk data genap",
    "t": [
     "Urutkan, pisahkan menjadi dua bagian sama banyak. Q₂ = median seluruhnya.",
     "- Q₁ = median setengah bawah. Q₃ = median setengah atas.",
     "- Data 2, 3, 5, 13, 16, 21, 22, 24 → Q₁ = (3+5)/2 = 4. Q₃ = (21+22)/2 = 21,5. IQR = 17,5."
    ]
   },
   {
    "h": "Tabel frekuensi",
    "t": [
     "Kalikan tiap nilai dengan frekuensinya, jumlahkan, bagi jumlah frekuensi. Contoh: nilai 6 (2 siswa), 7 (3 siswa), 8 (5 siswa) → (12 + 21 + 40)/10 = 7,3."
    ]
   }
  ],
  "types": [
   {
    "n": "Mean setelah data dikeluarkan",
    "ciri": "Rata-rata awal diketahui, satu data keluar.",
    "cara": "Ubah ke jumlah.",
    "q": "Rata-rata 8 siswa 85. Jika satu nilai 50 dikeluarkan, rata-rata sisanya ….",
    "o": [
     "87",
     "88",
     "89",
     "90"
    ],
    "a": "D",
    "e": "680 − 50 = 630. 630 ÷ 7 = 90."
   },
   {
    "n": "Median data genap",
    "ciri": "Banyak data genap.",
    "cara": "Urutkan, ambil dua data tengah.",
    "q": "Median data 7, 9, 7, 3, 7, 16, 18, 12 adalah ….",
    "o": [
     "7",
     "8",
     "9",
     "10"
    ],
    "a": "B",
    "e": "Urut: 3, 7, 7, 7, 9, 12, 16, 18. Dua tengah 7 dan 9 → median 8."
   },
   {
    "n": "Transformasi data",
    "ciri": "Data dikali dan ditambah konstanta.",
    "cara": "Mean ikut dikali dan ditambah.",
    "q": "Rata-rata data 12. Tiap data dikali 3 lalu ditambah 2. Rata-rata baru ….",
    "o": [
     "36",
     "38",
     "42",
     "74"
    ],
    "a": "B",
    "e": "3 × 12 + 2 = 38."
   },
   {
    "n": "Jangkauan antarkuartil",
    "ciri": "Ditanya Q₃ − Q₁.",
    "cara": "Urutkan, cari kuartil tiap setengah.",
    "q": "Data 16, 3, 5, 13, 22, 24, 2, 21. Jangkauan antarkuartil ….",
    "o": [
     "14,5",
     "17,5",
     "19,5",
     "22"
    ],
    "a": "B",
    "e": "Urut: 2, 3, 5, 13, 16, 21, 22, 24. Q₁ = 4, Q₃ = 21,5. Selisih 17,5."
   },
   {
    "n": "Mean tabel frekuensi",
    "ciri": "Nilai dan frekuensi diberikan.",
    "cara": "Σ(nilai × frekuensi) ÷ Σ frekuensi.",
    "q": "Nilai 6 → 2 siswa, 7 → 3 siswa, 8 → 5 siswa. Rata-rata ….",
    "o": [
     "7",
     "7,3",
     "7,5",
     "7,7"
    ],
    "a": "B",
    "e": "(12 + 21 + 40)/10 = 7,3."
   }
  ],
  "traps": [
   "Lupa mengurutkan data sebelum mencari median atau kuartil.",
   "Memakai rata-rata dari rata-rata saat banyak data berbeda.",
   "Pada data genap, memakai satu data tengah saja.",
   "Salah mengurangi banyak data saat satu data dikeluarkan (n − 1)."
  ]
 },
 "utb38": {
  "intro": "Peluang dan kombinatorika: dadu, bola, huruf, pemilihan. Kunci utamanya memilih alat yang tepat: urutan penting → permutasi; tidak penting → kombinasi; ada huruf sama → bagi faktorial. Untuk peluang, hitung \"yang diinginkan ÷ semua kemungkinan\".",
  "points": [
   "Peluang = banyak kejadian diinginkan ÷ banyak semua kejadian.",
   "Dua dadu: 36 kemungkinan. Jumlah 7 paling sering (6 cara), jumlah 2 dan 12 paling jarang (1 cara).",
   "Permutasi P(n,k) = n!/(n−k)! (urutan penting). Kombinasi C(n,k) = n!/(k!(n−k)!) (urutan tidak penting).",
   "Susunan huruf dengan huruf sama: n!/(a!·b!·…).",
   "Duduk melingkar n orang: (n−1)!.",
   "Pengambilan tanpa pengembalian: penyebut berkurang satu tiap pengambilan.",
   "P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Frekuensi harapan = peluang × banyak percobaan."
  ],
  "notes": [
   {
    "h": "Pilih: urutan penting atau tidak?",
    "t": [
     "- Ketua, sekretaris, bendahara (jabatan beda) → **permutasi**: 8 calon → 8·7·6 = 336.",
     "- Memilih 3 orang tim tanpa jabatan → **kombinasi**: C(8,3) = 56.",
     "- Cek cepat: kalau menukar dua orang menghasilkan hasil yang berbeda, itu permutasi."
    ]
   },
   {
    "h": "Susunan huruf",
    "t": [
     "BANANA: 6 huruf, A muncul 3 kali, N muncul 2 kali → 6!/(3!·2!) = 720/12 = 60.",
     "MATEMATIKA: 10 huruf, M 2×, A 3×, T 2× → 10!/(2!·3!·2!) = 151.200."
    ]
   },
   {
    "h": "Tanpa pengembalian",
    "t": [
     "4 merah, 6 putih, ambil dua tanpa dikembalikan. Peluang dua merah = (4/10) × (3/9) = 12/90 = 2/15.",
     "Perhatikan: kalau dikembalikan, penyebut kedua tetap 10 (jadi 4/10 × 4/10)."
    ]
   }
  ],
  "types": [
   {
    "n": "Dua dadu",
    "ciri": "Jumlah mata tertentu.",
    "cara": "Hitung pasangan, bagi 36.",
    "q": "Peluang dua dadu berjumlah 8 adalah ….",
    "o": [
     "1/9",
     "5/36",
     "1/6",
     "7/36"
    ],
    "a": "B",
    "e": "Pasangan: (2,6), (3,5), (4,4), (5,3), (6,2) = 5. Peluang 5/36."
   },
   {
    "n": "Tanpa pengembalian",
    "ciri": "Dua pengambilan berurutan.",
    "cara": "Kalikan peluang, penyebut kedua berkurang.",
    "q": "Kantong: 4 bola merah, 6 putih. Diambil 2 tanpa pengembalian. Peluang keduanya merah ….",
    "o": [
     "2/15",
     "4/25",
     "1/5",
     "4/15"
    ],
    "a": "A",
    "e": "4/10 × 3/9 = 12/90 = 2/15."
   },
   {
    "n": "Susunan huruf",
    "ciri": "Huruf berulang.",
    "cara": "n! dibagi faktorial huruf yang sama.",
    "q": "Banyak susunan huruf pada kata BANANA ….",
    "o": [
     "60",
     "120",
     "360",
     "720"
    ],
    "a": "A",
    "e": "6!/(3!·2!) = 60."
   },
   {
    "n": "Permutasi vs kombinasi",
    "ciri": "Pemilihan dengan/tanpa jabatan.",
    "cara": "Tentukan urutan penting atau tidak.",
    "q": "Dari 8 calon dipilih ketua, sekretaris, dan bendahara. Banyak susunan ….",
    "o": [
     "56",
     "112",
     "336",
     "512"
    ],
    "a": "C",
    "e": "Jabatan berbeda → 8 × 7 × 6 = 336. (Tanpa jabatan hanya 56.)"
   },
   {
    "n": "Duduk melingkar",
    "ciri": "Orang duduk mengelilingi meja.",
    "cara": "(n−1)!.",
    "q": "Lima orang duduk mengelilingi meja bundar. Banyak cara ….",
    "o": [
     "24",
     "60",
     "120",
     "5"
    ],
    "a": "A",
    "e": "(5−1)! = 24."
   }
  ],
  "traps": [
   "Memakai permutasi untuk soal tim tanpa jabatan.",
   "Pada tanpa pengembalian, lupa penyebut berkurang.",
   "Lupa membagi dengan faktorial huruf berulang.",
   "Duduk melingkar memakai n! (seharusnya (n−1)!)."
  ]
 },
 "utb39": {
  "intro": "Soal \"hubungan kuantitas P dan Q\" menyuruh kamu membandingkan dua bilangan, bukan menghitung sesuatu sampai tuntas. Ada empat jawaban tetap: P lebih besar, Q lebih besar, sama, atau informasi tidak cukup. Jebakan terbesar: kalau ada variabel, kamu harus menguji beberapa nilai, bukan satu saja.",
  "points": [
   "Empat pilihan tetap: P > Q, Q > P, P = Q, atau tidak cukup informasi.",
   "Tanpa variabel: hitung P dan Q, bandingkan. Jawaban tidak mungkin \"tidak cukup\".",
   "Dengan variabel: coba nilai yang mewakili semua jenis: negatif, 0, antara 0 dan 1, 1, dan besar.",
   "Kalau dua nilai uji memberi hubungan berbeda → jawabannya \"informasi tidak cukup\".",
   "Kalau semua nilai uji memberi hubungan yang sama (dan kamu bisa alasan mengapa) → pilih hubungan itu.",
   "Kuadratkan dua bilangan positif untuk membandingkan akar. Samakan penyebut untuk pecahan."
  ],
  "notes": [
   {
    "h": "Langkah menjawab",
    "t": [
     "- **Baca batasan** variabelnya (bilangan bulat? positif? 0 < x < 1?).",
     "- **Uji nilai-nilai kunci** dalam batasan itu.",
     "- **Lihat hubungan tiap uji.** Selalu sama? Ya → pilih. Berbeda? → tidak cukup."
    ]
   },
   {
    "h": "Nilai uji yang wajib dicoba",
    "t": [
     "Untuk x bilangan real: coba −2, −0,5, 0, 0,5, 1, 2.",
     "Contoh P = x², Q = x. x = 0 → sama. x = 2 → P > Q. x = 0,5 → P = 0,25 < Q = 0,5. Hubungan berubah-ubah → tidak cukup.",
     "Contoh P = x², Q = x³ untuk 0 < x < 1: x = 0,5 → 0,25 > 0,125. Untuk semua x di rentang itu P > Q."
    ]
   },
   {
    "h": "Jebakan batasan",
    "t": [
     "Batasan \"x bilangan bulat 1 ≤ x ≤ 3\" artinya hanya uji x = 1, 2, 3. Tidak perlu 1,5.",
     "Batasan \"x > 1\" artinya jangan uji 0,5."
    ]
   }
  ],
  "types": [
   {
    "n": "Hitung langsung",
    "ciri": "Tanpa variabel, hanya angka.",
    "cara": "Hitung kedua nilai, bandingkan.",
    "q": "P = 2/5 + 3/2 dan Q = 5/7 + 3/5. Hubungan P dan Q?",
    "o": [
     "P > Q",
     "Q > P",
     "P = Q",
     "Informasi yang diberikan tidak cukup untuk memutuskan salah satu dari ketiga pilihan di atas."
    ],
    "a": "A",
    "e": "P = 1,9. Q = 5/7 + 3/5 = 46/35 ≈ 1,31. P > Q."
   },
   {
    "n": "Variabel dalam rentang kecil",
    "ciri": "Bilangan bulat dalam rentang pendek.",
    "cara": "Uji semua nilainya.",
    "q": "x bilangan bulat, 1 ≤ x ≤ 3. P = x² + 1 dan Q = 2x.",
    "o": [
     "P > Q",
     "Q > P",
     "P = Q",
     "Informasi yang diberikan tidak cukup untuk memutuskan salah satu dari ketiga pilihan di atas."
    ],
    "a": "D",
    "e": "x = 1: P = 2, Q = 2 (sama). x = 2: P = 5, Q = 4 (P lebih besar). Hubungan berubah → informasi tidak cukup."
   },
   {
    "n": "Rentang 0 sampai 1",
    "ciri": "Pecahan: pangkat makin besar makin kecil.",
    "cara": "Coba x = 0,5.",
    "q": "0 < x < 1. P = x² dan Q = x³.",
    "o": [
     "P > Q",
     "Q > P",
     "P = Q",
     "Informasi yang diberikan tidak cukup untuk memutuskan salah satu dari ketiga pilihan di atas."
    ],
    "a": "A",
    "e": "x = 0,5: P = 0,25 > Q = 0,125. Untuk 0 < x < 1, pangkat lebih besar membuat nilai lebih kecil → P > Q selalu."
   },
   {
    "n": "Variabel real tanpa batas",
    "ciri": "x bilangan real.",
    "cara": "Coba negatif, 0, pecahan, dan besar.",
    "q": "x bilangan real. P = x² dan Q = x.",
    "o": [
     "P > Q",
     "Q > P",
     "P = Q",
     "Informasi yang diberikan tidak cukup untuk memutuskan salah satu dari ketiga pilihan di atas."
    ],
    "a": "D",
    "e": "x = 0: sama. x = 2: P > Q. x = 0,5: P < Q. Berubah → tidak cukup."
   }
  ],
  "traps": [
   "Mengambil satu nilai saja lalu langsung menyimpulkan.",
   "Lupa nilai pecahan 0 < x < 1 dan nilai negatif.",
   "Memilih \"tidak cukup\" padahal tidak ada variabel (soal angka murni selalu bisa dihitung).",
   "Membandingkan P dan Q yang satuannya beda tanpa menyadari."
  ]
 },
 "utb40": {
  "intro": "Soal kecukupan data bertanya: apakah informasi (1), (2), atau gabungan keduanya cukup untuk menjawab pertanyaan? Kamu TIDAK perlu mencari jawabannya, hanya memutuskan bisa atau tidak. Pilihan jawabannya selalu lima, dengan urutan tetap A sampai E.",
  "points": [
   "Lima pilihan tetap: A = (1) saja cukup; B = (2) saja cukup; C = hanya gabungan yang cukup; D = masing-masing cukup; E = tidak cukup sama sekali.",
   "Cukup artinya jawaban pertanyaan hanya satu nilai pasti, bukan banyak kemungkinan.",
   "Dua yang tidak diketahui butuh dua persamaan berbeda. Dua persamaan yang \"searah\" (kelipatan satu sama lain) sama dengan satu persamaan.",
   "Periksa (1) sendirian dulu, tutup (2). Lalu (2) sendirian. Baru gabungan.",
   "Kalau (1) dan (2) masing-masing cukup → D (bukan C).",
   "Pertanyaan menentukan: \"berapa x + y?\" cukup walau x dan y sendiri tidak diketahui, asal x + y diketahui."
  ],
  "notes": [
   {
    "h": "Prosedur 3 langkah",
    "t": [
     "- **Langkah 1:** pakai hanya pernyataan (1). Apakah jawaban pasti satu?",
     "- **Langkah 2:** pakai hanya pernyataan (2). Apakah jawaban pasti satu?",
     "- **Langkah 3:** kalau keduanya belum, gabung. Pasti satu? → C. Masih belum pasti → E."
    ]
   },
   {
    "h": "Tabel keputusan",
    "t": [
     "- (1) cukup, (2) tidak → **A**",
     "- (2) cukup, (1) tidak → **B**",
     "- Tak ada yang cukup, gabungan cukup → **C**",
     "- Keduanya masing-masing cukup → **D**",
     "- Gabungan pun tidak cukup → **E**"
    ]
   },
   {
    "h": "Jebakan \"dua persamaan tetapi sama\"",
    "t": [
     "x − y = 2 dan 2x − 2y = 4 adalah persamaan yang sama. Untuk menemukan x + y tidak cukup.",
     "Persamaan kuadrat bisa punya dua akar. x² = 9 belum menentukan x (3 atau −3), dan butuh syarat tambahan."
    ]
   }
  ],
  "types": [
   {
    "n": "Satu pernyataan cukup",
    "ciri": "Pernyataan lain tidak relevan.",
    "cara": "Uji (1) sendiri, lalu (2) sendiri.",
    "q": "Berapakah nilai x?\n(1) 2x + 1 = 9\n(2) y = 4",
    "o": [
     "Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.",
     "Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.",
     "DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU pernyataan SAJA tidak cukup.",
     "Pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup.",
     "Pernyataan (1) dan (2) tidak cukup."
    ],
    "a": "A",
    "e": "(1): x = 4, pasti. (2) tidak memberi informasi tentang x. Jadi hanya (1) cukup → A."
   },
   {
    "n": "Gabungan baru cukup",
    "ciri": "Satu pernyataan memberi hubungan, satu memberi angka.",
    "cara": "Tulis variabel dan persamaan dari kedua.",
    "q": "Berapakah umur Rani?\n(1) Umur Dina dua kali umur Rani.\n(2) Jumlah umur Dina dan Rani 36 tahun.",
    "o": [
     "Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.",
     "Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.",
     "DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU pernyataan SAJA tidak cukup.",
     "Pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup.",
     "Pernyataan (1) dan (2) tidak cukup."
    ],
    "a": "C",
    "e": "(1) saja: banyak kemungkinan. (2) saja: banyak kemungkinan. Gabung: 2R + R = 36 → R = 12. Pasti → C."
   },
   {
    "n": "Keduanya masing-masing cukup",
    "ciri": "Dua pernyataan yang sama-sama menentukan jawaban.",
    "cara": "Uji masing-masing.",
    "q": "Berapakah nilai x?\n(1) x + 3 = 10\n(2) 2x = 14",
    "o": [
     "Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.",
     "Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.",
     "DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU pernyataan SAJA tidak cukup.",
     "Pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup.",
     "Pernyataan (1) dan (2) tidak cukup."
    ],
    "a": "D",
    "e": "(1): x = 7. (2): x = 7. Masing-masing cukup → D."
   },
   {
    "n": "Dua persamaan yang searah",
    "ciri": "Dua persamaan tampak berbeda tetapi sebenarnya sama.",
    "cara": "Bandingkan koefisiennya.",
    "q": "x dan y bilangan real. Berapakah x + y?\n(1) x − y = 2\n(2) 2x − 2y = 4",
    "o": [
     "Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.",
     "Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.",
     "DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU pernyataan SAJA tidak cukup.",
     "Pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup.",
     "Pernyataan (1) dan (2) tidak cukup."
    ],
    "a": "E",
    "e": "(2) hanyalah (1) dikali 2. Jadi informasinya sama: hanya selisih x − y yang diketahui, x + y tidak. Tidak cukup → E."
   },
   {
    "n": "Syarat tambahan menentukan pilihan",
    "ciri": "Satu pernyataan memberi dua kemungkinan, satu membuang salah satunya.",
    "cara": "Daftar semua kemungkinan.",
    "q": "x bilangan bulat. Berapakah x?\n(1) x² = 9\n(2) x > 0",
    "o": [
     "Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.",
     "Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.",
     "DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU pernyataan SAJA tidak cukup.",
     "Pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup.",
     "Pernyataan (1) dan (2) tidak cukup."
    ],
    "a": "C",
    "e": "(1): x = 3 atau −3. (2): banyak. Gabung: x = 3. → C."
   }
  ],
  "traps": [
   "Menjawab seolah soalnya meminta nilainya. Cukup tentukan \"bisa/tidak\".",
   "Memilih D padahal harus menggabungkan (itu C).",
   "Menganggap dua persamaan selalu cukup untuk dua variabel (periksa tidak searah).",
   "Lupa bahwa kuadrat menghasilkan dua akar (±)."
  ]
 },
 "utb41": {
  "intro": "Pada tipe ini ada empat pernyataan bernomor (1)–(4) tentang satu soal. Kamu harus memeriksa tiap pernyataan benar atau salah, lalu memilih kombinasi yang sesuai. Lima pilihan tetap: (1)(2)(3) saja; (1)(3) saja; (2)(4) saja; hanya (4); atau semua benar.",
  "points": [
   "Lima pilihan tetap: A = (1),(2),(3) SAJA; B = (1),(3) SAJA; C = (2),(4) SAJA; D = HANYA (4); E = SEMUA benar.",
   "Periksa SEMUA pernyataan satu per satu. Jangan berhenti di yang pertama terlihat benar.",
   "Tulis hasil tiap pernyataan: B atau S. Pola B-B-B-S → A; B-S-B-S → B; S-B-S-B → C; S-S-S-B → D; B-B-B-B → E.",
   "Satu pernyataan keliru mengubah jawaban, jadi ketelitian lebih penting dari kecepatan.",
   "Kalau ada dua pernyataan yang bertentangan (tidak mungkin keduanya benar), eliminasi pilihan yang memuat keduanya.",
   "Hitung dulu bahan dasar (jumlah, rata-rata, diskriminan, rumus) yang akan dipakai banyak pernyataan."
  ],
  "notes": [
   {
    "h": "Strategi: hitung bahan dulu",
    "t": [
     "Misalnya soal fungsi kuadrat f(x) = 2x² + 4x + 1. Hitung: arah (a > 0 → ke atas), sumbu simetri x = −1, nilai minimum −1, diskriminan 8, titik potong sumbu-Y (0, 1). Lalu cocokkan dengan tiap pernyataan."
    ]
   },
   {
    "h": "Tabel B/S",
    "t": [
     "Buat tabel kecil di kertas coret: (1) B/S, (2) B/S, (3) B/S, (4) B/S. Baru cocokkan dengan lima pilihan.",
     "Pilihan tetap membantu mengecek: misalnya kalau kamu menemukan B-S-S-B, pola itu tidak ada di pilihan, berarti ada yang salah dihitung."
    ]
   },
   {
    "h": "Pernyataan yang sering menjebak",
    "t": [
     "- Nilai ekstrem: ditanya y-nya, bukan x-nya.",
     "- Rata-rata vs median vs modus: jangan tertukar.",
     "- Luas permukaan vs volume vs jumlah rusuk.",
     "- Peluang \"bukan biru\" = 1 − peluang biru."
    ]
   }
  ],
  "types": [
   {
    "n": "Fungsi kuadrat",
    "ciri": "Empat sifat grafik.",
    "cara": "Hitung arah, sumbu, nilai ekstrem, diskriminan, titik potong.",
    "q": "f(x) = 2x² + 4x + 1. \n(1) Grafik memotong sumbu-Y di (0, 1).\n(2) Nilai minimum fungsi adalah 1.\n(3) Grafik terbuka ke atas.\n(4) Grafik menyinggung sumbu-X.",
    "o": [
     "(1), (2), dan (3) SAJA yang benar.",
     "(1) dan (3) SAJA yang benar.",
     "(2) dan (4) SAJA yang benar.",
     "HANYA (4) yang benar.",
     "SEMUA pilihan benar."
    ],
    "a": "B",
    "e": "(1) benar: f(0) = 1. (2) salah: minimum = f(−1) = −1. (3) benar: a = 2 > 0. (4) salah: D = 16 − 8 = 8 > 0 (memotong dua titik). Benar (1) dan (3)."
   },
   {
    "n": "Barisan aritmetika",
    "ciri": "Empat klaim tentang suku dan jumlah.",
    "cara": "Hitung U₂, U₄, U₉, S₉ dari a dan b.",
    "q": "Barisan aritmetika a = 7 dan b = 3. \n(1) U₂ + U₄ = 26. \n(2) Suku ke-9 adalah 31. \n(3) Jumlah 9 suku pertama adalah 171. \n(4) Beda barisan adalah 3.",
    "o": [
     "(1), (2), dan (3) SAJA yang benar.",
     "(1) dan (3) SAJA yang benar.",
     "(2) dan (4) SAJA yang benar.",
     "HANYA (4) yang benar.",
     "SEMUA pilihan benar."
    ],
    "a": "E",
    "e": "U₂ = 10, U₄ = 16 → 26 ✓. U₉ = 7 + 8·3 = 31 ✓. S₉ = 9/2·(14 + 24) = 171 ✓. Beda 3 ✓. Semua benar."
   },
   {
    "n": "Balok",
    "ciri": "Volume, luas, diagonal, rusuk.",
    "cara": "Hitung tiap besaran.",
    "q": "Balok 4 cm × 4 cm × 7 cm. \n(1) Luas permukaan 152 cm². \n(2) Diagonal ruang 9 cm. \n(3) Volume 116 cm³. \n(4) Jumlah seluruh rusuk 60 cm.",
    "o": [
     "(1), (2), dan (3) SAJA yang benar.",
     "(1) dan (3) SAJA yang benar.",
     "(2) dan (4) SAJA yang benar.",
     "HANYA (4) yang benar.",
     "SEMUA pilihan benar."
    ],
    "a": "C",
    "e": "Luas permukaan = 2(16 + 28 + 28) = 144 (salah). Diagonal = √81 = 9 ✓. Volume = 112 (salah). Rusuk = 4·15 = 60 ✓. Benar (2) dan (4)."
   },
   {
    "n": "Statistika data tunggal",
    "ciri": "Rata-rata, median, modus, jangkauan.",
    "cara": "Urutkan dulu, hitung semua.",
    "q": "Data 9, 9, 12, 9, 4, 11, 9. \n(1) Data terbesar dikurangi median adalah 4. \n(2) Jangkauan 10. \n(3) Modus 10. \n(4) Median 9.",
    "o": [
     "(1), (2), dan (3) SAJA yang benar.",
     "(1) dan (3) SAJA yang benar.",
     "(2) dan (4) SAJA yang benar.",
     "HANYA (4) yang benar.",
     "SEMUA pilihan benar."
    ],
    "a": "D",
    "e": "Urut: 4, 9, 9, 9, 9, 11, 12. Median 9, modus 9, jangkauan 8. (1): 12 − 9 = 3 (salah). (2) salah. (3) salah. (4) benar. Hanya (4)."
   }
  ],
  "traps": [
   "Berhenti di pernyataan pertama yang benar.",
   "Menghitung ulang dari nol tiap pernyataan (hitung bahan dasar sekali, pakai berulang).",
   "Menukar rata-rata, median, dan modus.",
   "Tidak mencocokkan pola B/S dengan lima pilihan yang tetap."
  ]
 },
 "utb42": {
  "intro": "Penalaran Matematika berisi soal kontekstual: tabel, diagram, grafik, model linear dan eksponensial, impas. Kemampuan utamanya membaca soal dengan teliti, menerjemahkan ke model matematika, dan menghitung bagian yang ditanya. Tabel dan grafik tidak bohong, tetapi judul, satuan, dan \"dibanding apa\" sering menjebak.",
  "points": [
   "Baca judul, satuan, dan keterangan sumbu SEBELUM menghitung.",
   "Persentase perubahan = selisih ÷ nilai awal × 100%.",
   "Diagram lingkaran: total = 100%. Bagian = persen × jumlah total.",
   "Model linear: y = tetap + variabel × x. Impas: pendapatan = biaya.",
   "Model eksponensial: jumlah akhir = awal × (faktor)^(banyak periode).",
   "Perbandingan bagian ke seluruh ≠ perbandingan bagian ke bagian."
  ],
  "notes": [
   {
    "h": "Membaca tabel dan grafik",
    "t": [
     "- Tulis datanya ulang secara ringkas sebelum menghitung.",
     "- Bedakan \"jumlah\" dengan \"kenaikan dari bulan sebelumnya\".",
     "- Persen \"kenaikan\" selalu dari bulan sebelumnya, bukan dari bulan sesudahnya."
    ]
   },
   {
    "h": "Model linear dan titik impas",
    "t": [
     "Biaya tetap Rp1.200.000, variabel Rp12.000/unit, harga jual Rp15.000/unit. Impas: 15.000n = 1.200.000 + 12.000n → 3.000n = 1.200.000 → n = 400 unit.",
     "Pola: n = biaya tetap ÷ (harga jual − biaya variabel per unit)."
    ]
   },
   {
    "h": "Pertumbuhan berlipat",
    "t": [
     "Populasi menjadi dua kali setiap 3 jam, awal 100. Setelah 15 jam = 5 periode → 100 × 2⁵ = 3.200.",
     "Hitung dulu berapa periode, baru pangkatkan."
    ]
   }
  ],
  "types": [
   {
    "n": "Persen kenaikan dari tabel",
    "ciri": "Penjualan per bulan.",
    "cara": "Selisih ÷ nilai awal × 100%.",
    "q": "Penjualan Januari 150 unit dan Februari 180 unit. Kenaikan Januari ke Februari ….",
    "o": [
     "15%",
     "20%",
     "25%",
     "30%"
    ],
    "a": "B",
    "e": "Selisih 30. 30 ÷ 150 = 20%."
   },
   {
    "n": "Rata-rata dari tabel",
    "ciri": "Data lima bulan.",
    "cara": "Jumlah ÷ banyak bulan.",
    "q": "Produksi (ton): 170, 50, 180, 50, 60. Rata-rata per bulan ….",
    "o": [
     "92",
     "102",
     "110",
     "112"
    ],
    "a": "B",
    "e": "Jumlah = 510. 510 ÷ 5 = 102."
   },
   {
    "n": "Diagram lingkaran",
    "ciri": "Persen bagian diketahui, total diketahui.",
    "cara": "Hitung sisa persen, kali total.",
    "q": "Dari 200 siswa: sepak bola 15%, basket 15%, sisanya voli. Banyak siswa voli ….",
    "o": [
     "30",
     "60",
     "140",
     "160"
    ],
    "a": "C",
    "e": "100% − 30% = 70%. 70% × 200 = 140."
   },
   {
    "n": "Titik impas",
    "ciri": "Biaya tetap + variabel dan harga jual.",
    "cara": "Buat persamaan pendapatan = biaya.",
    "q": "Biaya tetap Rp1.200.000, biaya variabel Rp12.000/unit, harga jual Rp15.000/unit. Impas pada penjualan … unit.",
    "o": [
     "80",
     "100",
     "400",
     "800"
    ],
    "a": "C",
    "e": "3.000n = 1.200.000 → n = 400."
   },
   {
    "n": "Pertumbuhan eksponensial",
    "ciri": "Berlipat tiap periode.",
    "cara": "Hitung periode, pangkatkan faktor.",
    "q": "Bakteri awal 100, dua kali lipat tiap 3 jam. Setelah 15 jam ….",
    "o": [
     "1.500",
     "3.000",
     "3.200",
     "6.400"
    ],
    "a": "C",
    "e": "15 ÷ 3 = 5 periode. 100 × 2⁵ = 3.200."
   }
  ],
  "traps": [
   "Menghitung persen perubahan terhadap nilai akhir.",
   "Lupa memeriksa satuan (ribu, juta, ton, kg).",
   "Pada diagram lingkaran, lupa bahwa total persen 100%.",
   "Menjumlahkan alih-alih mengalikan pada pertumbuhan berlipat."
  ]
 }
};

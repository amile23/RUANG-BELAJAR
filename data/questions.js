/* Bank soal. t = id materi. o = pilihan. a = nomor jawaban benar (mulai dari 0). e = pembahasan.
   lv: 1 mudah, 2 sedang, 3 sulit. src: "contoh" (bawaan) atau "pola" (dibuat dari pola soal yang kamu kirim).
   Soal di bawah ini contoh bawaan agar fitur kuis bisa dicoba. */
window.RB = window.RB || {};
RB.questions = [
  /* mat1 */
  { id: 'mat1-01', t: 'mat1', lv: 1, src: 'contoh', q: 'Akar-akar dari x² − 7x + 12 = 0 adalah …', o: ['3 dan 4', '2 dan 6', '−3 dan −4', '1 dan 12'], a: 0, e: 'Cari dua bilangan yang jumlahnya 7 dan hasil kalinya 12, yaitu 3 dan 4. Maka (x − 3)(x − 4) = 0.' },
  { id: 'mat1-02', t: 'mat1', lv: 1, src: 'contoh', q: 'Diskriminan dari 3x² − 2x + 1 = 0 adalah …', o: ['−8', '8', '16', '−16'], a: 0, e: 'D = b² − 4ac = (−2)² − 4·3·1 = 4 − 12 = −8.' },
  { id: 'mat1-03', t: 'mat1', lv: 1, src: 'contoh', q: 'Jumlah akar-akar dari 2x² − 10x + 7 = 0 adalah …', o: ['5', '−5', '7/2', '10'], a: 0, e: 'Jumlah akar = −b/a = 10/2 = 5. Angka 7/2 adalah hasil kali akar.' },
  { id: 'mat1-04', t: 'mat1', lv: 2, src: 'contoh', q: 'Titik puncak parabola y = x² − 6x + 5 adalah …', o: ['(3, −4)', '(−3, −4)', '(3, 4)', '(6, 5)'], a: 0, e: 'x = −b/2a = 6/2 = 3. Lalu y = 9 − 18 + 5 = −4.' },
  { id: 'mat1-05', t: 'mat1', lv: 2, src: 'contoh', q: 'Persamaan x² + kx + 9 = 0 punya akar kembar. Nilai k yang mungkin adalah …', o: ['6 atau −6', '3 atau −3', '6 saja', '9 atau −9'], a: 0, e: 'Akar kembar berarti D = 0. D = k² − 36 = 0, jadi k = 6 atau k = −6.' },
  { id: 'mat1-06', t: 'mat1', lv: 1, src: 'contoh', q: 'Himpunan penyelesaian 2x² − 8 = 0 adalah …', o: ['x = 2 atau x = −2', 'x = 4 atau x = −4', 'x = 2 saja', 'x = √2 atau x = −√2'], a: 0, e: '2x² = 8, maka x² = 4, jadi x = 2 atau x = −2.' },
  { id: 'mat1-07', t: 'mat1', lv: 2, src: 'contoh', q: 'Nilai maksimum dari y = −2x² + 4x + 1 adalah …', o: ['3', '1', '5', '−1'], a: 0, e: 'Puncak di x = −4/(2·(−2)) = 1. Maka y = −2 + 4 + 1 = 3. Karena a < 0, nilai itu maksimum.' },

  /* kim5 */
  { id: 'kim5-01', t: 'kim5', lv: 1, src: 'contoh', q: 'Larutan HCl 0,001 M memiliki pH …', o: ['3', '1', '11', '0,001'], a: 0, e: 'HCl asam kuat valensi 1, [H⁺] = 10⁻³, pH = 3.' },
  { id: 'kim5-02', t: 'kim5', lv: 2, src: 'contoh', q: 'Larutan Ba(OH)₂ 0,005 M memiliki pH …', o: ['12', '11', '2', '13'], a: 0, e: 'Valensi basa 2, [OH⁻] = 2 × 0,005 = 10⁻² M. pOH = 2, jadi pH = 12.' },
  { id: 'kim5-03', t: 'kim5', lv: 1, src: 'contoh', q: 'Larutan dengan pH = 4 memiliki [H⁺] sebesar …', o: ['10⁻⁴ M', '10⁻¹⁰ M', '4 M', '10⁻⁷ M'], a: 0, e: 'pH = −log [H⁺], jadi [H⁺] = 10⁻pH = 10⁻⁴ M.' },
  { id: 'kim5-04', t: 'kim5', lv: 2, src: 'contoh', q: 'CH₃COOH 0,1 M dengan Ka = 10⁻⁵ memiliki pH …', o: ['3', '5', '1', '6'], a: 0, e: '[H⁺] = √(Ka × Ma) = √(10⁻⁵ × 10⁻¹) = 10⁻³. Maka pH = 3.' },
  { id: 'kim5-05', t: 'kim5', lv: 1, src: 'contoh', q: 'Larutan dengan pH 9 pada 25°C bersifat …', o: ['basa', 'asam', 'netral', 'tidak bisa ditentukan'], a: 0, e: 'pH di atas 7 berarti basa pada 25°C.' },
  { id: 'kim5-06', t: 'kim5', lv: 2, src: 'contoh', q: 'H₂SO₄ 0,005 M (anggap terionisasi sempurna) memiliki pH …', o: ['2', '3', '2,3', '1'], a: 0, e: 'Valensi asam 2, [H⁺] = 0,01 = 10⁻². Maka pH = 2.' },

  /* ing2 */
  { id: 'ing2-01', t: 'ing2', lv: 1, src: 'contoh', q: 'If she ___ harder, she would pass the exam.', o: ['studied', 'studies', 'will study', 'had studied'], a: 0, e: 'Klausa utama memakai would + verb (type 2), jadi klausa if memakai simple past: studied.' },
  { id: 'ing2-02', t: 'ing2', lv: 2, src: 'contoh', q: 'If I had known about the test, I ___ earlier.', o: ['would have started', 'would start', 'will start', 'had started'], a: 0, e: 'Klausa if memakai past perfect (type 3), jadi klausa utama memakai would have + past participle.' },
  { id: 'ing2-03', t: 'ing2', lv: 1, src: 'contoh', q: 'If water reaches 100°C, it ___.', o: ['boils', 'will boil', 'would boil', 'boiled'], a: 0, e: 'Fakta umum (type 0): simple present di kedua klausa.' },
  { id: 'ing2-04', t: 'ing2', lv: 1, src: 'contoh', q: 'If I ___ you, I would apologize.', o: ['were', 'am', 'was being', 'had been'], a: 0, e: 'Type 2 formal memakai "were" untuk semua subjek.' },
  { id: 'ing2-05', t: 'ing2', lv: 2, src: 'contoh', q: 'Which sentence is correct?', o: ['If it will rain, we cancel the picnic.', 'If it rains, we will cancel the picnic.', 'If it rained, we will cancel the picnic.', 'If it would rain, we cancel the picnic.'], a: 1, e: 'Type 1: If + simple present, will + verb. Klausa if tidak memakai will atau would.' },
  { id: 'ing2-06', t: 'ing2', lv: 2, src: 'contoh', q: 'I wish I ___ the answer yesterday.', o: ['had known', 'knew', 'know', 'would know'], a: 0, e: 'Wish tentang masa lalu memakai past perfect: had known.' }
];

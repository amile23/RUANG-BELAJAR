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
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  year: number;
  role: string;
  tech: string[];
  github: string;
  demo?: string;
  status?: string;
  /** Proyek unggulan tampil paling menonjol. */
  featured?: boolean;
  /**
   * Screenshot: simpan file di public/projects/, lalu isi path-nya,
   * misalnya "/projects/salut.jpg". Kalau kosong, tampil placeholder.
   */
  image?: string;
  /**
   * Galeri halaman detail, misalnya ["/projects/salut-1.jpg", "/projects/salut-2.jpg"].
   * Kalau kosong, memakai `image`; kalau itu juga kosong, tampil placeholder.
   */
  gallery?: string[];
};

export type Experience = {
  role: string;
  organization: string;
  year: number;
};

export type Education = {
  school: string;
  program: string;
  institution?: string;
  period?: string;
};

export const profile = {
  name: "Wemvi Afrialdo",
  role: "Mobile & Web Developer | Mahasiswa Pendidikan Teknologi Informasi Universitas Lampung",
  /** Potongan kepala dan bahu. Foto asli disimpan lokal dan tidak diunggah. */
  photo: "/foto-hero.jpg",
  origin:
    "Desa Kejadian, Kecamatan Belalau, Kabupaten Lampung Barat, Lampung, Indonesia",
  about:
    "Saya putra daerah dari Desa Kejadian, Lampung Barat, yang kini kuliah di Pendidikan Teknologi Informasi FKIP Universitas Lampung. Saya membangun aplikasi mobile dengan Flutter dan web dengan Laravel, dan sekarang sedang mendalami frontend development. Saya juga aktif berorganisasi sebagai ketua pelaksana dan sekretaris umum. Lewat karya di bidang teknologi, saya ingin membawa nama baik desa saya.",
};

export const skills = {
  languages: ["Dart", "PHP", "JavaScript", "HTML", "CSS", "Python"],
  frameworksAndTools: [
    "Flutter",
    "Laravel",
    "Blade",
    "MySQL",
    "Firebase",
    "Git",
    "GitHub",
  ],
  softSkills: ["Kepemimpinan", "Kerja Sama Tim", "Public Speaking"],
  learning: {
    focus: "Frontend development",
    topics: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Motion",
      "Prinsip UI/UX Design",
    ],
  },
};

export const projects: Project[] = [
  {
    id: "salut",
    title: "SALUT",
    subtitle: "Sistem Arsip Kelulusan & Tracer Study Terpadu",
    description:
      "Ekosistem terpadu berbasis mobile (Flutter) dan web administrator (Laravel API) untuk tata kelola arsip kelulusan, portofolio SKPI siswa, dan pelacakan karier alumni SMK. Studi kasus: SMK Negeri 1 Teladan.",
    year: 2026,
    role: "Developer",
    tech: ["Flutter 3", "Laravel 11", "PHP 8.2", "MySQL 8", "Firebase (FCM)", "JWT"],
    github: "https://github.com/WEMVIAFRIALDO/apps_Sekolah-",
    featured: true,
  },
  {
    id: "sistem-fasilitas-sekolah",
    title: "Sistem Fasilitas Sekolah",
    description:
      "Sistem informasi manajemen sarana dan prasarana sekolah berbasis web: pendataan kondisi aset, penjadwalan perawatan, dan peminjaman ruangan. Tugas mata kuliah Rekayasa Perangkat Lunak.",
    year: 2026,
    role: "Developer",
    tech: ["Laravel", "PHP", "Blade"],
    github: "https://github.com/WEMVIAFRIALDO/sistem-fasilitas-sekolah-",
    status: "Dalam pengembangan",
  },
  {
    id: "pengelolaan-laboratorium",
    title: "Pengelolaan Laboratorium",
    subtitle: "SOP Tata Kelola Lab Komputer",
    description:
      "Dokumen SOP interaktif tata kelola laboratorium komputer (buka-tutup lab, perawatan, backup & recovery, bahan habis pakai, mitigasi siber) dengan generator QR code. Tugas mata kuliah Pengelolaan Laboratorium.",
    year: 2026,
    role: "Developer",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    github: "https://github.com/WEMVIAFRIALDO/Pengelolaan-laboratorium",
    demo: "https://wemviafrialdo.github.io/Pengelolaan-laboratorium/",
  },
  {
    id: "mood-sync",
    title: "Mood-Sync",
    subtitle: "Sistem Pembelajaran Interaktif",
    description:
      "Website pembelajaran yang menyesuaikan tampilan dan rekomendasi materi dengan mood pengguna. Fitur: pilihan mood, materi KD 3.4–3.8, video, kuis dengan feedback langsung, dan tracking progres belajar.",
    year: 2026,
    role: "Developer",
    tech: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/WEMVIAFRIALDO/Multimedia-Pembelajaran-Interaktif",
  },
];

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}

export const experiences: Experience[] = [
  { role: "Ketua Pelaksana", organization: "GEMPITA", year: 2025 },
  { role: "Sekretaris Umum", organization: "FORMATIF", year: 2026 },
];

export const education: Education[] = [
  {
    school: "Universitas Lampung",
    program: "S1 Pendidikan Teknologi Informasi",
    institution: "FKIP",
    period: "2024 – sekarang",
  },
  {
    school: "SMAN 1 Belalau",
    program: "Jurusan IPA",
    institution: "Kabupaten Lampung Barat",
  },
];

export const contact = {
  email: "wemviafaldo@gmail.com",
  github: "https://github.com/WEMVIAFRIALDO",
  instagram: "https://instagram.com/wemvi_afr",
  whatsapp: "https://wa.me/6285280513096",
};

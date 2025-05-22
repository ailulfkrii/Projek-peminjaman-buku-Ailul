let buku = [
  { Nama: "Laskar Pelangi", Dipinjam: false },
  { Nama: "Harry Potter", Dipinjam: false },
  { Nama: "Si Kancil", Dipinjam: false },
];

let user = [
  { User: "Ailul", SudahPinjam: false },
  { User: "Raif", SudahPinjam: false },
];

// Fungsi untuk meminjam buku
function pinjambuku(usernama, namabuku) {
  let username = user.find((u) => u.User === usernama);

  if (username && username.SudahPinjam) {
    console.log(
      `ERROR: ${usernama} sudah meminjam buku. Harus dikembalikan dulu.`
    );
    return;
  }

  let bukunama = buku.find((b) => b.Nama === namabuku);
  if (!bukunama) {
    console.log(`ERROR: Buku '${namabuku}' tidak ditemukan.`);
    return;
  }

  if (bukunama.Dipinjam) {
    console.log(`ERROR: Buku '${namabuku}' sudah dipinjam oleh orang lain.`);
    return;
  }

  bukunama.Dipinjam = true;
  username.SudahPinjam = true;
  console.log(`${usernama} berhasil meminjam buku '${namabuku}'`);
}

// Fungsi untuk mengembalikan buku
function kembalikanBuku(usernama, namabuku) {
  let username = user.find((u) => u.User === usernama);

  if (!username || !username.SudahPinjam) {
    console.log(`${usernama} tidak memiliki buku yang perlu dikembalikan.`);
    return;
  }

  let bukunama = buku.find((b) => b.Nama === namabuku);
  if (!bukunama || !bukunama.Dipinjam) {
    console.log(`ERROR: Buku '${namabuku}' tidak dipinjam oleh siapapun.`);
    return;
  }

  bukunama.Dipinjam = false;
  username.SudahPinjam = false;
  console.log(`${usernama} telah mengembalikan buku '${namabuku}'`);
}

// Export fungsi yang dapat digunakan di file lain
export { pinjambuku, kembalikanBuku };

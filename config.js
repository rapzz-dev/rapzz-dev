// Modul dan dependensi yang diperlukan
const pkg = require("./package.json");
const {
    monospace,
    italic,
    quote
} = require("@mengkodingan/ckptw");

// Konfigurasi
global.config = {
    // Informasi bot dasar
    bot: {
        name: "Violet MD", // Nama bot
        prefix: /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i, // Karakter awalan perintah yang diizinkan
        phoneNumber: "-", // Nomor telepon bot biar nyambung
        thumbnail: "https://filezone-cdn.caliph.dev/file/7fd3c78fe1e783b56c66.jpg", // Gambar thumbnail bot
        website: "https://whatsapp.com/channel/0029Vb0uJ9Q7NoZtzftPlC10", // Website untuk WhatsApp bot
        groupJid: "https://chat.whatsapp.com/En1Cdj0jZQP1Q5w1xMh3cq" // JID untuk group bot (opsional jika tidak menggunakan requireBotGroupMembership)
    },

    // Pesan bot yang disesuaikan untuk situasi tertentu
    msg: {
        admin: quote("⛔ Perintah hanya dapat diakses oleh admin grup!"), // Pesan ketika perintah hanya untuk admin
        banned: quote("⛔ Tidak dapat memproses karena Anda telah dibanned oleh Owner!"), // Pesan untuk pengguna yang dibanned
        botAdmin: quote("⛔ Tidak dapat memproses karena bot bukan admin grup ini!"), // Pesan jika bot bukan admin di grup
        botGroupMembership: quote("⛔ Tidak dapat memproses karena Anda tidak bergabung dengan grup bot!"), // Pesan untuk pengguna yang tidak ada dalam grup
        cooldown: quote("🔄 Perintah ini sedang dalam cooldown, tunggu..."), // Pesan saat cooldown perintah
        coin: quote("⛔ Tidak dapat memproses karena koin Anda tidak cukup!"), // Pesan ketika koin tidak cukup
        group: quote("⛔ Perintah hanya dapat diakses dalam grup!"), // Pesan untuk perintah grup
        owner: quote("⛔ Perintah hanya dapat diakses Owner!"), // Pesan untuk perintah yang hanya owner bisa akses
        premium: quote("⛔ Tidak dapat memproses karena Anda bukan pengguna Premium!"), // Pesan jika pengguna bukan Premium
        private: quote("⛔ Perintah hanya dapat diakses dalam obrolan pribadi!"), // Pesan untuk perintah obrolan pribadi
        restrict: quote("⛔ Perintah ini telah dibatasi karena alasan keamanan!"), // Pesan pembatasan perintah

        watermark: `@${pkg.name} / v${pkg.version}`, // Watermark nama dan versi pada bot
        footer: italic("Developed by Rapz Code"), // Footer di pesan bot
        readmore: "\u200E".repeat(4001), // String read more

        wait: quote("🔄 Tunggu sebentar..."), // Pesan loading
        notFound: quote("❎ Tidak ada yang ditemukan! Coba lagi nanti."), // Pesan item tidak ditemukan
        urlInvalid: quote("❎ URL tidak valid!") // Pesan jika URL tidak valid
    },

    // Informasi owner bot
    owner: {
        name: "Violet MD", // Nama owner bot
        number: "-", // Nomor telepon owner bot
        organization: "Rapz Development", // Nama organisasi owner bot
        co: ["-"] // Nomor co-owner bot
    },

    // Konfigurasi stiker bot
    sticker: {
        packname: "Stiker ini dibuat oleh", // Nama paket stiker
        author: "@VioletMD" // Pembuat stiker
    },

    // Pengaturan sistem bot
    system: {
        autoRead: true, // Apakah bot otomatis membaca pesan masuk
        autoTypingOnCmd: true, // Aktifkan status mengetik ketika memproses perintah
        cooldown: 5000, // Waktu cooldown antar perintah dalam milidetik
        restrict: false, // Membatasi perintah tertentu untuk keamanan
        requireBotGroupMembership: false, // Apakah pengguna harus bergabung dengan grup bot
        port: 8080, // Port yang diinginkan (opsional jika menggunakan server)
        selfOwner: true, // Apakah bot menjadi owner
        selfReply: true, // Apakah bot merespon pesan yang dikirim bot sendiri
        timeZone: "Asia/Jakarta", // Zona waktu bot
        usePairingCode: true, // Menggunakan kode pairing untuk koneksi
        useServer: false // Menggunakan server
    }
};

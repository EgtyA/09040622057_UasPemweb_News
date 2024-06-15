const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Buat koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'javawebmedia_ci4'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});


// Dapatkan Semua Item
router.get('/', (req, res) => {
    const sql = 'SELECT id_berita, judul_berita, ringkasan, keywords, nama_kategori FROM berita INNER JOIN kategori ON berita.id_kategori = kategori.id_kategori';
    
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});



module.exports = router;

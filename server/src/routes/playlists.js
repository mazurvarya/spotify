const express = require('express');
const db = require('../database');
const router = express.Router();

// Создание плейлиста
router.post('/', (req, res) => {
    const { user_id, title } = req.body;
    db.run(
        'INSERT INTO playlists (user_id, title) VALUES (?, ?)',
        [user_id, title],
        function (err) {
            if (err) return res.status(400).json({ error: err.message });
            res.json({ id: this.lastID, user_id, title });
        }
    );
});

// Получение всех плейлистов пользователя
router.get('/user/:user_id', (req, res) => {
    db.all(
        'SELECT * FROM playlists WHERE user_id = ?',
        [req.params.user_id],
        (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        }
    );
});

// Получение треков плейлиста
router.get('/:id/tracks', (req, res) => {
    db.all(`
    SELECT t.* 
    FROM tracks t
    JOIN playlist_tracks pt ON t.id = pt.track_id
    WHERE pt.playlist_id = ?
  `, [req.params.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

module.exports = router;
const express = require('express');

module.exports = (upload) => {
    const router = express.Router();

    // Загрузка трека
    router.post('/upload', upload.single('track'), (req, res) => {
        const { title, artist, duration } = req.body;
        const file_path = req.file.path;

        db.run(
            'INSERT INTO tracks (title, artist, duration, file_path) VALUES (?, ?, ?, ?)',
            [title, artist, duration, file_path],
            function (err) {
                if (err) return res.status(400).json({ error: err.message });
                res.json({ id: this.lastID, title, artist, duration, file_path });
            }
        );
    });

    // Добавление трека в плейлист
    router.post('/addToPlaylist', (req, res) => {
        const { playlist_id, track_id } = req.body;
        db.run(
            'INSERT INTO playlist_tracks (playlist_id, track_id) VALUES (?, ?)',
            [playlist_id, track_id],
            (err) => {
                if (err) return res.status(400).json({ error: err.message });
                res.json({ success: true });
            }
        );
    });

    // Удаление трека из плейлиста
    router.delete('/removeFromPlaylist', (req, res) => {
        const { playlist_id, track_id } = req.body;
        db.run(
            'DELETE FROM playlist_tracks WHERE playlist_id = ? AND track_id = ?',
            [playlist_id, track_id],
            (err) => {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ success: true });
            }
        );
    });

    return router;
};
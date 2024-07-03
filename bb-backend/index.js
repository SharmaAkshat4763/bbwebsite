const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors({ origin: true }));

const filePath = path.join(__dirname, 'downloadCount.json');

// Route to get the current download count
app.get('/api/download-count', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read download count' });
    }
    const { count } = JSON.parse(data);
    res.json({ count });
  });
});

// Route to increment the download count
app.post('/api/increment-download', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read download count' });
    }

    const { count } = JSON.parse(data);
    const newCount = count + 1;

    fs.writeFile(filePath, JSON.stringify({ count: newCount }), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update download count' });
      }
      res.json({ count: newCount });
    });
  });
});

exports.api = functions.https.onRequest(app);

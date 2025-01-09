const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../dist')));

// Serve the manifest.json file with the correct content type


// Handle requests to any route by serving index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'), (err) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Error loading index.html');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



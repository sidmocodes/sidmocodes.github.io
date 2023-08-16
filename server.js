const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// An API endpoint that returns a JSON object of blog articles
app.get('/api/blog', (req, res) => {
    const blogs = [
        { title: 'My First Blog', id: 1 },
        { title: 'Understanding JavaScript', id: 2 },
        { title: 'Web Development Tips', id: 3 }
        // Add more blogs here
    ];
    res.json(blogs);
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

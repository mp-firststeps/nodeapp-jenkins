const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Success Response :: GIT :: TRAVIS :: EB');
});

app.listen(3001, err => console.log('App is listening to port 3001'))
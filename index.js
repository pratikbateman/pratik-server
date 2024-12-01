import express, { urlencoded, json } from 'express';
const app = express();

app.use(urlencoded({ extended: true }))
app.use(json())

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.send(`You sent: ${JSON.stringify(data)}`);
});


app.post('/endpoint', (req, res) => {
    console.log('Received data:', req.body);
    res.status(200).send('Data received successfully');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

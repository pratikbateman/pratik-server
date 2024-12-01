import express, { urlencoded, json } from 'express';
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', (req, res) => {
    res.send('Hello, Pratik Ghosh!');
});

app.post('/data', (req, res) => {
    const data = req.body;
    console.log(`Received string: ${data.message}`); // Print received message
    res.send(`You sent: ${data.message}`);
});

app.post('/endpoint', (req, res) => {
    console.log('Received data:', req.body.message);
    console.log('Received successfully');
    res.status(200).send('Data received successfully');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
app.listen(port, () => {
    console.log(`Notification System UP and Running`);
});
//# sourceMappingURL=app.js.map
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Servidor tá rodando mano",
        endpoints: {
            root: "GET /",
            status: "GET /status"
        }
    });
});

app.get('/status', (req, res) => {
    res.status(200).json({
        status: "online",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

//rodando na 3000 Pai
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} `);
});

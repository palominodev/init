import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.json({
		ok: true,
		title: "Welcome to Express"
	})
})

app.listen(2000, () => {
	console.log("Server listo");
})
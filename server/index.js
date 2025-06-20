// server/index.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.get('/', (req, res) => res.send('🎉 Job API is live!'));

app.get('/api/jobs', async (req, res) => {
	const keyword = req.query.keyword || '';
	try {
		const resp = await axios.get('https://jsearch.p.rapidapi.com/search', {
			params: { query: keyword, page: 1, num_pages: 1 },
			headers: {
				'X-RapidAPI-Key': process.env.JSEARCH_API_KEY,
				'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
			},
		});

		const jobs = resp.data.data.map((job) => ({
			id: job.job_id,
			title: job.job_title,
			company: job.employer_name,
			location: job.job_location,
			isRemote: job.job_is_remote,
			applyLink: job.job_apply_link,
		}));

		res.json(jobs);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Failed to fetch jobs' });
	}
});

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});

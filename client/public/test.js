async function fetchJSearchData(query) {
	const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(
		query
	)}&page=1&num_pages=1`;

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'a1b737e78fmshc3868af345dbfa7p12a998jsne61e719d0868', // 🔐 Replace with your actual API key
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		},
	};

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		console.log('Job search results:', data);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

// Example usage
fetchJSearchData('remote frontend developer');

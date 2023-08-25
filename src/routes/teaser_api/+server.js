export async function GET(params) {
	const email = params.url.searchParams.get('email');

	try {
		const data = JSON.stringify({
			Messages: [
				{
					From: { Email: 'leo.kim@vloclabs.com', Name: 'Inferix Supporter' },
					To: [{ Email: 'official@inferix.io', Name: email }],
					Subject: 'Sign up for Exclusive Early Access',
					TextPart: email
				}
			]
		});

		const basicAuth = btoa(`660e9d06d3855f360c149853c6fcab58:862bceefeae3d74631af2ce960953f7a`);
		await fetch('https://api.mailjet.com/v3.1/send', {
			method: 'POST',
			body: data,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${basicAuth}`
			}
		});
		return new Response('ok', {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		throw error(404, {
			message: 'Not found'
		});
	}
}

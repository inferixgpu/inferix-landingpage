export async function GET(params) {
	const email = params.url.searchParams.get('email');

	try {
		const contentMessToUser="Thank you for signing up for the Inferix Beta Experiencing program. We will contact you and guide you through the next steps.<br/>Best regards,"
		await sendMail(email, contentMessToUser)
		await sendMail("contact@inferix.io", email)
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

async function sendMail(email, TextPart){
	const data = JSON.stringify({
		Messages: [
			{
				From: { Email: 'dev@inferix.io', Name: 'Inferix Dev' },
				To: [{ Email: email, Name: email }],
				Subject: 'Sign up for Exclusive Early Access',
				HtmlPart: TextPart
			}
		]
	});

	const basicAuth = btoa(`0554438622b88c21de77d0174e0107be:e03e6ea85bc46612db0aba0bf7902f9f`);
	await fetch('https://api.mailjet.com/v3.1/send', {
		method: 'POST',
		body: data,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${basicAuth}`
		}
	});
}

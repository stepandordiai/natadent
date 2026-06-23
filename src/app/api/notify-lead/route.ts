// TODO: LEARN THIS
export async function OPTIONS() {
	return new Response(null, {
		headers: {
			"Access-Control-Allow-Origin": "",
			"Access-Control-Allow-Methods": "POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
		},
	});
}

// TODO: LEARN THIS
export async function POST(req: Request) {
	const client = await req.json();

	const text =
		`📅 Новий запис на прийом\n\n` +
		`Імʼя: ${client.firstName ?? "—"}\n` +
		`Прізвище: ${client.lastName ?? "—"}\n` +
		`Email: ${client.email ?? "—"}\n` +
		`Телефон: ${client.tel ?? "—"}\n` +
		`Сервіс: ${client.service ?? "—"}\n` +
		`Повідомлення: ${client.message ?? "—"}`;

	await fetch(
		`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }),
		},
	);

	return Response.json(
		{ ok: true },
		{
			headers: {
				"Access-Control-Allow-Origin": "",
			},
		},
	);
}

document.addEventListener('DOMContentLoaded', async () => {
    const requestBodyEl = document.getElementById('requestBody');
    const responseBodyEl = document.getElementById('responseBody');

    // Получаем initData от Telegram
    const initData = Telegram.WebApp.initData || "<нет initData>";

    // Формируем тело запроса, как ожидает бэкенд
    const requestBody = `tma ${initData}`;

    // Показываем тело запроса на странице
    requestBodyEl.textContent = requestBody;

    try {
        const response = await fetch('http://localhost:5010/Account/LoginByTelegramUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: requestBody
        });

        const responseText = await response.text();
        responseBodyEl.textContent = responseText;
    } catch (err) {
        responseBodyEl.textContent = `Ошибка запроса: ${err.toString()}`;
    }
});

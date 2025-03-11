const apiUrl = "https://localhost:5010/api";
const the_init_data = window.Telegram.WebApp.initData;
console.log('init_data=' + the_init_data);

// Шаг1. Регистрация или вход
fetch(`${apiUrl}/Account/LoginByTelegramUserInfo`, {
    mode: 'no-cors',
    method: "POST",
    headers: { "Authorization": `tma ${the_init_data}` },
    body: JSON.stringify({ tma: window.Telegram.WebApp.initData }),
})
.then(response => response.json()) 
.then(json => console.log(json));



// Шаг2. Вытаскиваем данные о своем брокерском аккаунте

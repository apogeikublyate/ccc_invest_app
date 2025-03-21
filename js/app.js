const apiUrl = "https://localhost:5010";
const the_init_data = window.Telegram.WebApp.initData;

// Шаг1. Регистрация или вход
fetch(`${apiUrl}/Account/LoginByTelegramUserInfo`, {
    mode: 'no-cors',
    method: "POST",
    headers: {
        "Content-Type": "plain/text"
    },
    body: `tma ${the_init_data}`,
})
.then(response => response.json()) 
.then(json => console.log(json));

// Надо на основной форме сделать 2 текстовых поля:
// 1 - для вывода отправялемой информации
// 2 - для полученного от сервера ответа

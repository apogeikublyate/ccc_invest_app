const apiUrl = "https://localhost:5010";
let the_init_data = window.Telegram.WebApp.initData;

// Устанавливаем значение, которое планируем отправить на бэк
document.getElementById('tg_initData_value').value = `tma ${the_init_data}`;

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
.then(response => document.getElementById('back_answer_value').value = response)
;


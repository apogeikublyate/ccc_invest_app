const apiUrl = "http://localhost:5010";
let the_init_data = window.Telegram.WebApp.initData;

// Устанавливаем значение, которое планируем отправить на бэк
const initDataField = document.getElementById('tg_initData_value');
const resultBackAnswerField = document.getElementById('back_answer_value');
initDataField.value = `tma ${the_init_data}`;
resultBackAnswerField.value = 'Запроса еще не было';

// Шаг1. Регистрация или вход
let response = await fetch(`${apiUrl}/Account/LoginByTelegramUserInfo`, {
    mode: 'no-cors',
    method: "POST",
    headers: {
        "Content-Type": "plain/text"
    },
    body: `tma ${the_init_data}`
});

if (response.ok) {
  let textRes = await response.text();
    resultBackAnswerField.value = textRes;
} else {
    resultBackAnswerField.value = `{response.status}`;
}

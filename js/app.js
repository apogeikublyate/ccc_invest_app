const apiUrl = "http://localhost:5010";
let the_init_data = window.Telegram.WebApp.initData;

// Устанавливаем значение, которое планируем отправить на бэк
document.getElementById('tg_initData_value').value = 'кек';
document.getElementById('back_answer_value').value = 'puk';
initDataField.value = `tma ${the_init_data}`;

// Шаг1. Регистрация или вход
let response = await fetch(`${apiUrl}/Account/LoginByTelegramUserInfo`, {
    mode: 'no-cors',
    method: "POST",
    headers: {
        "Content-Type": "plain/text"
    },
    body: `tma ${the_init_data}`
});

/*
if (response.ok) {
  let textRes = await response.text();
    resultBackAnswerField.value = textRes;
} else {
    resultBackAnswerField.value = `{response.status}`;
}
*/

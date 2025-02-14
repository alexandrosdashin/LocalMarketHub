// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Получаем данные пользователя
const user = tg.initDataUnsafe.user;
const username = user ? `${user.first_name} ${user.last_name || ''}`.trim() : "Гость";

// Отображаем имя пользователя
document.getElementById("username").textContent = username;

// Обработчик кнопки "Отправить данные"
document.getElementById("sendDataButton").addEventListener("click", () => {
    const data = {
        username: username,
        userId: user ? user.id : null,
        message: "Данные отправлены из Mini App!"
    };

    // Отправляем данные в Telegram
    tg.sendData(JSON.stringify(data));

    // Закрываем Mini App (опционально)
    tg.close();
});
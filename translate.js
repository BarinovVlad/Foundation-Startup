const translations = {
    en: {
        starting: "Build stunning websites & apps.",
        explain: "Create live segments and target the right people for messages based on their behaviors."
    },
    ua: {
        starting: "Привет!",
        explain: "Добро пожаловать на наш сайт."
    }
};

function changeLanguage(lang) {
    const content = document.getElementById('content');
    const greetingElement = document.getElementById('starting');
    const descriptionElement = document.getElementById('explain');

    greetingElement.textContent = translations[lang].starting;
    descriptionElement.textContent = translations[lang].explain;

    // Изменяем атрибут lang у тега html для корректного отображения специфических языковых особенностей
    document.documentElement.lang = lang;
}
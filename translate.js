const translations = {
    en: {
        starting: "Build stunning websites & apps.",
        explain: "Create live segments and target the right people for messages based on their behaviors."
    },
    ua: {
        greeting: "Привет!",
        description: "Добро пожаловать на наш сайт."
    }
};

function changeLanguage(lang) {
    const content = document.getElementById('content');
    const greetingElement = document.getElementById('greeting');
    const descriptionElement = document.getElementById('description');

    greetingElement.textContent = translations[lang].greeting;
    descriptionElement.textContent = translations[lang].description;

    // Изменяем атрибут lang у тега html для корректного отображения специфических языковых особенностей
    document.documentElement.lang = lang;
}
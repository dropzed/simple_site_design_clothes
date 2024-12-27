// Проверим, что страница полностью загружена
window.onload = function() {
    // Анимация появления элементов с использованием GSAP
    gsap.from("#about h2", {
        opacity: 0, // Начальная прозрачность
        y: 50, // Сдвиг вниз
        duration: 1, // Продолжительность анимации
        ease: "power2.out", // Тип easing анимации
    });
    gsap.from("#about p", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5, // Задержка для абзаца
        ease: "power2.out",
    });

    gsap.from("#contact .section-content h2", {
        opacity: 0,
        x: 50,
        duration: 7,
        ease: "power2.out",
    })
    gsap.from("#contact .section-content p", {
        opacity: 0,
        x: 50,
        duration: 7,
        ease: "power2.out",
    })
};


// Слайдер (не меняем его стили с GSAP)
const slides = document.querySelector('.slides');
let index = 0;

setInterval(() => {
    index++;
    if (index >= slides.children.length) {
        index = 0;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000); // Каждые n секунды переключаем слайды



// Добавляем обработчик для ссылок в меню
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Отключаем стандартное поведение перехода по ссылке
        const target = this.getAttribute('href');
        gsap.to(window, {
            duration: 0.5, // Длительность анимации
            scrollTo: target, // Прокрутка к целевому элементу
            ease: "power3.out" // Плавность анимации
        });
    });
});
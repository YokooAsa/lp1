// ============ ヘッダー用 =================
function openNav() {
    const nav = document.querySelector(".l-header__nav");
    nav.classList.toggle("c-nav__active");
};
function closeNav() {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    if (mediaQuery.matches) {
        const nav = document.querySelector(".l-header__nav");
        nav.classList.remove("c-nav__active");
    }
};
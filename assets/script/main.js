// ============ ヘッダー用 =================
function openNav() {
    const nav = document.querySelector(".gnav");
    nav.classList.toggle("nav-active");
};
function closeNav() {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    if (mediaQuery.matches) {
        const nav = document.querySelector(".gnav");
        nav.classList.remove("nav-active");
    }
};
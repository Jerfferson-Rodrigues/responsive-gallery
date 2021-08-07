var swiper = new Swiper(".container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slidesShadows: true
    },
    pagination: {
        el: ".pagination"
    }
})
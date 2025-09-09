const hamburgerBtn = document.querySelector('.nav__hamburger');
const hamburgerClose = document.querySelector('.nav__hamburger-close');
const mobileSlide = document.querySelector('.nav__mobile-slide');
const filterOverlay = document.querySelector('.filter-overlay');
const navbar = document.querySelector('.nav__container');
const links = document.querySelectorAll('a');
const carouselLeft = document.querySelector('.main__switch-left');
const carouselRight = document.querySelector('.main__switch-right');
const heroImgSlide = document.querySelector('.main__hero-image-carousel-flex');
const heroArticleSlide = document.querySelector('.main__hero-article-carousel-flex');
const heroArticles = Array.from(document.querySelectorAll('.main__hero-article-mobile'));


const toggleMobileMenu = function () {
    mobileSlide.classList.toggle('nav__mobile-slide--active');
    filterOverlay.classList.toggle('filter-overlay--active');

    links.forEach((link) => link.addEventListener('click', toggleMobileMenu));
}

const filterOnScroll = function () {
    if (window.scrollY > 0) {
        navbar.classList.add('nav__container--active');

    } else if (window.scrollY === 0) {
        navbar.classList.remove('nav__container--active');
    }

    // console.log(window.scrollY);
}

const toggleCarouselRight = function () {
    const currentItemIndex = heroArticles.findIndex((item) => item.classList.contains('main__hero-article-mobile--active'));
    console.log(currentItemIndex);

    if (heroArticles[currentItemIndex].classList.contains('main__hero-article-mobile--active')) {
        heroArticles[currentItemIndex].classList.remove('main__hero-article-mobile--active')
    }

    heroArticles[(currentItemIndex + 1) % 3].classList.add('main__hero-article-mobile--active');
    


    const heroWidth = document.querySelector('.main__hero-image img').offsetWidth;
    const articleWidth = document.querySelector('.main__hero-article').offsetWidth;

    if (heroImgSlide.style.transform === '' || heroImgSlide.style.transform === `translateX(0px)`) {
        heroImgSlide.style.transform = `translateX(-${heroWidth}px)`;
        heroArticleSlide.style.transform = `translateX(-${articleWidth}px)`;
        return;
    }

    if (heroImgSlide.style.transform ===`translateX(-${heroWidth}px)`) {
        heroImgSlide.style.transform = `translateX(-${heroWidth * 2}px)`;
        heroArticleSlide.style.transform = `translateX(-${articleWidth * 2}px)`;
        return;
    }

    if (heroImgSlide.style.transform === `translateX(-${heroWidth * 2}px)`) {
        heroImgSlide.style.transform = `translateX(0px)`;
        heroArticleSlide.style.transform = `translateX(0px)`;
        return;
    }
}

const toggleCarouselLeft = function () {
    const currentItemIndex = heroArticles.findIndex((item) => item.classList.contains('main__hero-article-mobile--active'));
    console.log(currentItemIndex);

    if (heroArticles[currentItemIndex].classList.contains('main__hero-article-mobile--active')) {
        heroArticles[currentItemIndex].classList.remove('main__hero-article-mobile--active')
    }

    heroArticles[(currentItemIndex + 3 - 1) % 3].classList.add('main__hero-article-mobile--active');



    const heroWidth = document.querySelector('.main__hero-image img').offsetWidth;
    const articleWidth = document.querySelector('.main__hero-article').offsetWidth;

    console.log(articleWidth);

    if (heroImgSlide.style.transform === '' || heroImgSlide.style.transform === `translateX(0px)`) {
        heroImgSlide.style.transform = `translateX(-${heroWidth * 2}px)`;
        heroArticleSlide.style.transform = `translateX(-${articleWidth * 2}px)`;
        return;
    }

    if (heroImgSlide.style.transform ===`translateX(-${heroWidth * 2}px)`) {
        heroImgSlide.style.transform = `translateX(-${heroWidth}px)`;
        heroArticleSlide.style.transform = `translateX(-${articleWidth}px)`;
        return;
    }

    if (heroImgSlide.style.transform === `translateX(-${heroWidth}px)`) {
        heroImgSlide.style.transform = `translateX(0px)`;
        heroArticleSlide.style.transform = `translateX(0px)`;
        return;
    }
}




hamburgerBtn.addEventListener('click', toggleMobileMenu);
hamburgerClose.addEventListener('click', toggleMobileMenu);
window.addEventListener('scroll', filterOnScroll);
carouselRight.addEventListener('click', toggleCarouselRight);
carouselLeft.addEventListener('click', toggleCarouselLeft);


// document.querySelector('.main__hero-image img').addEventListener('load', () => {
//     console.log(document.querySelector('.main__hero-image img').offsetWidth);
// });

// console.log(window.innerWidth);

// console.log(heroArticles);
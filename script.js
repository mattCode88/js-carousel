export default class Carousel extends HTMLElement{
    constructor() {
        super();

        this.imagesCarousel = document.getElementsByClassName('images-carousel');
        this.prev = document.getElementById('prev');
        this.next = document.getElementById('next');

        this.image = [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336351017.jpg?k=009c57740b67e4fc8e9ae472f988d55b26f2a872832f17d6d45c510d7b7af7c2&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336350897.jpg?k=67724238a8167f75d7c3a500afb3cd3dc7104af70bd83796e6f66ad983ff810c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336350957.jpg?k=2e099d4143993bc133562417098a9efb8ac1403a20bca06dd6a97a6eafff8d6c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336350881.jpg?k=46bd8f989c6f17875cdeeb41f2cc4cbabb0dab66e4ec1ea40890a62a94c7c6f5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336350980.jpg?k=7b5573fe0e2e43a629f6f8fba2da1bc8d3e0cb6a27f46629a4f7e121ee212182&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336350975.jpg?k=eb7745ff8daf7062eb3aaa996425842578018a415bb9e4daf0d85970ed8ad815&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336350999.jpg?k=fb6b1bf1e8be466c923ac9f75828df231353b8db391e0d9444e1fddb6ab9a2cd&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336350859.jpg?k=303b028054f8af1b4d68d10698b6b309acdfcd1e96a9b576dec230c805479a74&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336351023.jpg?k=157efd53b3a9845f4ebd792ff0bfc359780ea71da8356ae0d12fb5e0e304c0f3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336350771.jpg?k=e1103f9de93fd04499be55dbdf78e432f1b87856e8af1d294bbd97598a8953a3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336351046.jpg?k=d851e1328f043ad5a044ae48d50b1b4cc416dc27f6d4a67a64411b596a996719&o=&hp=1'
        ];

        this.indexImage = 1;

        this.setImage();
        this.nextImage();
        this.prevImage();
    };


    setImage = () => {

        this.imagesCarousel[0].setAttribute('src', this.image[this.indexImage === 0 ? this.image.length - 1 : this.indexImage - 1]);
        this.imagesCarousel[1].setAttribute('src', this.image[this.indexImage]);
        this.imagesCarousel[2].setAttribute('src', this.image[this.indexImage === this.image.length - 1 ? 0 : this.indexImage + 1]);

    };

    nextImage = () => {
        this.next.addEventListener('click', e => {

            gsap.fromTo('.image2', { opacity: 0, scale: 0, rotation: -360 }, { duration: .5, opacity: 1, scale: 1, rotation: 0 });
            gsap.fromTo('.image1', { opacity: 1, scale: 0, rotation: -720 }, { duration: 1, opacity: 0.4, scale: 1, rotation: 0 });
            gsap.fromTo('.image3', { opacity: 1, scale: 0, rotation: -720 }, { duration: 1, opacity: 0.4, scale: 1, rotation: 0 });

            this.indexImage++;

            if (this.indexImage > this.image.length - 1) this.indexImage = 0;

            this.setImage();
            
        });
    };

    prevImage = () => {
        this.prev.addEventListener('click', e => {

            gsap.fromTo('.image2', { opacity: 0, scale: 0, rotation: 360 }, { duration: .5, opacity: 1, scale: 1, rotation: 0 });
            gsap.fromTo('.image1', { opacity: 1, scale: 0, rotation: 720 }, { duration: 1, opacity: 0.4, scale: 1, rotation: 0 });
            gsap.fromTo('.image3', { opacity: 1, scale: 0, rotation: 720 }, { duration: 1, opacity: 0.4, scale: 1, rotation: 0 });

            this.indexImage--;

            if (this.indexImage < 0) this.indexImage = this.image.length - 1;

            this.setImage();

        });
    };
    
};
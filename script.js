export default class Carousel extends HTMLElement{
    constructor() {
        super();

        this.carouselContainer = document.getElementById('carousel-p');
        this.imagesCarousel = document.getElementsByClassName('images-carousel');
        this.prev = document.getElementById('prev-p');
        this.next = document.getElementById('next-p');

        this.video = [
            'https://cdn.pixabay.com/photo/2018/05/17/09/18/away-3408119__480.jpg',
            'https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg',
            'https://www.servizi-web-marketing.it/images/stories/news/immaginedascaricare.jpg',
            'https://www.addlance.com/blog/wp-content/uploads/2019/04/immagini-da-scaricare.jpg',
            'https://i0.wp.com/www.giacomocusano.com/wp-content/uploads/2016/07/coastal-wash-web.jpg?fit=1024%2C682&ssl=1',
            'https://www.donnamoderna.com/content/uploads/2020/11/tramonto-480x360.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrunHGF1h2VaInnlgYRJmYDiXjkTYLtDc_A&usqp=CAU',
            'https://vitolavecchia.altervista.org/wp-content/uploads/2017/04/Formati-e-qualit%C3%A0-di-unimmagine-digitale.jpg'
        ];

        this.indexVideo = 1;

        this.setVideo();
        this.nextVideo();
        this.prevVideo();
    };


    setVideo = () => {

        this.imagesCarousel[0].setAttribute('src', this.video[this.indexVideo === 0 ? this.video.length - 1 : this.indexVideo - 1]);
        this.imagesCarousel[1].setAttribute('src', this.video[this.indexVideo]);
        this.imagesCarousel[2].setAttribute('src', this.video[this.indexVideo === this.video.length - 1 ? 0 : this.indexVideo + 1]);

    };

    nextVideo = () => {
        this.next.addEventListener('click', e => {

            this.indexVideo++;

            if (this.indexVideo > this.video.length - 1) this.indexVideo = 0;

            this.setVideo();
            
        });
    };

    prevVideo = () => {
        this.prev.addEventListener('click', e => {

            this.indexVideo--;

            if (this.indexVideo < 0) this.indexVideo = this.video.length - 1;

            this.setVideo();

        });
    };
    
};


















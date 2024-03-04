class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Stan", "Eminem","1.jpg","1.mp3"),    
    new Music("La Isla Bonita", "Madonna","2.jpg","2.mp3"),    
    new Music("Set Fire To The Rain", "Adele","3.jpg","3.mp3")    
];

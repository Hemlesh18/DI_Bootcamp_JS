// Daily Challenge : Movie Database

 class Video{
    constructor(title,uploader,time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
 }

let video1 = new Video("The Godfather", "Sam", 120)
let video2 = new Video("sam sam 2", "Samm", 128)
video1.watch()
video2.watch()

let videos = []
videos.push(new Video("The Godfather", "Sam", 120))
videos.push(new Video("The Godfather 2", "Samm", 128))
videos.push(new Video("The Godfather 3", "Sam", 130))
videos.push(new Video("The Godfather 4", "Smmm", 140))
videos.push(new Video("The Godfather 5", "Samm", 150))
console.log(videos)




class Music {
    constructor(public name: string, public author: string) {
        // this.name = name
        // this.author =author
    }
}

const m1 = new Music("Vishesh bibshesh","Vishesh");
console.log(m1.author+" "+m1.name)
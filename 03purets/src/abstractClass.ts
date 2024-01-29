abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract createStory(): void;
    getReelTime(): number{
        return 5;

    }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter);
    }
    createStory(): void {
        console.log("Creating story");
    }
}

const joseph3 = new Instagram("portrait", "vintage", 3);

joseph3.createStory();
joseph3.getReelTime();
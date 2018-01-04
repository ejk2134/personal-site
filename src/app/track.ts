export class Track{
    rank: number;
    title: string;
    artists: string[];
    albumArt: string;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
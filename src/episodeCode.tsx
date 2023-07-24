
export function episodeCode(season:number,number:number):string {
    let episodeCode = '';
    if (number < 10){
        episodeCode = `E0${number}`;
    } else { 
        episodeCode = `E${number}`
    }
    const seasonCode:string = (season<10) ? `S0${season}` : `S${season}`;

    return seasonCode+episodeCode
}
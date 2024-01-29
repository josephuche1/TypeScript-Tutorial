function detectTypes(val: number |string){
    if (typeof val === "string"){
        return val.toUpperCase();
    }
    return val + 3;
}

function provideId(id: string | null){
    if(id === null){
        console.log('No id was provided');
    }
    return id?.toLowerCase();
}
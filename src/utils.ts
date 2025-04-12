export const decimal2 = (n: number) => {
    const nString = n.toString();
    return   nString.slice(0, nString.length-2) + "." +
            nString.slice(nString.length-2);
}

export const substract = (a: number | undefined,b: number | undefined) => {
    if(a && b)
        return a-b; 
    return 0;
}
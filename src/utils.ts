export const decimal2 = (n: number) => {
    const nString = n.toString();
    return   nString.slice(0, nString.length-2) + "." +
            nString.slice(nString.length-2);
}
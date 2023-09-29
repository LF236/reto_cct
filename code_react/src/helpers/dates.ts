export const dateFormat = ( date: string ) => {
    return new Date( date ).toISOString().slice(0, 10);
}
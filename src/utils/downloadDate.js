export const getDownloadDate = () => {
    const today = new Date();
    return `${today.getFullYear()}${today.getMonth()}${today.getDate()}${today.getHours()}${today.getMinutes()}${today.getSeconds()}${today.getMilliseconds()}`;
};

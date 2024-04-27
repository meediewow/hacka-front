export const getLsKey = (key: string) => {
    try {
        return window.localStorage.getItem(key);
    } catch (e) {
        console.error('Error getting from localStorage', e);

        return null;
    }
};

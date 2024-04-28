export const getUserGeo = (): Promise<google.maps.LatLngLiteral | null> => new Promise((resolve) => {
    if (!window?.navigator) {
        return resolve(null);
    }

    function success(position: GeolocationPosition) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        resolve({ lat, lng });
    }

    function error() {
        resolve(null);
    }

    navigator.geolocation.getCurrentPosition(success, error);
});

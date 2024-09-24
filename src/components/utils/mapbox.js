import mapbox from 'mapbox-gl';

// https://docs.mapbox.com/help/glossary/access-token//
mapbox.accessToken = 'pk.eyJ1Ijoic2FzZWVtZSIsImEiOiJjbTE3aTZqNW8wNWNiMmxvZjRxMm1qNGl1In0.vOrvAx3sdXExqlhglSjvvA';

const key = Symbol();

export { mapbox, key };
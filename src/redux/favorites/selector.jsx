import { createSelector } from "reselect";

export const rawFavoritesCars = (state) => state.favorites.cars;

export const favoritesCars = createSelector(
    [rawFavoritesCars],
    (cars) =>  cars.map(Number)
);


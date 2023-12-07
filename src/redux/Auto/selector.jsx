export const getCars = state => state.data.cars.items;
export const getIsLoading = state => state.data.cars.isLoading;
export const getError = state => state.data.cars.error;
export const getFiltered = state => state.filters;
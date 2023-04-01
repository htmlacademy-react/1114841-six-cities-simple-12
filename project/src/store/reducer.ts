import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSort, loadOffers, requireAuthorization, setOffersDataLoadingStatus, setError } from './action';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus } from '../common/const';
import { Offer } from '../types/offer';


type InitialState = {
  city: string;
  offers: Offer[];
  sorting: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
};


const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sorting: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })

    .addCase(changeSort, (state, action) => {
      state.sorting = action.payload;
    })

    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };

import { configureStore } from '@reduxjs/toolkit';
import packagesReducer from './packages/packagesSlice';
import faqReducer from './faq/faqSlice';
import organsPackageReducer from './organsPackages/organsPackagSlice';
import snackbarReducer from './snackbar/snackbarSlice';
import testsReducer from './tests/testsSlice';
import testsPackageDetailsReducer from './testsPackageDetails/testsPackageDetails';
import cartReducer from './cart/cartSlice';
import viewDetailsReducer from './viewDetails/viewDetailsSlice';

export * from './packages/packagesSlice';
export * from './faq/faqSlice';
export * from './organsPackages/organsPackagSlice';
export * from './snackbar/snackbarSlice';
export * from './tests/testsSlice';
export * from './testsPackageDetails/testsPackageDetails';
export * from './cart/cartSlice';
export * from './viewDetails/viewDetailsSlice';


const store = configureStore({
  reducer: {
    packages: packagesReducer,
    faq: faqReducer,
    organsPackages: organsPackageReducer,
    snackbar:snackbarReducer,
    tests:testsReducer,
    testsPackageDetails: testsPackageDetailsReducer,
    cart:cartReducer,
    viewDetails:viewDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

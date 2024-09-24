// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import packagesReducer from './packages/packagesSlice';
import faqReducer from './faq/faqSlice';
import organsPackageReducer from './organsPackages/organsPackagSlice';
import snackbarReducer from './snackbar/snackbarSlice';

export * from './packages/packagesSlice';
export * from './faq/faqSlice';
export * from './organsPackages/organsPackagSlice';
export * from './snackbar/snackbarSlice';


const store = configureStore({
  reducer: {
    packages: packagesReducer,
    faq: faqReducer,
    organsPackages: organsPackageReducer,
    snackbar:snackbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import packagesReducer from './packages/packagesSlice';
import faqReducer from './faq/faqSlice';
import organsPackageReducer from './organsPackages/organsPackagSlice';
import snackbarReducer from './snackbar/snackbarSlice';
import testsReducer from './tests/testsSlice';

export * from './packages/packagesSlice';
export * from './faq/faqSlice';
export * from './organsPackages/organsPackagSlice';
export * from './snackbar/snackbarSlice';
export * from './tests/testsSlice';


const store = configureStore({
  reducer: {
    packages: packagesReducer,
    faq: faqReducer,
    organsPackages: organsPackageReducer,
    snackbar:snackbarReducer,
    tests:testsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

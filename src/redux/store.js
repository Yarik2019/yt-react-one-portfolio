import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./home/slice";
import { aboutReducer } from "./about/slice";
import { contactReducer } from "./contact/slice";
import {experienceReducer} from "./experience/slice";

import { portfolioReducer } from "./portfolio/slice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    about: aboutReducer,
    contact: contactReducer,
    experience: experienceReducer,
    portfolio: portfolioReducer,
  },
});

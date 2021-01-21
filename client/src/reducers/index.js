import { combineReducers } from "redux";

import newLinks from "./newLinks";
import allLinks from "./allLinks";

export const reducers = combineReducers({ newLinks, allLinks });

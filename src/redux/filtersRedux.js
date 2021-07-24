/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const FROM = createActionName('FROM');
export const TO = createActionName('TO');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const addSearchTag = payload => ({ payload, type: ADD_TAG });
export const removeSearchTag = payload => ({ payload, type: REMOVE_TAG });
export const durationFrom = payload => ({ payload, type: FROM });
export const durationTo = payload => ({ payload, type: TO });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADD_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: statePart.tags.filter(tag => tag !== action.payload),
      };
    case FROM:
      return {
        ...statePart,
        duration : {
          ...statePart.duration,
          from: action.payload,
        },
      };
    case TO:
      return {
        ...statePart,
        duration : {
          ...statePart.duration,
          to: action.payload,
        },
      };
    default:
      return statePart;
  }
}

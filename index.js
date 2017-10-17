import React from 'react';
import { AppRegistry } from 'react-native';

import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import rootReducer from './src/reducers';
import App from './src/App';

/** Redux debugging. This will be disabled before production **/
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

/** Plug in redux middleware
 *      logger: Just a debugging tool for console messages in devtools.
 */
function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            loggerMiddleware,
        ),
    );
    return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore({});

const reduxThing = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

AppRegistry.registerComponent('reduxThing', () => reduxThing);

import { isNil } from 'lodash';
import React, { useContext } from 'react';

const GlobalContext = React.createContext({
    config: {},
    theme: 'default',
    lang: 'en_US'
});

export const useGlobalConfig = () => {
    const context = useContext(GlobalContext);
    if (isNil(context)) {
        throw new Error(" Global context is undefine");
    }
    return context;
}

export default GlobalContext;

export const GlobalProvider = GlobalContext.Provider;
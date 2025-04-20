import React from 'react';

import { Canvas as SmartClientCanvas, Class as SmartClientClass} from 'smartclient.d.ts';

// allow all attributes to be set to string, as in Component XML; will be type-coerced later
type AsComponentXML<T> = {
  [K in keyof T]: T[K] | string;
};

// we can't define per-class element tags (matching its properties), so just allow all tags
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [propName: string]: any;
        }
    }
}

declare class ReactComponent extends React.Component {
    /**
     * Returns the SmartClient JavaScript component (canvas or class instance) wrapped by the
     * React component.
     * @returns {SmartClientCanvas|SmartClientClass} SmartClient component
     */
    getSCComponent(): SmartClientCanvas|SmartClientClass;
}

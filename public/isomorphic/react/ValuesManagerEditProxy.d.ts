import React from 'react';
import { EditProxy, EditProxyProps } from './EditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface ValuesManagerEditProxyProps extends EditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ValuesManagerEditProxy wraps the SmartClient widget class
 * {@link isc.ValuesManagerEditProxy ValuesManagerEditProxy} for React, allowing you to import
 * ValuesManagerEditProxy for use in React JS and JSX.
 * @class
 * @extends EditProxy
 */
declare class ValuesManagerEditProxy extends EditProxy {
    props: AsComponentXML<ValuesManagerEditProxyProps>;
}

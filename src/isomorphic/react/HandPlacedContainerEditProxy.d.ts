import React from 'react';
import { EditProxy, EditProxyProps } from './EditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface HandPlacedContainerEditProxyProps extends EditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HandPlacedContainerEditProxy wraps the SmartClient widget class
 * {@link isc.HandPlacedContainerEditProxy HandPlacedContainerEditProxy} for React, allowing you to import
 * HandPlacedContainerEditProxy for use in React JS and JSX.
 * @class
 * @extends EditProxy
 */
declare class HandPlacedContainerEditProxy extends EditProxy {
    props: AsComponentXML<HandPlacedContainerEditProxyProps>;
}

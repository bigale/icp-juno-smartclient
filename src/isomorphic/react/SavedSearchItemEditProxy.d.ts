import React from 'react';
import { SelectItemEditProxy, SelectItemEditProxyProps } from './SelectItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface SavedSearchItemEditProxyProps extends SelectItemEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SavedSearchItemEditProxy wraps the SmartClient widget class
 * {@link isc.SavedSearchItemEditProxy SavedSearchItemEditProxy} for React, allowing you to import
 * SavedSearchItemEditProxy for use in React JS and JSX.
 * @class
 * @extends SelectItemEditProxy
 */
declare class SavedSearchItemEditProxy extends SelectItemEditProxy {
    props: AsComponentXML<SavedSearchItemEditProxyProps>;
}

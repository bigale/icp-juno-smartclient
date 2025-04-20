import React from 'react';
import { SelectItemEditProxy, SelectItemEditProxyProps } from './SelectItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface RadioGroupItemEditProxyProps extends SelectItemEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RadioGroupItemEditProxy wraps the SmartClient widget class
 * {@link isc.RadioGroupItemEditProxy RadioGroupItemEditProxy} for React, allowing you to import
 * RadioGroupItemEditProxy for use in React JS and JSX.
 * @class
 * @extends SelectItemEditProxy
 */
declare class RadioGroupItemEditProxy extends SelectItemEditProxy {
    props: AsComponentXML<RadioGroupItemEditProxyProps>;
}

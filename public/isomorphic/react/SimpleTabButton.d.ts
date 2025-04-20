import React from 'react';
import { Button, ButtonProps } from './Button';
import { AsComponentXML } from './core/ReactComponent';


declare interface SimpleTabButtonProps extends ButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SimpleTabButton wraps the SmartClient widget class
 * {@link isc.SimpleTabButton SimpleTabButton} for React, allowing you to import
 * SimpleTabButton for use in React JS and JSX.
 * @class
 * @extends Button
 */
declare class SimpleTabButton extends Button {
    props: AsComponentXML<SimpleTabButtonProps>;
}

import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface BaseWidgetProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BaseWidget wraps the non-rendered SmartClient class
 * {@link isc.BaseWidget BaseWidget} for React, allowing you to import
 *  BaseWidget for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class BaseWidget extends ILogicalComponent {
    props: AsComponentXML<BaseWidgetProps>;
}

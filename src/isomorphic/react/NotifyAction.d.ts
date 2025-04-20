import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface NotifyActionProps {

/**
 * See {@link isc.NotifyAction.dismissMessage NotifyAction.dismissMessage}.
 */
dismissMessage?: boolean;

/**
 * See {@link isc.NotifyAction.methodName NotifyAction.methodName}.
 */
methodName?: string;

/**
 * See {@link isc.NotifyAction.wholeMessage NotifyAction.wholeMessage}.
 */
wholeMessage?: boolean;

/**
 * See {@link isc.NotifyAction.target NotifyAction.target}.
 */
target?: Object;

/**
 * See {@link isc.NotifyAction.separator NotifyAction.separator}.
 */
separator?: string;

/**
 * See {@link isc.NotifyAction.title NotifyAction.title}.
 */
title?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NotifyAction wraps the SmartClient object
 * {@link isc.NotifyAction NotifyAction} for React, allowing you to import
 * NotifyAction for use in React JS and JSX.
 * @class
 */
declare class NotifyAction extends ILogicalComponent {
    props: AsComponentXML<NotifyActionProps>;
}

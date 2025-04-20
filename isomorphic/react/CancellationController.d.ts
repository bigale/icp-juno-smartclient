import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CancellationControllerProps {

/**
 * See {@link isc.CancellationController.createSubController() CancellationController.createSubController()}.
 */
createSubController?: Function;

/**
 * See {@link isc.CancellationController.cancel() CancellationController.cancel()}.
 */
cancel?: Function;

/**
 * See {@link isc.CancellationController.canceled CancellationController.canceled}.
 */
canceled?: boolean;

/**
 * See {@link isc.CancellationController.cancellationReason CancellationController.cancellationReason}.
 */
cancellationReason?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CancellationController wraps the non-rendered SmartClient class
 * {@link isc.CancellationController CancellationController} for React, allowing you to import
 *  CancellationController for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class CancellationController extends ILogicalComponent {
    props: AsComponentXML<CancellationControllerProps>;
}

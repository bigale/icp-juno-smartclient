import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface ShowNotificationTaskProps extends ProcessElementProps {

/**
 * See {@link isc.ShowNotificationTask.notifyType ShowNotificationTask.notifyType}.
 */
notifyType?: string;

/**
 * See {@link isc.ShowNotificationTask.textFormula ShowNotificationTask.textFormula}.
 */
textFormula?: UserSummary;

/**
 * See {@link isc.ShowNotificationTask.message ShowNotificationTask.message}.
 */
message?: string;

/**
 * See {@link isc.ShowNotificationTask.autoDismiss ShowNotificationTask.autoDismiss}.
 */
autoDismiss?: boolean;

/**
 * See {@link isc.ShowNotificationTask.position ShowNotificationTask.position}.
 */
position?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ShowNotificationTask wraps the SmartClient widget class
 * {@link isc.ShowNotificationTask ShowNotificationTask} for React, allowing you to import
 * ShowNotificationTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class ShowNotificationTask extends ProcessElement {
    props: AsComponentXML<ShowNotificationTaskProps>;
}

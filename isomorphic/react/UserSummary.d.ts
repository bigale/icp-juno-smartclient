import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface UserSummaryProps {

/**
 * See {@link isc.UserSummary.text UserSummary.text}.
 */
text?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * UserSummary wraps the SmartClient object
 * {@link isc.UserSummary UserSummary} for React, allowing you to import
 * UserSummary for use in React JS and JSX.
 * @class
 */
declare class UserSummary extends ILogicalComponent {
    props: AsComponentXML<UserSummaryProps>;
}

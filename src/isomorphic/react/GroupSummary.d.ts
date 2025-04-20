import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface GroupSummaryProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GroupSummary wraps the SmartClient object
 * {@link isc.GroupSummary GroupSummary} for React, allowing you to import
 * GroupSummary for use in React JS and JSX.
 * @class
 */
declare class GroupSummary extends ILogicalComponent {
    props: AsComponentXML<GroupSummaryProps>;
}

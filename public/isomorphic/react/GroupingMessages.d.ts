import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface GroupingMessagesProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GroupingMessages wraps the non-rendered SmartClient class
 * {@link isc.GroupingMessages GroupingMessages} for React, allowing you to import
 *  GroupingMessages for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class GroupingMessages extends ILogicalComponent {
    props: AsComponentXML<GroupingMessagesProps>;
}

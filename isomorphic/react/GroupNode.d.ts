import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface GroupNodeProps {

/**
 * See {@link isc.GroupNode.groupMembers GroupNode.groupMembers}.
 */
groupMembers?: ListGridRecord[] | GroupNode;

/**
 * See {@link isc.GroupNode.groupName GroupNode.groupName}.
 */
groupName?: string;

/**
 * See {@link isc.GroupNode.groupTitle GroupNode.groupTitle}.
 */
groupTitle?: string;

/**
 * See {@link isc.GroupNode.groupValue GroupNode.groupValue}.
 */
groupValue?: any;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GroupNode wraps the SmartClient object
 * {@link isc.GroupNode GroupNode} for React, allowing you to import
 * GroupNode for use in React JS and JSX.
 * @class
 */
declare class GroupNode extends ILogicalComponent {
    props: AsComponentXML<GroupNodeProps>;
}

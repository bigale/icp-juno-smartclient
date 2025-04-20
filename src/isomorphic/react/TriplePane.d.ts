import React from 'react';
import { SplitPane, SplitPaneProps } from './SplitPane';
import { AsComponentXML } from './core/ReactComponent';


declare interface TriplePaneProps extends SplitPaneProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TriplePane wraps the SmartClient widget class
 * {@link isc.TriplePane TriplePane} for React, allowing you to import
 * TriplePane for use in React JS and JSX.
 * @class
 * @extends SplitPane
 */
declare class TriplePane extends SplitPane {
    props: AsComponentXML<TriplePaneProps>;
}

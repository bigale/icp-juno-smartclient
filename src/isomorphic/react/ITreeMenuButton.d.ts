import React from 'react';
import { TreeMenuButton, TreeMenuButtonProps } from './TreeMenuButton';
import { AsComponentXML } from './core/ReactComponent';


declare interface ITreeMenuButtonProps extends TreeMenuButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ITreeMenuButton wraps the SmartClient widget class
 * {@link isc.ITreeMenuButton ITreeMenuButton} for React, allowing you to import
 * ITreeMenuButton for use in React JS and JSX.
 * @class
 * @extends TreeMenuButton
 */
declare class ITreeMenuButton extends TreeMenuButton {
    props: AsComponentXML<ITreeMenuButtonProps>;
}

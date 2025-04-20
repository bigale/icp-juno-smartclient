import React from 'react';
import { MenuButton, MenuButtonProps } from './MenuButton';
import { AsComponentXML } from './core/ReactComponent';


declare interface TextMenuButtonProps extends MenuButtonProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TextMenuButton wraps the SmartClient widget class
 * {@link isc.TextMenuButton TextMenuButton} for React, allowing you to import
 * TextMenuButton for use in React JS and JSX.
 * @class
 * @extends MenuButton
 */
declare class TextMenuButton extends MenuButton {
    props: AsComponentXML<TextMenuButtonProps>;
}

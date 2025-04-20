import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface DeckProps extends LayoutProps {

/**
 * See {@link isc.Deck.removePane() Deck.removePane()}.
 */
removePane?: Function;

/**
 * See {@link isc.Deck.hideCurrentPane() Deck.hideCurrentPane()}.
 */
hideCurrentPane?: Function;

/**
 * See {@link isc.Deck.setCurrentPane() Deck.setCurrentPane()}.
 */
setCurrentPane?: Function;

/**
 * See {@link isc.Deck.addPane() Deck.addPane()}.
 */
addPane?: Function;

/**
 * See {@link isc.Deck.currentPaneChanged() Deck.currentPaneChanged()}.
 */
currentPaneChanged?: Function;

/**
 * See {@link isc.Deck.panes Deck.panes}.
 */
panes?: Canvas[];

/**
 * See {@link isc.Deck.currentPane Deck.currentPane}.
 */
currentPane?: Canvas | string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Deck wraps the SmartClient widget class
 * {@link isc.Deck Deck} for React, allowing you to import
 * Deck for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class Deck extends Layout {
    props: AsComponentXML<DeckProps>;
}

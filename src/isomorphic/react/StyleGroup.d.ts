import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface StyleGroupProps {

/**
 * See {@link isc.StyleGroup.expanded StyleGroup.expanded}.
 */
expanded?: boolean;

/**
 * See {@link isc.StyleGroup.settings StyleGroup.settings}.
 */
settings?: StyleSetting[];

/**
 * See {@link isc.StyleGroup.name StyleGroup.name}.
 */
name?: string;

/**
 * See {@link isc.StyleGroup.allowAsymmetry StyleGroup.allowAsymmetry}.
 */
allowAsymmetry?: boolean;

/**
 * See {@link isc.StyleGroup.title StyleGroup.title}.
 */
title?: string;

/**
 * See {@link isc.StyleGroup.canCollapse StyleGroup.canCollapse}.
 */
canCollapse?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StyleGroup wraps the SmartClient object
 * {@link isc.StyleGroup StyleGroup} for React, allowing you to import
 * StyleGroup for use in React JS and JSX.
 * @class
 */
declare class StyleGroup extends ILogicalComponent {
    props: AsComponentXML<StyleGroupProps>;
}

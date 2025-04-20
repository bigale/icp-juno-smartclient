import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DiscoverTreeSettingsProps {

/**
 * See {@link isc.DiscoverTreeSettings.typeProperty DiscoverTreeSettings.typeProperty}.
 */
typeProperty?: string;

/**
 * See {@link isc.DiscoverTreeSettings.tieMode DiscoverTreeSettings.tieMode}.
 */
tieMode?: string;

/**
 * See {@link isc.DiscoverTreeSettings.nameProperty DiscoverTreeSettings.nameProperty}.
 */
nameProperty?: string;

/**
 * See {@link isc.DiscoverTreeSettings.scanMode DiscoverTreeSettings.scanMode}.
 */
scanMode?: string;

/**
 * See {@link isc.DiscoverTreeSettings.childrenMode DiscoverTreeSettings.childrenMode}.
 */
childrenMode?: string;

/**
 * See {@link isc.DiscoverTreeSettings.newChildrenProperty DiscoverTreeSettings.newChildrenProperty}.
 */
newChildrenProperty?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DiscoverTreeSettings wraps the SmartClient object
 * {@link isc.DiscoverTreeSettings DiscoverTreeSettings} for React, allowing you to import
 * DiscoverTreeSettings for use in React JS and JSX.
 * @class
 */
declare class DiscoverTreeSettings extends ILogicalComponent {
    props: AsComponentXML<DiscoverTreeSettingsProps>;
}

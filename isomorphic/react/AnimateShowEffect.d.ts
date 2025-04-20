import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AnimateShowEffectProps {

/**
 * See {@link isc.AnimateShowEffect.endsAt AnimateShowEffect.endsAt}.
 */
endsAt?: string;

/**
 * See {@link isc.AnimateShowEffect.endAt AnimateShowEffect.endAt}.
 */
endAt?: string;

/**
 * See {@link isc.AnimateShowEffect.startFrom AnimateShowEffect.startFrom}.
 */
startFrom?: string;

/**
 * See {@link isc.AnimateShowEffect.effect AnimateShowEffect.effect}.
 */
effect?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AnimateShowEffect wraps the SmartClient object
 * {@link isc.AnimateShowEffect AnimateShowEffect} for React, allowing you to import
 * AnimateShowEffect for use in React JS and JSX.
 * @class
 */
declare class AnimateShowEffect extends ILogicalComponent {
    props: AsComponentXML<AnimateShowEffectProps>;
}

import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface MathFunctionProps {

/**
 * See {@link isc.MathFunction.description MathFunction.description}.
 */
description?: string;

/**
 * See {@link isc.MathFunction.defaultSortPosition MathFunction.defaultSortPosition}.
 */
defaultSortPosition?: number;

/**
 * See {@link isc.MathFunction.name MathFunction.name}.
 */
name?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MathFunction wraps the non-rendered SmartClient class
 * {@link isc.MathFunction MathFunction} for React, allowing you to import
 *  MathFunction for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class MathFunction extends ILogicalComponent {
    props: AsComponentXML<MathFunctionProps>;
}

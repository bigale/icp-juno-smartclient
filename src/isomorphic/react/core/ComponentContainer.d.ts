import React from 'react';
import { Canvas, CanvasProps } from '../Canvas';
import { AsComponentXML } from './ReactComponent';

declare interface ComponentContainerProps extends CanvasProps {

/**
 * The contained third-party React component
 */
component: React.component;

}

/**
 * Class that wraps a third-party React component in a SmartClient React Canvas so that it can
 * be inserted into other SC React wrappers, like Layout, that only accept Canvas members.
 * @class
 * @extends Canvas
 */
declare class ComponentContainer extends Canvas {
        props: AsComponentXML<ComponentContainerProps>;
}

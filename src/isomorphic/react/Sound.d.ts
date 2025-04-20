import React from 'react';
import { IBaseComponent } from './core/IBaseComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SoundProps {

/**
 * See {@link isc.Sound.setCurrentTime() Sound.setCurrentTime()}.
 */
setCurrentTime?: Function;

/**
 * See {@link isc.Sound.setSrc() Sound.setSrc()}.
 */
setSrc?: Function;

/**
 * See {@link isc.Sound.src Sound.src}.
 */
src?: string | string[];

/**
 * See {@link isc.Sound.getCurrentTime() Sound.getCurrentTime()}.
 */
getCurrentTime?: Function;

/**
 * See {@link isc.Sound.reset() Sound.reset()}.
 */
reset?: Function;

/**
 * See {@link isc.Sound.load() Sound.load()}.
 */
load?: Function;

/**
 * See {@link isc.Sound.getDuration() Sound.getDuration()}.
 */
getDuration?: Function;

/**
 * See {@link isc.Sound.play() Sound.play()}.
 */
play?: Function;

/**
 * See {@link isc.Sound.timeChanged() Sound.timeChanged()}.
 */
timeChanged?: Function;

/**
 * See {@link isc.Sound.autoPlay Sound.autoPlay}.
 */
autoPlay?: boolean;

/**
 * See {@link isc.Sound.pause() Sound.pause()}.
 */
pause?: Function;

/**
 * See {@link isc.Sound.autoLoad Sound.autoLoad}.
 */
autoLoad?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Sound wraps the SmartClient widget class
 * {@link isc.Sound Sound} for React, allowing you to import
 * Sound for use in React JS and JSX.
 * @class
 * @extends IBaseComponent
 */
declare class Sound extends IBaseComponent {
    props: AsComponentXML<SoundProps>;
}

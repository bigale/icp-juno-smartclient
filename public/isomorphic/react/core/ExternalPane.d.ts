import React from 'react';

import { Canvas as SmartClientCanvas } from 'smartclient.d.ts';

/**
 * Class that enables easy integration of an existing SmartClient UI in a React app.  Just
 * override {@link ExternalPane.buildPane()} to return a new instance of your SmartClient UI.
 * @class
 */
declare class ExternalPane {
    /**
     * Override this method to return a new instance of your SmartClient UI.
     * @returns {SmartClientCanvas} a new instance of your SmartClient UI
     */
    buildPane(): SmartClientCanvas;
}

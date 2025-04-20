import React from 'react';
import { ReactComponent } from './core/ReactComponent';

/**
 * Utility class that provides wrapper APIs and utility functions for SmartClient's React
 * support.
 * @class
 */
declare class SC {

    /**
     * Returns the existing custom SmartClient React class created earlier by a call to
     * {@link defineClass}.
     *
     * @param {string} className - name of the new React subclass to return
     * @returns {typeof ReactComponent} the custom SmartClient React subclass requested
     */
    static importClass(className: string): typeof React.Component;

    /**
     * Creates a new React subclass extending an existing SmartClient React class, while also
     * automatically creating the corresponding SmartClient framework subclass in JavaScript.
     * <p>
     * This is the simplest way to create a subclass for a SmartClient React wrapper class
     * if you just need to add some new properties or change existing defaults.
     *
     * @param {string} className - name of the new React subclass to define
     * @param {typeof ReactComponent} superclass - SmartClient React wrapper class to extend
     * @returns {typeof ReactComponent} the new React subclass just defined
     */
    static defineClass(className: string, superclass: typeof ReactComponent): typeof ReactComponent;

    /**
     * Render a React element into the DOM in the supplied container and return a reference to
     * the component.  This is a wrapper around the underlying React render API, which is
     * different in more recent React versions, so the change can be hidden from client code.
     * 
     * @param {React.ReactElement} code - the React element to render
     * @param {Element} target - A DOM element where the rendered element will be appended
     * @returns {React.Component} Reference to the mounted component
     */
    static render(code: React.ReactElement, target: Element): React.Component;
}

import React from 'react';

let isc = window.isc;

export class ExternalPane extends React.Component {

    componentDidMount() {
        this.pane = isc.React.buildPane(this.buildPane.bind(this), this.el);
    }

    componentWillUnmount() {
        if (this.pane) {
            this.pane.destroy();
            this.pane = null;
        }
    }

    render() {
        return <div ref={el => (this.el = el)} />;
    }

    buildPane() {
        isc.log.Warn("Method ExternalPane.buildPane() has not been implemented!");
    }
}

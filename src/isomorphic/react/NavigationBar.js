import { HLayout } from './HLayout';

export class NavigationBar extends HLayout {
    static ISC_CLASS_NAME = 'NavigationBar';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"animateStateChanges":"boolean","showLeftButton":"Boolean","titleLabelProperties":{"className":"Label","isProperties":true},"rightButtonProperties":{"className":"NavigationButton","isProperties":true},"iconSize":"Integer","alwaysShowLeftButtonTitle":"boolean","leftButtonProperties":{"className":"NavigationButton","isProperties":true},"showRightButton":"Boolean","miniNavControlProperties":{"className":"MiniNavControl","isProperties":true},"customNavControl":{"className":"Canvas"},"showMiniNavControl":"boolean","controls":[{"className":"String","isArray":true},{"className":"Canvas","isArray":true}],"maxCenterOffset":"int"};

}

import { ILogicalComponent } from './core/ILogicalComponent';

export class NavigationBarViewState extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"alwaysShowLeftButtonTitle":"Boolean","controls":[{"className":"String","isArray":true},{"className":"Canvas","isArray":true}],"showLeftButton":"Boolean"};

}

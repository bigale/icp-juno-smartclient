import { ILogicalComponent } from './core/ILogicalComponent';

export class ImgHTMLProperties extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"width":"number","height":"number"};

}

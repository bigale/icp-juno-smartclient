import { ImgHTMLProperties } from './ImgHTMLProperties';

export class ImgProperties extends ImgHTMLProperties {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"height":"number","width":"number"};

}

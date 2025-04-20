import { ILogicalComponent } from './core/ILogicalComponent';

export class PaletteNode extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"defaults":{"className":"Properties"},"recreateOnChange":"Boolean","canDuplicate":"Boolean","editNodeProperties":{"className":"EditNode","isProperties":true},"editProxyProperties":{"className":"EditProxy","isProperties":true},"liveObject":{"className":"Object"},"alwaysUsePlaceholder":"Boolean","placeholderProperties":{"className":"Label","isProperties":true}};

}

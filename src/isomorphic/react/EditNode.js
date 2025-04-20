import { PaletteNode } from './PaletteNode';

export class EditNode extends PaletteNode {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"liveObject":{"className":"Object"},"editProxyProperties":{"className":"EditProxy","isProperties":true},"useEditMask":"Boolean","canDuplicate":"Boolean","defaults":{"className":"Properties"}};

}

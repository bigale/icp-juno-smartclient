import { VLayout } from './VLayout';

export class RibbonGroup extends VLayout {
    static ISC_CLASS_NAME = 'RibbonGroup';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"labelProperties":{"className":"Label","isProperties":true},"titleHeight":"int","numRows":"Number","rowHeight":"Number","autoSizeToTitle":"Boolean","controls":{"className":"Canvas","isArray":true},"labelLayoutProperties":{"className":"HLayout","isProperties":true},"bodyProperties":{"className":"HLayout","isProperties":true},"titleProperties":{"className":"Label","isProperties":true},"columnLayoutProperties":{"className":"VLayout","isProperties":true},"newControlDefaultsProperties":{"className":"RibbonButton","isProperties":true}};

}

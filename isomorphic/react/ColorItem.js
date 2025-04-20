import { TextItem } from './TextItem';

export class ColorItem extends TextItem {
    static ISC_CLASS_NAME = 'ColorItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"pickerIconWidth":"Integer","allowComplexMode":"Boolean","showPickerIcon":"Boolean","pickerIconHeight":"Integer","supportsTransparency":"Boolean"};

}

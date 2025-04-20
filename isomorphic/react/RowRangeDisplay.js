import { Label } from './Label';

export class RowRangeDisplay extends Label {
    static ISC_CLASS_NAME = 'RowRangeDisplay';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"canRequestRowCount":"boolean","sourceGrid":{"className":"ListGrid"},"wrap":"boolean"};

}

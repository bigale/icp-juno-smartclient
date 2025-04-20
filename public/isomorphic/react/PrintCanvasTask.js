import { ComponentTask } from './ComponentTask';

export class PrintCanvasTask extends ComponentTask {
    static ISC_CLASS_NAME = 'PrintCanvasTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"exportAsPdf":"Boolean","printWindowProperties":{"className":"PrintWindow","isProperties":true},"printProperties":{"className":"PrintProperties","isProperties":true}};

}

import { StatefulCanvas } from './StatefulCanvas';

export class StretchImg extends StatefulCanvas {
    static ISC_CLASS_NAME = 'StretchImg';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"ignoreRTL":"boolean","capSize":"number","showRollOverGrip":"boolean","showGrip":"boolean","items":{"className":"StretchItem","isArray":true},"showDownGrip":"boolean","showTitle":"Boolean","vertical":"Boolean"};

}

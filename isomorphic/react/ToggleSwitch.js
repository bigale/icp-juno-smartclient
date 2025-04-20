import { StatefulCanvas } from './StatefulCanvas';

export class ToggleSwitch extends StatefulCanvas {
    static ISC_CLASS_NAME = 'ToggleSwitch';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"defaultValue":"Boolean","thumbOffset":"Integer","animateThumbTime":"Integer","toggleOnThumbClick":"Boolean","thumbProperties":{"className":"Canvas","isProperties":true},"toggleOnKeypress":"Boolean","animateThumb":"Boolean","value":"Boolean"};

}

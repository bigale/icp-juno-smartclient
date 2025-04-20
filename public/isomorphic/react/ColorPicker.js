import { Window } from './Window';

export class ColorPicker extends Window {
    static ISC_CLASS_NAME = 'ColorPicker';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"cancelButtonProperties":{"className":"IButton","isProperties":true},"lumWidth":"number","autoHide":"Boolean","showOkButton":"Boolean","showCancelButton":"Boolean","colorButtonSize":"number","okButtonProperties":{"className":"IButton","isProperties":true},"autoCenterOnShow":"Boolean","autoPosition":"Boolean","showModeToggleButton":"Boolean","allowComplexMode":"Boolean","defaultOpacity":"number","supportsTransparency":"Boolean","swatchHeight":"number","swatchWidth":"number","modeToggleButtonProperties":{"className":"IButton","isProperties":true}};

}

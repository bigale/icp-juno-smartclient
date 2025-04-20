import { StatefulCanvas } from './StatefulCanvas';

export class Img extends StatefulCanvas {
    static ISC_CLASS_NAME = 'Img';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"usePNGFix":"Boolean","imageSize":"Integer","src":["SCImgURL",{"className":"SCStatefulImgConfig"}],"size":"Number","showImageDown":"Boolean","showDisabled":"Boolean","showImageDisabled":"Boolean","showRollOver":"Boolean","showDown":"Boolean","imageWidth":"Integer","showImageRollOver":"Boolean","showTitle":"Boolean","showFocused":"Boolean","showImageFocused":"Boolean","imageHeight":"Integer","showFocusedAsOver":"Boolean","showImageFocusedAsOver":"Boolean"};

}

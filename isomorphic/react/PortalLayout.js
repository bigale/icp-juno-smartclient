import { Layout } from './Layout';

export class PortalLayout extends Layout {
    static ISC_CLASS_NAME = 'PortalLayout';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"numColumns":"int","canResizePortlets":"Boolean","preventRowUnderflow":"Boolean","portlets":{"className":"Portlet","isArray":true},"canShrinkColumnWidths":"Boolean","canResizeColumns":"Boolean","portletDropTypes":{"className":"String","isArray":true},"rowProperties":{"className":"Layout","isProperties":true},"portletHSpacing":"Integer","preventUnderflow":"Boolean","portletVSpacing":"Integer","stretchColumnWidthsProportionally":"Boolean","showColumnMenus":"Boolean","canResizeRows":"Boolean","preventColumnUnderflow":"Boolean","dropTypes":{"className":"String","isArray":true},"rowLayoutProperties":{"className":"Layout","isProperties":true},"columnSpacing":"Integer","canStretchColumnWidths":"Boolean","columnProperties":{"className":"Layout","isProperties":true}};

}

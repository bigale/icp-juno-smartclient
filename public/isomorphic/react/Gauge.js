import { DrawPane } from './DrawPane';

export class Gauge extends DrawPane {
    static ISC_CLASS_NAME = 'Gauge';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"sectorColors":{"className":"CSSColor","isArray":true},"minValue":"float","needleProperties":{"className":"DrawItem","isProperties":true},"tickLineProperties":{"className":"DrawItem","isProperties":true},"numMinorTicks":"int","borderWidth":"int","maxValue":"float","fontSize":"int","dialRadius":"float","drawnClockwise":"boolean","sectorShapeProperties":{"className":"DrawSector","isProperties":true},"value":"float","pivotPointHeight":["Number","String"],"valueLabelProperties":{"className":"DrawLabel","isProperties":true},"pivotShapeProperties":{"className":"DrawItem","isProperties":true},"pivotPoint":{"className":"Point"},"sectors":{"className":"GaugeSector","isArray":true},"numMajorTicks":"int"};

}

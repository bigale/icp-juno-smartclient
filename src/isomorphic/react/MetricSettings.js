import { ILogicalComponent } from './core/ILogicalComponent';

export class MetricSettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"filled":"boolean","gradationZeroLineProperties":{"className":"DrawLine","isProperties":true},"logScale":"Boolean","fixedFacetValue":["String","Number"],"showAxisLine":"boolean","valueLineProperties":{"className":"DrawLine","isProperties":true},"shadowProperties":{"className":"DrawOval","isProperties":true},"gradationLineProperties":{"className":"DrawLine","isProperties":true},"axisLineProperties":{"className":"DrawLine","isProperties":true},"dataLineProperties":{"className":"DrawLine","isProperties":true},"dataOutlineProperties":{"className":"DrawItem","isProperties":true},"showShadows":"Boolean","dataPointSize":"int","showValueOnHover":"boolean","axisStartValue":"Float","dataColors":{"className":"CSSColor","isArray":true},"proportional":"boolean","gradationLabelProperties":{"className":"DrawLabel","isProperties":true},"valueAxisLabelProperties":{"className":"DrawLabel","isProperties":true},"showValueAxisLabel":"boolean","dataShapeProperties":{"className":"DrawPath","isProperties":true},"minDataSpreadPercent":"Integer","stacked":"boolean","showAxis":"Boolean","logBase":"int","dataPointProperties":{"className":"DrawItem","isProperties":true},"showDataPoints":"Boolean","useLogGradations":"Boolean","xAxisEndValue":"Float","decimalPrecision":"int","showDataValues":"boolean","multiFacet":"Boolean","logGradations":{"className":"Float","isArray":true}};

}

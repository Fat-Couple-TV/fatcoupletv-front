import Svg, { Path, SvgProps } from 'react-native-svg';

const SVGPause = (props: SvgProps) => (
    <Svg fill="white" width="80" height="80" viewBox="0 0 24 24" {...props}>
        <Path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z" />
    </Svg>
);
export default SVGPause;

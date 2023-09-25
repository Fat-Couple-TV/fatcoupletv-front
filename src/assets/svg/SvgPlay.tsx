import Svg, { Path, SvgProps } from 'react-native-svg';

const SVGPlay = (props: SvgProps) => (
    <Svg
        fill="white"
        width={80}
        height={80}
        viewBox="-4 -3 24 24"
        preserveAspectRatio="xMinYMin"
        className="jam jam-play"
        {...props}>
        <Path d="M13.82 9.523a.976.976 0 0 0-.324-1.363L3.574 2.128a1.031 1.031 0 0 0-.535-.149c-.56 0-1.013.443-1.013.99V15.03c0 .185.053.366.153.523.296.464.92.606 1.395.317l9.922-6.031c.131-.08.243-.189.325-.317zm.746 1.997l-9.921 6.031c-1.425.867-3.3.44-4.186-.951A2.918 2.918 0 0 1 0 15.03V2.97C0 1.329 1.36 0 3.04 0c.567 0 1.123.155 1.605.448l9.921 6.032c1.425.866 1.862 2.696.975 4.088-.246.386-.58.712-.975.952z" />
    </Svg>
);
export default SVGPlay;

import * as React from "react";
import Svg, {
  Path,
  Rect,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const defaultProps = {
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Home({ stroke = "#000", focused, ...props }) {
  const fill = focused ? "#7203FF" : null;
  return (
    <Svg width={138} height={80} viewBox="0 0 138 80" fill="none" {...props}>
      <Path
        d="M67 49h-7v-7h7v7zM78 49h-7v-7h7v7zM78 38h-7v-7h7v7zM67 38h-7v-7h7v7z"
        fillOpacity={0.5}
        stroke="#7203FF"
        {...defaultProps}
        {...{ fill }}
      />
    </Svg>
  );
}

function Cart({ stroke = "#9586A8", ...props }) {
  return (
    <Svg width={138} height={80} viewBox="0 0 138 80" fill="none" {...props}>
      <Path
        d="M62.143 33h17.143L77.57 43.286H63.857L62.143 33zM65.571 49a1.143 1.143 0 100-2.286 1.143 1.143 0 000 2.286zM75.857 49a1.143 1.143 0 100-2.286 1.143 1.143 0 000 2.286zM62.143 33h-3.429"
        {...defaultProps}
        {...{ stroke }}
      />
    </Svg>
  );
}

function Profile({ stroke = "#9586A8", ...props }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
        {...defaultProps}
        {...{ stroke }}
      />
    </Svg>
  );
}

function Card(props) {
  return (
    <Svg width={374} height={240} viewBox="0 0 374 240" fill="none" {...props}>
      <Rect width={374} height={240} rx={8} fill="url(#paint0_linear)" />
      <Ellipse
        cx={291.5}
        cy={123.5}
        rx={167.5}
        ry={165.5}
        fill="#fff"
        fillOpacity={0.12}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={0}
          y1={120}
          x2={374}
          y2={120}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B993D6" />
          <Stop offset={1} stopColor="#8CA6DB" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default { Home, Cart, Profile, Card };

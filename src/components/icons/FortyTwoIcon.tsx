import React, { memo } from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export const FortyTwoIcon = memo((props: SvgProps) => {
  return (
    <Svg width={18} height={18} viewBox="0 0 21 18" fill="none" {...props}>
      <Path
        d="M.5 13.16h7.37v4.616h3.676v-8.34H4.192L11.546.225H7.87L.5 9.436v3.725zm12.63-8.32L16.809.224h-3.677v4.614z"
        fill="#000"
      />
      <Path
        d="M16.808 4.84l-3.677 4.596v4.597h3.677V9.436L20.5 4.84V.225h-3.692v4.614zM20.5 9.435l-3.692 4.597H20.5V9.436z"
        fill="#000"
      />
    </Svg>
  );
});

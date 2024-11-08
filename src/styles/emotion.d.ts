import type { SerializedStyles } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      black: string;
      white: string;
    };
    fonts: {
      title1: SerializedStyles;
      title2: SerializedStyles;
      title3: SerializedStyles;
      subtitle1: SerializedStyles;
      subtitle2: SerializedStyles;
      body1: SerializedStyles;
      body2: SerializedStyles;
      body3: SerializedStyles;
    };
  }
}

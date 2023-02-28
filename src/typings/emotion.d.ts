import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      common: {
        white: string
        whiteTransparent: string
        black: string
        blackTransparent: string
      }
    }
  }
}

import { css } from 'emotion'
import color from './color'
import { func } from './styles'

const flex = (vertical: string, horizontal: string, direction: string = 'row', wrap: string = 'nowrap'): string => {
  const justifyContent = (flexDirection: string): string => {
    if (flexDirection === 'row') {
      if (horizontal === 'left') {
        return 'flex-start'
      } else if (horizontal === 'right') {
        return 'flex-end'
      } else if (horizontal === 'center') {
        return 'center'
      }
    } else if (flexDirection === 'column'  || flexDirection === 'col') {
      if (vertical === 'top') {
        return 'flex-start'
      } else if (vertical === 'bottom') {
        return 'flex-end'
      } else if (vertical === 'center') {
        return 'center'
      }
    }
  }

  const alignItems = (flexDirection: string): string => {
    if (flexDirection === 'column' || flexDirection === 'col') {
      if (horizontal === 'left') {
        return 'flex-start'
      } else if (horizontal === 'right') {
        return 'flex-end'
      } else if (horizontal === 'center') {
        return 'center'
      }
      return horizontal
    } else if (flexDirection === 'row') {
      if (vertical === 'top') {
        return 'flex-start'
      } else if (vertical === 'bottom') {
        return 'flex-end'
      } else if (vertical === 'center') {
        return 'center'
      }
      return vertical
    }
  }

  return css`
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justifyContent(direction)};
        align-items: ${alignItems(direction)};
        flex-wrap: ${wrap};
    `
}
const ellipsis = (): string => {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
}

const scrollbarDark = css`
  ::-webkit-scrollbar {
    width: 7px;
    z-index: 1000;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0);
  }
  ::-webkit-scrollbar-thumb {
    background: ${color.primary};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: ${color.secondaryMedium};
  }
  ::-webkit-scrollbar-no-button;
  `

const flexItem = (grow: number): string => {
  return css`
    flex-grow: ${grow};
  `
}

const margin = (attr: string): string => {
  return css`
    margin: ${attr};
  `
}

const font = {
  omnes: css`font-family: omnes-pro, sans-serif;`,
  bree: css`font-family: bree, sans-serif;`,
  ubuntu: css`font-family: ubuntu, sans-serif;`,
}

interface ITextProps {
  style?: string
  color?: string
  weight?: string
  lineHeight?: string
  font?: string
}

// tslint:disable-next-line:no-shadowed-variable
const text = ({style = 'block', color = '#333', weight, lineHeight = '1.4', font}: ITextProps): string => {
  const thestyle = (styleName) => {
    switch (styleName) {
    case 'block':
      return css`
        font-family: ubuntu, sans-serif;
        font-size: ${func.pxToRem('13px')};
        font-weight: 300;
    `
    case 'small':
      return css`
      font-family: ubuntu, sans-serif;
      font-size: ${func.pxToRem('10px')};
    `
    case 'h1':
      return css`
        font-family: bree, sans-serif;
        font-weight: 400;
        font-size: ${func.pxToRem('35px')};
      `
    case 'h2':
      return css`
        font-family: bree, sans-serif;
        font-weight: 400;
        font-size: ${func.pxToRem('22px')};
      `
    case 'h3':
      return css`
        font-family: bree, sans-serif;
        font-weight: 400;
        font-size: ${func.pxToRem('18px')};
        line-height: 1.2em;
      `
    case 'h4':
      return css`
        font-family: ubuntu, sans-serif;
        font-size: ${func.pxToRem('16px')};
        font-weight: 500;
      `
    case 'h5':
      return css`
        font-family: ubuntu, sans-serif;
        font-size: ${func.pxToRem('14px')};
        font-weight: 500;
      `
    default:
      return css`
        font-family: ubuntu, sans-serif;
        font-size: 14px;
        font-weight: 400;
      `
    }
  }
  return css`
    ${thestyle(style)}
    ${weight && `font-weight: ${weight};`}
    color: ${color};
    line-height: ${lineHeight};
    ${font && `font-family: ${font}, sans-serif;`};
  `
}

const contentContainer: string = css`
    overflow: auto;
`

const mixin = {
  flex,
  text,
  contentContainer,
  flexItem,
  margin,
  scrollbarDark,
  ellipsis,
  font,
}

export default mixin

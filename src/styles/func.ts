const pxToRem = (px: string, set1RM: string = '16px'): string => {
    const regex = /[^px]+/
    const pxValue = +px.match(regex)[0]
    const rmValue = +set1RM.match(regex)[0]
    return `${pxValue / rmValue}rem`
  }
const pxToNum = (px: string): number => {
    return +px.slice(0, -2)
  }
const func =  {
    pxToRem,
    pxToNum,
  }
export default func

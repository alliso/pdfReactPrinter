import * as React from 'react'
import { css } from 'emotion'
import { mixin, color } from '../styles/styles'
import * as _ from 'lodash'

interface IOwnProps {
  skills?: Array<{ title: string, level: number }>
  width?: number
  maxWidth?: number
}

class MountainGraph extends React.PureComponent<IOwnProps> {
  static defaultProps: Partial<IOwnProps> = {
    skills: [{
      title: 'Skill1',
      level: 5,
    }, {
      title: 'Skill2',
      level: 1,
    }, {
      title: 'Skill3',
      level: 4,
    }, {
      title: 'Skill4',
      level: 5,
    }, {
      title: 'Skill5',
      level: 5,
    }],
    width: 1080,
    maxWidth: 1080,
  }
  distanceFromEdge = (es) => {
    const x = Math.sqrt((es * es) / 2)
    const xOffset = es / 2
    return x - xOffset
  }
  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }
  render() {

    const setId = `mountaingraph${this.getRandomInt(300)}`

    const graphWidth = this.props.width > this.props.maxWidth ? this.props.maxWidth - 40 : this.props.width - 40
    const graphHeight = this.props.width > this.props.maxWidth ? this.props.maxWidth / 3 : this.props.width / 3

    const levels = [0, graphHeight / 5, graphHeight / 5 * 2, graphHeight / 5 * 3, graphHeight / 5 * 4, graphHeight]

    const curve1 = levels[this.props.skills.length > 0 ? this.props.skills[0].level : 0]
    const curve2 = levels[this.props.skills.length > 1 ? this.props.skills[1].level : 0]
    const curve3 = levels[this.props.skills.length > 2 ? this.props.skills[2].level : 0]
    const curve4 = levels[this.props.skills.length > 3 ? this.props.skills[3].level : 0]
    const curve5 = levels[this.props.skills.length > 4 ? this.props.skills[4].level : 0]

    const c1Position = this.distanceFromEdge(curve1)
    const c5Position = graphWidth - (curve5 + this.distanceFromEdge(curve5))
    const posTop1 = this.distanceFromEdge(curve1) + (curve1 / 2)
    const posTop5 = graphWidth - this.distanceFromEdge(curve5) - (curve5 / 2)
    const c3Position = posTop1 + ((posTop5 - posTop1) / 2) - (curve3 / 2) - 80 + this.getRandomInt(160)
    const posTop3 = c3Position + (curve3 / 2)
    const c2Position = posTop1 + ((posTop3 - posTop1) / 2) - (curve2 / 2) - 80 + this.getRandomInt(160)
    const c4Position = posTop3 + ((posTop5 - posTop3) / 2) - (curve4 / 2) - 80 + this.getRandomInt(160)

    const l1Position = c1Position + curve1 / 2
    const l2Position = c2Position + curve2 / 2
    const l3Position = c3Position + curve3 / 2
    const l4Position = c4Position + curve4 / 2
    const l5Position = c5Position + curve5 / 2

    const cssContainer = css`
      label: -mountain-graph-container;
      transform: scale(1);
    `
    const cssLine = css`
        background-color: #8645C0;
        height: 4px;
        width: 100%;
        z-index: 1;
    `
    const cssGraph = css`
        ${mixin.flex('top', 'left', 'column')}
        height: ${graphHeight}px;
        width: ${graphWidth}px;
        overflow: hidden;
    `
    const cssContent = css`
        flex: 1;
        position: relative;
        text-align: center;

    `
    const cssCurve = css`
        border-radius: 35px 0 0 0;
        transform: rotate(45deg);
        position: absolute;
        background: linear-gradient(#96E6E6, #33CCCC);
        border: solid 1px #50D3D3;

    `
    const cssC1 = css`
        width: ${curve1}px;
        height: ${curve1}px;
        top: ${graphHeight - (curve1 / 2)}px;
        left: ${c1Position}px;
    `
    const cssC2 = css`
        width: ${curve2}px;
        height: ${curve2}px;
        top: ${graphHeight - (curve2 / 2)}px;
        left: ${c2Position}px;
    `
    const cssC3 = css`
        width: ${curve3}px;
        height: ${curve3}px;
        top: ${graphHeight - (curve3 / 2)}px;
        left: ${c3Position}px;
    `
    const cssC4 = css`
        width: ${curve4}px;
        height: ${curve4}px;
        top: ${graphHeight - (curve4 / 2)}px;
        left: ${c4Position}px;
    `
    const cssC5 = css`
        width: ${curve5}px;
        height: ${curve5}px;
        top: ${graphHeight - (curve5 / 2)}px;
        left: ${c5Position}px;
    `
    const cssLabel = css`
        ${mixin.text({ style: 'block', font: 'TODO', weight: 'TODO' })}
        color: white;
        position: absolute;
        transform: translate(-50%, 0);
        text-shadow: 2px 2px 4px ${color.primaryDark};
        white-space: nowrap;
    `
    const cssL1 = css`
        top: ${(graphHeight - (curve1 / 2) - this.distanceFromEdge(curve1)) - 30}px;
        left: ${l1Position}px;
    `
    const cssL2 = css`
        top: ${(graphHeight - (curve2 / 2) - this.distanceFromEdge(curve2)) - 30}px;
        left: ${l2Position}px;
    `
    const cssL3 = css`
        top: ${(graphHeight - (curve3 / 2) - this.distanceFromEdge(curve3)) - 30}px;
        left: ${l3Position}px;
    `
    const cssL4 = css`
        top: ${(graphHeight - (curve4 / 2) - this.distanceFromEdge(curve4)) - 30}px;
        left: ${l4Position}px;
    `
    const cssL5 = css`
        top: ${(graphHeight - (curve5 / 2) - this.distanceFromEdge(curve5)) - 30}px;
        left: ${l5Position}px;
    `
    const cssLArray = [cssL1, cssL2, cssL3, cssL4, cssL5]
    const cssCArray = [cssC1, cssC2, cssC3, cssC4, cssC5]

    const mArray = cssLArray.map((cssL, i) => {
      return (
        <React.Fragment key={i}>
          <div className={`${cssCurve} ${cssCArray[i]}`} />
          <div className={`${cssLabel} ${cssL}`}>
            {_.get(this.props.skills, `[${i}].title`, '')}
            <br />
            {_.get(this.props.skills, `[${i}].level`, '')}
          </div>
        </React.Fragment>
      )
    })
    return (
      <section id={setId} className={cssContainer}>
        <div className={cssGraph}>
          <div className={cssContent}>
            {mArray}
          </div>
          <div className={cssLine} />
        </div>
      </section>
    )
  }
}

export default MountainGraph

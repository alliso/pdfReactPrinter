import * as React from 'react'
import Child from './components/child'
import Candidate from './objects/candidate'
import * as html2canvas from 'html2canvas'
import Mountain from './components/mountain'

class App extends React.PureComponent {
  constructor(props: any) {
    super(props)
    this.getMountain = this.getMountain.bind(this)
    }

  getMountain() {
    // tslint:disable-next-line:no-console
    console.log('TILL HERE 1')
    if (document.getElementById('mountain') as HTMLElement !== null ) {
    const comp = document.getElementById('mountain') as HTMLElement
    html2canvas(comp, {}).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png')
      // tslint:disable-next-line:no-console
      console.log('WOrking till here2')
      return imgData
    })}
    return null
  }

  render() {
    const data = (new Candidate()).loadProps()
    const skills = [
      {
        title: 'Enchanced Memory',
        level: 5,
      },
      {
        title: 'Flight',
        level: 4,
      },
    ]
    return (
      <div>
        <h1>PDF</h1>
        <div id="print1">
          <div id="mountain">
            <Mountain skills={skills} maxWidth={700} />
          </div>
          <Child candidate={data} isMounted={false} mountain={this.getMountain()}/>
        </div>
      </div>
    )
  }
}

export default App

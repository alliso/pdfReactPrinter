import * as React from 'react'
import Child from './components/child'
import Candidate from './objects/candidate'
import Mountain from './components/mountain'
import { css } from 'emotion'

class App extends React.PureComponent {
  constructor(props: any) {
    super(props)
  }

  render() {
    const style = css`
      font-family: 'Titillium Web';
      `
    const data = new Candidate().loadProps()
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
        <h1 className={style} >PDF</h1>
        <h1>PDF</h1>
        <div id="mountain">
          <Mountain skills={skills} maxWidth={700} />
          <Child candidate={data}/>
        </div>
      </div>
    )
  }
}

export default App

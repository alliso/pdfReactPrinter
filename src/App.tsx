import * as React from 'react'
import Child from './components/child'
import Candidate from './objects/candidate'

class App extends React.PureComponent {
  constructor(props: any) {
    super(props)
    }

  render() {
    const data = (new Candidate()).loadProps()

    return (
      <div>
        <h1>HEADER</h1>
        <div id="print1">
          <Child candidate={data} />
        </div>
      </div>
    )
  }
}

export default App

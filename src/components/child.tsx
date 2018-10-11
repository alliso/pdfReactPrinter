import * as React from 'react'

export default class Child extends React.PureComponent {
  render() {
    return (
      <div style={{ border: 'solid' }}>
        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
            <th>
              <button
                style={{ backgroundColor: 'yellow' }}
                onClick={() => alert('I\'m useless')}
              >
                PRESS ME
              </button>
            </th>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
            <th>
              <button onClick={() => alert('I\'m also useless')}>
                PRESS ME
              </button>
            </th>
          </tr>
        </table>
      </div>
    )
  }
}

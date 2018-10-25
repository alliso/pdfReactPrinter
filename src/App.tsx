import * as React from 'react'
import Child from './components/child'
import Candidate from './objects/candidate'
import * as html2canvas from 'html2canvas'
import Mountain from './components/mountain'
import * as jsPDF from 'jspdf'
import * as base64Img from 'base64-img'

class App extends React.PureComponent {
  constructor(props: any) {
    super(props)
  }

  getDataUri(url, cb) {
    const image = new Image()
    image.setAttribute('crossOrigin', 'anonymous') // getting images from external domain

    image.onload = () => {
      const canvas: any = document.createElement('canvas')
      canvas.width = 200
      canvas.height = 200

      // next three lines for white background in case png has a transparent background
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#fff' /// set white fill style
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.drawImage(canvas, 0, 0)

      cb(canvas.toDataURL('image/png'))
    }

    image.src = url
  }

  printPDF(data) {
    const user = data.applicant.user
    base64Img.requestBase64(user.picture, (err, res, body) => {
      // tslint:disable-next-line:no-console
      console.log(data)
      // tslint:disable-next-line:max-line-length
      const asdf = 'data:image/png;base64,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'
      const doc = new jsPDF()
      doc.addImage(asdf, 'image/jpeg', 50, 50)
      doc.text(user.firstName + ' ' + user.lastName, 10, 10)
      html2canvas(document.getElementById('mountain'), {}).then((canvas: any) => {
        const imgData = canvas.toDataURL('image/png')
        doc.addImage(imgData, 'PNG', 50, 10, 200, 30)
        doc.autoPrint()
        doc.save('sample.pdf')
    })
    })
  }

  render() {
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
        <h1>PDF</h1>
        <div id="mountain">
          <Mountain skills={skills} maxWidth={700} />
        </div>
        <button onClick={() => this.printPDF(data)}>Print</button>
        <Child candidate={data}/>
      </div>
    )
  }
}

export default App

import * as html2canvas from 'html2canvas'
import * as  jsPDF from 'jspdf'
import * as React from 'react'
import Child from './components/child'
import PrintButton from './components/printButton'

class App extends React.PureComponent {
  constructor(props: any) {
    super(props)
    this.printToPdf = this.printToPdf.bind(this)
    this.printAll = this.printAll.bind(this)
  }

  printToPdf(print: any) {

    const component: any = document.getElementById(print)
    html2canvas(component).then((canvas) => {
      const doc = new jsPDF()
      const imgData = canvas.toDataURL('image/png')
      doc.addImage(imgData, 'PNG', 5, 10, 200, 30)
      doc.autoPrint()
      doc.save('sample-file.pdf')
    })

  }

  printAll() {
    const doc = new jsPDF()

    let comp: any = document.getElementById('print1')
    html2canvas(comp, {}).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png')
      doc.addImage(imgData, 'PNG', 5, 10, 200, 30)
    })

    comp = document.getElementById('print2')
    html2canvas(comp, {}).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      doc.addImage(imgData, 'PNG', 5, 50, 200, 30)
    })

    comp = document.getElementById('print3')
    html2canvas(comp, {})
      .then((canvas: any) => {
        const imgData = canvas.toDataURL('image/png')
        doc.addImage(imgData, 'PNG', 5, 100, 200, 30)
      })
      .then(() => {
        doc.autoPrint()
        doc.save('sample-file.pdf')
      })
  }

  render() {
    return (
      <div>
        <h1>HEADER</h1>
        <div id="print1">
          <Child />
        </div>
        <div id="print2" style={{ width: '80%' }}>
          <Child />
        </div>
        <div id="print3" style={{ width: '60%' }}>
          <Child />
        </div>
        <PrintButton
          print="Print 1"
          onClick={() => this.printToPdf('print1')}
        />
        <PrintButton
          print="Print 2"
          onClick={() => this.printToPdf('print2')}
        />
        <PrintButton
          print="Print 3"
          onClick={() => this.printToPdf('print3')}
        />
        <PrintButton print="Print All" onClick={() => this.printAll()} />
      </div>
    )
  }
}

export default App

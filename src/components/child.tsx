import * as React from 'react'
import { Document, Page, Text, View, StyleSheet, Image, PDFViewer, Font, PDFDownloadLink} from '@react-pdf/renderer'
import * as html2canvas from 'html2canvas'
// import Mountain from './components/mountain'

interface IProps {
  candidate: any,
  isMounted?: boolean
  mountain?: () => any,
}

const styles = StyleSheet.create({
  fullpage: {
    margin: 50,
  },
  picture: {
    marginRight: 50,
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 40,
  },
  text: {
    fontSize: 12,
  },
  view: {
    flexDirection: 'row',
  },
})

class Child extends React.PureComponent<IProps> {
  constructor(props) {
    super(props)
  }

  renderInfo(candidate) {
    return (
      <View style={{marginRight: 50}}>
        <Text>Info</Text>
        <Text style={styles.text}>Connected: {candidate.created}</Text>
        <Text style={styles.text}>Address: {candidate.user.address}</Text>
        <Text style={styles.text}>Email: {candidate.user.username}</Text>
      </View>
    )
  }

  renderSkills(skills) {
    const components = skills.map((item, key) => (
      <Text key={key} style={styles.text}>{item.title}</Text>
    ),
    )
    return (
    <View>
      <Text>Skills</Text>
      {components}
    </View>)
  }

  renderMountains() {
    if (document.getElementById('mountain') as HTMLElement !== null ) {
      const comp = document.getElementById('mountain') as HTMLElement
      html2canvas(comp, {}).then((canvas: any) => {
        const imgData = canvas.toDataURL('image/png')
        // tslint:disable-next-line:no-console
        console.log('Working till here2')
        return <Image src={this.props.mountain} />
      })}
    }

  componentDidMount() {
    // tslint:disable-next-line:no-console
    console.log('HI HI')
  }

  render() {
    const candidate = this.props.candidate.applicant
    const skills = this.props.candidate.skills

    const source = './fonts/fonts/Lato/Lato-Bold.ttf'
    Font.register(source, { family: 'FamilyName' })

    Font.register('./fonts/fonts/Lato/Lato-Bold.ttf', {
      family: 'LatoBold',
    })

    const document = (
      <Document>
        <Page size="A4" >
          <View style={styles.fullpage}>
            <Text style={styles.title}>{candidate.user.firstName} {candidate.user.lastName}</Text>
            <View style={styles.view}>
              <Image style={styles.picture}
                  src={candidate.user.picture} />
                {this.renderInfo(candidate)}
                {this.renderSkills(skills)}
                {this.renderMountains()}
            </View>
          </View>
        </Page>
      </Document>
    )
    return (
        <div>
        <PDFViewer style={{width: 800, height: 700}}>{document}</PDFViewer>}
        <PDFDownloadLink document={document} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (
            loading ? 'Loading document...' : 'Download now!'
          )}
      </PDFDownloadLink>
      {this.renderMountains()}
      </div>
      )
  }
}

export default Child

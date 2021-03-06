import * as React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFViewer,
  Font,
  PDFDownloadLink,
} from '@react-pdf/renderer'
import * as html2canvas from 'html2canvas'

interface IProps {
  candidate: any
  isMounted?: any
  mountain?: () => any
}

interface IState {
  flag: boolean
  mountain: any
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
    fontFamily: 'Ubuntu-Regular',
  },
  view: {
    flexDirection: 'row',
  },
})

class Child extends React.PureComponent<IProps, IState> {
  constructor(props) {
    super(props)
    this.setState({ flag: false })
    this.renderInfo = this.renderInfo.bind(this)
    this.renderSkills = this.renderSkills.bind(this)
  }

  renderInfo(candidate) {
    return (
      <View style={{ marginRight: 50 }}>
        <Text>Info</Text>
        <Text style={styles.text}>Connected: {candidate.created}</Text>
        <Text style={styles.text}>Address: {candidate.user.address}</Text>
        <Text style={styles.text}>Email: {candidate.user.username}</Text>
      </View>
    )
  }

  renderSkills(skills) {
    const components = skills.map((item, key) => (
      <Text key={key} style={styles.text}>
        {item.title}
      </Text>
    ))
    return (
      <View>
        <Text>Skills</Text>
        {components}
      </View>
    )
  }

  componentDidMount() {
    const mont = document.getElementById('mountain')

    html2canvas(mont, {}).then((canvas) => {
      const base64canvas = canvas.toDataURL('image/png')
      this.setState({ flag: true, mountain: base64canvas })
    })
  }

  renderPDF() {
    const candidate = this.props.candidate.applicant
    const skills = this.props.candidate.skills

    const pdf = (
      <Document>
        <Page size="A4">
          <View style={styles.fullpage}>
            <Text style={styles.title}>
              {candidate.user.firstName} {candidate.user.lastName}
            </Text>
            <View style={styles.view}>
              <Image style={styles.picture} src={candidate.user.picture} />
              {this.renderInfo(candidate)}
              {this.renderSkills(skills)}
            </View>
            <Image  src={this.state.mountain} />
          </View>
        </Page>
      </Document>
    )
    return (
      <div>
        <PDFViewer style={{ width: 800, height: 700 }}>{pdf}</PDFViewer>
        <PDFDownloadLink document={pdf} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      </div>
    )
  }

  render() {
    const source = 'https://cdn.jsdelivr.net/gh//google/fonts/ufl/ubuntu/Ubuntu-Regular.ttf'
    Font.register(source, {family: 'Ubuntu-Regular'})
    return <div>{this.state && this.state.flag ? this.renderPDF() : null}</div>
  }
}

export default Child

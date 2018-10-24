const color = new function(this: any) {
    /* COLORS BY NAME */
      // COMMON
      this.white = '#fff'
      this.black = '#333'
      this.grey = '#333'
      // PRIMARY
      this.violentViolet = '#240F67'
      this.fuchsiaBlue = '#8645C0'
      this.aliceBlue = '#FAFDFF'
      this.mineShaft = '#333'

      // SECONDARY
      this.turquoise = '#3CCCCC'
      this.blueDianne = '#235353'
      this.blackSqueeze = '#F0F6FA'
      this.waterLeaf = '#96E6E6'
      this.persianGreen = '#00A3A3'

      // COMPANY
      this.oxfordBlue = '#394959'
      this.sanMarino = '#4267B2'
      this.royalBlue = '#3578E5'
      this.athensGrey = '#E9EBEE'
      this.regentGrey = '#7D95A0'

      this.companyDark = this.oxfordBlue
      this.companyMedium = this.sanMarino
      this.companyNormal = this.royalBlue
      this.companyLight = this.athensGrey
      this.companyGrey = this.regentGrey

      // ADDITIONAL
      this.shamrock = '#2ECC71'
      this.radicalRed = '#FC3A5A'
      this.seaBuckthorn = '#FDA629'
      this.brinkPink = '#FD657E'
      this.gallery = '#EEE'
      this.porcelain = '#F4F5F6'
      this.riverBed = '#404A54'
      this.viking = '#56D5D5'
      this.minsk = '#382776'
      this.silverSand = '#C8CACC'
      this.iron = '#CDCFD0'
      this.jungleGreen = '#2AB164'
      this.eucalyptus = '#2B9457'

      /* COLORS BY FUNCTION */
      // PRIMARY
      this.primary = this.fuchsiaBlue
      this.primaryDark = this.violentViolet
      this.primaryLight = this.aliceBlue

      // SECONDARY
      this.secondary = this.waterLeaf
      this.secondaryLight = this.blackSqueeze
      this.secondaryDark = this.turquoise

      // SECONDARY
      this.secondary = this.waterLeaf
      this.secondaryLight = this.blackSqueeze
      this.secondaryMedium = this.turquoise
      this.secondaryDark = this.persianGreen

      // ADDITIONALS
      this.go = this.shamrock
      this.goDark = this.jungleGreen
      this.stop = this.brinkPink
      this.stopOnDark = this.radicalRed
      this.wait = this.seaBuckthorn
      this.save = this.eucalyptus

      /* TEXT COLORS */
      this.text = {
        onPrimary: this.white,
        onPrimaryDark: this.white,
        onPrimaryLight: this.mineShaft,
        onSecondary: this.white,
        onSecondaryDark: this.white,
        onSecondaryLight: this.mineShaft,
      }
    }()

export default color

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Font } from '@react-pdf/renderer'

import * as WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif'],
  },
})

const source = 'https://github.com/alliso/pdfReactPrinter/blob/master/src/components/fonts/Ubuntu/Ubuntu-Regular.ttf'
Font.register(source, {family: 'Ubuntu-Regular'})

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement,
)

registerServiceWorker()

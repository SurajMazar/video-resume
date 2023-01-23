import { ThemeConfig } from 'antd/es/config-provider/context'

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#6C63FF',
    fontFamily: 'Quicksand, sans-serif'
  },
  components: {
    Input: {
      borderRadiusLG: 6,
      lineHeightLG: 2,
      fontSizeLG: 16
    },
    Layout: {
      colorPrimaryBg: 'white'
    }
  }
}

export default antdTheme

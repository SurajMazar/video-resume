import LoaderContextWrapper from '@/context/LoaderContext'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '@/styles/app.scss'
import AppConfig from '@/config/app.config'
import antdTheme from '@/config/antd.config'
import { ConfigProvider } from 'antd'
import VideoPlayerContextWrapper from '@/context/VideoPlayerContext'

const Loader = dynamic(() => import('@/components/Loader'), { ssr: false })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoaderContextWrapper>
      <VideoPlayerContextWrapper>
        <Loader
          show={AppConfig.MAINTENANCE_MODE}
          message={AppConfig.MAINTENANCE_MODE_MESSAGE}
        />
        {!AppConfig.MAINTENANCE_MODE ? (
          <ConfigProvider theme={antdTheme}>
            <Component {...pageProps} />
          </ConfigProvider>
        ) : (
          ''
        )}
      </VideoPlayerContextWrapper>
    </LoaderContextWrapper>
  )
}

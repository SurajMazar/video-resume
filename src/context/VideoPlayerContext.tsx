import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState
} from 'react'
import { VideoPlayerContextInterface } from 'types/context'
import { ResumeFormInterface } from 'types/form/resume'
import { LoaderContext } from './LoaderContext'


export const VideoPlayerContext = createContext<VideoPlayerContextInterface>(
  {} as VideoPlayerContextInterface
)

const VideoPlayerContextWrapper: React.FC<PropsWithChildren> = ({
  children
}) => {
  /**
   * LOADER CONTEXT
   */
  const {startLoader} = useContext(LoaderContext)

  /**
   * CONTEXT STATE
   */
  const [resumeForm, setResumeForm] = useState<ResumeFormInterface | undefined>(
    undefined
  )
  const [showPlayer, setShowPlayer] = useState<boolean>(false)

  const resetForm = () => {
    setShowPlayer(false)
    setResumeForm(undefined)
  }

  const onFormSubmit = (values: ResumeFormInterface) => {
    setResumeForm(values)
    startLoader()
    setShowPlayer(true)
  }

  return (
    <>
      <VideoPlayerContext.Provider
        value={{
          resumeForm,
          onFormSubmit,
          showPlayer,
          resetForm
        }}
      >
        {children}
      </VideoPlayerContext.Provider>
    </>
  )
}


export default VideoPlayerContextWrapper
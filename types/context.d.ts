import { ResumeFormInterface } from "./form/resume"

export interface VideoPlayerContextInterface {}

/**
 * LOADER CONTEXT INTERFACE
 */
export interface LoaderContextInterface {
  startLoader: () => void
  showLoader: boolean
  progress: number
}


export interface VideoPlayerContextInterface {
  showPlayer: boolean
  resetForm: () => void
  resumeForm?: ResumeFormInterface
  onFormSubmit: (value: ResumeFormInterface) => void
}
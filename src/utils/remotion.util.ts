import { spring } from "remotion"

/**
 * 
 * @param duration 
 * @param fps 
 * @param start 
 * @returns 
 */
export const springViaDuration = (
    fps: number,
    frame:number,
    start: number,
    duration: number,
    finalDuration:number = 5
  ) => {
    const scaleInitial = spring({
        fps,
        frame: frame - start * 60,
    },)
    
    const scaleFinal = spring({
        fps,
        frame: frame - duration * 60,
        durationInFrames:finalDuration,
        config:{
            damping:1000
        }
    })

    return scaleInitial - scaleFinal;
}
  
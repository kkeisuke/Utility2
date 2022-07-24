import { Dispatch, RefObject, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { createImage } from '../../lib/createImage'

type Params = {
  width: number
  height: number
  text: string
  background: string
  color: string
  fontSize: number
}

type UseDummySVG = {
  svg: RefObject<SVGSVGElement>
  svgData: string
  imgData: string
  title: string
  params: Params
  dispatch: Dispatch<Partial<Params>>
}

function paramsReducer(params: Params, newParams: Partial<Params>) {
  return Object.assign({}, params, newParams)
}

const initParams: UseDummySVG['params'] = {
  width: 200,
  height: 100,
  text: '',
  background: '336699',
  color: 'fff',
  fontSize: 32
}

export function useDummySVG(): UseDummySVG {
  const [params, dispatch] = useReducer(paramsReducer, initParams)
  const svg = useRef<SVGSVGElement>(null)
  const [svgData, setSvgData] = useState('')
  const [imgData, setImgData] = useState('')

  const title = useMemo(() => params.text || `${params.width} x ${params.height}`, [params])

  useEffect(() => {
    if (svg.current) {
      setSvgData(`${encodeURIComponent(new XMLSerializer().serializeToString(svg.current))}`)
    }
  }, [params])

  useEffect(() => {
    ;(async () => {
      if (svgData) {
        try {
          setImgData(await createImage(svgData, params))
        } catch (error) {
          window.alert(error)
        }
      }
    })()
  }, [svgData, params])

  return {
    svg,
    svgData,
    imgData,
    title,
    params,
    dispatch
  }
}

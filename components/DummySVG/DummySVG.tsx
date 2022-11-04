import { ChangeEvent, FC, useCallback } from 'react'
import { useDummySVG } from './UseDummySVG'
import { InputText } from '../ui/InputText'
import { InputNumber } from '../ui/InputNumber'
import { Button } from '../ui/Button'

export const DummySVG: FC = () => {
  const { svg, svgData, imgData, title, params, dispatch } = useDummySVG()

  return (
    <>
      <div className="mb-4 flex gap-4">
        <label>
          <div className="mr-2">width</div>
          <InputNumber value={params.width} onChange={useCallback((event: ChangeEvent<HTMLInputElement>) => dispatch({ width: event.target.valueAsNumber }), [dispatch])}></InputNumber>
        </label>
        <label>
          <div className="mr-2">height</div>
          <InputNumber value={params.height} onChange={useCallback((event: ChangeEvent<HTMLInputElement>) => dispatch({ height: event.target.valueAsNumber }), [dispatch])}></InputNumber>
        </label>
        <label>
          <div className="mr-2">text</div>
          <InputText value={params.text} onChange={useCallback((event: ChangeEvent<HTMLInputElement>) => dispatch({ text: event.target.value }), [dispatch])}></InputText>
        </label>
      </div>
      <div className="mb-4 flex gap-4">
        <label>
          <div className="mr-2">background</div>
          <InputText value={params.background} onChange={useCallback((event: ChangeEvent<HTMLInputElement>) => dispatch({ background: event.target.value }), [dispatch])}></InputText>
        </label>
        <label>
          <div className="mr-2">color</div>
          <InputText value={params.color} onChange={useCallback((event: ChangeEvent<HTMLInputElement>) => dispatch({ color: event.target.value }), [dispatch])}></InputText>
        </label>
        <label>
          <div className="mr-2">fontSize</div>
          <InputNumber value={params.fontSize} onChange={useCallback((event: ChangeEvent<HTMLInputElement>) => dispatch({ fontSize: event.target.valueAsNumber }), [dispatch])}></InputNumber>
        </label>
      </div>
      <div className="mb-8 flex gap-4">
        <div>
          <div>svg</div>
          <svg ref={svg} xmlns="http://www.w3.org/2000/svg" width={params.width} height={params.height} fontSize={params.fontSize}>
            <rect width={params.width} height={params.height} fill={`#${params.background}`} />
            <text textAnchor="middle" x="50%" y="50%" dy=".3em" fill={`#${params.color}`}>
              {title}
            </text>
          </svg>
        </div>
      </div>
      <div className="flex gap-4">
        <Button href={`data:image/svg+xml;charset=utf-8,${svgData}`} download={`${title}.svg`} color="success">
          Download SVG
        </Button>
        <Button href={imgData} download={`${title}.png`} color="success">
          Download PNG
        </Button>
      </div>
    </>
  )
}

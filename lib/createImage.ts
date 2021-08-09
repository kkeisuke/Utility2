export function createImage(svgData: string, params: { width: number; height: number }): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = params.width
    canvas.height = params.height

    const img = new Image()
    img.src = `data:image/svg+xml;charset=utf-8;base64,${btoa(unescape(svgData))}`

    img.onload = () => {
      if (ctx) {
        ctx.imageSmoothingQuality = 'high'
        ctx.drawImage(img, 0, 0)
        resolve(canvas.toDataURL('image/png'))
      } else {
        reject(new Error('no canvas context'))
      }
    }

    img.onerror = () => {
      reject(new Error('img onerror'))
    }
  })
}

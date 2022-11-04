import { AnchorHTMLAttributes, ButtonHTMLAttributes, createElement, FC, memo } from 'react'

const colors = {
  primary: {
    default: 'bg-cyan-600',
    hover: 'hover:bg-cyan-500'
  },
  success: {
    default: 'bg-green-600',
    hover: 'hover:bg-green-500'
  }
} as const

type CustomProps = {
  color?: keyof typeof colors
}
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomProps
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & CustomProps

export const Button: FC<ButtonProps | AnchorProps> = memo((props) => {
  const colorClassName = `${colors[props.color || 'primary'].default} ${colors[props.color || 'primary'].hover}`

  const mergedProps = {
    ...props,
    className: `${props.className || ''} ${colorClassName} rounded py-2 px-4 text-white`.trim()
  }

  if (isAnchor(mergedProps)) {
    return createElement('a', mergedProps)
  }
  return createElement('button', mergedProps)
})

Button.displayName = 'Button'

function isAnchor(props: ButtonProps | AnchorProps): props is AnchorProps {
  return Object.hasOwn(props, 'href')
}

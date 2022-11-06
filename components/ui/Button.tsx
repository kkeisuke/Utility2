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
  const { color, ...restProps } = props

  const colorClassName = `${colors[color || 'primary'].default} ${colors[color || 'primary'].hover}`

  const mergedProps = {
    ...restProps,
    className: `${props.className || ''} ${colorClassName} rounded py-2 px-4 text-white`.trim()
  }

  if (isAnchor(mergedProps)) {
    return createElement('a', mergedProps)
  }

  return createElement('button', isButton(mergedProps) ? mergedProps : undefined)
})

Button.displayName = 'Button'

function isAnchor(props: ButtonProps | AnchorProps): props is AnchorProps {
  return Object.hasOwn(props, 'href')
}

function isButton(props: ButtonProps | AnchorProps): props is ButtonProps {
  return !isAnchor(props)
}

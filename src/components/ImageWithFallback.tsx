import React, { useEffect, useState } from 'react'
import { ImageOff } from 'lucide-react'

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const { src, alt, style, className, onError, ...rest } = props

  useEffect(() => {
    setDidError(false)
  }, [src])

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setDidError(true)
    onError?.(event)
  }

  if (didError) {
    const fallbackProps = extractFallbackProps(rest)
    const ariaLabel =
      (fallbackProps['aria-label'] as string | undefined) ?? alt ?? 'Image failed to load'

    return (
      <div
        className={`inline-flex items-center justify-center bg-gray-100 text-gray-400 align-middle ${className ?? ''}`}
        style={style}
        data-original-url={src}
        role="img"
        aria-label={ariaLabel}
        {...fallbackProps}
      >
        <ImageOff className="w-10 h-10" aria-hidden="true" />
      </div>
    )
  }

  return (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}

function extractFallbackProps(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
): React.HTMLAttributes<HTMLDivElement> & Record<string, unknown> {
  const fallbackProps: Record<string, unknown> = {}

  for (const [key, value] of Object.entries(props)) {
    if (
      key.startsWith('on') ||
      key.startsWith('data-') ||
      key.startsWith('aria-') ||
      key === 'tabIndex' ||
      key === 'role'
    ) {
      fallbackProps[key] = value
    }
  }

  return fallbackProps as React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>
}

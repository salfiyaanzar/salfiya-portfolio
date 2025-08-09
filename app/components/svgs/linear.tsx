import React from 'react'

export default function LinearIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden {...props}>
      <path d="M4 12 12 4l8 8-8 8-8-8Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12l4-4 4 4-4 4-4-4Z" fill="currentColor" />
    </svg>
  )
}



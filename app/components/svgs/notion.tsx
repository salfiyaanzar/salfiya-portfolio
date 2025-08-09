import React from 'react'

export default function NotionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width={22} height={22} aria-hidden {...props}>
      <rect x="6" y="6" width="36" height="36" rx="6" ry="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M16 34V16h4l12 14V16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}



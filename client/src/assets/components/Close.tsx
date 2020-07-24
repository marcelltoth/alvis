import * as React from 'react'

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M3 3l14 14M17 3L3 17" stroke="#333" />
    </svg>
  )
}

export default SvgClose

import * as React from 'react'

function SvgBurger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} fill="none" {...props}>
      <path stroke="#444" d="M15 16h18m-18 7h12m-12 7h18" />
    </svg>
  )
}

export default SvgBurger

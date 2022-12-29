import { memo, ReactElement } from 'react'

import { IconType } from 'react-icons'

import { Technology } from './style'

interface ITechnologyBoxProps {
  children?: React.ReactNode
  name: string
  icon: IconType
}

const TechnologyBox: React.FC<ITechnologyBoxProps> = ({
  children,
  name,
  icon,
}) => {
  children as ReactElement

  return (
    <Technology className="d-flex me-2 my-2 align-items-baseline justify-content-center">
      <div className="me-2">{icon}</div>
      <p>{name}</p>
    </Technology>
  )
}
export default memo(TechnologyBox)

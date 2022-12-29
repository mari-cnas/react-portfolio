import { memo, ReactElement } from 'react'

import Navbar from 'components/Navbar'

import { HeaderBg } from './style'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Footer: React.FC<IBaseComponentProps> = ({ children }) => {
  children as ReactElement

  return (
    <HeaderBg>
      <div className="container">
        <Navbar />
      </div>
    </HeaderBg>
  )
}
export default memo(Footer)

import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Background from 'pages/Background'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Portfolio from 'pages/Portfolio'
import Qualifications from 'pages/Qualifications'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/background" element={<Background />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)

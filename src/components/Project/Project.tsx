import React, { memo, ReactElement, useState, useEffect } from 'react'

import { ProjectBg, ProjectCard, Verify } from './style'

interface IBaseComponentProps {
  children?: React.ReactNode
  name: string
  image: string
  status: string
  site: string
  description: string
}

const Project: React.FC<IBaseComponentProps> = ({
  children,
  name,
  image,
  status,
  site,
  description,
}) => {
  children as ReactElement

  return (
    <ProjectCard className="w-100">
      <a href={site} target="_blank" rel="noreferrer">
        <ProjectBg
          image={image}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="d-flex">
            <Verify status={status} />
            <h4>{name}</h4>
          </div>
        </ProjectBg>
        <p className="info text-center">{description}</p>
      </a>
    </ProjectCard>
  )
}
export default memo(Project)

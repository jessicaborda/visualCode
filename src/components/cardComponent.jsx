import React from 'react'
import { IconComponent } from './iconComponent'

export const CardComponent = ({ 
    iconPath, 
    title, 
    description, 
    style = {}, 
    iconStyle = {}, 
    titleStyle = {}, 
    descriptionStyle = {} 
  }) => {
    const defaultStyle = {
    card: {
      borderRadius: '15px',
      width: '273px',
      height: '385px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundColor: '#a7a2a9',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '8px 0',
    },
    description: {
      fontSize: '14px',
      padding: '140px 20px 0',
      color: '#555',
      textAlign: 'left',
    },
  };
  return (
    <div style={{ ...defaultStyle.card, ...style }}>
      <IconComponent 
        iconPath={iconPath} 
        altText={title} 
        style={{ width: '50px', height: '50px', ...iconStyle }} 
      />
      <h3 style={{ ...defaultStyle.title, ...titleStyle }}>{title}</h3>
      <p style={{ ...defaultStyle.description, ...descriptionStyle }}>{description}</p>
    </div>
  )
}

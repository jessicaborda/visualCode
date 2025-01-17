import React from 'react'
import './styles/Skills.css'
import { IconComponent } from '../iconComponent'

export const Skills = () => {

    const styles = { 
        width: '90px', 
        height: '90px',
      };

  return (
    <>
        <div className='skillsContainer'>
            <h2>Skills</h2>
            <p className='skillsDescription'>Durante mi transición al desarrollo web, he aprendido a usar tecnologías como React, JavaScript, HTML, CSS, y Figma, con el objetivo de diseñar interfaces digitales que no solo sean visualmente atractivas, sino también funcionales y fáciles de usar. Mi enfoque está siempre en la experiencia del usuario, aplicando principios de diseño que aprendí en la arquitectura y adaptándolos al mundo digital.</p>
            
            <div className='skillsIcons'>
                <IconComponent 
                iconPath='src/assets/icon_html.svg' 
                altText='menuIcon' 
                style={styles}
                />

                <IconComponent 
                iconPath='src/assets/icon_css.svg' 
                altText='menuIcon' 
                style={styles}
                />

                <IconComponent 
                iconPath='src/assets/icon_javascript.svg' 
                altText='menuIcon' 
                style={styles}
                />

                <IconComponent 
                iconPath='src/assets/icon_react.svg' 
                altText='menuIcon' 
                style={styles}
                />

                <IconComponent 
                iconPath='src/assets/icon_figma.svg' 
                altText='menuIcon' 
                style={styles}
                />
            </div>

        </div>
    </>
  )
}

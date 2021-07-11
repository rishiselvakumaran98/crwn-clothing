import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-item.styles.css'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) =>( // the {title} is the same as writing props.title
    <div 
    className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div 
            className='background-Image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>

)

export default withRouter(MenuItem);
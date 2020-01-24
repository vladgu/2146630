import React from 'react'

import locales from '../../locales'

const ServicesInfo = () => (
  <div className='servicesinfo-wrapper'>
    <div className='servicesinfo-spacer' />
    <div className='servicesinfo-content'>
      <h3 className='servicesinfo-content-title fs-13 lh-15'>{ locales.services.title }</h3>
      <div className='servicesinfo-content-table'>
        <div className='table-row'>
          <div className='color-strip first' />
          <p className='fs-13 lh-26'>{ locales.services.item1 }</p>
          <span className='row-number fw-bold'>11</span>
        </div>
        <div className='table-row'>
          <div className='color-strip second' />
          <p className='fs-13 lh-26'>{ locales.services.item2 }</p>
          <span className='row-number fw-bold'>3</span>
        </div>
        <div className='table-row'>
          <div className='color-strip third' />
          <p className='fs-13 lh-26'>{ locales.services.item3 }</p>
          <span className='row-number fw-bold'>1</span>
        </div>
      </div>
      <div className='summary-row'>
        <p className='fs-16 lh-26 fw-bold'>{ locales.services.total }</p>
        <span className='summary-row-number fw-bold'>15</span>
      </div>
    </div>


  </div>
)

export default ServicesInfo
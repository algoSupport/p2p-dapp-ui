/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget11: React.FC<Props> = ({className}) => {
  return (
    <>
      <div className='form mw-350px mx-auto mt-20'>
        {/* begin::Heading */}

        <div className='text-center mb-11'>
          <h1 className='text-dark fw-bolder mb-3'>Wallet Connect</h1>
          <div className='text-gray-500 fw-semibold fs-6'>
            Connect Your Wallet To Access Cilistia
          </div>
        </div>
        {/* begin::Heading */}

        {/* begin::Login options */}
        <div className='row g-3 mb-9'>
          {/* begin::Col */}
          <div className='col-md-6'>
            {/* begin::Google link */}
            <a
              href='#'
              className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100 disabled'
            >
              <img
                alt='Logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1024px-MetaMask_Fox.svg.png?20220831120339'
                className='h-20px me-3'
              />
              Metamask
            </a>
            {/* end::Google link */}
          </div>
          {/* end::Col */}

          {/* begin::Col */}
          <div className='col-md-6'>
            {/* begin::Google link */}
            <a
              href='#'
              className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100 disabled'
            >
              <img
                alt='Logo'
                src='https://trustwallet.com/assets/images/media/assets/trust_platform.svg'
                className='theme-dark-show h-20px me-3'
              />
              Trust Wallet
            </a>
            {/* end::Google link */}
          </div>
          {/* end::Col */}
        </div>
        {/* end::Login options */}

        {/* begin::Separator */}
        <div className='separator separator-content my-14'>
          <span className='w-125px text-gray-500 fw-semibold fs-7'>No Access?</span>
        </div>
        {/* end::Separator */}

        {/* end::Wrapper */}

        {/* begin::Action */}
        <div className='d-grid mb-10'>
          <a
            href='https://discord.gg/cilistia'
            target='_blank'
            className='btn btn-primary'
            rel='noreferrer'
          >
            <span className='indicator-label'>Visit Our Discord</span>
          </a>
        </div>
        {/* end::Action */}
      </div>
    </>
  )
}

export {TablesWidget11}

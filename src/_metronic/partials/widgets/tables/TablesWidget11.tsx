/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {useRef} from 'react'

type Props = {
  className: string
}

const TablesWidget11: React.FC<Props> = ({className}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const onClick = () => {
    // Disable indicator after 3 seconds
    btnRef.current?.setAttribute('data-kt-indicator', 'on')
    setTimeout(() => {
      // Activate indicator
      btnRef.current?.removeAttribute('data-kt-indicator')
    }, 3000)
  }
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
          <span className='w-125px text-gray-500 fw-semibold fs-7'>Verify</span>
        </div>
        {/* end::Separator */}

        {/* end::Wrapper */}

        {/* begin::Action */}
        <div className='d-grid mb-10'>
          <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
          >
            Verify Wallet Address
          </button>
        </div>
      </div>
      <div className='modal fade mt-20' tabIndex={-1} id='kt_modal_1'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Gain Access</h5>
              <div
                className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <KTSVG
                  path='/media/icons/duotune/arrows/arr061.svg'
                  className='svg-icon svg-icon-2x'
                />
              </div>
            </div>
            <div className='modal-body overlay overlay-block'>
              <div>
                <input
                  type='email'
                  className='form-control form-control-solid required'
                  placeholder='Enter your wallet address'
                />
              </div>
              <div className='overlay-layer bg-dark bg-opacity-5'>
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-light btn-sm' data-bs-dismiss='modal'>
                Close
              </button>
              <button
                ref={btnRef}
                onClick={onClick}
                type='button'
                className='btn btn-primary btn-sm disabled'
                id='kt_button_1'
              >
                <span className='indicator-label'>Verify</span>
                <span className='indicator-progress'>
                  Please wait...
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {TablesWidget11}

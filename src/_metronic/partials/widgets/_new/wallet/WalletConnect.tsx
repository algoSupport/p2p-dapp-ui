/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../helpers'
import {useState} from 'react'
import {useRef} from 'react'
import {CreateAppModal} from '../../../../partials'

type Props = {
  className: string
}

const WalletConnect: React.FC<Props> = ({className}) => {
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
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
      <div className='modal fade' tabIndex={-1} id='kt_modal_1'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header py-3'>
              <h5 className='modal-title'>Access Cilistia's Testnet</h5>
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
            <div className='modal-body py-8 overlay overlay-block'>
              <div>
                <input
                  type='email'
                  className='form-control form-control-white required'
                  placeholder='Enter your wallet address'
                />
              </div>
              <div className='overlay-layer bg-dark bg-opacity-5'>
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            </div>
            <div className='modal-footer py-2'>
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
      <div className='form mw-350px mx-auto mt-20 pt-20'>
        {/* begin::Heading */}

        <div className='text-center mb-11'>
          <h1 className='text-dark fw-bolder mb-3'>Wallet Connect</h1>
          <div className='text-gray-500 fw-semibold fs-6'>
            Connect Your Wallet To Access Cilistia
          </div>
        </div>
        {/* begin::Heading */}

        {/* begin::Login options */}
        <div className='row g-3 mb-5'>
          {/* begin::Col */}
          <div className='col-md-6'>
            {/* begin::Google link */}
            <a
              href='#'
              className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100 disabled'
            >
              <img
                alt='Logo'
                src='https://assets.coinbase.com/assets/96b5e5938ce0457adc15.png'
                className='h-20px me-3'
              />
              Coinbase Wallet
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
                className='h-20px me-3'
              />
              Trust Wallet
            </a>
            {/* end::Google link */}
          </div>
          {/* end::Col */}
        </div>
        <div className='row g-3 mb-9'>
          {/* begin::Col */}
          <div className='col-md-12'>
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
              Metamask Wallet
            </a>
            {/* end::Google link */}
          </div>
          {/* end::Col */}
        </div>
        {/* end::Login options */}

        {/* begin::Separator */}
        <div className='separator separator-content my-14'>
          <span className='w-150px text-gray-500 fw-semibold fs-7'>Can't Connect?</span>
        </div>
        {/* end::Separator */}

        {/* end::Wrapper */}

        {/* begin::Action */}
        <div className='d-grid mb-10'>
          <a
            href='#'
            onClick={() => setShowCreateAppModal(true)}
            className='btn fw-bold btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
          >
            Verify Wallet
          </a>
        </div>
        <CreateAppModal
          show={showCreateAppModal}
          handleClose={() => setShowCreateAppModal(false)}
        />
      </div>
    </>
  )
}

export {WalletConnect}

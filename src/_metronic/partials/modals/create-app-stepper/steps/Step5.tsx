/* eslint-disable jsx-a11y/anchor-is-valid */
import {toAbsoluteUrl} from '../../../../helpers'

const Step5 = () => {
  return (
    <>
      <div data-kt-stepper-element='content'>
        <div className='w-100 text-center'>
          {/* begin::Heading */}
          <h1 className='fw-bold text-dark mb-3'>Submit Your Request</h1>
          {/* end::Heading */}

          {/* begin::Description */}
          <div className='text-muted fw-semibold fs-3'>
            Once submitted you will be notified on discord when you have been granted access.
          </div>
          {/* end::Description */}

          {/* begin::Illustration */}
          <div className='text-center px-4 py-15'>
            <img
              src={toAbsoluteUrl('/media/illustrations/sketchy-1/Comp-1.gif')}
              alt=''
              className='mw-50 mh-50px'
            />
          </div>
          {/* end::Illustration */}
        </div>
      </div>
    </>
  )
}

export {Step5}

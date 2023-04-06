/* eslint-disable jsx-a11y/anchor-is-valid */

import {StepProps} from '../IAppModels'

const Step1 = ({data, updateData, hasError, setHasError}: StepProps) => {
  return (
    <div className='current' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-6 fw-semibold mb-2'>
            <span className='required'>Access Code</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Please enter your access code:'
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='appname'
            placeholder='Please enter your access code:'
            value={data.appBasic.appName}
            onChange={(e) => {
              updateData({
                appBasic: {
                  appName: e.target.value,
                  appType: data.appBasic.appType,
                },
              })
              if (e.target.value) setHasError(false)
            }}
          />
          {!data.appBasic.appName && hasError ? (
            <div className='fv-plugins-message-container'>
              <div data-field='username' data-validator='notEmpty' className='fv-help-block'>
                Access code is required.
              </div>
            </div>
          ) : hasError ? (
            <div className='fv-plugins-message-container'>
              <div data-field='username' data-validator='notEmpty' className='fv-help-block'>
                Invalid access code. Pleast try again.
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        {/*begin::Form Group */}

        {/*end::Form Group */}
      </div>
    </div>
  )
}

export {Step1}

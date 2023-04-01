/* eslint-disable jsx-a11y/anchor-is-valid */
import {StepProps} from '../IAppModels'

const Step2 = ({data, updateData, hasError}: StepProps) => {
  return (
    <div className='current' data-kt-stepper-element='content'>
      <div className='w-100'>
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Wallet Address</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Please share your wallet address'
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='walletaddress'
            placeholder=''
            value={data.appBasic.appName}
            onChange={(e) =>
              updateData({
                appBasic: {
                  appName: e.target.value,
                  appType: data.appBasic.appType,
                },
              })
            }
          />
          {!data.appBasic.appName && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='walletaddress' data-validator='notEmpty' className='fv-help-block'>
                Wallet address is required
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export {Step2}

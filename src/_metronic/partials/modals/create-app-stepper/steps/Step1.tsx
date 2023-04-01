/* eslint-disable jsx-a11y/anchor-is-valid */
import {KTSVG} from '../../../../../_metronic/helpers'
import {StepProps} from '../IAppModels'

const Step1 = ({data, updateData, hasError}: StepProps) => {
  return (
    <div className='current' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Discord Username</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Please share your discord username'
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='appname'
            placeholder='username#1234'
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
              <div data-field='username' data-validator='notEmpty' className='fv-help-block'>
                Discord username is required
              </div>
            </div>
          )}
        </div>

        {/*begin::Form Group */}

        {/*end::Form Group */}
      </div>
    </div>
  )
}

export {Step1}

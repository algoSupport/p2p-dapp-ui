/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useRef} from 'react'
import {createPortal} from 'react-dom'
import {Modal} from 'react-bootstrap'
import {defaultCreateAppData, ICreateAppData} from './IAppModels'
import {StepperComponent} from '../../../assets/ts/components'
import {KTSVG} from '../../../helpers'
import {Step1} from './steps/Step1'
import {Step5} from './steps/Step5'

type Props = {
  show: boolean
  handleClose: () => void
}

const modalsRoot = document.getElementById('root-modals') || document.body

const CreateAppModal = ({show, handleClose}: Props) => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [data, setData] = useState<ICreateAppData>(defaultCreateAppData)
  const [hasError, setHasError] = useState(false)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const updateData = (fieldsToUpdate: Partial<ICreateAppData>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }

  const checkAppBasic = (): boolean => {
    if (!data.appBasic.appName || !data.appBasic.appType) {
      return false
    }
    return true
  }

  const checkAppDataBase = (): boolean => {
    if (!data.appDatabase.databaseName || !data.appDatabase.databaseSolution) {
      return false
    }

    return true
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()
  }

  const nextStep = () => {
    setHasError(false)
    if (!stepper.current) {
      return
    }

    if (stepper.current.getCurrentStepIndex() === 1) {
      if (!checkAppBasic()) {
        setHasError(true)
        return
      }
    }

    if (stepper.current.getCurrentStepIndex() === 3) {
      if (!checkAppDataBase()) {
        setHasError(true)
        return
      }
    }

    stepper.current.goNext()
  }

  const submit = () => {
    window.location.reload()
  }

  return createPortal(
    <Modal
      id='kt_modal_create_app'
      tabIndex={-1}
      aria-hidden='true'
      dialogClassName='modal-dialog modal-dialog-centered mw-900px mx-auto'
      show={show}
      onHide={handleClose}
      onEntered={loadStepper}
      backdrop={true}
    >
      <div className='modal-header py-4'>
        <h5 className='mb-0'>Request Access</h5>
        {/* begin::Close */}
        <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
          <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
        </div>
        {/* end::Close */}
      </div>

      <div className='modal-body py-lg-8 px-lg-8'>
        {/*begin::Stepper */}
        <div
          ref={stepperRef}
          className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
          id='kt_modal_create_app_stepper'
        >
          {/* begin::Aside*/}
          <div className='d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px'>
            {/* begin::Nav*/}
            <div className='stepper-nav ps-lg-10'>
              {/* begin::Step 1*/}
              <div className='stepper-item current' data-kt-stepper-element='nav'>
                {/* begin::Wrapper*/}
                <div className='stepper-wrapper'>
                  {/* begin::Icon*/}
                  <div className='stepper-icon w-40px h-40px'>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number'>1</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className='stepper-label'>
                    <h3 className='stepper-title'>Step 1</h3>

                    <div className='stepper-desc'>Discord Username</div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className='stepper-line h-40px'></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 1*/}

              {/* begin::Step 3*/}
              <div className='stepper-item' data-kt-stepper-element='nav'>
                {/* begin::Wrapper*/}
                <div className='stepper-wrapper'>
                  {/* begin::Icon*/}
                  <div className='stepper-icon w-40px h-40px'>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number'>2</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className='stepper-label'>
                    <h3 className='stepper-title'>Step 2</h3>

                    <div className='stepper-desc'>Submit</div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}

                {/* end::Line*/}
              </div>
              {/* end::Step 3*/}

              {/* end::Step 4*/}
            </div>
            {/* end::Nav*/}
          </div>
          {/* begin::Aside*/}

          {/*begin::Content */}
          <div className='flex-row-fluid py-lg-5 px-lg-15'>
            {/*begin::Form */}
            <form noValidate id='kt_modal_create_app_form'>
              <Step1 data={data} updateData={updateData} hasError={hasError} />
              <Step5 />

              {/*begin::Actions */}
              <div className='d-flex flex-stack pt-10'>
                <div className='me-2'>
                  <button
                    type='button'
                    className='btn btn-sm btn-light-primary me-3'
                    data-kt-stepper-action='previous'
                    onClick={prevStep}
                  >
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr063.svg'
                      className='svg-icon-3 me-1'
                    />{' '}
                    Previous
                  </button>
                </div>
                <div>
                  <button
                    type='button'
                    className='btn btn-sm btn-primary'
                    data-kt-stepper-action='submit'
                    onClick={submit}
                  >
                    Submit{' '}
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr064.svg'
                      className='svg-icon-3 ms-2 me-0'
                    />
                  </button>

                  <button
                    type='button'
                    className='btn btn-sm btn-primary'
                    data-kt-stepper-action='next'
                    onClick={nextStep}
                  >
                    Next Step{' '}
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr064.svg'
                      className='svg-icon-3 ms-1 me-0'
                    />
                  </button>
                </div>
              </div>
              {/*end::Actions */}
            </form>
            {/*end::Form */}
          </div>
          {/*end::Content */}
        </div>
        {/* end::Stepper */}
      </div>
    </Modal>,
    modalsRoot
  )
}

export {CreateAppModal}

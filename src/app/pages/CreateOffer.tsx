import {useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../_metronic/helpers'
import {Step1} from '../modules/wizards/components/steps/Step1'
import {Step2} from '../modules/wizards/components/steps/Step2'
import {Step3} from '../modules/wizards/components/steps/Step3'
import {Step4} from '../modules/wizards/components/steps/Step4'
import {Step5} from '../modules/wizards/components/steps/Step5'
import {StepperComponent} from '../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {
  ICreateAccount,
  createAccountSchemas,
  inits,
} from '../modules/wizards/components/CreateAccountWizardHelper'

const CreateOffer = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <form className='form w-400px mx-auto mt-20'>
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        <h1 className='text-dark fw-bolder mb-3'>Wallet Connect</h1>
        <div className='text-gray-500 fw-semibold fs-6'>Connect Your Wallet To Access Cilistia</div>
      </div>
      {/* begin::Heading */}

      {/* begin::Login options */}
      <div className='row g-3 mb-9'>
        {/* begin::Col */}
        <div className='col-md-6'>
          {/* begin::Google link */}
          <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1024px-MetaMask_Fox.svg.png?20220831120339'
              className='h-20px me-3'
            />
            Connect Metamask
          </a>
          {/* end::Google link */}
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-md-6'>
          {/* begin::Google link */}
          <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src='https://trustwallet.com/assets/images/media/assets/trust_platform.svg'
              className='theme-dark-show h-20px me-3'
            />
            Connect Trust Wallet
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
    </form>
  )
}

export {CreateOffer}

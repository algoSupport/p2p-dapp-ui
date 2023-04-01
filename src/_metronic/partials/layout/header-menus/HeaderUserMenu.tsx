/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {CreateAppModal} from '../../../partials'
import {useState} from 'react'
import {useRef} from 'react'

const HeaderUserMenu: FC = () => {
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
      <a
        href='#'
        onClick={() => setShowCreateAppModal(true)}
        className='btn btn-sm btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_create_app'
      >
        Verify Wallet
      </a>
      <CreateAppModal show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} />
    </>
  )
}

export {HeaderUserMenu}

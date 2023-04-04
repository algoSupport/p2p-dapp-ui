/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {TablesWidget11} from '../../../_metronic/partials/widgets'
import {TablesWidget12} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6'>
      <li className='nav-item'>
        <a className='nav-link active' data-bs-toggle='tab' href='#kt_tab_pane_1'>
          Buy
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_2'>
          Sell
        </a>
      </li>
    </ul>
    <div className='tab-content' id='myTabContent'>
      <div className='tab-pane fade active show' id='kt_tab_pane_1' role='tabpanel'>
        <TablesWidget11 className='mb-5 mb-xl-8' />
      </div>
      <div className='tab-pane fade' id='kt_tab_pane_2' role='tabpanel'>
        <TablesWidget12 className='mb-5 mb-xl-8' />
      </div>
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}

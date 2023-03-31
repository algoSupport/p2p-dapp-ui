/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {TablesWidget11} from '../../../_metronic/partials/widgets'
import {TablesWidget13} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    <TablesWidget11 className='mb-5 mb-xl-8' />
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

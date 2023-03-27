/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {TablesWidget12} from '../../../_metronic/partials/widgets'
import {TablesWidget13} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    <TablesWidget12 className='mb-5 mb-xl-8' />
    <TablesWidget13 className='mb-5 mb-xl-8' />
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

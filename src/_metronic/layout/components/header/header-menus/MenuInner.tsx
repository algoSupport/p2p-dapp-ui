import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
    </>
  )
}

import Banner from '@tookscan/components/ui/Banner/Banner'
import { LayoutProps } from '@/types/common'
import clsx from 'clsx'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={clsx('')}>
      <Banner type={3} />
      <div className={clsx('flex justify-center')}>{children}</div>
    </div>
  )
}

export default Layout

import { ReactNode } from 'react'

const PageTitle = ({
  title,
  breadcrumbs,
  description,
}: {
  title: string | ReactNode
  breadcrumbs?: ReactNode
  description?: string
}) => {
  return (
    <div className="py-5 w-100">
      {breadcrumbs && breadcrumbs}
      <h4 className="text-xl font-bold">{title}</h4>
      <div className="text-sm">{description}</div>
    </div>
  )
}

export default PageTitle

import { PATHS } from '@/constants/path'
import {
  IconDashboard,
  IconProposals,
  IconTransactions,
  IconValidators,
} from '../icons'

export const SIDEBAR_MENU = [
  {
    label: 'Dashboard',
    path: `/${PATHS.dashboard}`,
    icon: <IconDashboard size={20} />,
  },
  {
    label: 'Validators',
    path: `/${PATHS.validators}`,
    icon: <IconValidators size={20} />,
  },
  {
    label: 'Proposals',
    path: `/${PATHS.proposals}`,
    icon: <IconProposals size={20} />,
  },
  {
    label: 'Transactions',
    path: `/${PATHS.transactions}`,
    icon: <IconTransactions size={20} />,
  },
]

import { createFileRoute } from '@tanstack/react-router'
import { Editorial } from '../components/TeaSite'
export const Route = createFileRoute('/affiliate-disclosure')({ head: () => ({meta: [{title: 'Affiliate disclosure | Clover & Cha'}]}), component: () => <Editorial page="disclosure"/> })

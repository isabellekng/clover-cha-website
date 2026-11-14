import { createFileRoute } from '@tanstack/react-router'
import { Editorial } from '../components/TeaSite'
export const Route = createFileRoute('/privacy')({ head: () => ({meta: [{title: 'Privacy policy | Clover & Cha'}]}), component: () => <Editorial page="privacy"/> })

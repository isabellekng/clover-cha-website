import { createFileRoute } from '@tanstack/react-router'
import { Editorial } from '../components/TeaSite'
export const Route = createFileRoute('/about')({ head: () => ({meta: [{title: 'Our little story | Clover & Cha'}]}), component: () => <Editorial page="about"/> })

import { createFileRoute } from '@tanstack/react-router'
import { Shop } from '../components/TeaSite'
export const Route = createFileRoute('/shop')({head: () => ({meta: [{title: 'Shop the shelf | Clover & Cha'}]}), component: Shop})

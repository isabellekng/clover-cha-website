import { createFileRoute } from '@tanstack/react-router'
import { Editorial } from '../components/TeaSite'
export const Route = createFileRoute('/contact')({ head: () => ({meta: [{title: 'Say hello | Clover & Cha'}]}), component: () => <Editorial page="contact"/> })

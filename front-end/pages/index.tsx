import { Inter } from '@next/font/google'
import Layout from '@/Components/Layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <Layout title='Home'>home page</Layout>
}

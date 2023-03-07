import { Inter } from 'next/font/google'
import styles from './page.module.css'

import dynamic from 'next/dynamic'
const DynamicClient = dynamic(() => import('./components/DynamicClient'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
      <DynamicClient 
        value="Hello"
      />
      </div>
    </main>
  )
}

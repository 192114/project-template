import styles from './Loading.module.css'
import SyncIcon from '../assets/icons/sync.svg'

function Loading() {

  return (
    <SyncIcon className={styles.icon} />
  )
}

export default Loading
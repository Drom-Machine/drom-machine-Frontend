import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/signIn">
        <a>Sign In</a>
      </Link>
      <Link href="/moonMenu">
        <a>Moon Menu</a>
      </Link>
      <Link href="/scenePlaylist">
        <a>Scene Playlist</a>
      </Link>
      <Link href="/journeys">
        <a>Journeys</a>
      </Link>
      <Link href="/playerController">
        <a>Player Controller</a>
      </Link>
      <Link href="/soundLibrary">
        <a>Sound Library</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/settings">
        <a>Settings</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  )
}
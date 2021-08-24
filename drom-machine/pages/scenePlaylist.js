import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import React from "react"

import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css';

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';


export async function getServerSideProps() {
    const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLtq9Oo5Ulj2vFTGM2ZkLBH6Fc2Mqy3NjO&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
    const data = await res.json();
    return {
        props: {
        data
        }
    }
}


export default function Playlist({ data }) {
    console.log( 'data', data);
    return (
        <div className={styles.container}>
        <Head>
            <title>Scene Playlist</title>
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Scene Playlist
            </h1>

            <ul className={styles.grid}>
            {data.items.map((item) => {
                console.log('item', item);
                const { id, snippet = {} } = item;
                const { title, thumbnails = {}, resourceId } = snippet;
                const { medium = {} } = thumbnails;
                return (
                    <li key={id} className={styles.card}>
                    <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                        <p>
                            <img width={medium.width} height={medium.height} src={medium.url} alt="" />
                        </p>
                        <h3>{ title }</h3>
                    </a>
                    </li>
                )
            })}          
            </ul>
        </main>

        <footer className={styles.footer}>
            
        </footer>
        </div>
    )
}
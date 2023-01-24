import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div>
                    <Image src='/logo.png' width={190} height={30} />
                </div>
                <div>
                    <Image src='/nav-menu.png' width={520} height={55} />
                </div>
            </nav>
        </>
    )
}

export default Navbar
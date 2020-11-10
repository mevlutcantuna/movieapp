import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__right'>
                <div className='navbar__right__title'>
                    <span className='navbar__right__title__movie'>Movie</span>
                    <span className='navbar__right__title__up'>Up</span>
                </div>
                <div className='navbar__right__link'>
                    <Link href='/'>
                        <a>Home Page</a> 
                    </Link>
                    <Link href='/favorities'>
                        <a>Favorites</a>
                    </Link>
                </div>
            </div>
            <div className='navbar__left'>
                <input placeholder='Enter movie name here' className='navbar__left__input'/>
            </div>
        </div>
    )
}

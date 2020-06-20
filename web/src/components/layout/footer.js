import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import {
    FaInstagram,
    FaFacebookSquare,
    FaTwitter,
    FaImdb,
    FaLinkedin,
    FaVimeoV,
} from 'react-icons/fa'

function Footer() {
    return (
        <StaticQuery
            query={graphql`
                query FooterQuery {
                    sanitySiteSettings {
                        twitter
                        instagram
                        facebook
                        linkedin
                        imdb
                    }
                }
            `}
            render={(data) => {
                const {
                    twitter,
                    instagram,
                    linkedin,
                    imdb,
                    facebook,
                } = data.sanitySiteSettings
                return (
                    <footer className='text-center p-4 md:p-6'>
                        <nav className='inline-block'>
                            <ul className='flex justify-center'>
                                <li className='px-2 hover:grow'>
                                    <Link to={instagram}>
                                        <FaInstagram size={20} />
                                    </Link>
                                </li>
                                <li className='px-2 hover:grow'>
                                    <Link to={imdb}>
                                        <FaImdb size={20} />
                                    </Link>
                                </li>
                                <li className='px-2 hover:grow'>
                                    <Link to={facebook}>
                                        <FaVimeoV size={20} />
                                    </Link>
                                </li>
                                <li className='px-2 hover:grow'>
                                    <Link to={twitter}>
                                        <FaTwitter size={20} />
                                    </Link>
                                </li>
                                <li className='px-2 hover:grow'>
                                    <Link to={linkedin}>
                                        <FaLinkedin size={20} />
                                    </Link>
                                </li>
                                <li className='px-2 hover:grow'>
                                    <Link to={facebook}>
                                        <FaFacebookSquare size={20} />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className='text-xs mt-2'>
                                <p>
                                    © 2020. By Patricia Lopes
                                </p>
                            </div>
                    </footer>
                )
            }}
        />
    )
}

export default Footer

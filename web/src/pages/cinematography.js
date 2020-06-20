import React, { useState, useEffect } from 'react'
import Cineitem from '../components/cinematography/cineitem'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import '../css/app.css'
import Isotope from 'isotope-layout/js/isotope'

const Cinematography = ({ data }) => {
    const { allSanityCinematography } = data
    const { edges: items } = data.allSanityCinematography

    useEffect(() => {
        var elem = document.querySelector('.item')
        var iso = new Isotope(elem, {
            itemSelector: '.item__grid',
            layoutMode: 'fitRows',
        })
        var filtersElem = document.querySelector('.filters-button-group')
        filtersElem.addEventListener('click', function (event) {
            var filterValue = event.target.getAttribute('data-filter')
            filterValue = filterValue
            iso.arrange({ filter: filterValue })
        })

        // change is-checked class on buttons
        var buttonGroups = document.querySelectorAll('.button-group')
        for (var i = 0, len = buttonGroups.length; i < len; i++) {
            var buttonGroup = buttonGroups[i]
            radioButtonGroup(buttonGroup)
        }

        function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener('click', function (event) {
                buttonGroup
                    .querySelector('.is-checked')
                    .classList.remove('is-checked')
                event.target.classList.add('is-checked')
            })
        }
    }, [])

    return (
        <Layout>
            <SEO
                keywords={[`cine`, `tailwind`, `react`, `tailwindcss`]}
                title='Cinematography'
            />
            <section id='cinematography' className=''>
                <div className='mx-auto'>
                    <div className='flex justify-center'>
                        <ul className='list-none button-group filters-button-group p-6'>
                            <li
                                className='mx-3 cursor-pointer is-checked'
                                data-filter='*'
                            >
                                All
                            </li>
                            <li
                                className='mx-3 cursor-pointer'
                                data-filter='.music_video'
                            >
                                Music Video
                            </li>
                            <li
                                className='mx-3 cursor-pointer'
                                data-filter='.fiction'
                            >
                                Fiction
                            </li>
                            <li
                                className='mx-3 cursor-pointer'
                                data-filter='.documentary'
                            >
                                Documentary
                            </li>
                            <li
                                className='mx-3 cursor-pointer'
                                data-filter='.commercials'
                            >
                                Commercials
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='item mx-auto flex items-center flex-wrap -mt-1'>
                    {items.map(({ node: item }) => (
                        <Cineitem
                            title={item.title}
                            featuredImage={item.featuredImage.asset.id}
                            altImage={item.featuredImage.alt}
                            category={item.category}
                            url={item.slug.current}
                            key={item.id}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query pageQuery {
        allSanityCinematography {
            edges {
                node {
                    title
                    slug {
                        current
                    }
                    featuredImage {
                        alt

                        asset {
                            id
                        }
                    }
                    category
                    id
                }
            }
        }
    }
`

export default Cinematography

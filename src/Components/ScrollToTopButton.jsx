import React, { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        setVisible(window.scrollY > 300)
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible)
        return () => window.removeEventListener("scroll", toggleVisible)
    }, [])

    return visible && (
        <div>

            <button onClick={scrollToTop} className='scroll-to-top'>
                ⬆ Top
            </button>


        </div>
    )
}

export default ScrollToTopButton

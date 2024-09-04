const Footer = () => {
    return (
        <footer
            className="
            flex
            flex-col
            justify-center
            align-items-center
            text-center
            bg-white
            text-black
            min-w-full
            absolute
            top-100
            mt-5
            py-3
            "
        >
            <i>Powered by</i>

            <article className="py-3 px-4 text-white mx-auto">
                <section className="technologies flex justify-center flex-wrap gap-4">
                    <a href="https://vercel.com/">
                        <img width="100px" src="/static/images/icons/vercel.png" alt="Vercel" />
                    </a>
                    <a href="https://glitch.com/">
                        <img width="50px" src="/static/images/icons/glitch.png" alt="glitch" />
                    </a>
                </section>
            </article>

            {/* Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. */}
        </footer>
    )
}

export default Footer;
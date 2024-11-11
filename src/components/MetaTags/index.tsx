import { Helmet } from "react-helmet-async"

interface MetaTagsProps {
    title?: string,
    description?: string,
    image?: string,
    name?: string,
    imageWidth?: string,
    imageHeight?: string,
}
const MetaTags = ({ title = "Top ESO Builds", description = "The only source of top ESO builds", image = "/icons/logo/topesologo-icon.png", name = "Top ESO Builds", imageWidth = "300", imageHeight = "300" }: MetaTagsProps) => {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <link rel='canonical' href={window.location.href.split('?')[0]} />
            <meta name='description' content={description} />
            <meta name='site_name' content={title} />
            <meta name='theme-color' content="#0d217d" />
            { /* Open Graph tags (OG) */}
            <meta property="og:url" content={window.location.href} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={title} />
            {/* OG image tags */}
            <meta property="og:image" content={image} />
            <meta property="og:image:secure_url" content={image} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content={imageWidth} />
            <meta property="og:image:height" content={imageHeight} />
            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}

export default MetaTags
import { Html, Head, Main, NextScript } from 'next/document'
import {useReportWebVitals} from "next/web-vitals";

export default function Document() {
    useReportWebVitals((metric) => {
        console.log(metric)
    });

    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
                <link rel="icon shortcut" href="https://olympics.com/en/paris-2024"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="theme-color" content="#ffffff" />
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-navbutton-color" content="#ffffff" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
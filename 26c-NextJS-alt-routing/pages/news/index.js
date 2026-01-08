// our-domain.com/news

import { Fragment } from "react/jsx-runtime";
import Link from 'next/link';

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li><Link href="news/nextjs-is-a-great-framework">NextJs Is A Great Framework</Link></li>
                <li>Something Else</li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;
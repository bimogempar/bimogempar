import React from 'react'
import MainLayout from '../components/MainLayout';
import { DiscussionEmbed } from 'disqus-react';
import HeadTitle from '../components/HeadTitle';

const PageIndex = () => {
    return (
        <HeadTitle title='home'>
            <MainLayout>
                <>
                    <p className="text-2xl">hello, im bimogempar 🐍😬🤪🌸</p>
                    <p className="text-xl text-gray-500">an fullstack engineer</p>
                    <img src="https://media1.tenor.com/images/0149ce3991f14173b3ad2ca8932e23e0/tenor.gif?itemid=13851010" alt="" layout="fill" className='w-[75%]' />
                </>
                <DiscussionEmbed
                    className="w-full"
                    shortname='bimogempar'
                    config={{
                        url: "https://about-me-nextjs-ten.vercel.app/",
                    }}
                />
            </MainLayout>
        </HeadTitle>
    )
}

export default PageIndex;
import React from 'react'
import MainLayout from '../components/MainLayout';
import { useQuery } from '@tanstack/react-query';
import supabase from '../config/supabaseClient';
import HeadTitle from '../components/HeadTitle';

const PageWorks = () => {
    const { data } = useQuery({
        queryKey: ['works'],
        queryFn: async () => {
            const { data: works } = await supabase.from('my_works').select('*');
            return works;
        },
        refetchOnWindowFocus: false,
    })

    return (
        <HeadTitle title="works">
            <MainLayout>
                {
                    data?.map(obj => {
                        return (
                            <div className='space-y-2'>
                                <h2>{obj.title}</h2>
                                <p className='text-xs opacity-50'>{obj.description.slice(0, 200) + '...'}</p>
                            </div>
                        )
                    })
                }
            </MainLayout>
        </HeadTitle>
    )
}

export default PageWorks;
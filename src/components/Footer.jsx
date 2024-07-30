import React from 'react';

const Footer = () => {
    return (
        <div className="flex justify-center p-4">
            <div className='w-full flex justify-center gap-6'>
                <a className='text-blue-700 text-sm italic underline' target="_blank" href="https://linkedin.com/in/bimogempar" rel="noreferrer">linkedin</a>
                <a className='text-blue-700 text-sm italic underline' target="_blank" href="https://github.com/bimogempar" rel="noreferrer">github</a>
                <a className='text-blue-700 text-sm italic underline' href="mailto:bimogempar@gmail.com">bimogempar@gmail.com</a>
            </div>
        </div>
    )
}

export default Footer;

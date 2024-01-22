import React, { useRef } from 'react';
import Card from './Card';

export default function Foreground() {
    const ref = useRef(null)
    const data = [
        {
            title: "Upload any File, sit amet consectetur adipisicing.",
            fileSize: '.4mb',
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Upload file',
                tagColor: 'green'
            }
        },
        {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            fileSize: '.9mb',
            close: false,
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'blue'
            }
        },
        {
            title: "File Upload Succesfully, Now add more documents.",
            fileSize: '.7mb',
            close: true,
            tag: {
                isOpen: false,
                tagTitle: 'Upload file',
                tagColor: 'green'
            }
        }
    ];

    return (
        <>
            <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'>
                {data.map((item, index) => (
                    <Card key={Math.random() * 1000} data={item} reference={ref} />
                ))}
            </div>
        </>
    );
}

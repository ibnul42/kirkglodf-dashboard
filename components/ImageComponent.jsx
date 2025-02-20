import Image from 'next/image';
import React from 'react';

/**
 * Custom Next.js Image component
 *
 * @param {Object} props - Component props
 * @param {string} [props.src='/assets/profile.jpg'] - Image source URL
 * @param {string} [props.className] - Additional class names for styling
 * @param {import('next/image').ImageProps} props - Next.js Image component properties
 * @returns {JSX.Element} Next.js Image component wrapped in a div
 */
export default function ImageComponent({ src = '/assets/profile.jpg', className = '', ...props }) {
    return (
        <div className="h-full w-full relative">
            <Image
                src={src}
                alt=""
                className={className}
                fill
                {...props}
            />
        </div>
    );
}

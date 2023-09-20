import React from 'react'

export const DragElement = ({ resize }) => (
    <svg
        onMouseDown={resize}
        width="4"
        height="18"
        viewBox="0 0 4 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_8528_54)">
            <circle cx="2" cy="2" r="2" fill="black" fillOpacity="0.2" />
            <circle cx="2" cy="9" r="2" fill="black" fillOpacity="0.2" />
            <circle cx="2" cy="16" r="2" fill="black" fillOpacity="0.2" />
        </g>
        <defs>
            <clipPath id="clip0_8528_54">
                <rect width="4" height="18" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

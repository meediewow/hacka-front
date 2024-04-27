import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export const Logo: React.FC = () => {
    return (
        <SvgIcon
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.3722 31.9794L20 37.6094L33.1488 24.4553C32.3059 24.4348 31.3244 24.3907 30.2827 24.3041C28.7441 24.1762 27.0558 23.9541 25.481 23.5715C24.9124 23.4333 24.3491 23.272 23.807 23.0826C23.7675 23.0715 23.7283 23.0577 23.6897 23.0411C22.7878 22.7173 21.9483 22.3138 21.2459 21.8074C18.6033 19.9023 17.3668 17.4912 16.3832 15.5734L16.3481 15.505C16.3363 15.4819 16.3245 15.4589 16.3127 15.4359C16.3059 15.4227 16.2991 15.4094 16.2923 15.3962C15.2476 13.3626 14.5548 12.2062 13.079 11.8848C12.9003 11.8459 12.7093 11.8296 12.5082 11.8341C12.4772 12.2865 12.4789 12.7993 12.6321 13.504C12.7513 14.0524 13.1824 14.8451 13.403 15.1884C13.683 15.6239 13.5569 16.2039 13.1214 16.4839C12.6859 16.7639 12.1058 16.6378 11.8258 16.2023C11.5777 15.8164 10.9932 14.7914 10.7999 13.9023C10.6681 13.2962 10.6234 12.7708 10.6185 12.3265C10.0219 12.5943 9.5325 12.9034 9.28748 13.0701C9.03241 13.2436 8.72018 13.3516 8.38306 13.3516L4.92464 13.3516C4.90283 13.8977 5.00383 14.3211 5.2063 14.6898C5.45616 15.1448 5.91156 15.6092 6.70941 16.114C7.07468 16.3451 7.81082 16.6072 8.6986 16.9223C9.11088 17.0687 9.54108 17.2226 9.9126 17.3769C10.2588 17.5207 10.6576 17.7054 10.9425 17.9385C13.8914 20.3512 14.2562 24.2709 14.3718 28.0101L14.3722 28.0246V31.9794Z"
                fill="url(#paint0_linear_2015_1865)"
            />
            <path
                d="M12.4972 30.1036V28.0536C12.3779 24.2215 11.9597 21.1934 9.75515 19.3897C9.70436 19.3481 9.5371 19.2513 9.19331 19.1084C8.87481 18.9761 8.49096 18.8382 8.07144 18.6893C7.32115 18.4238 6.2592 18.0479 5.70695 17.6985C4.75861 17.0985 4.0205 16.4257 3.56282 15.5923C3.09581 14.7419 2.97155 13.8177 3.08752 12.8147C3.1819 11.9985 3.88655 11.4766 4.61317 11.4766L8.29694 11.4766C8.7969 11.1425 10.0393 10.381 11.4432 10.083C12.0723 9.94949 12.7752 9.89964 13.478 10.0527C15.9298 10.5868 16.9779 12.6272 17.9392 14.4987L18.0149 14.6461C18.1454 14.9003 18.2769 15.1565 18.4121 15.4135C18.9262 14.5538 19.7039 13.483 20.9573 12.1599C21.3557 11.7394 21.7853 11.351 22.2158 10.9985C23.5128 9.93657 24.8724 9.15774 25.5093 8.79294C25.5359 8.77768 25.5613 8.76315 25.5854 8.74935C26.0345 8.49167 26.6074 8.64685 26.8651 9.09594C27.1228 9.54504 26.9676 10.118 26.5185 10.3757L26.4531 10.4132C26.1179 10.6053 25.6098 10.8965 25.0312 11.2712C25.7611 11.4912 26.579 11.8019 27.2022 12.2235C28.1251 12.8478 28.7782 13.5019 29.1346 13.9284L31.268 14.4689C31.9299 14.6365 32.5854 15.325 32.3509 16.2267C32.1418 17.0309 31.5892 18.1293 30.4753 18.9501C29.1988 19.8906 27.8765 19.9534 27.0936 19.8669C27.0193 19.9135 26.9211 19.9841 26.7981 20.0893C26.5585 20.2943 26.2643 20.5966 25.9153 21.019C25.7523 21.2163 25.5979 21.4271 25.4603 21.6306C25.6122 21.6717 25.7667 21.7113 25.9237 21.7495C27.3718 22.1014 28.9564 22.3124 30.438 22.4356C31.9167 22.5585 33.2746 22.5924 34.2635 22.5955C34.5451 22.5964 34.7964 22.5947 35.0114 22.592L36.9769 20.6257C38.9267 18.6756 40 16.083 40 13.325C40 10.567 38.9267 7.97443 36.9769 6.02432C35.0276 4.07421 32.436 3 29.6791 3C26.9227 3 24.3307 4.07421 22.3813 6.02432L20 8.4066L17.6187 6.02432C15.6693 4.07421 13.0778 3 10.3209 3C7.564 3 4.97244 4.07421 3.02311 6.02432C1.07378 7.97443 0 10.567 0 13.325C0 16.0826 1.07378 18.6756 3.02311 20.6257L12.4972 30.1036Z"
                fill="url(#paint1_linear_2015_1865)"
            />
            <path
                d="M24.4698 19.8248C24.1561 20.2045 23.8661 20.6254 23.6344 21.0037C23.144 20.7894 22.709 20.5507 22.3424 20.2864C21.1038 19.3935 20.2259 18.375 19.5221 17.3189C19.9049 16.491 20.6119 15.2508 22.3185 13.4495C22.5571 13.1976 22.814 12.9544 23.0811 12.7216C23.4501 12.7921 23.9181 12.8984 24.3986 13.0393C25.0994 13.2447 25.7426 13.4998 26.1517 13.7765C26.95 14.3166 27.484 14.8708 27.722 15.1623C27.9231 15.4088 28.2156 15.6298 28.5903 15.7248L30.3846 16.1793C30.2006 16.588 29.8783 17.0609 29.363 17.4406C28.4593 18.1065 27.5228 18.0531 27.1258 17.9775L26.8857 17.9318L26.6539 18.0091C26.2773 18.1346 25.9169 18.3757 25.5792 18.6646C25.2328 18.9609 24.8631 19.3487 24.4698 19.8248Z"
                fill="url(#paint2_linear_2015_1865)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_2015_1865"
                    x1="-0.0346885"
                    y1="21.4144"
                    x2="40.0405"
                    y2="21.0739"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0064FF" />
                    <stop offset="1" stopColor="#01D1FF" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_2015_1865"
                    x1="-0.0346885"
                    y1="21.4144"
                    x2="40.0405"
                    y2="21.0739"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0064FF" />
                    <stop offset="1" stopColor="#01D1FF" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_2015_1865"
                    x1="-0.0346885"
                    y1="21.4144"
                    x2="40.0405"
                    y2="21.0739"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0064FF" />
                    <stop offset="1" stopColor="#01D1FF" />
                </linearGradient>
            </defs>
        </SvgIcon>
    );
};

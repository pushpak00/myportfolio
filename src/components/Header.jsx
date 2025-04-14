import React from "react";
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';

import Slider from '@mui/material/Slider';





function Header() {

    const formatDate = (date) => {
        const options = {
            weekday: 'short', // 'Wed'
            // year: 'numeric',  // '2025'
            month: 'short',   // 'Apr'
            day: 'numeric',   // '9'
            hour: 'numeric',  // '4'
            minute: 'numeric', // '01'
            hour12: true,     // 12-hour format with AM/PM
        };

        const formattedDate = date.toLocaleString('en-US', options);
        return formattedDate.replace(/,/g, '');
    };

    // State to store the current date and time
    const [time, setTime] = useState(formatDate(new Date()));

    // Effect to update time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(formatDate(new Date()));
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);



    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <div className="header">

            <div className="parent">

                <div className="div1">
                    <a href="/">Activities</a>
                </div>
                <div className="div2">
                    {time}
                </div>
                <div className="div3">
                    <svg className="icon" fill="white" width="800px" height="800px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                        <path d="M240.60352,69.55179C174.33789,19.52054,81.71289,19.50492,15.416,69.53617a15.67919,15.67919,0,0,0-6.23438,10.9375,16.20384,16.20384,0,0,0,3.76563,12.28125L115.791,213.98148a16.04165,16.04165,0,0,0,12.21875,5.6875h.01562a15.846,15.846,0,0,0,12.10938-5.60938v-.00781L243.10352,92.708a16.264,16.264,0,0,0,3.73437-12.22656A15.76645,15.76645,0,0,0,240.60352,69.55179ZM25.00977,82.333h0l.01562-.01562C25.02539,82.32523,25.02539,82.32523,25.00977,82.333ZM204.48242,113.4971A127.38716,127.38716,0,0,0,187.502,102.81156c-.2539-.13575-.50781-.26953-.76562-.40235a127.88589,127.88589,0,0,0-17.78711-7.57129c-.50195-.17089-1.00781-.3164-1.51367-.48144a127.931,127.931,0,0,0-18.42188-4.5625c-.53125-.08985-1.0664-.13086-1.60156-.21387a119.8284,119.8284,0,0,0-38.80859-.00293c-.53711.083-1.07813.126-1.61524.21582a127.94763,127.94763,0,0,0-18.40039,4.55567c-.50781.165-1.01562.3125-1.51953.48437a128.124,128.124,0,0,0-17.76563,7.55762c-.26367.13672-.52343.27441-.78515.41308a127.2435,127.2435,0,0,0-16.96094,10.666l-.002.001L25.10352,82.27054c60.625-45.71875,145.26562-45.6875,205.79687.09375Z" />
                    </svg>

                    <svg className="sound-icon" width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>sound-quiet-filled</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="icon" fill="white" transform="translate(42.666667, 85.333333)">
                                <path d="M276.914133,274.101547 L243.589973,247.442773 C283.38304,204.875093 283.38432,138.998827 243.588693,96.4311467 L276.912853,69.77216 C329.118507,127.992107 329.118507,215.880107 276.914133,274.101547 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z" id="Shape">

                                </path>
                            </g>
                        </g>
                    </svg>

                    <svg className="battery-icon" fill="white" width="800px" height="800px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"
                        style={{ enableBackground: 'new 0 0 48 48' }}
                        xmlSpace="preserve"
                    >
                        <style>{`.st3 { display: none; }`}</style>

                        <g id="Your_Icons">
                            <path d="M0-.006h48v48H0v-48z" style={{ fill: 'none' }} />
                            <path d="M35 9.994h-3v-4a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2v4h-3a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-30a2 2 0 0 0-2-2zm-2 30H15v-26h18v26z" />
                            <path d="M30 36.994H18v-16h12v16z" />
                        </g>
                    </svg>

                    <div class="dropdown" className="dropdown-bar">
                        <a class=" dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <svg className="dropdown-arrow" fill="white" width="800px" height="800px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>dropdown</title>
                                <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
                            </svg>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark mt-3" style={{ width: '17%' }}>
                            <li class="d-flex justify-content-center">
                                <svg class="" className="headphone-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                                </svg>



                                <Box sx={{ width: 200, marginLeft: 2 }}>

                                    <Slider
                                        size="small"
                                        defaultValue={70}
                                        aria-label="small"
                                        valueLabelDisplay="auto"
                                        sx={{
                                            color: 'grey.600',
                                            '& .MuiSlider-thumb': {
                                                backgroundColor: 'white', // or '#999', 'grey.600', etc.
                                            },
                                        }}
                                    />
                                </Box>

                                {/* <input type="range" min="1" max="100" class="pl-3 form-range w-50" id="customRange1" /> */}



                            </li>
                            <li class="d-flex justify-content-center">

                                <svg className="brightness-icon" fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="800px" height="800px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
                                    <path id="XMLID_1856_" d="M46,23.7c-12.3,0-22.3,10-22.3,22.3s10,22.3,22.3,22.3s22.3-10,22.3-22.3S58.3,23.7,46,23.7z M31.7,46
	c0-7.9,6.4-14.3,14.3-14.3h0v28.5h0C38.1,60.3,31.7,53.9,31.7,46z M42,12.3V4c0-2.2,1.8-4,4-4s4,1.8,4,4v8.3c0,2.2-1.8,4-4,4
	S42,14.5,42,12.3z M92,46c0,2.2-1.8,4-4,4h-8.3c-2.2,0-4-1.8-4-4s1.8-4,4-4H88C90.2,42,92,43.8,92,46z M50,79.7V88c0,2.2-1.8,4-4,4
	s-4-1.8-4-4v-8.3c0-2.2,1.8-4,4-4S50,77.5,50,79.7z M12.3,50H4c-2.2,0-4-1.8-4-4s1.8-4,4-4h8.3c2.2,0,4,1.8,4,4S14.5,50,12.3,50z
	 M67,25c-1.6-1.6-1.6-4.1,0-5.7l5.8-5.8c1.6-1.6,4.1-1.6,5.7,0c1.6,1.6,1.6,4.1,0,5.7L72.7,25c-0.8,0.8-1.8,1.2-2.8,1.2
	C68.8,26.1,67.8,25.8,67,25z M78.5,72.9c1.6,1.6,1.6,4.1,0,5.7c-0.8,0.8-1.8,1.2-2.8,1.2c-1,0-2-0.4-2.8-1.2L67,72.7
	c-1.6-1.6-1.6-4.1,0-5.7c1.6-1.6,4.1-1.6,5.7,0L78.5,72.9z M25,67c1.6,1.6,1.6,4.1,0,5.7l-5.8,5.8c-0.8,0.8-1.8,1.2-2.8,1.2
	s-2-0.4-2.8-1.2c-1.6-1.6-1.6-4.1,0-5.7l5.8-5.8C20.9,65.5,23.4,65.5,25,67z M13.5,19.1c-1.6-1.6-1.6-4.1,0-5.7
	c1.6-1.6,4.1-1.6,5.7,0l5.8,5.8c1.6,1.6,1.6,4.1,0,5.7c-0.8,0.8-1.8,1.2-2.8,1.2c-1,0-2-0.4-2.8-1.2L13.5,19.1z"/>
                                </svg>

                                <Box sx={{ width: 200, marginLeft: 2 }}>

                                    <Slider
                                        size="small"
                                        defaultValue={70}
                                        aria-label="small"
                                        valueLabelDisplay="auto"
                                        sx={{
                                            color: 'grey.600',
                                            '& .MuiSlider-thumb': {
                                                backgroundColor: 'white', // or '#999', 'grey.600', etc.
                                            },
                                        }}
                                    />
                                </Box>
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" >
                                <svg className="icon" fill="white" width="800px" height="800px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M240.60352,69.55179C174.33789,19.52054,81.71289,19.50492,15.416,69.53617a15.67919,15.67919,0,0,0-6.23438,10.9375,16.20384,16.20384,0,0,0,3.76563,12.28125L115.791,213.98148a16.04165,16.04165,0,0,0,12.21875,5.6875h.01562a15.846,15.846,0,0,0,12.10938-5.60938v-.00781L243.10352,92.708a16.264,16.264,0,0,0,3.73437-12.22656A15.76645,15.76645,0,0,0,240.60352,69.55179ZM25.00977,82.333h0l.01562-.01562C25.02539,82.32523,25.02539,82.32523,25.00977,82.333ZM204.48242,113.4971A127.38716,127.38716,0,0,0,187.502,102.81156c-.2539-.13575-.50781-.26953-.76562-.40235a127.88589,127.88589,0,0,0-17.78711-7.57129c-.50195-.17089-1.00781-.3164-1.51367-.48144a127.931,127.931,0,0,0-18.42188-4.5625c-.53125-.08985-1.0664-.13086-1.60156-.21387a119.8284,119.8284,0,0,0-38.80859-.00293c-.53711.083-1.07813.126-1.61524.21582a127.94763,127.94763,0,0,0-18.40039,4.55567c-.50781.165-1.01562.3125-1.51953.48437a128.124,128.124,0,0,0-17.76563,7.55762c-.26367.13672-.52343.27441-.78515.41308a127.2435,127.2435,0,0,0-16.96094,10.666l-.002.001L25.10352,82.27054c60.625-45.71875,145.26562-45.6875,205.79687.09375Z" />
                                </svg>
                                Moto Turbo
                            </a>
                            </li>
                            <li><a class="dropdown-item d-flex" >
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-bluetooth" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8.543 3.948 1.316 1.316L8.543 6.58zm0 8.104 1.316-1.316L8.543 9.42zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827zM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99S2 1.655 2 8.01C2 14.344 4.407 16 7.904 16Z" />
                                </svg>
                                Off
                            </a>
                            </li> 
                            <li><a class="dropdown-item" >
                                <svg className="battery-icon" fill="white" width="800px" height="800px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"
                                    style={{ enableBackground: 'new 0 0 48 48' }}
                                    xmlSpace="preserve">
                                    <style>{`.st3 { display: none; }`}</style>

                                    <g id="Your_Icons">
                                        <path d="M0-.006h48v48H0v-48z" style={{ fill: 'none' }} />
                                        <path d="M35 9.994h-3v-4a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2v4h-3a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-30a2 2 0 0 0-2-2zm-2 30H15v-26h18v26z" />
                                        <path d="M30 36.994H18v-16h12v16z" />
                                    </g>
                                </svg>
                                4:40 Remaining (80%)
                            </a>
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">
                                <svg className="setting-icon" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0175 19C10.6601 19 10.3552 18.7347 10.297 18.373C10.2434 18.0804 10.038 17.8413 9.76171 17.75C9.53658 17.6707 9.31645 17.5772 9.10261 17.47C8.84815 17.3365 8.54289 17.3565 8.30701 17.522C8.02156 17.7325 7.62943 17.6999 7.38076 17.445L6.41356 16.453C6.15326 16.186 6.11944 15.7651 6.33361 15.458C6.49878 15.2105 6.52257 14.8914 6.39601 14.621C6.31262 14.4332 6.23906 14.2409 6.17566 14.045C6.08485 13.7363 5.8342 13.5051 5.52533 13.445C5.15287 13.384 4.8779 13.0559 4.87501 12.669V11.428C4.87303 10.9821 5.18705 10.6007 5.61601 10.528C5.94143 10.4645 6.21316 10.2359 6.33751 9.921C6.37456 9.83233 6.41356 9.74433 6.45451 9.657C6.61989 9.33044 6.59705 8.93711 6.39503 8.633C6.1424 8.27288 6.18119 7.77809 6.48668 7.464L7.19746 6.735C7.54802 6.37532 8.1009 6.32877 8.50396 6.625L8.52638 6.641C8.82735 6.84876 9.21033 6.88639 9.54428 6.741C9.90155 6.60911 10.1649 6.29424 10.2375 5.912L10.2473 5.878C10.3275 5.37197 10.7536 5.00021 11.2535 5H12.1115C12.6248 4.99976 13.0629 5.38057 13.1469 5.9L13.1625 5.97C13.2314 6.33617 13.4811 6.63922 13.8216 6.77C14.1498 6.91447 14.5272 6.87674 14.822 6.67L14.8707 6.634C15.2842 6.32834 15.8528 6.37535 16.2133 6.745L16.8675 7.417C17.1954 7.75516 17.2366 8.28693 16.965 8.674C16.7522 8.99752 16.7251 9.41325 16.8938 9.763L16.9358 9.863C17.0724 10.2045 17.3681 10.452 17.7216 10.521C18.1837 10.5983 18.5235 11.0069 18.525 11.487V12.6C18.5249 13.0234 18.2263 13.3846 17.8191 13.454C17.4842 13.5199 17.2114 13.7686 17.1083 14.102C17.0628 14.2353 17.0121 14.3687 16.9562 14.502C16.8261 14.795 16.855 15.1364 17.0323 15.402C17.2662 15.7358 17.2299 16.1943 16.9465 16.485L16.0388 17.417C15.7792 17.6832 15.3698 17.7175 15.0716 17.498C14.8226 17.3235 14.5001 17.3043 14.2331 17.448C14.0428 17.5447 13.8475 17.6305 13.6481 17.705C13.3692 17.8037 13.1636 18.0485 13.1099 18.346C13.053 18.7203 12.7401 18.9972 12.3708 19H11.0175Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9747 12C13.9747 13.2885 12.9563 14.333 11.7 14.333C10.4437 14.333 9.42533 13.2885 9.42533 12C9.42533 10.7115 10.4437 9.66699 11.7 9.66699C12.9563 9.66699 13.9747 10.7115 13.9747 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Settings
                            </a>
                            </li>
                            <li><a class="dropdown-item" href="#">
                                <svg className="icon" fill="white" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                                    <path d="M418.4,232.7h-23.3v-93.1C395.1,62.5,332.6,0,255.5,0S115.9,62.5,115.9,139.6v93.1H92.6c-12.8,0-23.3,10.4-23.3,23.3v232.7
	                                    c0,12.9,10.4,23.3,23.3,23.3h325.8c12.8,0,23.3-10.4,23.3-23.3V256C441.7,243.1,431.2,232.7,418.4,232.7z M348.6,232.7H162.4v-93.1
	                                    c0-51.4,41.7-93.1,93.1-93.1s93.1,41.7,93.1,93.1V232.7z"/>
                                </svg>
                                Lock
                            </a>
                            </li>
                            <li><a class="dropdown-item" href="#">
                            <svg className="icon" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V3ZM8.6092 5.8744C9.09211 5.60643 9.26636 4.99771 8.99839 4.5148C8.73042 4.03188 8.12171 3.85763 7.63879 4.1256C4.87453 5.65948 3 8.61014 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.66747 19.1882 5.75928 16.5007 4.20465C16.0227 3.92811 15.4109 4.09147 15.1344 4.56953C14.8579 5.04759 15.0212 5.65932 15.4993 5.93586C17.5942 7.14771 19 9.41027 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 9.3658 6.45462 7.06997 8.6092 5.8744Z" fill="white"/>
                            </svg>
                                Power Off / Log Out
                            </a>
                            </li>
                        </ul>
                    </div>


                </div>



            </div>

        </div>
    )
}


export default Header
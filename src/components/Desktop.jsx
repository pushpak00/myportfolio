import React from 'react'
import chrome from '../../image/themes/Yaru/apps/chrome.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import folder from '../../image/themes/Yaru/system/user-home.png'
import trash from '../../image/themes/Yaru/system/user-trash-full.png'
import contactme from '../../image/themes/Yaru/apps/gedit.png'
import github from '../../image/themes/Yaru/apps/github.png'





function Desktop() {
    return (
        <>

            <div class="ml-5 text-center" style={{ color: 'white' }} >
                <a>
                    <img height="45px" width="45px" src={chrome} />
                    <p>Google Chrome</p>
                </a>

                <a href='#'>
                    <img height="45px" width="45px" src={folder} />
                    <p>About Pushpak</p>
                </a>

                <a href='#'>
                    <img height="45px" width="45px" src={trash} />
                    <p>Trash</p>
                </a>

                <a href='#'>
                    <img height="45px" width="45px" src={contactme} />
                    <p>Contact Me</p>
                </a>

                <a href='#'>
                    <img height="45px" width="45px" src={github} />
                    <p>Github</p>
                </a>

            </div>

            {/* <Stack direction="row" spacing={2}>
                
                
                
            </Stack> */}
        </>
    )
}

export default Desktop
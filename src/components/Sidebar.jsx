import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import folder from '../../image/themes/Yaru/system/user-home.png'
import calcy from '../../image/themes/Yaru/apps/calc.png'
import vscode from '../../image/themes/Yaru/apps/vscode.png'
import bash from '../../image/themes/Yaru/apps/bash.png'
import spotify from '../../image/themes/Yaru/apps/spotify.png'
import setting from '../../image/themes/Yaru/apps/gnome-control-center.png'




export default function Sidebar() {
    return (
        <div
            style={{ height: '100vh', width: '60px', backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', justifyContent: 'start' }}>
            <Box sx={{ width: '100%', height: '100%' }}>

                <Stack spacing={3}>


                    <div class="d-flex justify-content-center mt-3" >
                        <svg className="chrome-svg" width="800px" height="800px" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M4.7434,22.505A12.9769,12.9769,0,0,0,14.88,28.949l5.8848-10.1927L16,16.0058,11.2385,18.755l-1.5875-2.75L8.4885,13.9919,5.3553,8.5649A12.9894,12.9894,0,0,0,4.7434,22.505Z" fill="#00ac47" /><path d="M16,3.0072A12.9769,12.9769,0,0,0,5.3507,8.5636l5.8848,10.1927L16,16.0057V10.5072H27.766A12.99,12.99,0,0,0,16,3.0072Z" fill="#ea4435" /><path d="M27.2557,22.505a12.9772,12.9772,0,0,0,.5124-12H15.9986v5.5011l4.7619,2.7492-1.5875,2.75-1.1625,2.0135-3.1333,5.4269A12.99,12.99,0,0,0,27.2557,22.505Z" fill="#ffba00" /><circle cx="15.9995" cy="16.0072" fill="#ffffff" r="5.5" /><circle cx="15.9995" cy="16.0072" fill="#4285f4" r="4.25" /></svg>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img width="28px" height="28px" src={calcy}/>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img width="28px" height="28px" src={folder} />
                    </div>
                    <div class="d-flex justify-content-center">
                        <img width="28px" height="28px" src={vscode}/>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img width="28px" height="28px" src={bash}/>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img width="28px" height="28px" src={spotify}/>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img width="28px" height="28px" src={setting}/>
                    </div>
                </Stack>

            </Box>
        </div>
    );
}
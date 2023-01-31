import React from 'react'
import "./Navbar.css"

const USER_IMG = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseancrane.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F01%2Fmountain_gorilla1_2020-1.jpg&f=1&nofb=1&ipt=f3425cbf2f745d88aad1d435d9e6249cf4e54298a02c6b300b07671f13725719&ipo=images'

function Navbar() {
    return (
        <nav className="Navbar">
            <div className="Navbar-brand">
                <img src={process.env.PUBLIC_URL + '/logo_500x200.png'} alt="logo" width="130" />
            </div>
            <div className="Navbar-Right">
                <img src={USER_IMG} alt='user'/>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 19 19">
                    <path fill="#ffffff" d="M8.5 9.913c-2.56 0-4.636-2.22-4.636-4.956C3.864 2.219 5.939 0 8.5 0c2.56 0 4.636 2.22 4.636 4.957 0 2.737-2.075 4.956-4.636 4.956zM17 19H0v-3.304c0-2.738 2.076-4.957 4.636-4.957h7.728c2.56 0 4.636 2.22 4.636 4.957V19z"></path>
                </svg> */}
            </div>          
        </nav>
    );
}

export default Navbar

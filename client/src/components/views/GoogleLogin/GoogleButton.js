import React from 'react';
import GoogleLogin from 'react-google-login';

const handleLogin = async googleData => {

    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId    
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await res.json()
    // 
}

function GoogleButton() {
    return (
        <div style={{ width: '100%', margin: '0' }}>

            <div style={{ width: '85%', margin: '1rem auto' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="App">
                        <GoogleLogin
                            clientId="620069160279-1diul4tbo168ligotov3nrsrds42e75j.apps.googleusercontent.com"
                            buttonText="Log In With Google"
                            onSuccess={handleLogin}
                            onFailure={handleLogin}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoogleButton;
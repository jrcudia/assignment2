import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div class="header-item1">
                    <div>
                        <p class="name">Zh Rimel</p>
                        <p class="occupation">Data Scientist</p>
                    </div>
                </div>
                <div class="header-item2">
                    <div>
                        <p>Email: <a href="mailto:rimel@mail.com">abc@gmail.com</a></p>
                        <p>Web: abc@github.io/abc</p>
                        <p>Mobile: 01234567890</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
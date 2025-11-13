import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://github.com/mdmcoin/'
}, {
    id: 'twitter',
    url: 'https://twitter.com/mdmcoin'
}, {
    id: 'telegram',
    url: 'https://telegram.me/mdmcoinorg'
}];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version: {version}</div>
            <div>Brought to you by Waves Team</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://mdmcoin.com" target="_blank">wavesplatform.com</a>
            </div>
        </div>
    );
}

export default Footer;

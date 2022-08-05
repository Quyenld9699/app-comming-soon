import React from 'react';
import { socialNetwork } from 'src/constant/socialNetwork';
import './_social_part.scss';

export default function SocialPart() {
    return (
        <div className="social" style={{ display: 'flex', justifyContent: 'center' }}>
            <ul>
                {socialNetwork.map((item) => {
                    return (
                        <li key={'horizonlsoicl' + item.name}>
                            <a href={item.url || '#'} title={item.name} target="_blank">
                                {item.icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

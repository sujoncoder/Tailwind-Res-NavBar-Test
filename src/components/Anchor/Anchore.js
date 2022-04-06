import React from 'react';

const Anchore = (props) => {
    const {link,name} = props.route;
    return (
        <li className='mr-4 uppercase text-gray-400 font-semibold text-center'>
            <a href={link}>{name}</a>
        </li>
    );
};

export default Anchore;
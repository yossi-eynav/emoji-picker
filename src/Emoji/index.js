import React from 'react';
import './style.css';

function bgImage(name) {
    return {
        'backgroundImage': `url(/png/${name}.png)`
    };
}

function Emoji({member, emoji, hidden, activeModifier}) {

    if (emoji.hasOwnProperty('diversity') && emoji.diversity !== member) {
        return null;
    }

    if (activeModifier && emoji.hasOwnProperty('diversities')) {
        const currentDiversity = `${member}-${activeModifier}`;
        if (emoji.diversities.indexOf(currentDiversity) > -1) {
            member = currentDiversity;
        }
    }

    const style = {
        order: emoji.order
    };

    const hiddenClass = hidden ? ' hidden' : '';

    return (
        <li className={`emoji${hiddenClass}`} style={style}>
            <a href="#!" tabIndex={emoji.order} style={bgImage(member)}><span className="hidden">{emoji.shortname}</span></a>
            <span>{emoji.shortname}</span>
        </li>
    );
}

export default Emoji;
import { useState } from 'react';
import Image from './Image';

export default function Card() {
    const [state, setState] = useState(false);

    const onMouseDown = (e) => {
        e.target.style.transform = 'scale(.9)';
    };

    const onMouseUp = (e) => {
        e.target.style.transform = 'scale(1)';
    };

    const onClick = () => {
        setState(state === false ? true : false);
    };

    return (
        <div className="card">
            <Image state={state} />
            <div className="card__container">
                <h2 className="card__title">Card title</h2>
                <p className="card__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Corrupti incidunt, quas ipsam culpa non commodi magnam
                    exercitationem labore omnis assumenda maxime, sint voluptas
                    ducimus, eum consectetur laudantium dolore aliquam
                    reprehenderit.
                </p>
                <button
                    className="card__btn"
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onClick={onClick}
                >
                    Go somewhere
                </button>
            </div>
        </div>
    );
}

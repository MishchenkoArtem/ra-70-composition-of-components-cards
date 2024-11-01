const image = require('../images/radek-skrzypczak-Tf1BHLb6pPk-unsplash.jpg');

export default function Image({ state }) {
    console.log(state);
    return (
        <img
            src={image}
            alt="..."
            className={state === false ? 'visually-hidden' : ''}
        />
    );
}

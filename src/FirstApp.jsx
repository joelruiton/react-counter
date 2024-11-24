import PropTypes from 'prop-types';

export function FirstApp({ title, subTitle, name }) {
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

// FirstApp.defaultProps = {
//     //title: "No hay título",
//     subTitle: "No hay subtítulo",
//     name: "Joel",
// }
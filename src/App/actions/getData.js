export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const DATA_UNAVAILABLE = 'DATA_UNAVAILABLE';

export function getData() {
    return dispatch => {
        fetch('https://randomuser.me/api?results=500')
            .then(response => response.json())
            .then(({ results: data }) => {
                dispatch({ type: DATA_AVAILABLE, data })
            })
            .then((error) => {
                dispatch({ type: DATA_UNAVAILABLE, data: [], message: 'Error fetching' })
            })
    };
}
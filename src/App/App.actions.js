export const DATA_AVAILABLE = 'DATA_AVAILABLE';

export function getData() {
    return dispatch => {
        setTimeout(() => {
            dispatch({ type: DATA_AVAILABLE, data: [1, 2, 3, 4, 5, 5, 7, 7] });
        }, 2000);
    };
}

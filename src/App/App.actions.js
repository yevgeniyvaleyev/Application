export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const DATA_UNAVAILABLE = 'DATA_UNAVAILABLE';

export function getData() {
    return dispatch => {
        fetch('https://randomuser.me/api?results=500')
        .then(response => response.json())
        .then(({ results: data }) => {
            dispatch({ type: DATA_AVAILABLE, data })
        })
        .then( (error) => {
            dispatch({ type: DATA_UNAVAILABLE, data: [], message: 'Error fetching' })
        })
    };
}


export const FILTER_TERM = 'FILTER_TERM';

export function filterBySearchTerm(searchTerm) {
    return dispatch => {
        dispatch({ type: FILTER_TERM, searchTerm })
    };
}


export const FILTER_NAT = 'FILTER_NAT';

export function filterByNat(nat) {
    return dispatch => {
        dispatch({ type: FILTER_NAT, nat })
    };
}


export const FILTER_GENDER = 'FILTER_GENDER';

export function filterByGender(gender) {
    return dispatch => {
        dispatch({ type: FILTER_GENDER, gender })
    };
}

export const RESET_STATE = 'RESET_STATE';

export function resetState() {
    return dispatch => {
        dispatch({ type: RESET_STATE })
    };
}

export const RESET_NAT = 'RESET_NAT';

export function resetNat() {
    return dispatch => {
        dispatch({ type: RESET_NAT })
    };
}

export const RESET_GENDER = 'RESET_GENDER';

export function resetGender() {
    return dispatch => {
        dispatch({ type: RESET_GENDER })
    };
}

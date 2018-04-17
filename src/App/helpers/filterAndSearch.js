export const filterAndSearch = (data, searchTerm, nat, gender) => {
    let returnedList = data;

    if (searchTerm) {
        returnedList = data.filter((user) => {
            let firstNameTerm = searchTerm.split(" ")[0];
            let lastNameTerm = searchTerm.split(" ")[1];
            let isFirstName = firstNameTerm && user.name.first.toLowerCase().indexOf(firstNameTerm.toLowerCase()) > -1;
            let isLastName = lastNameTerm && user.name.last.toLowerCase().indexOf(lastNameTerm.toLowerCase()) > -1;
            return (isFirstName || isLastName);
        });
    }

    if (nat) {
        returnedList = returnedList.filter((user) => {
            return user.nat.toLowerCase() === nat.toLowerCase();
        });
    }

    if (gender) {
        returnedList = returnedList.filter((user) => {
            return user.gender.toLowerCase() === gender.toLowerCase();
        });
    }

    return returnedList;
};
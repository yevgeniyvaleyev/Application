const searchFilter = (user, searchTerm) => `${user.name.first} ${user.name.last}`.includes(searchTerm);
const natFilter = (user, nat) => user.nat.toLowerCase() === nat.toLowerCase();
const genderFilter = (user, gender) => user.gender.toLowerCase() === gender.toLowerCase();

export const filterAndSearch = (data, searchTerm, nat, gender) => {
    return data
        .filter(user => (searchTerm ? searchFilter(user, searchTerm) : true))
        .filter(user => (nat ? natFilter(user, nat) : true))
        .filter(user => (gender ? genderFilter(user, gender) : true));
};

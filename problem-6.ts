interface Profile {
    name : string;
    age : number;
    email : string;
}

const updateProfile = (obj : Profile, update : Partial<Profile> )  => {
    return {...obj, ...update};
}

const myProfile : Profile = {
    name : 'Alice',
    age : 25,
    email : 'alice@example.com'
}

const result = updateProfile(myProfile, {age : 26});
console.log(result);
const getUser = () => {
    return Promise.resolve("User List Fetched");
};

const getUserName = (userId) => {
    return Promise.resolve("User Detail Fetched");
};

const login = () => {
    return Promise.resolve("Login Successful");
};

login().then((response) => {
    console.log("response:", response);
    getUser().then((response) => {
        console.log("response:", response);
        getUserName().then((response) => {
            console.log("response:", response);
        });
    });
});


login()
    .then((response) => {
        console.log("response:", response);
        return getUser();
    })
    .then((response) => {
        console.log("response:", response);
        return getUserName();
    })
    .then((res) => {
        console.log("response:", res);
    });

    Promise.resolve(10)
    .then((x) => x + 10)
    .then((x) => x + 5)
    .then(console.log);
    
    
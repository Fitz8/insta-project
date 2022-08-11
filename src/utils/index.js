export const signUp = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/user", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "username": username,
            "email": email,
            "password": password
        })
    });
    const data = await response.json();
    setter(data.savedUser.username);
    } catch(error) {
        console.log(error);
    }
}

export const loginCheck = async (username, password, setUser) => {
    try {
        const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    });
    const data = await response.json();
    setUser(data.user);
    console.log(data);
    } catch(error) {
        console.log(error);
    }
}

export const deleteAccount = async (username, setter) => {
    try {
        const response = await fetch("http://localhost:5001/user", {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "username": username
        })
    });
    const data = await response.json();
    setter("");
    console.log(data);
    } catch(error) {
        console.log(error);
    }
}

export const updateEmail = async (username, email) => {
    try {
        const response = await fetch("http://localhost:5001/user", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "username": username,
            "newEmail": email
        })
    });
    const data = await response.json();
    console.log(data);
    } catch(error) {
        console.log(error);
    }
}

export const getAllUsers = async (setter, hide) => {
    try {
        const response = await fetch("http://localhost:5001/user", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });
    const data = await response.json();
    setter(data);

    console.log(data);
    } catch(error) {
        console.log(error);
    }
}

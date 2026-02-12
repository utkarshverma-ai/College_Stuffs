const fetchData = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Data Fetched Successfully!");
        // console.log(`"🚀Data Fetched Successfully!"`);

    } else {
        console.log(`"🚀Data not Fetched"`);
        reject("No Data Found!");
    }
});

fetchData
    .then((data) => {
        console.log("🚀Data:", data);
    })
    .catch((error) => {
        console.log("🚀Error:", error);
    });




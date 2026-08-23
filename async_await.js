// async function fenil() {
//         return {
//             id: 1,
//             name: "Fenil",
//             email: "fenilbhatt2020@gmail.com"
//         };
//     }
//     const bhatt = await fenil();
//     console.log(bhatt);
//     // async function displayFenil() {
//     //    const bhatt = await fenil();
//     //    console.log(bhatt);
//     // }

// async function waitTwoSeconds() {
//     const fenil = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise resolved after 2 seconds")
//         }, 2000);
//     })
//     return fenil;
// }
// const bhatt = await waitTwoSeconds();
// console.log(bhatt);
// async function displaySeconds() {
//     const bhatt = await waitTwoSeconds();
//     console.log(bhatt);
// }
// displaySeconds();
// function fenil() {
//     return new Promise((ressolve, reject) => {
//         reject("Something went wrong");
//     })
// }
// async function fenil1() {
//     try {
//         const result = await fenil();
//         console.log(result);
//     } catch (err) {
//         console.log("Error", err);
//     }

// }
// fenil1();
// function fenil1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([1, "Fenil", "Bhatt"]);
//         }, 4000)
//     })
// }
// function fenil2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject([2, "Amit", "Bhatt"]);
//         }, 3000)
//     })
// }
// async function bhatt() {
//     try {
//         const [abc, xyz] = await Promise.any([fenil1(), fenil2()]);
//         console.log(abc);
//         console.log(xyz);
//     } catch (error) {
//         console.log("Something Error", error);
//     }
// }
// bhatt();


// function bhatt1() {
//     return Promise.resolve("Fenil Bhatt");
// }
// function bhatt2() {
//     return Promise.reject("Amit Bhatt");
// }
// async function bhatt3() {
//     try {
//         const [abc, xyz] = await Promise.all([bhatt1(), bhatt2()]);
//         console.log(abc);
//         console.log(xyz);
//     } catch (err) {
//         console.log("Something error", err);
//     }

// }
// bhatt3();





// const PromiseOne = Promise.resolve("Fenil Bhatt");
// const PromiseTwo = Promise.reject("Amit Bhatt");

// Promise.all([PromiseOne, PromiseTwo])
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("Something Error", err);
//     })


// Task - 6 

// function fenil1() {
//     return new Promise((resolve, reject) => {
//         resolve("Fenil 1 reslove");
//     })
// }
// function fenil2() {
//     return new Promise((resolve, reject) => {
//         reject("Fenil 2 reject");
//     })
// }

// async function bhatt1() {
//     try {
//         const [abc, xyz] = await Promise.allSettled([fenil1(), fenil2()]);
//         console.log(abc);
//         console.log(xyz);
//     } catch (error) {
//         console.log("Something Error", error);
//     }
// }
// bhatt1();

async function fenil1() {
    try {
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) throw new Error("Response Not Found")
        console.log(response);
        const data = await response.json();

        const prodis = document.getElementById("productdisplay");
        data.products.forEach((showalldata) => {
            const newdiv = document.createElement("newdiv");
            newdiv.innerHTML =
                `<div class="card">
                        <a href="http://127.0.0.1:5500/Register/Fenil_Promise/bhatt2.html?id=${showalldata.id}">
                            <img src="${showalldata.images[0]}">
                            <p>${showalldata.title}</p>
                        </a>
                    </div>
                `
            prodis.appendChild(newdiv);
        });

    } catch (err) {
        console.log("Something Error", err);
    }
}
fenil1();


const movies=[
    {
        Name: "Manikarnika:The Queen of Jhansi",
        genre: "History",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/c4a1854988c0bd4d03259b13697b1f00bcd48e6d47b9cae01008924a4d2be1ef._UR1920,1080_SX712_FMwebp_.jpg",
        key: "1",
        year: "2019",
        trailer:"https://youtu.be/tKmkMVaNu9g",
        Language :"Hindi",
        rating: "6.4"
    },

    {
        Name: "KGF",
        genre: "Action",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/0ffc8aaff9c98549641b706035981be3f257d91f5e4519f8788b2fb7490ce74e._UR1920,1080_SX712_FMwebp_.jpg",
        key: "2",
        year: "2022",
        Language :"Hindi",
        rating: "5"
    },

    {
        Name: "Padmavat",
        genre: "History",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/cf589afbbb89d82d2b729ce0e260ac32b5ad03cb19020ff70d8ed1c3eceb9339._UR1920,1080_SX712_FMwebp_.jpg",
        key: "3",
        year: "2018",
        Language :"Hindi",
        rating: "6"
    },

    {
        Name: "Samrat Prithviraj",
        genre: "History",
        imgURL : "data:image/jpeg;base64,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",
        key: "4",
        year: "2022",
        Language :"Hindi",
        rating: "4"
    },

    {
        Name: "Tumbbaad",
        genre: "Mystery",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/0c32838a4485199e6077e60fee20a18fc1331b7a740e361199ee16e9e89dc3f6._UR1920,1080_SX356_FMjpg_.jpg", 
        key: "5",
        year: "2018",
        Language :"Hindi",
        rating: "8.5"
    },

    {
        Name: "Pushpa:The Rise",
        genre: "Hdrama",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/844421138928023075289343bd51861453acdc82a415968af5b434b1065d642e._UR1920,1080_SX356_FMjpg_.jpg" ,
        key: "6",
        year: "2022",
        Language :"Tamil",
        rating: "7.4"
    },

    {
        Name: "The Nun",
        genre: "Horror",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/8b314888d0137313a0adf64ae8cbd425701795c5d24e652f1fdb599f71075c33._UR1920,1080_SX356_FMjpg_.jpg",
        key: "7",
        year: "2017",
        Language :"english",
        rating: "5.5"
    },

    {
        Name: "Annabelle",
        genre: "Horror",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/ca937736d42a41a94247a38c3417adfd32c8a5519d60367dbb61068e4e65dc4d._UR1920,1080_SX356_FMjpg_.jpg",
        key: "8",
        year: "2019",
        Language :"english",
        rating: "6.1"
    },

    {
        Name: "2.0",
        genre: "Sci-fic",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/3a9c05c62f552a18dead066c8ec3b774f884a69166d4f05fee79bd3b6d2dfc4d._UR1920,1080_SX356_FMjpg_.jpg",
        key: "9",
        year: "2018",
        Language :"hindi",
        rating: "3.2"
    },

    {
        Name: "Godzilla",
        genre: "Sci-fic",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/567b86d24802e4f80cded9a77616d697704e8f6ac7abe5004be0dae98e2f99ff._UR1920,1080_SX356_FMjpg_.jpg",
        key: "10",
        year: "2020",
        Language :"english",
        rating: "6.6"
    },

    {
        Name: "superman: The Legend",
        genre: "Sci-fic",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/b6efe50f19e1fc52763ec470f367d8d00e50ae489ae2c2e671f9eb00e7180ace._UR1920,1080_SX356_FMjpg_.jpg",
        key: "11",
        year: "2021",
        Language :"english",
        rating: "5.9"
    },

    {
        Name: "Kung Fu Panda",
        genre: "animated",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/964beea7190efaeaf405b5cf4a3dedda7a294205cfe7817757d8689a4a704da1._UR1920,1080_SX356_FMjpg_.jpg",
        key: "12",
        year: "2016",
        Language :"english",
        rating: "5.1"
    },

    {
        Name: "Stuart Little 2",
        genre: "animated",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/5ae7eb9da6c0eb1d8e81b5c1f0043cee5b28f6e3a4ea8609f1fd2051436d95a2._UR1920,1080_SX356_FMjpg_.jpg",
        key: "13",
        year: "2015",
        Language :"english",
        rating: "2.3"
    },

    {
        Name: "Jai-Bhim",
        genre: "drama",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/b65ffce505f1589f9e23e7147cb548e303a4f3adc8b9d65e3fa17805b1ca2350._UR1920,1080_SX712_FMwebp_.jpg",
        key: "14",
        year: "2021",
        Language :"Tamil",
        rating: "8.8"
    },

    {
        Name: "Runway-34",
        genre: "drama",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/b15d7da4c9039a532da0a1c0d988f95eb37c113c679fecf187943bf5c1cb4662._UR1920,1080_SX712_FMwebp_.jpg",
        key: "15",
        year: "2022",
        Language :"hindi",
        rating: "4.4"
    },

    {
        Name: "Bheem and Krishna",
        genre: "animated",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/2f1456411cb6e288f993c937029fb43639d984f663418a40994d5e80d5737858._UR1920,1080_SX712_FMwebp_.jpg",
        key: "16",
        year: "2022",
        Language :"hindi",
        rating: "4.3"
    },

    {
        Name: "Lucy",
        genre: "Sci-fic",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/0898edfe42fa1ca8f05b8d9067f543c774df33bb12a878b05d4f0ef1e591f1c6._UR1920,1080_SX712_FMwebp_.jpg",
        key: "17",
        year: "2022",
        Language :"english",
        rating: "7.4"
    },

    {
        Name: "Tiger Zinda Hai",
        genre: "Action",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/4e7fb286061c0fcbe9b3c61c3cc709ec862170a6cbd2f210f51e09aadff9fb3a._UR1920,1080_SX356_FMjpg_.jpg" ,
        key: "18",
        year: "2022",
        Language :"hindi",
        rating: "6.4"
    },

    {
        Name: "Rocketry",
        genre: "science",
        imgURL :"https://m.media-amazon.com/images/S/pv-target-images/f110a91729f8291b56577f75c37604f126e10b298fbdc69853a3449843244b4c._UR1920,1080_SX356_FMjpg_.jpg",
        key: "19",
        year: "2022",
        Language :"hindi",
        rating: "5.4"
    },

    {
        Name: "conjuring 2",
        genre: "Horror",
        imgURL :"https://m.media-amazon.com/images/S/pv-target-images/f0431505d9327cc5c53635d793c3600531a049c8a17c59267010773493361018._UR1920,1080_SX356_FMjpg_.jpg",
        key: "20",
        year: "2022",
        Language :"english",
        rating: "8"
    },

    {
        Name: "Mirzapur",
        genre: "Action",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/2ad1870c721abfd7be37b6b610c03f30f737416662b3723c9bd71dc044743d66._UR1920,1080_UX400_UY225_.jpg",
        key: "21",
        year: "2022",
        Language :"hindi",
        rating: "7.4"
    },
    {
        Name: "Family-man",
        genre: "Action",
        imgURL : "https://m.media-amazon.com/images/S/pv-target-images/f447f7b124e6c785d64c0772f46841159b8f58ab9fdf3a6489bd7fbdf2c37a51._UR1920,1080_UX400_UY225_.jpg",
        key: "22",
        year: "2022",
        Language :"hindi",
        rating: "7.5"
    },
];

export default movies;
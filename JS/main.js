const {createApp}= Vue;

createApp({
    data(){
        return{
            myName: "Andrea",
            contacts:[
                {
                    name: "Michele",
                    avatar:'./img/avatar_1.jpg',
                    visible:true,
                    messages:[
                        {
                            date: "10/10/2024 14:00",
                            text:"ciao",
                            status:"sent",

                        },
                        {
                            date: "10/10/2024 14:00",
                            text:"ciao",
                            status:"received",

                        }
                    ]
                },
                {
                    name: "Fabio",
                    avatar:'./img/avatar_2.jpg',
                    visible:true,
                    messages:[
                        {
                            date: "10/10/2024 14:00",
                            text:"ciao",
                            status:"sent",

                        },
                        {
                            date: "10/10/2024 14:00",
                            text:"ciao",
                            status:"received",

                        }
                    ]
                },
                {
                    name: "Samuele",
                    avatar:'./img/avatar_3.jpg',
                    visible:true,
                    messages:[
                        {
                            date: "10/10/2024 14:00",
                            text:"ciao",
                            status:"sent",

                        },
                        {
                            date: "10/10/2024 14:00",
                            text:"ciao",
                            status:"received",

                        }
                    ]
                },
                {
                    name: "Alessandro",
                    avatar:'./img/avatar_4.jpg',
                    visible:true,
                    messages:[
                        {
                            date: "10/10/2024 14:00",
                            text:"ciao",
                            status:"sent",

                        },
                        {
                            date: "10/10/2024 14:00",
                            text:"ciao",
                            status:"received",

                        }
                    ]
                },
            ]
        }
    }
}).mount("#app");
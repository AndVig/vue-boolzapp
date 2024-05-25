const {createApp}= Vue;

createApp({
    data(){
        return{
            myName: "Andrea",
            contactIndex:0,
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
                            text:"questa",
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
                            text:"è",
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
                            text:"una",
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
                    name: "Marianna",
                    avatar:'./img/avatar_5.jpg',
                    visible:true,
                    messages:[
                        {
                            date: "10/10/2024 14:00",
                            text:"prova",
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
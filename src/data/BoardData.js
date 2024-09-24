import React from 'react'

const BoardData = [
    {
        id:"Board1",
        title:"To Do",
        cards:[
            {
                id: "card1",
                title:"Card 1",  
                tasks:[],
                labels:[
                    {
                        text:"Frontend",
                        color:"green"
                    },
                    {
                        text: "React",
                        color:"red"
                    }
                ],
                description:"card 1 description which needs to complete ASAP",
                date:""
            },
            {
                id:"card2",
                title:"Card 2",  
                tasks:[],
                labels:[
                    {
                        text:"Nextjs",
                        color:"green"
                    }
                ],
                description:"card 2 description which needs to complete ASAP",
                date:"30/06"
            },
            {
                id:"card4",
                title:"Card 4",  
                tasks:[],
                labels:[
                    {
                        text:"Java",
                        color:"green"
                    },
                    {
                        text: "Backend",
                        color:"blue"
                    }
                ],
                description:"card 4 description which needs to complete ASAP",
                date:""
            }
        ]
    },
    {
        id:"board2",
        title:"In Progress",
        cards:[
            {
                id:"card3",
                title:"Card 3",  
                tasks:[],
                labels:[
                    {
                        text:"Kanban board",
                        color:"gray"
                    },
                    {
                        text: "React",
                        color:"red"
                    }
                ],
                description:"card 3 description which needs to complete ASAP",
                date:""
            }
        ]
    },
    {
        id:"board3",
        title:"In Review",
        cards:[
            {
                id:"card5",
                title:"Card 5",  
                tasks:[],
                labels:[
                    {
                        text:"Kanban board part 1",
                        color:"gray"
                    },
                    {
                        text: "Design",
                        color:"blue"
                    }
                ],
                description:"card 5 description which needs to complete ASAP",
                date:""
            }
        ]
    }
]

export default BoardData

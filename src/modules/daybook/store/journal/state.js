export default () => ({
    isLoading: true,
    entries: [
        {
           id: new Date().getTime(),
           date: new Date().toDateString(),
           text:"Aliquip in exercitation reprehenderit Lorem minim commodo do. Cillum ea ullamco magna sit occaecat occaecat irure aliquip ipsum cillum occaecat in. ",
           picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text:"Magna incididunt enim reprehenderit cillum et proident velit do laboris qui occaecat anim culpa pariatur. Fugiat irure do tempor est irure occaecat.",
            picture: null,
         },
         {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text:"Proident esse irure nisi minim cillum do ipsum. Ullamco dolor sint in Lorem quis mollit ipsum cillum duis sit in pariatur ipsum eu. Enim occaecat cupidatat.",
            picture: null,
         },
    ]
})
const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR',{weekday: 'long'}).format(today);
}


export const Person = () =>{
        const name:string = 'Elon Musk';
        const avatar:string ='https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg';
        const today:Date = new Date;
        const teste:number = 5
        return (
        <>
            <h1 >{name} - {getWeekday(today)}</h1>
            <img src={avatar} alt={name} />
        </>
        

    )
};
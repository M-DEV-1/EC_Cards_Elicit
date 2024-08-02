import ExecCard from './ExecCard.jsx'
import data from './data.js'

function ExecPage(){
    const cards = data.map(item => {
        return (
            <ExecCard 
                key={item.id}
                name={item.name}
                title={item.title}
                github={item.github}
                linkedin={item.linkedin}
            />
        )
    })        
    return(
        <>
        <div className='p-3 mt-5'>
            <p className='text-center font-bold text-5xl hover:text-red-400 hover:scale-110 hover: ease-linear duration-300'>EXECUTIVE COMMITTEE</p>
        </div>
            {cards}
        </>
        

    )
}

export default ExecPage
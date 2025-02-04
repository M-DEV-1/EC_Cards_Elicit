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
            <p className='text-center font-bold text-5xl hover:text-red-400 hover:scale-110 hover: ease-linear duration-200 hover'>EXECUTIVE COMMITTEE</p>
        </div>
        <div className='flex flex-row flex-wrap justify-center'>
            {cards}
        </div>
            
        </>
        

    )
}

export default ExecPage
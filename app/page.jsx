import Inicio from '@/components/Inicio'
import Acerca from '@/components/Acercade'

function Home(params) {
    return(
        <div className="mx-auto">
            <main className="flex flex-col gap-10">
                <Inicio/>
                <Acerca/>
                
            </main>
        </div>
    )
    
}

export default Home
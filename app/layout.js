import Navegacion from '@/components/Navegacion'
import './globals.css'

export const metadata = {
  title: 'Acompañamiento Emocional',
  description: 'Sitio creado para brindar apoyo emocional a los estudiantes de la BUAP a traves de las redes sociales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navegacion />
        {children}
      </body>
    </html>
  )
}

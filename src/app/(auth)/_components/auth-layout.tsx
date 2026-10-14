import DolarIcon from '../../../assets/dolar-icon.png'
import Image from 'next/image'

interface AuthLayoutProps {
    title: string
    description: string
    children: React.ReactNode
    footerText: string
    footerLinkText: string
    footerHref: string
}


export const AuthLayout = ({
    children,
    title,
    description,
    footerText,
    footerLinkText,
    footerHref
}: AuthLayoutProps) =>{
    return (
        <section className="h-screen flex items-center justify-center p-10">
            <div className="bg-[#181818] w-full max-w-md p-8 rounded-2xl">
                <div className="flex flex-col items-center">
                    <div className="bg-[#9333EA] h-16 w-16 flex items-center justify-center rounded-2xl">
                        <Image
                        src={DolarIcon} alt='Ícone da página de autenticação' />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
                    <p className='text-[#9f9fa9] text-sm'>{description}</p>
                </div>
            </div>
        </section>
    )
}
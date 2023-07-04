import loading_err from '@/assets/loading_err.png';

export default function Loading () {
    return(
        <main className="bg-BASIC_BLACK w-screen h-screen
         text-POINT_COLOR text-[180px] flex flex-col justify-center items-center">
            <span className="absolute transform">
                <img src={loading_err} alt="졸라맨 404" className="w-10 h-10 translate-x-1"/>
            </span>
            404
        </main>
    )
}

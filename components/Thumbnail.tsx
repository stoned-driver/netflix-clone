import {Movie} from "../typings";
import Image from "next/image";
import {useRecoilState} from "recoil";
import {modalState, movieState} from "../atoms/modalAtom";

interface Props {
    movie: Movie
    // movie: Movie | DocumentData TODO: when using firebase
}

const Thumbnail = ({movie}: Props) => {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)


    return (
        <div className="relative h-28 min-w-[100px] cursor-pointer transition duration-200
        ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
             onClick={() => {
                 setShowModal(true)
                 setCurrentMovie(movie)
             }}>
            <Image
                src={`https://image.tmdb.org/t/p/w500${
                    movie.backdrop_path || movie.poster_path
                }`}
                className="rounded-sm object-cover md:rounded"
                layout="fill"
                alt={movie.title}
            />
        </div>
    )
}

export default Thumbnail;

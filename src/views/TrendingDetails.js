import { useState } from 'react'
import Cards from '../components/Cards'
import useFetch from '../hooks/useFetch'
import { URL_TRENDING_DETAILS } from '../utils/variables'
import { FlexCenter, Title, Div, StyledLink } from '../styles/Commons'
import CustomPagination from '../components/CustomPagination';
import Loading from '../components/Loading'


const TrendingDetails = () => {

    const [pages, setPages] = useState(1)
    const [ movie, numOfPages, loading] = useFetch(URL_TRENDING_DETAILS + `${pages}`)

    return (
        <Div>
            { loading ?
                <Loading /> :
                <>
                    <Title>TENDENCIA</Title>
                    <FlexCenter>
                        {movie?.map((movie) => (
                            <StyledLink to={`/MovieDetails/${movie.id}`} key={movie.id}>
                                <Cards
                                    title={movie.title}
                                    poster_path={movie.poster_path}
                                    key={movie.id}
                                    id={movie.id}
                                />
                            </StyledLink>
                        ))}
                    </FlexCenter>
                    { numOfPages > 1 && <CustomPagination setPages={setPages} numOfPages={numOfPages} />}
                </>
            }

        </Div>
    )
}

export default TrendingDetails

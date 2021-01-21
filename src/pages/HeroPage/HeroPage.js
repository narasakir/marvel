import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as MarvelLogo } from 'assets/logo/Group@1,5x.svg'
import { ReactComponent as Hearth } from 'assets/icones/heart/hearth-liked.svg'
import { ReactComponent as Book } from 'assets/icones/book/book.svg'
import { ReactComponent as Video } from 'assets/icones/video/video.svg'
import Rating from 'assets/review/review.png'
import { Search } from 'components/Search'
import { useHeroPage } from './HeroPage.hook'
import { 
    Page,
    HeroPageHeaderContainer,
    LogoContainer,
    SearchContainer,
    ContentContainer,
    Content,
    HeroName,
    HeroDescription,
    HeroDetails,
    Image,
    InfoContainer,
    Data,
    Paragraph,
    LastReleasedContainer,
    Title,
    Container
} from './HeroPage.style'
import { LastReleasedCardList } from 'components/LastReleasedCardList'
import { useSearchHero } from 'hooks/useSearchHero'

export const HeroPage = () => {
    const { heroId } = useParams()
    const { data, isFetched } = useHeroPage({ heroId })
    const { fetchData } = useSearchHero({ noEffects: true })

    return (
        <Page>
            <HeroPageHeaderContainer>
                <Link to={'/'}>
                    <LogoContainer>
                        <MarvelLogo />
                    </LogoContainer>
                </Link>
                <SearchContainer>
                    <Search secondary action={fetchData} />
                </SearchContainer>
            </HeroPageHeaderContainer>
            {
                isFetched && (
                    <>
                        <ContentContainer>
                            <Content>
                                <HeroName>{data.name} <Hearth /></HeroName>
                                <HeroDescription>
                                    {data.description ? data.description : 'Ainda não tem descrição'}
                                </HeroDescription>
                                <HeroDetails>
                                    <InfoContainer>
                                        <Data>
                                            <Paragraph>Quantidade</Paragraph>
                                            <i><Book /></i> {data.comics.available}
                                        </Data>
                                        <Data>
                                            <Paragraph>Filmes</Paragraph>
                                            <i><Video /></i> {data.stories.available}
                                        </Data>
                                    </InfoContainer>
                                    <Paragraph>Rating: <img src={Rating} alt='rating' /></Paragraph>
                                    <Paragraph>Último Quadrinho: 13 fev. 2020</Paragraph>
                                </HeroDetails>
                            </Content>
                            <Image src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
                        </ContentContainer>
                        <Container>
                            <Title>Últimos lançamentos</Title>
                            <LastReleasedContainer>
                                <LastReleasedCardList />
                            </LastReleasedContainer>
                        </Container>
                    </>
                )
            }
        </Page>
    )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as MarvelLogo } from 'assets/logo/Group@1,5x.svg'
import { ReactComponent as Hearth } from 'assets/icones/heart/hearth-liked.svg'
import { Search } from 'components/Search'
import { LastReleasedCard } from 'components/LastReleasedCard'
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

export const HeroPage = () => {
    const { heroId } = useParams()
    const { data, isFetched } = useHeroPage({ heroId })

    return (
            <Page>
                {
                    isFetched && (
                        <>
                            <HeroPageHeaderContainer>
                                <LogoContainer>
                                    <MarvelLogo />
                                </LogoContainer>
                                <SearchContainer>
                                    <Search secondary />
                                </SearchContainer>
                            </HeroPageHeaderContainer>

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
                                                <i>icon</i> {data.comics.available}
                                            </Data>
                                            <Data>
                                                <Paragraph>Filmes</Paragraph>
                                                <i>icon</i> {data.stories.available}
                                            </Data>
                                        </InfoContainer>
                                        <Paragraph>Rating: stars</Paragraph>
                                        <Paragraph>Último Quadrinho: 13 fev. 2020</Paragraph>
                                    </HeroDetails>
                                </Content>
                                <Image src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
                            </ContentContainer>

                            <Container>
                                <Title>Últimos lançamentos</Title>
                                <LastReleasedContainer>
                                    <LastReleasedCard />
                                    <LastReleasedCard />
                                    <LastReleasedCard />
                                    <LastReleasedCard />
                                    <LastReleasedCard />
                                    <LastReleasedCard />
                                    <LastReleasedCard />
                                    <LastReleasedCard />
                                    <LastReleasedCard />
                                    <LastReleasedCard />
                                    <LastReleasedCard />
                                    <LastReleasedCard />
                                </LastReleasedContainer>
                            </Container>
                        
                        </>
                    )
                }
            </Page>
    )
}

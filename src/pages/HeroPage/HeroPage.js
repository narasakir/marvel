import React from 'react'
import { ReactComponent as MarvelLogo } from 'assets/logo/Group@1,5x.svg'
import { ReactComponent as Hearth } from 'assets/icones/heart/hearth-liked.svg'
import { Search } from 'components/Search'
import { LastReleasedCard } from 'components/LastReleasedCard'
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
import { theme } from 'utils/theme'

export const HeroPage = () => {
    return (
        <Page>
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
                    <HeroName>Hulk <Hearth /></HeroName>
                    <HeroDescription>
                    lerem lorem lorem lerem lorem lorem lerem lorem lorem lerem lorem lorem lerem lorem lorem lerem lorem lorem lerem lorem lorem lerem lorem lorem lerem lorem lorem 
                    </HeroDescription>
                    <HeroDetails>
                        <InfoContainer>
                            <Data>
                                <Paragraph>Quantidade</Paragraph>
                                <i>icon</i> 3000
                            </Data>
                            <Data>
                                <Paragraph>Filmes</Paragraph>
                                <i>icon</i> 40
                            </Data>
                        </InfoContainer>
                        <Paragraph>Rating: stars</Paragraph>
                        <Paragraph>Último Quadrinho: 13 fev. 2020</Paragraph>
                    </HeroDetails>
                </Content>
                <Image src='https://dummyimage.com/700x700/000/fff'/>
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
        </Page>
    )
}

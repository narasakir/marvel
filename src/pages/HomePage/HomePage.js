import React from 'react'
import { ReactComponent as MarvelLogo } from 'assets/logo/Group@1,5x.svg'
import { ReactComponent as Hearth } from 'assets/icones/heart/hearth-liked.svg'
import { ReactComponent as Hero } from 'assets/icones/heroi/heroi.svg'

import { Search } from 'components/Search'
import { HeroCardList } from 'components/HeroCardList'

import { 
    Header, 
    HeaderTitle,
    HeaderSubtitle, 
    SearchContainer, 
    CardContainer, 
    Footer, 
    CardFiltersContainer,
    FiltersContainer,
    FilterText,
    Toggle
} from './HomePage.style'
import { useHeroRequest } from 'hooks/useHeroRequest'
import { useSearchHero } from 'hooks/useSearchHero'

export const HomePage = () => {
    const { isFetched, data } = useHeroRequest({ noEffects: false })
    const { fetchData } = useSearchHero({ noEffects: true })

    return (
        <div>
            <Header>
                <MarvelLogo />
                <HeaderTitle>Explore o Universo</HeaderTitle>
                <HeaderSubtitle>
                    Mergulhe no domínio  deslumbrante  de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!
                </HeaderSubtitle>
            </Header>
            <SearchContainer>
                <Search action={fetchData} />
            </SearchContainer>

        {
            isFetched && (
                <>
                    <CardFiltersContainer>
                        <p>Encontrado {data.count} heróis</p>
                        <FiltersContainer>
                            <FilterText>
                                <Hero /> Ordenar por nome - A/Z
                            </FilterText>

                        
                            <Toggle />

                            <FilterText>
                                <Hearth /> Somente favoritos
                            </FilterText>
                        </FiltersContainer>
                    </CardFiltersContainer>

                    <CardContainer>
                    <HeroCardList />
                    </CardContainer>
                </>
            )
        }
            <Footer />
        </div>
    )
}

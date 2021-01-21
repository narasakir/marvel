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
    FilterTextButton,
    Toggle
} from './HomePage.style'
import { useHeroRequest } from 'hooks/useHeroRequest'
import { useSearchHero } from 'hooks/useSearchHero'
import { useFilters } from 'hooks/useFilters'

export const HomePage = () => {
    const { isFetched, data } = useHeroRequest({ noEffects: false })
    const { fetchData } = useSearchHero({ noEffects: true })
    const { setOrderByName, orderByName, setShowOnlyFavorites } = useFilters()

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
            <CardFiltersContainer>
                {data && <p>Encontrado {data.count} heróis</p>}
                <FiltersContainer>
                    <FilterText>
                        <Hero /> Ordenar por nome - A/Z
                    </FilterText>

                    <Toggle active={orderByName} onClick={setOrderByName} />

                    <FilterTextButton onClick={setShowOnlyFavorites}>
                        <Hearth /> Somente favoritos
                    </FilterTextButton>
                </FiltersContainer>
            </CardFiltersContainer>

            <CardContainer>
            { isFetched && ( <HeroCardList /> ) }
            </CardContainer>
            <Footer />
        </div>
    )
}

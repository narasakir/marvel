import React from 'react'
import { ReactComponent as MarvelLogo } from 'assets/logo/Group@1,5x.svg'
import { Header, HeaderTitle, HeaderSubtitle } from './HomePage.style'

export const HomePage = () => {
    return (
        <div>
            <Header>
                <MarvelLogo />
                <HeaderTitle>Explore o Universo</HeaderTitle>
                <HeaderSubtitle>
                    Mergulhe no domínio  deslumbrante  de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!
                </HeaderSubtitle>
            </Header>
            <div>
                search
            </div>
        </div>
    )
}

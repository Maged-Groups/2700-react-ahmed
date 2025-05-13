import Company from './Company'
import Brands from './Brands'
import Features from './Features'
import FeaturesTwo from './FeaturesTwo'
import MarketPlace from './MarketPlace'
import Team from './Team'
import Prices from './Prices'
import Faq from './Faq'
import { memo } from 'react'

function HomeContent() {
    return (
        <>
            <Company />
            <Brands />
            <Features />
            <FeaturesTwo />
            <MarketPlace />
            <Team />
            <Prices />
            <Faq />
        </>
    )
}

export default memo(HomeContent)

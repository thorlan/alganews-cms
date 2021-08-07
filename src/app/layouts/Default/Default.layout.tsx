import NavBar from '../../components/NavBar/NavBar'
import * as DL from './Default.layout.styles'

import Logo from '../../components/Logo/Logo'
import SessionController from '../../components/SessionController'

interface DefaultLayoutProps {
    children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps) {

    return <DL.Wrapper>
        <DL.Header>
            <Logo />
        </DL.Header>
        <DL.Main>
            <DL.Navigation>
                <NavBar />
            </DL.Navigation>
            <DL.FeaturedContent>
                {props.children}
            </DL.FeaturedContent>
            <DL.Aside>
                <SessionController
                    name="Thiago Orlandini Carvalho"
                    description="Tentando fazer isso funcionar"
                />
            </DL.Aside>
        </DL.Main>
    </DL.Wrapper>
}

export default DefaultLayout;
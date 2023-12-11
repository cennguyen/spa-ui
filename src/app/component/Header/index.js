import { memo } from "react"
import { HeaderContainer, Wrapper } from "./styled";
import LoginHeaderComponent from "./LoginHeader";
import IconHeader from "./IconHeader";

const Header = () => {
    return (
        <Wrapper>
            <IconHeader />
            <HeaderContainer>
                <LoginHeaderComponent />
            </HeaderContainer>
        </Wrapper>
    );
}
export default memo(Header);
import { memo } from "react"
import { ButtonContainer, SearchContainer, SearchForm } from "./styled";
import { InputStyled } from "../../../../../styles/baseStyled";


const SearchLeftSideBar = () => {
    return (
        <SearchContainer>
            <SearchForm id="search-form" role="search">
                <InputStyled
                    id="q"
                    aria-label="Search contacts"
                    placeholder="Search"
                    type="search"
                    name="q"
                />
                <div
                    id="search-spinner"
                    aria-hidden
                    hidden={true}
                />
                <div
                    className="sr-only"
                    aria-live="polite"
                />
                <ButtonContainer>
                    <button type="submit">New</button>
                </ButtonContainer>
            </SearchForm>
        </SearchContainer>
    );
}

export default memo(SearchLeftSideBar);
import { memo, useState } from "react";
import { LoginHeaderContainer } from "./styled";
import { InputStyled } from "../../../styles/baseStyled";

const LoginHeader = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const validateUserNamePassword = () => {
        return;
    }
    const submitHandler = () => {
        if (validateUserNamePassword()) return;
    }

    const clearHandler = () => {
        setUserName('');
        setPassword('');
    }

    return (
        <LoginHeaderContainer>
            <label>User Name</label>
            <InputStyled type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

            <label>Password</label>
            <InputStyled type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={clearHandler}>Clear</button>
            <button onClick={submitHandler}>Sign in</button>
        </LoginHeaderContainer>
    );
}

export default memo(LoginHeader);
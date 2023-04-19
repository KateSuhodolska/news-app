import React, { FC, useState } from "react";

import * as Styled from "./Form.styled";

const AuthorizationForm: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Styled.FormContainer>
        <h2>Hi, User! :)</h2>
        <Styled.Form>
          <Styled.FormContent>
            <Styled.Label>UserName</Styled.Label>
            <Styled.Input
              type="text"
              placeholder="Username"
              value={userName}
              fullWidth={true}
              required={true}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <Styled.Label>Password</Styled.Label>
            <Styled.Input
              type="password"
              placeholder="Type your password"
              value={password}
              fullWidth={true}
              required={true}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <Styled.Button>Sign in</Styled.Button>
          </Styled.FormContent>
        </Styled.Form>
        <div className="signUp">
          <p>Don't have an account?</p>
        </div>
      </Styled.FormContainer>
    </div>
  );
};

export default AuthorizationForm;

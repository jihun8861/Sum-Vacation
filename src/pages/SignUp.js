import React, { useState } from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Container = styled.div`
  width: 1500px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const SignUpFrame = styled.div`
  width: 450px;
  height: 700px;
  margin-top: 100px;
  padding: 20px;
`;

const TitleText = styled.div`
  width: 100%;
  height: 20%;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Already = styled.div`
  margin: 0 0 14px;
  height: auto;
`;

const Left = styled.div`
  float: left;
  width: 70%;
`;

const Right = styled.div`
  width: 25%;
  float: right;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  height: 50px;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  font-size: 14px;
  border: solid 1px #dadada;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const OverlapBtn = styled.button`
  width: 100%;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  letter-spacing: -0.04em;
  border: none;
  background: #6d8cff;
  color: white;
  text-align: center;
  transition: all 0.4s;
  cursor: pointer;

      &:hover {
    background: #5377ff;
  }

  &:disabled {
    background-color: #dadada;
    color: white;
    cursor: not-allowed;
    border: none;
  }
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid transparent;
  margin-bottom: 30px;
`;

const PwBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.error ? "#f6f6f6" : "#f6f6f6")};
  border: 1px solid ${(props) => (props.error ? "#c42237" : "#f6f6f6")};
  width: 100%;
  margin-bottom: 30px;
  position: relative;
`;

const EyeIcon = styled(FaEye)`
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  right: 10px;
  top: 12px;
`;

const EyeIcon2 = styled(FaEyeSlash)`
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  right: 10px;
  top: 12px;
`;

const ErrorMessage = styled.h3`
  color: #e90000;
  font-size: 14px;
  width: 100%;
  padding-left: 5px;
  margin-bottom: 10px;
  margin-top: -20px;
`;

const SuccessMessage = styled.h3`
  color: #28a745;
  font-size: 14px;
  width: 100%;
  padding-left: 5px;
  margin-bottom: 10px;
  margin-top: -20px;
`;

const PwOkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid transparent;
  border-color: ${(props) => (props.error ? "#c42237" : "transparent")};
  margin-bottom: 30px;
`;

const SignUpBtn = styled.button`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.04em;
  background: #6d8cff;
  border: 1px solid;
  color: #fff;
  text-align: center;
  cursor: pointer;
  margin-bottom: 40px;

  &:hover {
    background: white;
    color: #6d8cff;
    border-color: #6d8cff;
  }

  &:disabled {
    background-color: #dadada;
    color: white;
    cursor: not-allowed;
    border: none;
  }
`;

const LinkStyle = {
  textDecoration: "none",
  color: "#6d8cff",
  marginLeft: "7px",
};

const SignUpContent = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [idEntered, setIdEntered] = useState(false);
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false); // 중복 확인 상태

  const [idValid, setIdValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [confirmPwValid, setConfirmPwValid] = useState(false);

  const [idError, setIdError] = useState("");
  const [idSuccess, setIdSuccess] = useState("");

  const [notAllow, setNotAllow] = useState(true);

  const [pwType, setPwType] = useState("password");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleId = (e) => {
    const newId = e.target.value;
    setId(newId);
    setIdEntered(newId.length > 0);
    setIdValid(newId.length > 0);
    setIsDuplicateChecked(false); // 아이디가 변경되면 중복 확인 상태를 초기화
    setIdError("");
    setIdSuccess("");
    updateButtonState(newId, name, pw, confirmPw);
  };

  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);
    setNameValid(newName.length > 0);
    updateButtonState(id, newName, pw, confirmPw);
  };

  const handlePw = (e) => {
    const newPw = e.target.value;
    setPw(newPw);
    setPwValid(newPw.length >= 4);
    updateButtonState(id, name, newPw, confirmPw);
  };

  const handleConfirmPw = (e) => {
    const newConfirmPw = e.target.value;
    setConfirmPw(newConfirmPw);
    setConfirmPwValid(newConfirmPw === pw);
    updateButtonState(id, name, pw, newConfirmPw);
  };

  const updateButtonState = (newId, newName, newPw, newConfirmPw) => {
    setNotAllow(
      !(
        (
          newId.length > 0 &&
          newName.length > 0 &&
          newPw.length >= 4 &&
          newPw === newConfirmPw &&
          isDuplicateChecked
        ) // 중복 확인이 완료된 상태인지 체크
      )
    );
  };

  const handleEyeClick = () => {
    setPwType(pwType === "password" ? "text" : "password");
    setShowPassword(!showPassword);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !notAllow) {
      onClickSignUpBtn();
    }
  };

  const onClickSignUpBtn = () => {
    if (!notAllow) {
      alert("회원가입에 성공했습니다.");
      axios.post(
        "https://port-0-cpbeck-hdoly2altu7slne.sel5.cloudtype.app/api/users/create",
        {
          data: {
            name: id,
            password: pw,
            nick_name: name,
          },
        }
      );
      navigate("/SignIn");
    } else {
      alert("회원가입 정보를 올바르게 입력해주세요.");
    }
  };

  const idCheck = async () => {
    try {
      const response = await axios.post(
        "https://port-0-cpbeck-hdoly2altu7slne.sel5.cloudtype.app/api/users/check_duplicate",
        {
          data: {
            id: 0,
            name: id,
            nick_name: "string",
            authorization: "string",
          },
        }
      );

      if (response.data == null) {
        setIdError("");
        setIdSuccess("사용 가능한 아이디입니다.");
        setIsDuplicateChecked(true);
        updateButtonState(id, name, pw, confirmPw);
      } else {
        setIdError("이미 사용중인 아이디입니다.");
        setIdSuccess("");
        setIsDuplicateChecked(false);
      }
    } catch (error) {
      setIdError("");
      setIdSuccess("사용 가능한 아이디입니다.");
      setIsDuplicateChecked(true);
      updateButtonState(id, name, pw, confirmPw);
    }
  };

  return (
    <Container>
      <SignUpFrame>
        <TitleText>회원가입</TitleText>
        <Already>
          <span>이미 계정이 있으신가요?</span>
          <a href="/SignIn" style={LinkStyle}>
            로그인
          </a>
        </Already>
        <Left>
          <InputBox>
            <Input
              type="text"
              placeholder="아이디를 입력해주세요"
              value={id}
              onChange={handleId}
              onKeyDown={handleKeyDown}
            />
          </InputBox>
          {idError && <ErrorMessage>{idError}</ErrorMessage>}
          {idSuccess && <SuccessMessage>{idSuccess}</SuccessMessage>}
        </Left>

        <Right>
          <OverlapBtn onClick={idCheck} disabled={!idEntered}>
            <span>중복확인</span>
          </OverlapBtn>
        </Right>

        <NameBox>
          <Input
            type="text"
            placeholder="사용자 이름을 입력해주세요"
            value={name}
            onChange={handleName}
            onKeyDown={handleKeyDown}
          />
        </NameBox>

        <PwBox>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="암호를 입력해주세요"
            value={pw}
            onChange={handlePw}
            onKeyDown={handleKeyDown}
          />
          {showPassword ? (
            <EyeIcon onClick={handleEyeClick} />
          ) : (
            <EyeIcon2 onClick={handleEyeClick} />
          )}
        </PwBox>
        {!pwValid && pw.length > 0 && (
          <ErrorMessage>비밀번호는 4자 이상이여야 합니다.</ErrorMessage>
        )}

        <PwOkBox>
          <Input
            type="password"
            placeholder="암호를 다시 한번 입력해주세요"
            value={confirmPw}
            onChange={handleConfirmPw}
            onKeyDown={handleKeyDown}
          />
        </PwOkBox>
        {!confirmPwValid && confirmPw.length > 0 && (
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        )}

        <SignUpBtn onClick={onClickSignUpBtn} disabled={notAllow}>
          <span>계정만들기</span>
        </SignUpBtn>
      </SignUpFrame>
    </Container>
  );
};

const SignUp = () => {
  return <Layout isHome={false} children={<SignUpContent />} />;
};

export default SignUp;

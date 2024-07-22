import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  width: 1500px;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MypageContent = () => {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.post(
            "https://port-0-edcustom-lxx5p8dd0617fae9.sel5.cloudtype.app/findbodybytoken",
            {
                token: token
            }
          );
          setUserInfo(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log("사용자 정보를 가져오는 중 오류 발생:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <Container>
        <p>마이페이지입니다.</p>
        <p>{userInfo.name}</p>
        <p>{userInfo.email}</p>
    </Container>
  )
 
};

const Mypage = () => {
  return <Layout isHome={false} children={<MypageContent />} />;
};

export default Mypage;

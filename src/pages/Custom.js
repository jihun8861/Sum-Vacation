import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 699px;
`;

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderLine = styled.div`
  width: 100%;
  height: 10px;
  background-color: black;
`;

const HeaderFrame = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 160px;
  height: 80%;
  background-image: url("/images/logo2.png");
  background-size: 100% 100%;
  background-position: center;
  margin-right: 10px;
`;

const BarebornText = styled.div`
  width: auto;
  height: 60%;
  border-left: solid 1px #e2e2e2;
  display: flex;
  align-items: center;
  color: #666666;
  font-weight: bold;
  padding-left: 10px;
  font-size: 20px;
`;

const RightBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 100%;
`;

const RightBox = styled.div`
  width: 200px;
  height: 60%;
  border-right: solid 1px #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

const ReturnIcon = styled(FaArrowRotateRight)`
  font-size: 18px;
  margin-right: 8px;
`;

const HeartIcon = styled(FaRegHeart)`
  font-size: 18px;
  margin-right: 8px;
`;

const PriceBtn = styled.button`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 24px;
  background-color: #6d8cff;
  border: none;
  cursor: pointer;
`;

const MainFrame = styled.div`
  background-color: #dedede;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const MainSelect = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  position: absolute;
  top: 50px;
  left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SelectText = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const ColorFrame = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorOption = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  margin: 0 10px;
  cursor: pointer;
  border-radius: 50%;
`;

const Model = () => {
  // GLTF 파일을 로드하고, 로드된 scene 객체를 반환합니다.
  const { scene } = useGLTF("/models/keyboard.glb");

  // 모델의 크기 확대
  scene.scale.set(600, 600, 600);

  // 모델의 위치 조정 x,y,z축 좌표
  scene.position.set(0, 0, 0);

  return <primitive object={scene} />;
};

const CustomContent = () => {
  const location = useLocation();
  const { text } = location.state || { text: "No selection" };

  const controlsRef = useRef();

  return (
    <Container>
      <Frame>
        <HeaderLine />

        <HeaderFrame>
          <Logo />
          <BarebornText>{text}</BarebornText>
          <RightBoxContainer>
            <RightBox>
              <ReturnIcon />
              다시 시작하기
            </RightBox>
            <RightBox>
              <HeartIcon />
              저장하기
            </RightBox>
            <PriceBtn>$96,000원</PriceBtn>
          </RightBoxContainer>
        </HeaderFrame>

        <MainFrame>
          <MainSelect>
            <SelectText>Switch</SelectText>
            <SelectText>KeyCap</SelectText>
          </MainSelect>

          <Canvas
            camera={{ position: [0, 180, 100], fov: 60 }} // fov는 시야각
            style={{ width: "100%", height: "100%" }}
          >
            <OrbitControls
              ref={controlsRef}
              target={[0, 0, 0]}  // 모델의 중심 좌표를 기준으로 OrbitControls의 타겟 설정
              enablePan={false} // 마우스 오른쪽 버튼을 클릭하여 움직임
              enableZoom={true} //줌 인 줌 아웃 여부
              zoomSpeed={0.15} // 줌 스피드
              minDistance={80} // 더 가까이 줌인할 수 있게 설정합니다.
              maxDistance={120} // 줌 아웃할 수 있는 최대 거리를 설정합니다.
              enableRotate={true} // 카메라 회전 기능 활성화 여부
              rotateSpeed={0.4} // 카메라 회전 속도
              minPolarAngle={Math.PI / 4} // 카메라가 아래로 회전할 수 있는 각도 제한 (45도)
              maxPolarAngle={Math.PI / 2} // 카메라가 위로 회전할 수 있는 각도 제한 (90도)
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Model />
          </Canvas>
        </MainFrame>
      </Frame>
    </Container>
  );
};

const Custom = () => {
  return (
    <Layout isHome={false} hideFooter={true} children={<CustomContent />} />
  );
};

export default Custom;

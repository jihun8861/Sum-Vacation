import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/three";

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
  background-color: #f1f2ed;
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
  left: 30px;
  border: solid 1px #e6e5e1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
`;

const SelectText = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  z-index: 20;
`;

const Model = ({ showSwitch, showKeyCap }) => {
  const { scene: bareboneScene } = useGLTF("/models/barebone.glb");
  const { scene: switchScene } = useGLTF("/models/switch.glb");
  const { scene: keycapScene } = useGLTF("/models/keycaps.glb");

  const groupRef = useRef();

  bareboneScene.scale.set(350, 350, 350);
  switchScene.scale.set(350, 350, 350);
  keycapScene.scale.set(350, 350, 350);

  bareboneScene.position.set(-40, 0, 0);
  switchScene.position.set(-40, 0, 0);
  keycapScene.position.set(-40, 0, 0);

  const switchSpring = useSpring({
    position: showSwitch ? [-40, 0, 0] : [-40, 50, 0],
    config: { mass: 0.5, tension: 40, friction: 12 }
  });

  const keycapSpring = useSpring({
    position: showKeyCap ? [-40, 0, 0] : [-40, 50, 0],
    config: { mass: 0.5, tension: 40, friction: 12 }
  });

  return (
    <group ref={groupRef} position={[-10, 0, 0]}>
      <primitive object={bareboneScene} />
      {showSwitch && (
        <animated.primitive object={switchScene} position={switchSpring.position} />
      )}
      {showKeyCap && (
        <animated.primitive object={keycapScene} position={keycapSpring.position} />
      )}
    </group>
  );
};


const CustomContent = () => {
  const location = useLocation();
  const { text } = location.state || { text: "No selection" };

  const [showSwitch, setShowSwitch] = useState(false);
  const [showKeyCap, setShowKeyCap] = useState(false);
  const controlsRef = useRef();

  const handleSwitchClick = () => {
    setShowSwitch(!showSwitch);
    if (!showSwitch) {
      setShowKeyCap(false);
    }
  };

  const handleKeyCapClick = () => {
    if (showSwitch) {
      setShowKeyCap(!showKeyCap);
    } else {
      alert("먼저 스위치를 선택해주세요!");
    }
  };

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
            <SelectText onClick={handleSwitchClick}>Switch</SelectText>
            <SelectText onClick={handleKeyCapClick} style={{ color: showSwitch ? "black" : "#ccc" }}>
              KeyCap
            </SelectText>
          </MainSelect>

          <Canvas
            camera={{ position: [0, 180, 100], fov: 60 }}
            style={{ width: "100%", height: "100%" }}
          >
            <OrbitControls
              ref={controlsRef}
              target={[0, 0, 0]}
              enablePan={false}
              enableZoom={true}
              zoomSpeed={0.15}
              minDistance={80}
              maxDistance={120}
              enableRotate={true}
              rotateSpeed={0.4}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Model showSwitch={showSwitch} showKeyCap={showKeyCap} />
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
import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styled from 'styled-components';
import * as THREE from 'three';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { FaArrowRotateRight } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';

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
  background-image: url('/images/logo2.png');
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

const colors = [
  '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
  '#800000', '#008000', '#000080', '#808000', '#800080', '#008080',
];

const Model = ({ path, color }) => {
  const { scene } = useGLTF(path);
  const pivot = useRef(new THREE.Group());

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center); // 모델의 중심점을 원점으로 이동

    pivot.current.add(scene);
  }, [scene]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({ color: color });
      }
    });
  }, [scene, color]);

  return <primitive object={pivot.current} position={[0, -1, 0]} scale={[5, 5, 5]} />;
};

const CustomContent = () => {
  const location = useLocation();
  const { text } = location.state || { text: 'No selection' };

  const [modelColor, setModelColor] = useState('#ffffff'); // 초기 색상은 흰색

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

          <Canvas camera={{ position: [0, 10, 1.5], fov: 30 }}>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
            <Model path="/models/keycap.glb" color={modelColor} />
            <OrbitControls minDistance={1.2} maxDistance={2} zoomSpeed={0.5} />
          </Canvas>

          <ColorFrame>
            {colors.map((color) => (
              <ColorOption
                key={color}
                color={color}
                onClick={() => setModelColor(color)}
              />
            ))}
          </ColorFrame>
        </MainFrame>
      </Frame>
    </Container>
  );
};

const Custom = () => {
  return <Layout isHome={false} hideFooter={true} children={<CustomContent />} />;
};

export default Custom;

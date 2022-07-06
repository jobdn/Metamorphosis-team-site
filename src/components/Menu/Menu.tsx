import React from "react";
import { Row, Col } from "antd";

import styles from "./Menu.module.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import {earth} from '%PUBLIC_URL%/textures/earth.jpg';
import * as THREE from "three";

const StyledMenu = styled(Row)`
  height: 100%;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    justify-content: start;
    padding-left: 100px;
  }
`;

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  10
);
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(0.4, 30, 30);
const texture = new THREE.TextureLoader().load("textures/earth2.jpg");
const material = new THREE.MeshBasicMaterial({ map: texture });

const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x = 50;
mesh.rotation.z = 50;
scene.add(mesh);


const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setClearColor( 0x000000, 0); // the default
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// animation

function animation(time: any) {
  mesh.rotation.y = time / 15000 * -1;

  // render object each frame
  renderer.render(scene, camera);
}


export const Menu: React.FC = () => {
  return (
    <StyledMenu align="middle">
      <Col>
        <ul className={styles.menu}>
          <li style={{ zIndex: 4 }}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li style={{ zIndex: 3 }}>
            <Link to="/projects" className={styles.link}>
              Projects
            </Link>
          </li>
          <li style={{ zIndex: 2 }}>
            <Link to="/team" className={styles.link}>
              Our team
            </Link>
          </li>
          <li style={{ zIndex: 1 }}>
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
        </ul>
      </Col>
    </StyledMenu>
  );
};

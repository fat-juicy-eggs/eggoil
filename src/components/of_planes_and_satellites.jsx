import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import coolModel from "../assets/of_planes_and_satellites.glb";

const theModel = ({ scale, position }) => {
    const modelRef = useRef();
    const { scene, animations } = useGLTF(coolModel);
    const  { actions } = useAnimations(animations, modelRef);

    useEffect(() => {
        actions["Idle"].play();
    }, [actions]);

    return (
        <mesh ref={modelRef} position={position} scale={scale} rotation={[-0.3, 0, 3]}>
            <primitive object={scene} />
        </mesh>
    )
}

const ModelCanvas = ({ scrollContainer }) => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [scale, setScale] = useState([2, 2, 2]);
    const [position, setPosition] = useState([0.2, -0.7, 0]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = scrollContainer.current.scrollTop;
            const rotationXValue = scrollTop * -0.0006;
            const rotationYValue = scrollTop * -0.00075;
            setRotationX(rotationXValue);
            setRotationY(rotationYValue);
        };

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScale([1, 1, 1]);
                setPosition([0.2, -0.1, 0]);
            } else if (window.innerWidth < 1024) {
                setScale([1.33, 1.33, 1.33]);
                setPosition([0.2, -0.3, 0]);
            } else if (window.innerWidth < 1280) {
                setScale([1.5, 1.5, 1.5]);
                setPosition([0.2, -0.4, 0]);
            } else if (window.innerWidth < 1536) {
                setScale([1.66, 1.66, 1.66]);
                setPosition([0.2, -0.5, 0]);
            } else {
                setScale([2, 2, 2]);
                setPosition([0.2, -0.7, 0]);
            }
        };
        handleResize();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [scrollContainer]);

    return (
        <Canvas className={'w-full h-screen bg-transparent z-10'} camera={{ near: 0.1, far: 1000 }}>
            <Suspense>
                <theModel rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />
            </Suspense>
        </Canvas>
    );
};

export default ModelCanvas;

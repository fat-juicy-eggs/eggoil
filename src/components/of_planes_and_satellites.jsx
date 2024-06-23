import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import coolModel from "../assets/of_planes_and_satellites.glb";
import CanvasLoader from "./Loader";

const TheModel = ({ scale, position }) => {
    const modelRef = useRef();
    const { scene, animations } = useGLTF(coolModel);
    const { actions } = useAnimations(animations, modelRef);

    useEffect(() => {
        if (actions && actions["Idle"]) {
            actions["Idle"].play();
        } else {
            console.log("Unable to Load");
        }
    }, [actions]);

    return (
        <mesh ref={modelRef} position={position} scale={scale} rotation={[0, 0, 0]}>
            <primitive object={scene} />
        </mesh>
    );
};

const ModelCanvas = ({ scrollContainer }) => {
    console.log("ModelCanvas loaded");
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
            setScale([5, 5, 5]);
            setPosition([0.2, -0.7, 0]);
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
            <Suspense fallback={<CanvasLoader />}>
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 5, 10]} intensity={2} />
                <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                
                <TheModel rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />
            </Suspense>
        </Canvas>
    );
};

export default ModelCanvas;

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
        if (actions && actions["ArmatureAction"]) {
            actions["ArmatureAction"].play();
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
    const [scale, setScale] = useState([1, 1, 1]);
    const [position, setPosition] = useState([0, 0, 0]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = scrollContainer.current.scrollTop;
            const rotationXValue = scrollTop * -0.0006;
            const rotationYValue = scrollTop * -0.00075;
            setRotationX(rotationXValue);
            setRotationY(rotationYValue);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollContainer]);

    return (
        <Canvas className={'w-full h-full bg-transparent z-10'} camera={{ near: 0.1, far: 1000 }}>
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

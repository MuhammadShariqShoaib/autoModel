import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

const Model = ({ color }) => {
  const { scene } = useGLTF("untitled.glb"); 

  // Apply color dynamically
  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material = child.material.clone(); // Prevent affecting other instances
      child.material.color.set(color);
    }
  });

  return <primitive object={scene} scale={1} />;
};

const AutoModel = () => {
  const [selectedCar, setSelectedCar] = useState("");
  const [color, setColor] = useState("white"); // Default color (red)
  const altoColors = [
    { name: "Solid White", hex: "#FFFFFF" },
    { name: "Pearl Black", hex: "#000000" },
    { name: "Silky Silver", hex: "#C0C0C0" },
    { name: "Cerulean Blue", hex: "#2A52BE" },
    { name: "Graphite Grey", hex: "#4B4B4B" },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black">
    <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6 uppercase tracking-widest">
      3D Car Model Viewer
    </h1>

    {/* Dropdown for selecting a car model */}
    <select
      className="mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
      value={selectedCar}
      onChange={(e) => setSelectedCar(e.target.value)}
    >
      <option value="">Select a Car</option>
      <option value="Alto">Suzuki Alto</option>
    </select>

    {/* Color Selector (Only if Alto is selected) */}
    {selectedCar === "Alto" && (
      <select
        className="mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        {altoColors.map((clr) => (
          <option key={clr.hex} value={clr.hex}>
            {clr.name}
          </option>
        ))}
      </select>
    )}

    <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-xl shadow-2xl border border-gray-700 bg-white/10 backdrop-blur-lg p-4 flex items-center justify-center">
      {selectedCar === "Alto" ? (
        <Canvas
          camera={{
            position: [10, 2, 0], // Moved further back for zoom-out effect
            fov: 50,
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Center>
            <Model color={color} />
          </Center>
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.4}
            rotateSpeed={0.5}
            zoomSpeed={0.4}
            enablePan={false}
            minDistance={7}
            maxDistance={25}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI - Math.PI / 6}
          />
        </Canvas>
      ) : (
        <p className="text-gray-300 text-lg">No Model Displayed</p>
      )}
    </div>
  </div>
  );
};

export default AutoModel;

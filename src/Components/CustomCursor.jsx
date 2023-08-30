// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const CustomCursor = () => {
//   const cursor = useRef();
//   useEffect(() => {
//     let mX = 0,
//       mY = 0;
//     gsap.to({}, 0.016, {
//       repeat: -1,
//       onRepeat: () => {
//         gsap.set(cursor.current, {
//           css: {
//             left: mX,
//             top: mY,
//           },
//         });
//       },
//     });
//     window.addEventListener("mousemove", (e) => {
//       mX = e.clientX;
//       mY = e.clientY;
//     });
//   }, []);
//   return <div className="CustomCursor" ref={cursor}></div>;
// };

// export default CustomCursor;

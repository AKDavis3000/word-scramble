import React from 'react';
import '../scss/styles.scss';

// export default function Letters({ getLetterInput }) {
//   const letterArray = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//     'a',
//     'e',
//     'i',
//     'o',
//     'u',
//     'a',
//     'e',
//     'i',
//     'o',
//     'u',
//   ];
//   const sorted = letterArray.sort(() => Math.random() - 0.5);

//   const sliced = sorted.slice(0, 6);

//   return (
//     <>
//       {sliced.map((l, i) => {
//         return (
//           <p
//             className="letter_container"
//             key="i">
//             <span
//               className="letter"
//               onClick={getLetterInput}>
//               {l}
//             </span>
//           </p>
//         );
//       })}

//       {/* <div className="letter_wrapper">
//         <p className="letter_container">
//           <span className="letter">A</span>
//         </p>
//         <p className="letter_container">
//           <span className="letter">B</span>
//         </p>
//         <p className="letter_container">
//           <span className="letter">C</span>
//         </p>
//         <p className="letter_container">
//           <span className="letter">D</span>
//         </p>
//         <p className="letter_container">
//           <span className="letter">E</span>
//         </p>
//         <p className="letter_container">
//           <span className="letter">F</span>
//         </p>
//       </div> */}
//     </>
//   );
// }


// import {
//   Children,
//   type ReactNode,
// } from "react";

// interface StackingLayoutProps {
//   children: ReactNode;
//   rounded?: boolean;
// }

// export default function StackingLayout({
//   children,
//   rounded = true,
// }: StackingLayoutProps) {
//   const sections = Children.toArray(children);

//   return (
//     <main>
//       {sections.map((section, index) => (
//         <div
//           key={index}
//           className="sticky top-0 h-screen"
//           style={{
//             zIndex: index + 1,
//           }}
//         >
//           <div
//             className={`h-full ${
//               rounded ? "rounded-t-3xl" : ""
//             }`}
//           >
//             {section}
//           </div>
//         </div>
//       ))}
//     </main>
//   );
// }



import {
  Children,
  type ReactNode,
} from "react";

interface StackingLayoutProps {
  children: ReactNode;
  rounded?: boolean;
}

export default function StackingLayout({
  children,
  rounded = true,
}: StackingLayoutProps) {
  const sections = Children.toArray(children);

  return (
    <main>
      {sections.map((section, index) => (
        <div
          key={index}
          className="sticky top-0 h-screen"
          style={{
            zIndex: index + 1,
          }}
        >
          <div
            className={`h-full ${
              rounded ? "rounded-t-3xl" : ""
            }`}
          >
            {section}
          </div>
        </div>
      ))}
    </main>
  );
}

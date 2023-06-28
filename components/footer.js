import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className=" border-t border-gray-100 dark:border-gray-800">
      
      <div className=" flex items-center logo-them-container gap-1">
        <div className="mt-5 flex gap-5 w-280 flex-wrap justify-center" id="logo-container">
          <Image
            className="image"
            src="/img/logos/LOGO-CDME_01.jpg"
            alt="Centro de Desarrollo de Materiales Especiales"
            unoptimized={true}
            width="150"
            height="25"
          />
          <Image
            className="image"
            src='/img/logos/LOGO-CDME_02.jpg'
            alt="Compositos y nanocompositos poliméricos"
            unoptimized={true}
            width='150'
            height='25'
          />
          <Image
            className="image"
            src='/img/logos/LOGO-CDME-03.jpg'
            alt="Investigación e innovación en Diseño y Materiales"
            unoptimized={true}
            width='150'
            height='25'
          />
          <Image
            className="image"
            src='/img/logos/LOGO-CDME-04.jpg'
            alt="Catálisis Heterogénea"
            unoptimized={true}
            width='150'
            height='25'
          />
          <Image
            className="image"
            src='/img/logos/LOGO-CDME-05.jpg'
            alt="Nanomateriales y Bionanomateriales"
            unoptimized={true}
            width='150'
            height='25'
          />
          <Image
            className="image"
            src='/img/logos/LOGO-CDME-06.jpg'
            alt="Tribología y Análisis de Superficies en Materiales Avanzados"
            unoptimized={true}
            width='150'
            height='25'
          />
          <Image
            className="image"
            src='/img/logos/LOGO-CDME-07.jpg'
            alt="Fisicoquímica y Materiales Alternativos"
            unoptimized={true}
            width='150'
            height='25'
          />
          <Image
            className="image"
            src='/img/logos/LOGO-CDME-08.jpg'
            alt="Desarrollo Sustentable"
            unoptimized={true}
            width='150'
            height='25'
          />
          <Image
            className="image"
            src='/img/logos/LOGO-CDME-09.jpg'
            alt="Biopolímeros y Biotecnología"
            unoptimized={true}
            width='150'
            height='25'
          />
        </div>
        <ThemeSwitch/>
      </div>

      <div className=" mt-8 text-center text-sm">
        Copyright © {new Date().getFullYear()}{props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Made by{" "}
          {/*  // ** 🙏  Can I ask you a favor? 🙏 **
            // Please do not remove the below link.
           // It helps us to grow & continue our work. Thank you.
          // OR Purchase PRO version for commercial license.  */}
          <a
            href="https://web3templates.com/?ref=stablo-template"
            rel="noopener"
            target="_blank">
            Web3Templates
          </a>
        </span>
        <span>&middot;</span>
        <span>
          {" "}
          <a
            href="https://github.com/web3templates/stablo"
            rel="noopener"
            target="_blank">
            Github
          </a>
        </span>
      </div>

      {/* <Backlink /> */}
    </Container>
  );
}

// const Backlink = () => {
//   return (
//     <a
//       href="https://web3templates.com/templates/stablo-minimal-blog-website-template"
//       target="_blank"
//       rel="noopener"
//       className="dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300 fixed bottom-5 right-5 flex place-items-center space-x-2 rounded border border-gray-300 bg-white px-3 py-1 font-sans text-sm font-semibold text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
//       <svg
//         width="20"
//         height="20"
//         viewBox="0 0 30 30"
//         fill="none"
//         className="h-4 w-4"
//         xmlns="http://www.w3.org/2000/svg">
//         <rect
//           width="30"
//           height="29.5385"
//           rx="2.76923"
//           fill="#362F78"
//         />
//         <path
//           d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
//           fill="#F7FAFC"
//         />
//       </svg>

//       <span> Purchase Pro ↗</span>
//     </a>
//   );
// };

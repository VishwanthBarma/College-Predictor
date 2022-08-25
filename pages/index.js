import Head from "next/head";
import Image from "next/image";
import Header from "../components/Layout/Header";
import { MdLibraryBooks } from "react-icons/md";
import { TbChartInfographic } from "react-icons/tb";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>College Predictor</title>
        <meta
          name="description"
          content="TS-EAMCET-2022 College Predictor and Details"
        ></meta>
      </Head>
      <div className="flex items-center justify-center mt-5 space-x-3">
        <h1 className="text-center text-neutral-500">App under development.</h1>
        <a href="https://github.com/VishwanthBarma/College-Predictor">
          <BsGithub className="h-5 w-5 hover:h-7 hover:w-7 cursor-pointer text-slate-400" />
        </a>
      </div>
      <div className="flex flex-col r-h items-center mt-32 space-y-7">
        <h1 className="font-bold text-2xl my-sub-gradient-text">
          TS EAMCET 2022
        </h1>
        <Link href="/collegepredictor" passHref>
          <button className="hover:scale-105 transition ease-linear active:opacity-50">
            <div className="flex items-center justify-center flex-col space-y-2 bg-neutral-800 rounded-xl h-32 w-52">
              <h1 className="font-semibold text-lg my-gradient-text">
                College Predictor
              </h1>
              <TbChartInfographic className="h-10 w-10" />
            </div>
          </button>
        </Link>
        <Link href="/collegedetails" passHref>
          <button className="hover:scale-105 transition ease-linear active:opacity-50">
            <div className="flex items-center justify-center flex-col space-y-2 bg-neutral-800 rounded-xl h-32 w-52">
              <h1 className="font-semibold text-lg my-gradient-text">
                College Details
              </h1>
              <MdLibraryBooks className="h-10 w-10" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import Header from "../components/Layout/Header";
import { MdLibraryBooks } from "react-icons/md";
import { TbChartInfographic } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="College Predictor"></meta>
      </Head>
      <div className="flex flex-col r-h items-center justify-center space-y-7">
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

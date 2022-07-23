import React from "react";
import { auth } from "../Config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {useNavigate} from 'react-router-dom'

function Signin() {

  const nav=useNavigate();
  const googlesign = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        nav('/blog')
      }).catch((error) => console.log(error.message));
  };

  return (
    <>
      <div className="">
        <section class="mt-20">
          <div class=" items-center px-5 py-12 lg:px-20">
            <div class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-gray-800 rounded-lg md:mt-0">
              <div class="mt-8">
                <div class="mt-6">
                  <div class="relative my-4">
                    <div class="relative flex justify-center  ">
                      <span class=" text-white text-6xl ml-7 "> Welcome to Annex blog</span>
                    </div>
                  </div>
                  <div className="mt-10">
                    <div class=" items-center block w-full px-10 py-4 text-base font-medium text-center text-white ">
                      <div class="flex items-center justify-center ">
                        <span class="text-3xl font-semibold">
                          {" "}
                          Log in with Google
                        </span>
                      </div>
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        class="flex items-center justify-center w-full px-7 py-2 text-xl font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={googlesign}
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Signin;

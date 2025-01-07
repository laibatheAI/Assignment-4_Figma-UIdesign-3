import Image from "next/image";
import Frame from "../app/assests/Frame.png";
import Frame1 from "../app/assests/Frame (1).png";
import Frame2 from "../app/assests/Frame (2).png";
import Frame3 from "../app/assests/Frame (3).png";
import Frame4 from "../app/assests/Frame (4).png";
import Frame6 from "../app/assests/Frame (6).png";
import Frame7 from "../app/assests/Frame (7).png";
import clothing from "../app/assests/clothing.png";
import vector1 from "../app/assests/Vector (1).png";
import vector2 from "../app/assests/Vector (2).png";
import Vector from "../app/assests/Vector.png";
import zara from "../app/assests/zara-logo-1 1.png";
import gucci from "../app/assests/gucci-logo-1 1.png";
import prada from "../app/assests/prada-logo-1 1.png";
import ck from "../app/assests/Group.png";
import img7 from "../app/assests/image 7.png";
import img7b from "../app/assests/image 7 (1).png";
import img8 from "../app/assests/image 8.png";
import img8b from "../app/assests/image 8 (1).png";
import img9 from "../app/assests/image 9.png";
import img9b from "../app/assests/image 9 (1).png";
import img10 from "../app/assests/image 10.png";
import img10b from "../app/assests/image 10 (1).png";
import stars5 from "../app/assests/Frame 10 (2).png";
import stars from "../app/assests/stars.png";
import starsthre from "../app/assests/Frame 10 (3).png";
import stars3 from "../app/assests/stars3.png";
import frame61 from "../app/assests/Frame 61.png";
import frame62 from "../app/assests/Frame 62.png";
import frame63 from "../app/assests/Frame 63.png";
import frame64 from "../app/assests/Frame 64.png";
import frame104 from "../app/assests/Frame 10 (4).png";
import name1 from "../app/assests/Frame 31.png";
import name2 from "../app/assests/Frame 31 (1).png";
import name3 from "../app/assests/Frame 31 (2).png";
import frame5 from "../app/assests/Frame (5).png";
import social from "../app/assests/Social.png";
import frame53 from "../app/assests/Frame 53.png";


export default function HomePage() {
  return (
    <div className="lg:w-[1440px] lg:h-auto xs:w-[390px] xs:h-auto">
      <div className="relative lg:w-[1440px] lg:h-[38px] xs:w-[390px] xs:h-auto">

        {/* first div */}
        <div className="bg-black flex justify-around items-center lg:w-[1440px] lg:h-[38px] xs:w-[390px] xs:h-auto">
          <div className="font-satoshi text-white text-[14px] font-normal leading-[18.9px]">
            <p>
              Sign up and get 20% off to your first order.
              <span
                className="font-satoshi text-[14px] font-medium leading-[18.9px]
                text-left underline decoration-solid decoration-skip-ink-none"
              >
                Sign Up Now
              </span>
            </p>
          </div>
          <div className="absolute w-[20px] h-[20px] top-[9px] left-[1320px] p-[3.43px]">
            <Image src={Frame} alt="crose" width={20} height={20} />
          </div>
        </div>

        {/* Second div */}

        <div className="lg:w-[1440px] xs: w-[390px] xs: h-auto border2 border-blue-500 ">
        <div className="absolute lg:hidden xs: block xs: w-[24px] sm:h-[24px] top-[54px] left-[16px]">
          <Image src={Frame7} alt= "" width={24} height={24} className=""/>
        </div>
        <div className="absolute flex justify-around items-center lg:w-[1240px] lg:h-[48px] top-[62px] left-[100px] gap-[40px] xs: w-[129px] xs: h-[12px]">
          <div className="font-integral text-[32px] font-extrabold leading-[38.4px] text-left">
            SHOP.CO
          </div>

          {/* navber */}
          <nav className="lg:w-[321px] lg:h-[22px] gap-[24px] lg:block xs: hidden ">
            <ul className="flex justify-around items-center">
              <li className="font-satoshi font-normal text-[16px] leading-[21.6px]">
                Shop
              </li>
              <li>
                <Image src={Frame1} alt="arrow" width={16} height={16} />
              </li>
              <li className="font-satoshi font-normal text-[16px] leading-[21.6px]">
                On Sale
              </li>
              <li className="font-satoshi font-normal text-[16px] leading-[21.6px]">
                New Arrivals
              </li>
              <li className="font-satoshi font-normal text-[16px] leading-[21.6px]">
                Brands
              </li>
            </ul>
          </nav>
          <div className="bg-[#F0F0F0] lg:flex w-[577px] h-[48px] p-[12px] gap-[12px] rounded-[62px] xs: hidden  ">
            <Image src={Frame2} alt="SearchIcon" width={24} height={24} className="lg:block sm:hidden" />
            <input
              type="text"
              placeholder="Search for product"
              className="text-[#00000066] bg-[#F0F0F0] lg:block "
            />
          </div>
          <div className="flex lg:w-[62px] lg:h-[24px] gap-[14px] xs:w-[96px] xs:h-[24px] xs: ml-24">
            <Image src={Frame6} alt="SearchIcon" width={24} height={24}  className="lg:hidden sm:block"/>
            <Image src={Frame3} alt="Cartlogo" width={24} height={24} />
            <Image src={Frame4} alt="customerlogo" width={24} height={24} />
          </div>
        </div>
        </div>
       

        {/* Third div */}

        <div className="relative lg:flex lg:w-[1440px] lg:h-[663px] lg:top-[100px] bg-[#F2F0F1] top-[98px]" >
          <div className="xs: px-5 xs: pt-14">
            <div className=" lg:w-[577px] lg:h-[173px] lg:top-[237px] lg:left-[100px] lg:mx-20 lg:mt-12 lg:mb-0 top-[140px] left-[16px] ">
              <p className="text-black font-integral lg:text-[64px] font-extrabold leading-[56px] text-left text-[54px]">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </p>
            </div>
            <div className="lg:w-[545px] lg:h-[38px] lg:top-[442px] lg:left-[100px] lg:mx-20 w-[400px] h-[53px] top-[138px] left-[16px] my-3">
              <p className="text-[#00000099] font-satoshi lg:text-[15.5px] lg:leading-[20px] xs: text-[15.6px] font-normal xs: leading-5 text-left">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
            </div>

            <div className="bg-black flex justify-center lg:w-[210px] lg:h-[52px] lg:top-[507px] lg:left-[100px] lg:p-[16px_54px] gap-[12px] rounded-full lg:mx-20 hover:bg-gray-700 
                              xs: w-[358px] xs: h-[52px] xs: my-6 xs: mx-[52px] xs: ml-[75px]">
              <button className="text-white font-satoshi text-[16px] font-medium leading-[21.6px]">
                Shop Now 
              </button>
            </div>

            <div className="flex justify-evenly items-center lg:w-[596px] lg:h-[74px] top-[607px] left-[100px] gap-[32px] mx-20 my-14">
              {/* 1st */}
              <div className="lg:w-[141px] lg:h-[74px]">
                <div className="w-[107px] h-[54px] ">
                  <p className="font-satoshi text-[40px] font-bold leading-[54px] text-left">
                    200+
                  </p>

                  <div className="w-[130px] h-[20px] ">
                    <p className="font-satoshi text-left text-[#00000099] text-[13px] font-normal leading-[12px] pt-1">
                      International Brands
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-0 h-[74px] border border-solid border-[#0000001A] lg:ml-0 xs: ml-6"></div>

              {/* 2nd */}
              <div className="lg:w-[156px] lg:h-[74px] lg:ml-0 xs: ml-5">
                <div className="w-[146px] h-[54px] ">
                  <p className="font-satoshi text-[40px] font-bold leading-[54px] text-left">
                    2,000+
                  </p>
                </div>

                <div className="w-[156px] h-[20px]">
                  <p className="font-satoshi text-[#00000099] text-[13px] font-normal leading-[12px] text-left pt-1">
                    High-Quality Products
                  </p>
                </div>
              </div>
              <div className="w-0 h-[72px] border border-solid border-[#0000001A] lg:block xs: hidden "></div>
              {/* 3rd */}
              <div className="lg:w-[165px] lg:h-[74px] lg:top-0 lg:left-0 lg:relative xs: absolute xs: w-[103px] xs: h-[48px] xs: top-[520px] xs: left-[190px]">
                <div className="w-[171px] h-[54px]">
                  <p className="font-satoshi text-[40px] font-bold leading-[54px] text-left">
                    30,000+
                  </p>
                </div>

                <div className="w-[126px] h-[20px]">
                  <p className="font-satoshi text-[#00000099] text-[13px] font-normal leading-[12px] text-left pt-1">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={vector2}
              alt=""
              width={56}
              height={56}
              className="animate-pulse absolute lg:w-[56px] lg:h-[56px] lg:top-[250px] lg:left-[750px]
             xs: w-[44px] xs: h-[44px] xs: top-[755px] xs: left-[65px] "          
            />

            <Image
              src={clothing}
              alt="home title imge"
              width={1440}
              height={662}
              className="lg:w-[1440px] lg:h-[662px] lg:top-[134px] xs: mt-24"
            />
            <Image
              className="animate-pulse lg:w-[104px] lg:h-[104px] absolute lg:top-[90px] lg:left-[1255px]
               xs: w-[76px] xs: h-[76px] xs: top-[635px] xs: left-[393px]"
              src={vector1}
              alt=""
              width={104}
              height={104}
            />
          </div>
        </div>

        {/* logo black div */}

        <div className="absolute flex justify-evenly items-center bg-black lg:w-[1440px] lg:h-[122px] lg:top-[797px] xs: w-[537px] xs: h-[100px] xs: top-[1250px] xs: gap-8">
          {/* vactor-log */}
          <div className="lg:w-[166.48px] lg:h-[33.16px] lg:top-[841px] lg:left-[100px] border border-black  xs: w-[116.74px] xs: h-[23.25px] xs: top-[991.4px] xs: left-[16px] ">
            <Image
              src={Vector}
              alt="brand logo"
              width={166.48}
              height={33.16}
            />
          </div>
          {/* zara-logo */}
          <div className="lg:w-[91px] lg:h-[38px] lg:top-[839px] lg:left-[372.48px] lg:p-[0.01px_0px] xs: w-[63.81px] xs: h-[26.65px] xs: top-[990px] xs: left-[166.74px] xs: p-[0.01px 0px 0.01px 0px] xs: flex">
            <Image src={zara} alt="brand logo" width={166.48} height={33.16} />
          </div>
          {/* gucci-logo */}
          <div className="lg:w-[156px] lg:h-[36px] lg:top-[840px] lg:left-[569.48px] lg:p-[1.86px_0px] xs: w-[109.39px] xs: h-[25.24px] xs: top-[990.7px] xs: left-[264.55px] xs: p-[1.3px 0px 1.3px 0px] xs: flex">
            <Image src={gucci} alt="brand logo" width={156} height={36} />
          </div>
          {/* prada-logo */}
          <div className="lg:w-[194px] lg:h-[32px] lg:top-[842px] lg:left-[831.48px] xs: w-[127px] xs: h-[21px] xs: top-[1037px] xs: left-[48px] xs: p-[0.26px 0px 0.26px 0px] ">
            <Image src={prada} alt="brand logo" width={156} height={36} />
          </div>
          {/* ck-logo */}
          <div className="lg:w-[206.79px] lg:h-[33.35px] lg:top-[841px] xs: w-[134.84px] xs: h-[21.75px] xs: top-[1036.82px] xs: left-[206.16px]">
            <Image src={ck} alt="brand logo" width={206.79} height={33.35} />
          </div>
        </div>

        {/*body-div  */}
        {/* new Arrivals */}

        <div className="absolute flex justify-center lg:w-[403px] lg:h-[58px] lg:top-[991px] lg:left-[518px] xs: w-[269px] xs: h-[38px] xs: top-[1447px] xs: left-[150px]">
          <h1 className="font-integral lg:text-[48px] font-bold lg:leading-[57.6px] text-center xs: text-[32px] xs: leading-[38.4px]">
            NEW ARRIVALS
          </h1>
        </div>
        {/* 1st Row of shirts */}
        <div className="relative flex lg:justify-center gap-[20px] lg:w-[1440px] h-[1326px] top-[400px] lg:ml-0 xs: ml-16">
          {/* 1st Card */}
          <div className="lg:w-[296px] lg:h-[444px] lg:top-[-73px] lg:left-[-1px]">
            <Image
              className=" lg:w-[295px] lg:h-[298px] lg:top-[1104px] lg:left-[100px] rounded-[20px] xs: w-[198px] xs: h-[200.01px] xs: top-[1217px] xs: left-[16px]"
              src={img7}
              alt="shitr image"
              width={295}
              height={298}
            />

            <div className=" w-[225px] h-[27px] top-[1418px] left-[100px]">
              <p className="font-satoshi font-bold text-[15px] leading-[27px] text-left">
                T-<span>shirt </span>With Tape Details
              </p>
            </div>

            <div className="flex justify-center items-center w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px]">
              <Image src={stars} alt="reatings" width={104} height={18.49} />

              <div className="w-[33px] h-[19px]">
                <p className="font-satoshi font-normal text-sm leading-[18.9px]">
                  4.5/5
                </p>
              </div>
            </div>

            <div className=" w-[55px] h-[32px] top-[1480px] left-[100px] gap-[10px]">
              <p className="font-satoshi font-bold text-[24px] leading-[32.4px]">
                $120
              </p>
            </div>
          </div>

          {/* 2nd card */}

          <div className="w-[296px] h-[444px] top-[-73px] left-[-1px]">
            <Image
              className="lg:w-[295px] lg:h-[298px] lg:top-[1104px] lg:left-[100px] rounded-[20px] xs: w-[198px] xs: h-[200.01px] xs: top-[1217px] xs: left-[230px] xs: p-[0px 14px 0px 13px]"
              src={img8}
              alt="blackshirt"
              width={295}
              height={298}
            />
            <p className="text-black font-satoshi text-[15px] font-bold leading-[27px] text-left">
              Skinny Fit Jeans
            </p>

            <div className="flex justify-start items-center w-[150px] h-[19px] top-[1453px] left-[100] gap-[13px] ">
              <Image src={stars3} alt="reatings" width={80.2} height={18.49} />
              <p className="w-[35px] h-[19px] pb-6">3.5/5</p>
            </div>
            <div
              className="flex 
             w-[200px] h-[32px] top-[1480px] left-[415px] gap-[10px]"
            >
              <p className=" font-satoshi font-bold text-[24px] leading-[32.4px]">
                $240
              </p>
              <p className=" text-[#00000099] font-satoshi font-bold text-[24px] leading-[32.4px]">
                <del>$260</del>
              </p>
              <div className="bg-[#FF33331A] w-[58px] h-[28px] p-[6px] px-[14px] rounded-full">
                <p className="text-[#FF3333] font-satoshi font-bold text-[12px] leading-[16.2px] text-left ">
                  -20%
                </p>
              </div>
            </div>
          </div>

          {/* 3rd-card */}

          <div className="w-[296px] h-[444px] top-[-73px] left-[-1px] lg:block xs: hidden">
            <Image
              className=" w-[295px] h-[298px] top-[1104px] left-[100px] rounded-[20px]"
              src={img9}
              alt="shitr image"
              width={295}
              height={298}
            />

            <div className=" w-[225px] h-[27px] top-[1418px] left-[100px]">
              <p className="font-satoshi font-bold text-[15px] leading-[27px] text-left">
                Checkered Shirt
              </p>
            </div>

            <div className="flex justify-center items-center w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px]">
              <Image src={stars} alt="reatings" width={104} height={18.49} />

              <div className="w-[33px] h-[19px]">
                <p className="font-satoshi font-normal text-sm leading-[18.9px]">
                  4.5/5
                </p>
              </div>
            </div>

            <div className=" w-[55px] h-[32px] top-[1480px] left-[100px] gap-[10px]">
              <p className="font-satoshi font-bold text-[24px] leading-[32.4px]">
                $180
              </p>
            </div>
          </div>

          {/* 4th card */}

          <div className="w-[296px] h-[444px] top-[-73px] left-[-1px] lg:block xs: hidden" >
            <Image
              className="w-[295px] h-[298px] top-[1104px] left-[100px] rounded-[20px] "
              src={img10}
              alt="blackshirt"
              width={295}
              height={298}
            />
            <p className="text-black font-satoshi text-[15px] font-bold leading-[27px] text-left">
              Sleeve Striped T-shirt
            </p>

            <div className="flex justify-start items-center w-[150px] h-[19px] top-[1453px] left-[100] gap-[13px]">
              <Image src={stars} alt="reatings" width={80.2} height={18.49} />
              <p className="w-[35px] h-[19px] pb-6">4.5/5</p>
            </div>
            <div className="flex  w-[200px] h-[32px] top-[1480px] left-[415px] gap-[10px]">
              <p className=" font-satoshi font-bold text-[24px] leading-[32.4px]">
                $130
              </p>
              <p className=" text-[#00000099] font-satoshi font-bold text-[24px] leading-[32.4px]">
                <del>$160</del>
              </p>
              <div className="bg-[#FF33331A] w-[58px] h-[28px] p-[6px] px-[14px] rounded-full">
                <p className="text-[#FF3333] font-satoshi font-bold text-[12px] leading-[16.2px] text-left ">
                  -30%
                </p>
              </div>
            </div>
          </div>

          {/* view button */}
          <div className="absolute border lg:w-[218px] lg:h-[52px] lg:top-[450px] lg:left-[611px] lg:px-[75px] py-[16px] gap-[12px] rounded-full border-[#0000001A]
          xs: w-[358px] xs: h-[46px] xs: top-[300px] xs: left-[35px] xs: pl-36">
            <button className="font-satoshi flex justify-center items-center lg:text-[16px] font-medium lg:leading-[21.6px] xs: text-[14px] xs: leading-[18.9px]">
              View All
            </button>
          </div>

          <div className="absolute lg:top-[580px] lg:w-[1240px] h-0 border border-t border-[rgba(0,0,0,0.1)]
          xs: w-[358px] xs: top-[400px] xs: left-[35px]"></div>

          {/* Top Selling-div */}
          <div className="absolute lg:w-[346px] lg:h-[-73px] lg:top-[650px] lg:left-[546px] xs: w-[231px] xs: h-[38px] xs: top-[450px] xs: left-[90px] ">
            <h1 className="text-black font-integral lg:text-[48px] font-bold lg:leading-[57.6px] text-center xs: text-[32px] xs: leading-[38.4px]">
              TOP SELLING
            </h1>
          </div>

          {/* 2nd shirt-row */}

          <div className="absolute flex gap-[20px] top-[780px] lg:ml-20">
            {/* 1st Card */}
            <div className=" w-[296px] h-[444px] lg:top-[3px] lg:left-[-80px] xs: top-[-240px] xs: relative xs: mr-[-80px]">
              <Image
                className=" lg:w-[295px] lg:h-[298px] top-[1104px] lg:left-[100px] rounded-[20px] xs: w-[198px] xs: h-[200.01px]  xs: left-[16px] "
                src={img7b}
                alt="blackshirt"
                width={295}
                height={298}
              />
              <p className="text-black font-satoshi text-[15px] font-bold leading-[27px] text-left">
              Vertical Striped Shirt
              </p>

              <div className="flex justify-start items-center w-[150px] h-[19px] top-[1453px] left-[100] gap-[13px] ">
                <Image
                  src={stars5}
                  alt="reatings"
                  width={80.2}
                  height={18.49}
                />
                <p className="w-[35px] h-[19px] pb-6">5.0/5</p>
              </div>
              <div
                className="flex 
             w-[200px] h-[32px] top-[1480px] left-[415px] gap-[10px]"
              >
                <p className=" font-satoshi font-bold text-[24px] leading-[32.4px]">
                  $212
                </p>
                <p className=" text-[#00000099] font-satoshi font-bold text-[24px] leading-[32.4px]">
                  <del>$232</del>
                </p>
                <div className="bg-[#FF33331A] w-[58px] h-[28px] p-[6px] px-[14px] rounded-full">
                  <p className="text-[#FF3333] font-satoshi font-bold text-[12px] leading-[16.2px] text-left ">
                    -20%
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd card */}

            <div className=" lg:w-[296px] lg:h-[444px] lg:top-[3px] lg:left-[-1px] xs: top-[-240px] xs: relative">
              <Image
                className=" lg:w-[295px] lg:h-[298px] lg:top-[1104px] lg:left-[100px] rounded-[20px] xsa: w-[198px] xs: h-[200.01px] xs: left-[230px] xs: p-[0px_1px_0px_0px] "
                src={img8b}
                alt="shitr image"
                width={295}
                height={298}
              />

              <div className=" w-[225px] h-[27px] top-[1418px] left-[100px]">
                <p className="font-satoshi font-bold text-[15px] leading-[27px] text-left">
                Courage Graphic T-shirt
                </p>
              </div>

              <div className="flex justify-center items-center w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px]">
                <Image src={stars} alt="reatings" width={104} height={18.49} />

                <div className="w-[33px] h-[19px]">
                  <p className="font-satoshi font-normal text-sm leading-[18.9px]">
                    4.0/5
                  </p>
                </div>
              </div>

              <div className=" w-[55px] h-[32px] top-[1480px] left-[100px] gap-[10px]">
                <p className="font-satoshi font-bold text-[24px] leading-[32.4px]">
                  $145
                </p>
              </div>
            </div>


            {/* 3rd-card */}

            <div className="w-[296px] h-[444px] top-[-73px] left-[-1px] lg:block xs: hidden">
              <Image
                className=" w-[295px] h-[298px] top-[1104px] left-[100px] rounded-[20px]"
                src={img9b}
                alt="shitr image"
                width={295}
                height={298}
              />

              <div className=" w-[225px] h-[27px] top-[1418px] left-[100px]">
                <p className="font-satoshi font-bold text-[15px] leading-[27px] text-left">
                Loose Fit Bermuda Shorts
                </p>
              </div>

              <div className="flex justify-center items-center w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px]">
                <Image src={starsthre} alt="reatings" width={104} height={18.49} />

                <div className="w-[33px] h-[19px]">
                  <p className="font-satoshi font-normal text-sm leading-[18.9px]">
                    3.5/5
                  </p>
                </div>
              </div>

              <div className=" w-[55px] h-[32px] top-[1480px] left-[100px] gap-[10px]">
                <p className="font-satoshi font-bold text-[24px] leading-[32.4px]">
                  $80
                </p>
              </div>
            </div>

            {/* 4th card */}

            <div className="w-[296px] h-[444px] top-[-73px] left-[-1px] lg:block xs: hidden">
              <Image
                className=" w-[295px] h-[298px] top-[1104px] left-[100px] rounded-[20px]"
                src={img10b}
                alt="shitr image"
                width={295}
                height={298}
              />

              <div className=" w-[225px] h-[27px] top-[1418px] left-[100px]">
                <p className="font-satoshi font-bold text-[15px] leading-[27px] text-left">
                 Faded Skinny Jeans
                </p>
              </div>

              <div className="flex justify-center items-center w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px]">
                <Image src={stars} alt="reatings" width={104} height={18.49} />

                <div className="w-[33px] h-[19px]">
                  <p className="font-satoshi font-normal text-sm leading-[18.9px]">
                    4.5/5
                  </p>
                </div>
              </div>

              <div className=" w-[55px] h-[32px] top-[1480px] left-[100px] gap-[10px]">
                <p className="font-satoshi font-bold text-[24px] leading-[32.4px]">
                  $210
                </p>
              </div>
            </div>

            {/* view button */}
            <div className="absolute border-[rgba(0,0,0,0.1)] border lg:w-[218px] lg:h-[52px] lg:top-[450px] lg:left-[500px] lg:px-[75px] py-[16px] gap-[12px] rounded-full
             xs: w-[358px] xs: h-[46px] xs: top-[100px] xs: left-[35px] xs: pl-36">
              <button className="font-satoshi flex justify-center items-center lg:text-[16px] font-medium lg:leading-[21.6px] text-left xs: text-[14px] xs: leading-[18.9px]">
                View All
              </button>
            </div>
          </div>
        </div>

        {/* DESIGNS */}

        <div className=" bg-[#F0F0F0] absolute lg:w-[1239px] lg:h-[866px] lg:top-[2500px] lg:left-[100px] rounded-[40px]
         xs: w-[488px] xs: h-[1175px] xs: top-[2540px] xs: left-[16px]">
          {/* HEADING */}
          <div className=" absolute  lg:w-[687px] lg:h-[58px] lg:top-[70px] lg:left-[276px] xs: w-[246px] xs: h-[72px] xs: top-[40px] xs: left-[130px]">
            <h1 className="font-integral lg:text-[48px] lg:font-bold lg:leading-[57.6px] text-center xs: text-[32px] xs: leading-[36px] xs: font-extrabold">BROWSE BY DRESS STYLE</h1>
          </div>

          <div>
            {/* 1st img */}
            <Image 
            src={frame61} 
            alt="casule ware" 
            width={407} height={289}
            className="absolute lg:w-[407px] lg:h-[289px] lg:top-[192px] lg:left-[64px] gap-0 rounded-tl-[20px] xs: w-[430px] xs: h-[230px] xs: top-[140px] xs: left-[24px]"/>

            {/* 2nd img */}
            <Image 
            src={frame62} 
            alt="casule ware" 
            width={684} height={289}
            className="absolute lg:w-[684px] lg:h-[289px] lg:top-[192px] lg:left-[491px] gap-0 rounded-tl-[20px] xs: w-[430px] xs: h-[230px] xs: top-[390px] xs: left-[24px]"/>

            {/* 3rd img */}
            <Image 
            src={frame64} 
            alt="casule ware" 
            width={684} height={289}
            className="absolute lg:w-[684px] lg:h-[289px] lg:top-[501px] lg:left-[64px] gap-0 rounded-tl-[20px] xs: w-[430px] xs: h-[230px] xs: top-[640px] xs: left-[24px]"/>

            {/* 4th img */}
            <Image 
            src={frame63} 
            alt="casule ware" 
            width={407} height={289}
            className="absolute lg:w-[407px] lg:h-[289px] lg:top-[501px] lg:left-[768px] gap-0 rounded-[20px]  xs: w-[430px] xs: h-[230px] xs: top-[890px] xs: left-[24px]"/>
          </div>
        </div>


        {/* Customer Review */}
        <div className="absolute lg:w-[654px] lg:h-[58px] lg:top-[3463px] lg:left-[100px] xs: w-[286px] xs: h-[72px] xs: top-[3700px] xs: left-[16px] ">
          <h1 className="font-integral lg:text-[48px] lg:font-bold lg:leading-[57.6px] xs: text-[32px] xs: leading-[36px] text-left xs: font-extrabold xs: mt-10">
            OUR HAPPY CUSTOMERS
          </h1>
        </div>
          {/* 1st review */}
        <div className=" border border-[#F0F0F0] absolute lg:w-[400px] lg:h-[240px] lg:top-[3561px] lg:left-[100px] lg:p-[28px_32px_28px_32px] lg:gap-[342px] rounded-[20px] xs: w-[358px] xs: h-[186.19px] xs: top-[3830px] xs: left-[16px] xs: p-4 xs: mx-10 gap-[342px]">
          <div className="w-[336px] h-[161.58px] gap-0 justify-between ">
            <Image 
            src={frame104}
            alt="reatings"
            width={138.84}
            height={22.58}
            className="w-[138.84px] h-[22.58px] gap-[6.49px]"/>
            <Image 
            src={name1}
            alt="reatings"
            width={110}
            height={24}
            className="w-[110px] h-[24px] gap-[4px] "/>
            <div className="w-[336px] h-[88px] mt-2">
              <p className="font-satoshi text-[16px] font-normal leading-[22px] text-left text-[#00000099]">
                "I 'm blown away by the quality and style of the clothes I received from Shop.co. 
                From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
        </div>

        {/* 2nd review */}
        <div className="border border-[#F0F0F0] absolute w-[400px] h-[240px] top-[3561px] left-[550px] p-[28px_32px_28px_32px] gap-[342px] rounded-[20px] lg:block xs: hidden">
          <div className="w-[336px] h-[183.58px] gap-[15px] ">
            <Image 
            src={frame104}
            alt="reatings"
            width={138.84}
            height={22.58}
            className="w-[138.84px] h-[22.58px] gap-[6.49px]"/>
            <Image 
            src={name2}
            alt="reatings"
            width={110}
            height={24}
            className="w-[110px] h-[24px] gap-[4px] "/>
            <div className="w-[336px] h-[88px] mt-2">
              <p className="font-satoshi text-[16px] font-normal leading-[22px] text-left text-[#00000099]">
              "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. 
              The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
              </p>
            </div>
          </div>
        </div>

        {/* 3rd review */}
        <div className="border border-[#F0F0F0] absolute w-[400px] h-[240px] top-[3561px] left-[1000px] p-[28px_32px_28px_32px] gap-[342px] rounded-[20px] lg:block xs: hidden">
          <div className="w-[336px] h-[183.58px] gap-[15px] ">
            <Image 
            src={frame104}
            alt="reatings"
            width={138.84}
            height={22.58}
            className="w-[138.84px] h-[22.58px] gap-[6.49px]"/>
            <Image 
            src={name3}
            alt="reatings"
            width={110}
            height={24}
            className="w-[110px] h-[24px] gap-[4px] "/>
            <div className="w-[336px] h-[88px] mt-2">
              <p className="font-satoshi text-[16px] font-normal leading-[22px] text-left text-[#00000099]">
              "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. 
              The selection of clothes is not only diverse but also on-point with the latest trends.”
              </p>
            </div>
          </div>
        </div>


        {/* website footer */}

        <div className="absolute w-[1441px] h-[689px] top-[3881px] left-[-1px] ">
          <div className="lg:flex justify-between z-10 bg-black absolute lg:w-[1240px] lg:h-[180px] lg:top-[10px] lg:left-[100px] p-[36px_64px_36px_64px] gap-0 rounded-[20px] xs: w-[500px] xs: h-[293px] xs: top-[150px] xs: left-[16px] xs: flex-none">
            <div className="lg:w-[551px] lg:h-[94px] xs: w-[297px] xs: h-[105px] xs: top-[32px] xs: left-[24px] xs: mb-5">
              <h1 className="font-integral lg:text-[40px] font-extrabold lg:leading-[45px] text-white xs: text-[31px] xs: leading-[35px]">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h1>
            </div>

            <div className=" w-[349px] h-[106px] gap-[14px]">
              {/* 1 */}
              <div className="flex bg-white lg:w-[349px] lg:h-[48px] lg:p-[12px_16px_12px_16px] lg:gap-[12px] rounded-[62px] xs: w-[380px] xs: h-[42px] xs: top-[169px] xs: left-[24px] xs: p-[12px_80px] xs: gap-[12px] ">
                <Image 
                src={frame5}
                alt="mail logo"
                width={24}
                height={24}/>
                <p className="text-[#00000066] font-satoshi text-[16px] font-normal leading-[21.6px] text-left">
                Enter your email address
                </p>
              </div>
              {/* 2 */}
              <div className="bg-white lg:w-[349px] lg:h-[48px] lg:p-[12px_16px_12px_16px] lg:gap-[12px] rounded-[62px] mt-2  xs: w-[380px] xs: h-[42px] xs: top-[169px] xs: left-[24px] xs: p-[12px_16px] xs: gap-[12px] hover:bg-slate-200">
                <p className="font-satoshi text-[16px] font-medium leading-[21.6px] text-center">
                  Subscribe to Newsletter
                </p>
              </div>
            </div>
              {/* .... */}
            </div>

            {/*back div */}

            <div className="absolute z-0 bg-[#F0F0F0] lg:flex lg:w-[1441px] lg:h-[605px] lg:top-[85px] lg:left-[-1px] gap-0 opacity-1 w-[540px] h-[1100px] top-[300px] left-[-1px]">
              <div className="lg:absolute w-[1240px] h-auto lg:top-[150px] left-[100px] flex justify-between gap-0 opacity-1">
                {/* 1 */}
                <div className="lg:w-[248px] lg:h-[177px] lg:flex lg:gap-[35px]">
                  <div className=" w-[248px] h-[114px] gap-[26px]">
                    <div className="lg:w-[167px] lg:h-[23px] lg:relative lg:top-[00px] xs: absolute xs: w-[144px] xs: h-[20px] xs: top-[165px] xs: left-[50px]">
                      <h1 className="font-integral lg:text-[28px] font-extrabold lg:leading-[19px] text-left text-[28.85px] leading-[34.62px] ">
                        SHOP.CO
                      </h1>
                    <div className=" mt-5 w-[245px] h-[66px]">
                      <p className="lg:absolute text-[#00000099] font-satoshi lg:text-[13px] lg:w-[228px] font-normal lg:leading-[22px] text-left text-[18px] leading-[25px] xs: relative xs: w-[400px]">:
                      We have clothes that suits your style and which you’re proud to wear. 
                      From women to men.
                      </p>
                    </div>

                    <div className=" mt-10 w-[148px] h-[28px] gap-0">
                      <Image 
                      src={social}
                      alt=""
                      width={148}
                      height={28}/>
                    </div>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="lg:relative lg:w-[104px] lg:h-[177px] lg:top-[-40px] lg:ml-0 lg:gap-[26px] xs: absolute xs: top-[380px]  xs: p-10 xs: ml-10">
                  <div className="w-[98px] h-[18px] ">
                    <h1 className="font-satoshi font-medium leading-[18px] text-[16px] tracking-[3px] mb-0">
                    COMPANY
                    </h1>
                  </div>
                  <div className="lg:absolute mt-5  w-[104px] h-[133px]">
                    <p className=" text-[#00000099] font-satoshi text-[16px] font-normal leading-[34px] text-left">
                    About          

                    Features          

                    Works          
                  <br />
                    Career  
                    </p>
                  </div>
                </div>
                {/* 3 */}
                <div className="lg:relative lg:w-[136px] lg:h-[177px] lg:top-[-40px] lg:-left-[00px] lg:ml-0 flex lg:gap-[26px] xs: absolute xs: top-[380px] xs: left-[180px] xs: p-10 xs: ml-20">
                  <div className="w-[49px] h-[18px]">
                    <h1 className="font-satoshi text-[16px] font-medium leading-[18px] tracking-[3px] text-left">
                      HELP
                    </h1>
                  </div>

                  <div className=" absolute w-[135px] h-[133px] mt-10">
                    <p className="text-[#00000099] font-satoshi text-[15px] font-normal leading-[34px] text-left"> 
                    Customer Support

                    Delivery Details

                    Terms & Conditions
                    <br />
                    Privacy Policy
                    </p>
                  </div>
                </div>
                {/* 4 */}
                <div className="lg:relative lg:w-[149px] lg:h-[177px] lg:flex lg:gap-[26px] lg:top-[-40px] lg:ml-0 xs: absolute xs: top-[580px]  xs: p-10 xs: ml-10">
                <div className="w-[37px] h-[18px] text-left">
                  <h1 className="font-satoshi text-[16px]font-medium leading-[18px]tracking-[3px] text-left">
                    FAQ
                  </h1>
                </div>

                <div className="absolute w-[149px] h-[133px] mt-10 ">
                  <p className="text-[#00000099] font-satoshi font-normal leading-[35px] text-[15px] text-left ">
                  Account<br />

                  Manage Deliveries

                  Orders<br />

                  Payments
                  </p>
                </div>
                </div>
                {/* 5 */}
                <div className=" lg:relative lg:w-[149px] lg:h-[177px] lg:flex lg:gap-[26px]  lg:top-[-40px] lg:-left-[00px] lg:ml-0  xs: absolute xs: top-[580px] xs: left-[180px] xs: p-10 xs: ml-20">
                  <div className="w-[118px] h-[18px] ">
                    <h1 className="font-satoshi text-[16px] font-medium leading-[18px]tracking-[3px] text-left">
                    RESOURCES
                    </h1>
                  </div>

                  <div className="absolute w-[149px] h-[133px] mt-10 ">
                    <p className="text-[#00000099] font-satoshi text-[15px] font-normal leading-[35px] text-left">
                    Free eBooks

                    Development Tutorial

                    How to - Blog

                    Youtube Playlist
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute lg:w-[1240px] h-0 lg:top-[438px] lg:left-[100px] border border-solid border-[#0000001A] w-[358px] xs: top-[907px] xs: left-[80px] xs: gap-[0px]"></div>
              <div className=" absolute lg:w-[269px] lg:h-[19px] lg:top-[463px] lg:left-[100px] w-[269px] h-[19px] xs: top-[920px] xs: left-[120px]">
                <p className="font-satoshi font-normal text-[14px] leading-[18.9px] text-[#00000099] text-right">
                Shop.co © 2000-2023, All Rights Reserved
                </p>
              </div>

              <div className="absolute my-0 lg:w-[281.07px] lg:h-[30.03px] lg:top-[458px] lg:left-[1059px] lg:gap-[12px] w-[240.93px] h-[25.74px] top-[958px] left-[140px] gap-[10.29px]">
                <Image 
                src={frame53}
                alt=""
                width={281.07}
                height={30.03}
                className="mt-[-5px]"/>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

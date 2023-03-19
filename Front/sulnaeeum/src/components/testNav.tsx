import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [hover, setHover] = useState("");

  const menu: string[] = ["전통주", "지도", "랭킹", "추천", "전통주 유형검사"];
  const url: string[] = ["/list", "/map", "/rank", "recommend"];
  const menuTab = [
    ["탁주", "약주/청주", "과실주", "증류주", "기타 주류"],
    ["경기도", "강원도", "충청도", "전라도", "경상도", "제주도"],
    ["랭킹"],
    ["나만의 전통주 추천"],
    ["선물하기"],
    ["검사하기"],
  ];

  //
  return (
    <nav className="absolute">
      <ul className=" hover:border-b hover:pb-[1px] h-[50px] w-screen text-[16px] flex justify-between items-center border-b-2 bg-white">
        <li className="w-[300px] pl-[180px]">
          <Link href={"/"}>로고부분</Link>
          {hover == "On" ? <div></div> : ""}
        </li>
        <li
          onMouseEnter={() => setHover("On")}
          onMouseLeave={() => setHover("")}
          className={`${
            hover == "On" ? "z-10 h-[330px] mt-[419px]" : ""
          } flex justify-around w-[700px] mt-[130px] mb-[127px]`}
        >
          {menu.map((v, i) => {
            return (
              <Link href={url[i] + ""}>
                <div className="hover:border-b-2 hover:border-[#B58269] text-neutral-600 hover:font-preEB font-preM w-[110px] pt-[9px] h-[42px] text-center">
                  {v}
                  {hover == "On" ? (
                    <ul className="items-center text-center pt-[18px]">
                      {menuTab[i].map((val, idx) => {
                        return (
                          // 각 페이지 URL 넣어야함
                          <Link href={"/"}>
                            <li className="hover:font-preB text-neutral-500 font-preR text-[16px] mt-[17px] ">
                              {val}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            );
          })}
        </li>
        <li className="w-[300px] pl-[20px] flex">
          <button>검색</button>
          <Link href={"/user"}>
            <div className="pl-[40px]">로그인</div>
          </Link>
        </li>
      </ul>
      {hover == "On" ? (
        <div className="drop-shadow-lg absolute z-0 h-[280px] w-screen bg-white"></div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navbar;

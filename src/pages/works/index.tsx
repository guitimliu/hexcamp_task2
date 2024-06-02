// Works.jsx
import React, { useState } from 'react';
import Pagination from '../../components/Pagination';

function Works() {
  const [ showPostID, setShowPostID ] = useState<number>(0);

  const showPost = (id: number) => {
    setShowPostID(id)
    id > 0 ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }

  return (
    <>
      <div className="w-full bg-gray-50 text-center py-12 mb-10 md:mb-20">
        <div className="px-2 md:px-0 md:flex justify-center items-center relative md:w-[670px] md:h-48 mx-auto mb-12">
          <svg className="md:absolute top-0 left-0 mx-auto mb-4 md:mb-4" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.5751 47.271C33.5751 44.631 32.8851 42.417 31.5051 40.62C30.5271 39.384 29.2011 38.571 27.5241 38.184C25.8741 37.8 24.3141 37.773 22.9041 38.1C22.4241 35.25 23.2041 32.232 25.1841 29.034C27.1641 25.839 29.7291 23.433 32.8581 21.825L28.1151 15C25.7151 16.188 23.4351 17.694 21.3351 19.515C19.2051 21.336 17.3151 23.43 15.6351 25.797C13.9551 28.164 12.6951 30.837 11.8851 33.867C11.0751 36.897 10.8501 39.987 11.2371 43.167C11.7411 47.367 13.0971 50.727 15.3051 53.217C17.5101 55.74 20.2611 57 23.5491 57C26.4441 57 28.8471 56.13 30.7491 54.366C32.6331 52.638 33.5691 50.271 33.5691 47.262L33.5751 47.271ZM60.9471 47.271C60.9471 44.631 60.2571 42.417 58.8771 40.62C57.8991 39.36 56.5671 38.544 54.8961 38.169C53.2161 37.797 51.6771 37.779 50.2761 38.103C49.7961 35.283 50.5461 32.253 52.5321 29.043C54.5121 25.863 57.0711 23.463 60.2001 21.843L55.4691 15C53.0691 16.188 50.8041 17.694 48.6891 19.515C46.5397 21.363 44.6308 23.4735 43.0071 25.797C41.3391 28.167 40.0971 30.837 39.2871 33.867C38.4676 36.8952 38.2464 40.0542 38.6361 43.167C39.1341 47.367 40.4841 50.727 42.6861 53.217C44.8851 55.719 47.6271 56.973 50.9151 56.973C53.8161 56.973 56.2191 56.103 58.1211 54.342C60.0021 52.614 60.9471 50.247 60.9471 47.238V47.271Z" fill="#E9E9E9"/>
          </svg>
          <div className="text-2xl">
            <p className="mb-4">讓使用者在觀賞與使用的旅程中，發現設計的價值</p>
            <p>而我在設計與開發的過程中，看見自己的價值</p>
          </div>
          <svg className="hidden md:block absolute bottom-0 right-0" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.4249 24.729C38.4249 27.369 39.1149 29.583 40.4949 31.38C41.4729 32.616 42.7989 33.429 44.4759 33.816C46.1259 34.2 47.6859 34.227 49.0959 33.9C49.5759 36.75 48.7959 39.768 46.8159 42.966C44.8359 46.161 42.2709 48.567 39.1419 50.175L43.8849 57C46.2849 55.812 48.5649 54.306 50.6649 52.485C52.7949 50.664 54.6849 48.57 56.3649 46.203C58.0449 43.836 59.3049 41.163 60.1149 38.133C60.9249 35.103 61.1499 32.013 60.7629 28.833C60.2589 24.633 58.9029 21.273 56.6949 18.783C54.4899 16.26 51.7389 15 48.4509 15C45.5559 15 43.1529 15.87 41.2509 17.634C39.3669 19.362 38.4309 21.729 38.4309 24.738L38.4249 24.729ZM11.0529 24.729C11.0529 27.369 11.7429 29.583 13.1229 31.38C14.1009 32.64 15.4329 33.456 17.1039 33.831C18.7839 34.203 20.3229 34.221 21.7239 33.897C22.2039 36.717 21.4539 39.747 19.4679 42.957C17.4879 46.137 14.9289 48.537 11.7999 50.157L16.5309 57C18.9309 55.812 21.1959 54.306 23.3109 52.485C25.4603 50.637 27.3692 48.5265 28.9929 46.203C30.6609 43.833 31.9029 41.163 32.7129 38.133C33.5324 35.1048 33.7536 31.9458 33.3639 28.833C32.8659 24.633 31.5159 21.273 29.3139 18.783C27.1149 16.281 24.3729 15.027 21.0849 15.027C18.1839 15.027 15.7809 15.897 13.8789 17.658C11.9979 19.386 11.0529 21.753 11.0529 24.762L11.0529 24.729Z" fill="#E9E9E9"/>
          </svg>
        </div>
        <ul className="md:flex gap-x-4 md:w-[636px] mx-auto">
          <li className="mb-4 md:mb-0">
            <div className="flex flex-col items-center gap-y-1 mb-2">
              <h2>2B經驗</h2>
              <span className="hidden md:block w-5 h-[1px] bg-gray-300" />
            </div>
            <p>內部監控系統、庫存系統、採購系統、行銷整合系統</p>
          </li>
          <li>
            <div className="flex flex-col items-center gap-y-1 mb-2">
              <h2>2C經驗</h2>
              <span className="hidden md:block w-5 h-[1px] bg-gray-300" />
            </div>
            <p>跨國美妝保養電商、個人品牌網站、醫美網站、電子商務</p>
          </li>
        </ul>
      </div>
      <div className="container mx-auto px-2 md:px-0 mb-10 md:mb-20">
        <ul className="flex justify-between gap-y-20 flex-wrap mb-12">
            <li className="w-full md:w-[49.5%]">
              <div onClick={() => showPost(1)} className="cursor-pointer">
                <img className="rounded-t-xl mb-4 w-full" src="https://fakeimg.pl/636x400/200" />
                <div className="pb-4">
                  <h2 className="text-xl font-bold mb-1">星際旅行訂票平台</h2>
                  <p className="text-gray-400">悠遊宇宙的夢想，從這裡開始實現</p>
                </div>
                <ul className="flex items-center gap-x-2">
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">網頁設計</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">響應式設計</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">Bootstrap</li>
                </ul>
              </div>
            </li>
            <li className="w-full md:w-[49.5%]">
              <div onClick={() => showPost(2)} className="cursor-pointer">
                <img className="rounded-t-xl mb-4 w-full" src="https://fakeimg.pl/636x400/200" />
                <div className="pb-4">
                  <h2 className="text-xl font-bold mb-1">理財App</h2>
                  <p className="text-gray-400">連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
                </div>
                <ul className="flex items-center gap-x-2">
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">APP設計</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">iOS</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">React</li>
                </ul>
              </div>
            </li>
            <li className="w-full md:w-[49.5%]">
              <div onClick={() => showPost(3)} className="cursor-pointer">
                <img className="rounded-t-xl mb-4 w-full" src="https://fakeimg.pl/636x400/200" />
                <div className="pb-4">
                  <h2 className="text-xl font-bold mb-1">醫美診所官網</h2>
                  <p className="text-gray-400">永保青春的秘密，從粹究開始</p>
                </div>
                <ul className="flex items-center gap-x-2">
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">網頁設計</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">響應式設計</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">ＷordPress</li>
                </ul>
              </div>
            </li>
            <li className="w-full md:w-[49.5%]">
              <div onClick={() => showPost(4)} className="cursor-pointer">
                <img className="rounded-t-xl mb-4 w-full" src="https://fakeimg.pl/636x400/200" />
                <div className="pb-4">
                  <h2 className="text-xl font-bold mb-1">美美美早餐店 POS 機 UI Design</h2>
                  <p className="text-gray-400">訂單送單一目瞭然，自動報表分析好輕鬆</p>
                </div>
                <ul className="flex items-center gap-x-2">
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">UI 設計</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">前端開發</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">Wix</li>
                </ul>
              </div>
            </li>
            <li className="w-full md:w-[49.5%]">
              <div onClick={() => showPost(5)} className="cursor-pointer">
                <img className="rounded-t-xl mb-4 w-full" src="https://fakeimg.pl/636x400/200" />
                <div className="pb-4">
                  <h2 className="text-xl font-bold mb-1">電影院訂票系統</h2>
                  <p className="text-gray-400">三步驟完成訂票，電腦手機都支援</p>
                </div>
                <ul className="flex items-center gap-x-2">
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">前端開發</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">後端支援</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">Vue</li>
                </ul>
              </div>
            </li>
            <li className="w-full md:w-[49.5%]">
              <div onClick={() => showPost(6)} className="cursor-pointer">
                <img className="rounded-t-xl mb-4 w-full" src="https://fakeimg.pl/636x400/200" />
                <div className="pb-4">
                  <h2 className="text-xl font-bold mb-1">星際旅行訂票平台</h2>
                  <p className="text-gray-400">悠遊宇宙的夢想，從這裡開始實現</p>
                </div>
                <ul className="flex items-center gap-x-2">
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">UI設計</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">設計系統</li>
                  <li className="bg-gray-100 rounded-2xl px-3 py-1">網路電商</li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="flex justify-center w-full">
            <Pagination />
          </div>
      </div>
      {
        showPostID !== 0 ?
        <div className="flex justify-center fixed top-0 left-0 w-full h-full">
          <div 
            className="absolute top-0 left-0 z-20 w-full h-full bg-black opacity-75"
            onClick={() => showPost(0)}
          />
          <div className="relative bg-white max-w-[1200px] h-3/4 overflow-hidden rounded-xl my-20 z-20">
              <div className='overflow-auto w-full h-full'>
                <div className="pt-10 pr-10">
                  <svg onClick={() => showPost(0)}  className="cursor-pointer ms-auto" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9993 13.3337L2.83268 21.5003C2.52713 21.8059 2.13824 21.9587 1.66602 21.9587C1.19379 21.9587 0.804905 21.8059 0.499349 21.5003C0.193793 21.1948 0.0410156 20.8059 0.0410156 20.3337C0.0410156 19.8614 0.193793 19.4725 0.499349 19.167L8.66602 11.0003L0.499349 2.83366C0.193793 2.5281 0.0410156 2.13921 0.0410156 1.66699C0.0410156 1.19477 0.193793 0.805881 0.499349 0.500326C0.804905 0.19477 1.19379 0.0419922 1.66602 0.0419922C2.13824 0.0419922 2.52713 0.19477 2.83268 0.500326L10.9993 8.66699L19.166 0.500326C19.4716 0.19477 19.8605 0.0419922 20.3327 0.0419922C20.8049 0.0419922 21.1938 0.19477 21.4993 0.500326C21.8049 0.805881 21.9577 1.19477 21.9577 1.66699C21.9577 2.13921 21.8049 2.5281 21.4993 2.83366L13.3327 11.0003L21.4993 19.167C21.8049 19.4725 21.9577 19.8614 21.9577 20.3337C21.9577 20.8059 21.8049 21.1948 21.4993 21.5003C21.1938 21.8059 20.8049 21.9587 20.3327 21.9587C19.8605 21.9587 19.4716 21.8059 19.166 21.5003L10.9993 13.3337Z" fill="black"/>
                  </svg>
                </div>
                <div className="p-10">
                  <h2 className="text-[28px] text-center font-bold mb-2">星際旅行訂票平台</h2>
                  <h3 className="text-center text-gray-400 mb-10">悠遊宇宙的夢想，從這裡開始實現</h3>
                  <div className="md:flex justify-between items-center">
                    <div className="md:w-6/12 mb-8">
                      <p>STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。</p>
                      <p>主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。</p>
                    </div>
                    <ul className="border-t md:border-t-0 md:border-s border-gray-300 text-gray-400 text-center md:text-start ps-4 pt-8 md:pt-0">
                      <li>設計原則：宇宙旅行、深色背景、強烈視覺效果</li>
                      <li>開發方式：Bootstrap、Javascript、RWD</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 px-2 md:px-0 py-10">
                  <ul>
                    <li className="mb-8">
                      <img className="rounded-t-xl max-w-full mx-auto mb-2" src="https://fakeimg.pl/636x400/200" />
                      <h3 className="text-center text-2xl font-bold mb-2">主視覺</h3>
                      <p className="text-center">可直接設定日期、起迄星球、張數，快速查詢可購買的票券。</p>
                    </li>
                    <li>
                      <img className="rounded-t-xl max-w-full mx-auto mb-2" src="https://fakeimg.pl/636x400/200" />
                      <h3 className="text-center text-2xl font-bold mb-2">推薦查詢</h3>
                      <p className="text-center">給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。</p>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
        : <></>
      }
    </>
  );
}

export default Works;

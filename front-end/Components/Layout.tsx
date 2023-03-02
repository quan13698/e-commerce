import Head from 'next/head'
import { title } from 'process'
import React from 'react'

export default function layout({title, children}: any) {
  return (
    <>
      <Head>
        <title>{title ? 'Tiki - ' + title: 'Tiki'}</title>
        <meta name="viewport" content="next-app" />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
          <header className='content-center'>
            <div className='container flex w-screen mx-auto mt-2 mb-1 justify-between px-20'>
              <div className='flex h-10 w-3/5'>
                <div className='w-14 mr-10'>
                  <img src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png" alt="" />
                </div>
                <div className=' flex border-2 border-gray-300 rounded-lg w-full'>
                  <img src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png" className='p-2 content-center '/>
                  <input type="text" placeholder="Bạn tìm gì hôm nay" className='w-full'/>
                  <button className='w-20  text-blue-500 text-sm'>
                    <div className=''>Tìm kiếm</div>  
                  </button>  
                </div>
              </div>
              <div className='flex justify-center items-center ml-6 '>
                    <div className='flex mx-3 p-2 hover:bg-blue-200 rounded-md'>
                      <img className='h-6' src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png" alt="header_menu_item_home"></img>
                      <a href="#" className='text-blue-500 font-bold'>Trang chủ</a>
                    </div>
                    <div className='flex mx-3 p-2 hover:bg-gray-300 rounded-md'>
                      <img className='h-6' src="https://salt.tikicdn.com/ts/upload/41/28/7d/4713aa0d2855c5c770799f248692f0c5.png" alt="header_menu_item_astra"></img>
                      <a href="#" className='opacity-70'>Astra</a>
                    </div>
                    <div className='flex mx-3 p-2 hover:bg-gray-300 rounded-md'>
                      <img className='h-6' src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png" alt="header_header_account_img"></img>
                      <a href="#" className='opacity-70'>Tài khoản</a>
                    </div>
                    <div className=' p-2 hover:bg-blue-200 rounded-md'>
                      {/* <span className="">0</span> */}
                      <img className='h-6' src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="header_header_img_Cart"></img>
                    </div>
                  
                
              </div>
            </div>

            {/* <div className='flex container w-screen text-sm pl-28 '> */}
            <div className='container flex w-screen mx-auto mt-2 mb-1 px-20 justify-between'>
              <ul className='flex px-20'>
                <li className='mx-1 opacity-60'>trái cây</li>
                <li className='mx-1 opacity-60'>thịt, trứng</li>
                <li className='mx-1 opacity-60'>rau củ quả</li>
                <li className='mx-1 opacity-60'>sữa, bơ, phô mai</li>
                <li className='mx-1 opacity-60'>hải sản</li>
                <li className='mx-1 opacity-60'>gạo, mì ăn liền</li>
                <li className='mx-1 opacity-60'>đồ uống, bia rượu</li>
                <li className='mx-1 opacity-60'>bánh kẹo</li>
              </ul>
              <div className='flex ml-20 '>
                <img className='h-6' src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png" alt="header-icon-location"></img>
                <h4 className='opacity-60'>Giao đến:</h4>
                <div className='ml-1 font-bold underline opacity-80'>Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</div>
              </div>
            </div>
          </header>

          {/* main -- content */}
          <main >
            {/* menu - bar  */}
            <div className='w-screen flex h-full px-20 mx-auto container my-4'>
              {/* menu */}
              <div className='w-60 max-h-full text-sm '>

                {/* nổi bật  */}
                <div className='px-4 mb-8'>
                  <div className="font-bold ">Nổi bật</div>
                  <a className='flex hover:bg-gray-300 items-center py-2 px-3 rounded-lg' href="https://tiki.vn/khuyen-mai/sieu-hoi-astra?src=top_desktop_icon" title="3.3 Sale Freeship">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/66/b9/4f/ab14ee3149780f7d0e44ade4ab16eccd.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/66/b9/4f/ab14ee3149780f7d0e44ade4ab16eccd.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/upload/66/b9/4f/ab14ee3149780f7d0e44ade4ab16eccd.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/66/b9/4f/ab14ee3149780f7d0e44ade4ab16eccd.png 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/66/b9/4f/ab14ee3149780f7d0e44ade4ab16eccd.png 2x"/>
                            </picture>
                    </div>
                    <div title="3.3 Sale Freeship" className="text-m">3.3 Sale Freeship</div>
                  </a>
                  <a className='flex hover:bg-gray-300 items-center py-2 px-3 rounded-lg' href="https://tiki.vn/khuyen-mai/sieu-hoi-astra?src=top_desktop_icon" title="Giá Tốt Mỗi Ngày">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png 2x"/>
                            </picture>
                    </div>
                    <div title="Giá Tốt Mỗi Ngày" className="text-m">Giá Tốt Mỗi Ngày</div>
                  </a>
                  <a className='flex hover:bg-gray-300 items-center py-2 px-3 rounded-lg' href="https://tiki.vn/khuyen-mai/sieu-hoi-astra?src=top_desktop_icon" title="Mã giảm giá">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png 2x"/>
                            </picture>
                    </div>
                    <div title="Mã giảm giá" className="text-m">Mã giảm giá</div>
                  </a>
                  <a className='flex hover:bg-gray-300 items-center py-2 px-3 rounded-lg' href="https://tiki.vn/khuyen-mai/sieu-hoi-astra?src=top_desktop_icon" title="Ưu đãi Affiliate">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/02/02/df/8732a7d47ac8739b296fc05864f75acd.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/02/02/df/8732a7d47ac8739b296fc05864f75acd.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/upload/02/02/df/8732a7d47ac8739b296fc05864f75acd.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/02/02/df/8732a7d47ac8739b296fc05864f75acd.png 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/02/02/df/8732a7d47ac8739b296fc05864f75acd.png 2x"/>
                            </picture>
                    </div>
                    <div title="Ưu đãi Affiliate" className="text-m">Ưu đãi Affiliate</div>
                  </a>
                  <a className='flex hover:bg-gray-300 items-center py-2 px-3 rounded-lg' href="https://tiki.vn/khuyen-mai/sieu-hoi-astra?src=top_desktop_icon" title="Đóng tiền, nạp thẻ">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png 2x"/>
                            </picture>
                    </div>
                    <div title="Đóng tiền, nạp thẻ" className="text-m">Đóng tiền, nạp thẻ</div>
                  </a>
                  <a className='flex hover:bg-gray-300 items-center py-2 px-3 rounded-lg' href="https://tiki.vn/khuyen-mai/sieu-hoi-astra?src=top_desktop_icon" title="Mua trước trả sau">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png 1x, https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png 2x"/>
                            </picture>
                    </div>
                    <div title="Mua trước trả sau" className="text-m">Mua trước trả sau</div>
                  </a>
                  <a className='flex hover:bg-gray-300 items-center py-2 px-3 rounded-lg' href="https://tiki.vn/khuyen-mai/sieu-hoi-astra?src=top_desktop_icon" title="Ưu đãi thẻ, ví">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png 2x"/>
                            </picture>
                    </div>
                    <div title="Ưu đãi thẻ, ví" className="text-m">Ưu đãi thẻ, ví</div>
                  </a>
                  <a className='flex hover:bg-gray-300 items-center py-2 px-3 rounded-lg' href="https://tiki.vn/khuyen-mai/sieu-hoi-astra?src=top_desktop_icon" title="Bảo hiểm Tiki360">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png 2x"/>
                            </picture>
                    </div>
                    <div title="Bảo hiểm Tiki360" className="text-m">Bảo hiểm Tiki360</div>
                  </a>
                  <a className='flex hover:bg-gray-300 items-center py-2 px-3 rounded-lg' href="https://tiki.vn/khuyen-mai/sieu-hoi-astra?src=top_desktop_icon" title="Tiki Exchange">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png 2x"/>
                            </picture>
                    </div>
                    <div title="Tiki Exchange" className="text-m">Tiki Exchange</div>
                  </a>
                </div>

                {/* danh mục    */}
                <div className='px-4 mb-8 text-m'>
                  <div className="font-bold ">Danh mục</div>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/do-choi-me-be/c2549" title="Đồ Chơi - Mẹ & Bé">
                    <div className=' mx-1 '>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png 2x"/>
                            </picture>
                    </div>
                    <div title="Đồ Chơi - Mẹ & Bé" className="">Đồ Chơi - Mẹ & Bé</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/tikingon/ngon/c44792" title="NGON">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png 2x"/>
                            </picture>
                    </div>
                    <div title="NGON" className="">NGON</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/dien-thoai-may-tinh-bang/c1789" title="Điện Thoại - Máy Tính Bảng">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png 2x"/>
                            </picture>
                    </div>
                    <div title="Điện Thoại - Máy Tính Bảng" className="">Điện Thoại - Máy Tính Bảng</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/lam-dep-suc-khoe/c1520" title="Làm Đẹp - Sức Khỏe">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png 2x"/>
                            </picture>
                    </div>
                    <div title="Làm Đẹp - Sức Khỏe" className="">Làm Đẹp - Sức Khỏe</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/dien-gia-dung/c1882" title="Điện Gia Dụng">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png 2x"/>
                            </picture>
                    </div>
                    <div title="Điện Gia Dụng" className="">Điện Gia Dụng</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/thoi-trang-nu/c931" title="Thời trang nữ">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png 2x"/>
                            </picture>
                    </div>
                    <div title="Thời trang nữ" className="">Thời trang nữ</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/thoi-trang-nam/c915" title="Thời trang nam">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png 2x"/>
                            </picture>
                    </div>
                    <div title="Thời trang nam" className="">Thời trang nam</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/giay-dep-nu/c1703" title="Giày - Dép nữ">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png 2x"/>
                            </picture>
                    </div>
                    <div title="Giày - Dép nữ" className="">Giày - Dép nữ</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/tui-vi-nu/c976" title="Túi thời trang nữ">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png 2x"/>
                            </picture>
                    </div>
                    <div title="Túi thời trang nữ" className="">Túi thời trang nữ</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/giay-dep-nam/c1686" title="Giày - Dép nam">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png 2x"/>
                            </picture>
                    </div>
                    <div title="Giày - Dép nam" className="">Giày - Dép nam</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/tui-thoi-trang-nam/c27616" title="Túi thời trang nam">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png 2x"/>
                            </picture>
                    </div>
                    <div title="Túi thời trang nam" className="">Túi thời trang nam</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/balo-va-vali/c6000" title="Balo và Vali">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png 2x"/>
                            </picture>
                    </div>
                    <div title="Balo và Vali" className="">Balo và Vali</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/phu-kien-thoi-trang/c27498" title="Phụ kiện thời trang">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png 2x"/>
                            </picture>
                    </div>
                    <div title="Phụ kiện thời trang" className="">Phụ kiện thời trang</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/dong-ho-va-trang-suc/c8371" title="Đồng hồ và Trang sức">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png 2x"/>
                            </picture>
                    </div>
                    <div title="Đồng hồ và Trang sức" className="">Đồng hồ và Trang sức</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/laptop-may-vi-tinh-linh-kien/c1846" title="Laptop - Máy Vi Tính - Linh kiện">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png 2x"/>
                            </picture>
                    </div>
                    <div title="Laptop - Máy Vi Tính - Linh kiện" className="">Laptop - Máy Vi Tính - Linh kiện</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/nha-cua-doi-song/c1883" title="Nhà Cửa - Đời Sống">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png 2x"/>
                            </picture>
                    </div>
                    <div title="Nhà Cửa - Đời Sống" className="">Nhà Cửa - Đời Sống</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/cross-border-hang-quoc-te/c17166" title="Cross Border - Hàng Quốc Tế">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png 2x"/>
                            </picture>
                    </div>
                    <div title="Cross Border - Hàng Quốc Tế" className="">Cross Border - Hàng Quốc Tế</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/bach-hoa-online/c4384" title="Bách Hóa Online">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png 2x"/>
                            </picture>
                    </div>
                    <div title="Bách Hóa Online" className="">Bách Hóa Online</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/thiet-bi-kts-phu-kien-so/c1815" title="Thiết Bị Số - Phụ Kiện Số">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png 2x"/>
                            </picture>
                    </div>
                    <div title="Thiết Bị Số - Phụ Kiện Số" className="">Thiết Bị Số - Phụ Kiện Số</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/voucher-dich-vu/c11312" title="Voucher - Dịch vụ">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png 2x"/>
                            </picture>
                    </div>
                    <div title="Voucher - Dịch vụ" className="">Voucher - Dịch vụ</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/o-to-xe-may-xe-dap/c8594" title="Ô Tô - Xe Máy - Xe Đạp">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png 2x"/>
                            </picture>
                    </div>
                    <div title="Ô Tô - Xe Máy - Xe Đạp" className="">Ô Tô - Xe Máy - Xe Đạp</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/nha-sach-tiki/c8322" title="Nhà Sách Tiki">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png 2x"/>
                            </picture>
                    </div>
                    <div title="Nhà Sách Tiki" className="">Nhà Sách Tiki</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/dien-tu-dien-lanh/c4221" title="Điện Tử - Điện Lạnh">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png 2x"/>
                            </picture>
                    </div>
                    <div title="Điện Tử - Điện Lạnh" className="">Điện Tử - Điện Lạnh</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/the-thao-da-ngoai/c1975" title="Thể Thao - Dã Ngoại">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png 2x"/>
                            </picture>
                    </div>
                    <div title="Thể Thao - Dã Ngoại" className="">Thể Thao - Dã Ngoại</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/may-anh/c1801" title="Máy Ảnh - Máy Quay Phim">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png 1x, https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png 2x"/>
                            </picture>
                    </div>
                    <div title="Máy Ảnh - Máy Quay Phim" className="">Máy Ảnh - Máy Quay Phim</div>
                  </a>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/san-pham-tai-chinh-bao-hiem/c54042" title="Sản phẩm Tài chính - Bảo hiểm">
                    <div className='mx-1'>
                            <picture>
                              <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/a0/49/f4/a75f6e5dc021b0005fb8923b9846abc2.jpg.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/category/a0/49/f4/a75f6e5dc021b0005fb8923b9846abc2.jpg.webp 2x"/>
                              <img src="https://salt.tikicdn.com/ts/category/a0/49/f4/a75f6e5dc021b0005fb8923b9846abc2.jpg" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/category/a0/49/f4/a75f6e5dc021b0005fb8923b9846abc2.jpg 1x, https://salt.tikicdn.com/cache/100x100/ts/category/a0/49/f4/a75f6e5dc021b0005fb8923b9846abc2.jpg 2x"/>
                            </picture>
                    </div>
                    <div title="Sản phẩm Tài chính - Bảo hiểm" className="">Sản phẩm Tài chính - Bảo hiểm</div>
                  </a>
                </div>

                {/* bán hàng cùng tiki  */}
                <div className='px-4 '>
                  <a className='flex items-center my-2 mx-3' href="https://tiki.vn/khuyen-mai/ban-hang-cung-tiki" title="Bán hàng cùng Tiki">
                      <div className='mx-1'>
                              <picture>
                                <source type='image/webp' srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png.webp 2x"/>
                                <img src="https://salt.tikicdn.com/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png" width="32" height="32" alt="3.3 Sale Freeship" srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png 1x, https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png 2x"/>
                              </picture>
                      </div>
                      <div title="Bán hàng cùng Tiki" className="">Bán hàng cùng Tiki</div>
                    </a>
                </div>
              </div>

            {/* productsList */}
              <div className='w-full h-screen '>
                {/* banner  */}
                <div className='banner flex h-72 justify-between'>
                  <div className=' rounded-lg'>
                    <img src="https://salt.tikicdn.com/ts/tikimsp/d1/51/be/60434c32b1dcd945dc0710272cac651c.png" className='h-72 rounded-xl' alt="" />
                  </div>

                  <div className='ml-4  '>
                    <img src="https://salt.tikicdn.com/ts/tikimsp/6a/45/5a/60d59dc91d36b4231578368201c09fc9.png" className='h-72 rounded-xl' alt="" />
                  </div>
                </div>

                {/* Real brand */}
                <div className='w-full px-4 py-3 my-6 bg-green-100'>
                  <div className='flex font-bold items-center'>
                    Thương Hiệu Chính Hãng
                    <img src="https://salt.tikicdn.com/ts/tka/71/61/5d/dee57a81920f1f4e4dcc3b5878d9bfed.png" className='ml-2 w-20 h-4 ' alt="icon-title"></img>
                  </div>
                  <div className='flex mt-4 bg-opacity-95'>
                    <div className='w-1/6 mx-1'>
                      <img src="https://salt.tikicdn.com/ts/tikimsp/54/47/51/634324b85e8f67bb807c3655de1da56f.png" alt="" />
                    </div>
                    <div className='w-1/6 mx-1'>
                      <img src="https://salt.tikicdn.com/ts/tikimsp/9a/e5/79/e9bc447df1f841826e840a2baf7f84e2.png" alt="" />
                    </div>
                    <div className='w-1/6 mx-1'>
                      <img src="https://salt.tikicdn.com/ts/tikimsp/31/ce/ca/6381e2413483f07cb9d3aed455d06037.png" alt="" />
                    </div>
                    <div className='w-1/6 mx-1'>
                      <img src="https://salt.tikicdn.com/ts/tikimsp/4b/4c/15/ac2e7298428eb6de74f3fd6250ed208b.png" alt="" />
                    </div>
                    <div className='w-1/6 mx-1'>
                      <img src="https://salt.tikicdn.com/ts/tikimsp/d9/a9/2a/6f6ac8a0619061cc8251087328509f47.png" alt="" />
                    </div>
                    <div className='w-1/6 mx-1'>
                      <img src="https://salt.tikicdn.com/ts/tikimsp/38/20/a2/2539d973cf9d350363b7f4fca859bd8d.png" alt="" />
                    </div>
                  </div>
                </div>

                {/* Great deal today */}
                <div className='w-full px-4 py-3 my-6'>
                  <div className='flex relative'>
                    <div className='font-bold mr-2'>Giá sốc hôm nay</div>
                    <div>
                      <a href="">
                        <div>
                          <span className='rounded-md px-0.5 mx-1 bg-red-500 font-bold text-white'>02</span>
                          <b>:</b>
                          <span className='rounded-md px-0.5 mx-1 bg-red-500 font-bold text-white'>20</span>
                          <b>:</b>
                          <span className='rounded-md px-0.5 mx-1 bg-red-500 font-bold text-white'>36</span>
                        </div>
                      </a>
                    </div>
                    <div className='flex absolute right-0'>
                      <a href="">Xem thêm</a>
                      <img src="https://salt.tikicdn.com/ts/upload/d8/38/d3/4bef23fec35f9fbfa1757d30184ddb9c.png" className='h-6' alt="" />
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='w-1/6 p-2'>
                      <a className='relative' href="">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/08/3a/5c/f877a7d9bc05e399e96bc7c83d5fe8be.jpg" alt="" />
                        <a className='absolute bottom-0 left-0 w-1/2'>
                          <img src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png" alt="" />
                        </a>
                      </a>
                      <div className='text-center text-red-500 font-bold my-1'>
                        <span >
                          199.000
                        </span>
                          <sub className=''> ₫</sub>
                      </div>
                      <div className='w-full text-center bg-red-500 rounded-xl'>
                        <div className='w-2/6 bg-red-500'></div>
                        <span className='text-xs text-white font-bold text-center '>Đã bán 78</span>
                      </div>
                      
                    </div>
                    <div className='w-1/6 p-2'>
                      <a className='relative' href="">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/83/10/35/78f3a295a747adbe3ae2e27659f2c5c4.jpg" alt="" />
                        <a className='absolute bottom-0 left-0 w-1/2 '>
                          <img src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png" alt="" />
                        </a>
                      </a>
                      <div className='text-center text-red-500 font-bold my-1'>
                        <span >
                          131.000
                        </span>
                          <sub className=''> ₫</sub>
                      </div>
                      <div className='w-full text-center bg-red-500 rounded-xl'>
                        <div className='w-2/6 bg-red-500'></div>
                        <span className='text-xs text-white font-bold text-center '>Đã bán 15</span>
                      </div>
                      
                    </div>
                    <div className='w-1/6 p-2'>
                      <a className='relative' href="">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/05/e7/48/054f98b76c1dd795778b4afc7ad6a283.jpg" alt="" />
                        
                      </a>
                      <div className='text-center text-red-500 font-bold my-1'>
                        <span >
                          309.000
                        </span>
                          <sub className=''> ₫</sub>
                      </div>
                      <div className='w-full text-center bg-red-500 rounded-xl'>
                        <div className='w-2/6 bg-red-500'></div>
                        <span className='text-xs text-white font-bold text-center '>Vừa mở bán</span>
                      </div>
                      
                    </div>
                    <div className='w-1/6 p-2'>
                      <a className='relative' href="">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/24/0f/da/2e4a03235e51f6975524569dbbcb88ab.jpg" alt="" />
                      </a>
                      <div className='text-center text-red-500 font-bold my-1'>
                        <span >
                          522.000
                        </span>
                          <sub className=''> ₫</sub>
                      </div>
                      <div className='w-full text-center bg-red-500 rounded-xl'>
                        <div className='w-2/6 bg-red-500'></div>
                        <span className='text-xs text-white font-bold text-center '>Vừa mở bán</span>
                      </div>
                      
                    </div>
                    <div className='w-1/6 p-2'>
                      <a className='relative' href="">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg" alt="" />
                        <a className='absolute bottom-0 left-0 w-1/2 '>
                          <img src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png" alt="" />
                        </a>
                      </a>
                      <div className='text-center text-red-500 font-bold my-1'>
                        <span >
                          89.400
                        </span>
                          <sub className=''> ₫</sub>
                      </div>
                      <div className='w-full text-center bg-red-500 rounded-xl'>
                        <div className='w-2/6 bg-red-500'></div>
                        <span className='text-xs text-white font-bold text-center '>Đã bán 3</span>
                      </div>
                      
                    </div>
                    <div className='w-1/6 p-2'>
                      <a className='relative' href="">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/85/6b/3f/d1356390e98112020c8a897da7c00880.png" alt="" />
                        <a className='absolute bottom-0 left-0 w-1/2 '>
                          <img src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png" alt="" />
                        </a>
                      </a>
                      <div className='text-center text-red-500 font-bold my-1'>
                        <span >
                          193.300
                        </span>
                          <sub className=''> ₫</sub>
                      </div>
                      <div className='w-full text-center bg-red-500 rounded-xl'>
                        <div className='w-2/6 bg-red-500'></div>
                        <span className='text-xs text-white font-bold text-center '>Vừa mở bán</span>
                      </div>
                      
                    </div>
                  </div>
                </div>

                {/* Brand sale  */}
                <div className='w-full px-4 py-3 my-6'>
                  <div>
                    <div className='text-lg font-bold'>
                      Săn sale thương hiệu
                    </div>
                  </div>
                  <div className='flex mt-4 bg-opacity-95'>
                    <div className='w-1/6 mx-1'>
                      <img src="https://salt.tikicdn.com/ts/tikimsp/e8/b8/a1/bdd3d61d1afa23b5f73664a859a4b53c.png" className='rounded-lg' alt="" />
                    </div>
                    <div className='w-1/6 mx-1 box-border'>
                      <div className='mb-0.5'>
                        <img src="https://salt.tikicdn.com/ts/tikimsp/74/34/38/fe1083b0c8a85f13f89ceb482893bd5c.png" className='rounded-lg' alt="" />
                      </div>
                      <div>
                        <img src="https://salt.tikicdn.com/ts/tikimsp/c3/5c/58/4a2330f2ec9089ffc1ceac5ccf408936.png" className='rounded-lg' alt="" />
                      </div>
                    </div>
                    <div className='w-1/6 mx-1'>
                      <img src="https://salt.tikicdn.com/ts/tikimsp/97/c9/e5/b8db84f10f062ea2f7e1030088dd8fa3.png" className='rounded-lg' alt="" />
                    </div>
                    <div className='w-1/6 mx-1 box-border'>
                      <div className='mb-0.5'>
                        <img src="https://salt.tikicdn.com/ts/tikimsp/de/4e/84/44159bf0bc2954a29b0be1c1820b74bd.png" className='rounded-lg' alt="" />
                      </div>
                      <div>
                        <img src="https://salt.tikicdn.com/ts/tikimsp/b0/87/f8/e230f8ea52b4d895cb3a733c37d4c156.png" className='rounded-lg' alt="" />
                      </div>
                    </div>
                    <div className='w-1/6 mx-1'>
                      <img src="https://salt.tikicdn.com/ts/tikimsp/ea/46/56/9e420c447d11e6ce354fefa0fc771d45.png" className='rounded-lg' alt="" />
                    </div>
                    <div className='w-1/6 mx-1 box-border'>
                      <div className='mb-0.5'>
                        <img src="https://salt.tikicdn.com/ts/tikimsp/5b/b8/13/177d4250d17590e6fd3943e63e3dd37e.png" className='rounded-lg' alt="" />
                      </div>
                      <div>
                        <img src="https://salt.tikicdn.com/ts/tikimsp/7f/95/d7/dde89c5adf06c58d00b49a5d6e0d7a7b.png" className='rounded-lg' alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* hihlight collection  */}
                <div className='w-full px-4 py-3 my-6'>
                  <div>
                    <div className='text-lg font-bold'>
                      Bộ sưu tập nổi bật
                    </div>
                  </div>
                  <div className='flex mt-4 bg-opacity-95'>
                    <div className='w-1/6 mx-1'>
                        <img src="https://salt.tikicdn.com/ts/brickv2og/e9/32/fe/4164dd29e0596f89fdc2b94efba0d110.png" className='rounded-lg' alt="" />
                    </div>
                    <div className='w-1/6 mx-1'>
                        <img src="https://salt.tikicdn.com/ts/brickv2og/de/8f/2b/854c945eba523ef7e1d2a8f7cb9280a5.png" className='rounded-lg' alt="" />
                    </div>
                    <div className='w-1/6 mx-1'>
                        <img src="https://salt.tikicdn.com/ts/brickv2og/2d/96/a8/520af0d524c1622445cdc73709ef6228.png" className='rounded-lg' alt="" />
                    </div>
                    <div className='w-1/6 mx-1'>
                        <img src="https://salt.tikicdn.com/ts/brickv2og/69/b0/7f/4f9d8a543d966fbff382cafbbd469e75.png" className='rounded-lg' alt="" />
                    </div>
                    <div className='w-1/6 mx-1'>
                        <img src="https://salt.tikicdn.com/ts/brickv2og/73/91/78/729923e734b3a8f7b3b86f3e9d54ff64.png" className='rounded-lg' alt="" />
                    </div>
                    <div className='w-1/6 mx-1'>
                        <img src="https://salt.tikicdn.com/ts/brickv2og/c9/14/b6/7afdf8bc306cc86aed001f5436f872d0.png" className='rounded-lg' alt="" />
                    </div>
                  </div>
                </div>

                <div>
                {/* Suggession today */}
                  <div>
                    <div>
                        <div className='text-lg font-bold'>
                          Gợi ý hôm nay
                        </div>
                    </div>
                    <div className='flex mt-4 text-xs text-center'>
                      <div className='w-1/6 h-20 mx-1 hover:bg-blue-200 content-center'>
                            <img src="https://salt.tikicdn.com/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png" className='h-10 mx-20' alt="" />
                          <div className='opacity-70 text-blue-500 '>Dành cho bạn</div>
                      </div>
                      <div className='w-1/6 h-20 mx-1 hover:bg-gray-300'>
                          <img src="https://salt.tikicdn.com/ts/tikimsp/2d/3a/53/f4ab4353cd78836ad8acc4a464ed439b.png" className='h-10 mx-20 ' alt="" />
                          <div className='opacity-70' >Siêu sale Freeship</div>
                      </div>
                      <div className='w-1/6 h-20 mx-1 hover:bg-gray-300'>
                          <img src="https://salt.tikicdn.com/ts/tikimsp/d4/de/6f/43ac74a95828ed1f8208802738ecc618.png" className='h-10 mx-20' alt="" />
                          <div className='opacity-70'>Freeship</div>
                      </div>
                      <div className='w-1/6 h-20 mx-1 hover:bg-gray-300'>
                          <img src="https://salt.tikicdn.com/ts/personalish/1a/41/2f/bd05c095d72298752832dd5e87917c1c.png" className='h-10 mx-20' alt="" />
                          <div className='opacity-70'>Astra Plus</div>
                      </div>
                      <div className='w-1/6 h-20 mx-1 hover:bg-gray-300'>
                          <img src="https://salt.tikicdn.com/ts/personalish/b7/aa/f3/bcff08097ead36826d2c9daf7c2debd5.png" className='h-10 mx-20' alt="" />
                          <div className='opacity-70'>Đi chợ siêu sale</div>
                      </div>
                      <div className='w-1/6 h-20 mx-1 hover:bg-gray-300'>
                          <img src="https://salt.tikicdn.com/ts/personalish/08/b8/5c/5c6327fd3cf12c534bff4a55dab2f12d.png" className='h-10 mx-20' alt="" />
                          <div className='opacity-70'>Dịch vụ số</div>
                      </div>
                    </div>
                  </div>

                {/* Product for suggestions today */}
                  <div className='py-6'>
                    <div className='flex'>
                      <div className='w-2/6 mx-1'>
                        <img src="https://salt.tikicdn.com/ts/tka/b2/54/e8/b73b9c353aaabbcb227cd130d0e21708.png" alt="" />
                      </div>
                      <div className='w-1/6 mx-1'>
                        <a className='relative'>
                          <img src="https://salt.tikicdn.com/cache/280x280/ts/product/a9/d7/01/d39e909e4d4bb689f436fd6d595e0deb.jpg" alt="" />
                          <div className='absolute bottom-0 left-0'>
                            <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                          </div>
                        </a>
                        <div className='my-2 mx-2'>
                          <div>
                            <h3 className='text-xs'>
                            Đồng Hồ Nam Dây Nhựa G-Shock GA-2100-1A AP Custom Diamond Royal Oak (Special)
                            </h3>
                          </div>
                          
                          <div className='flex text-red-400 font-bold'>
                            <div>
                            6.666.000 ₫
                            </div>
                            <div className='text-xs'>
                              -25%
                            </div>
                          </div>
                          <div className='text-s'>
                            Tặng tới 793 ASA (177k ₫)
                            <br />
                            ≈ 2.7% hoàn tiền
                          </div>
                          <div >
                            <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                              Trả góp
                            </span>
                          </div>
                          
                          <div className='my-2'>
                            <span className='text-xs opacity-60'>
                            Giao chủ nhật, ngày 05/03
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                        <a className='relative'>
                          <img src="https://salt.tikicdn.com/cache/280x280/ts/product/7c/fe/ef/e2c2356936306900553864262d22b9e8.jpg" alt="" />
                          <div className='absolute bottom-0 left-0'>
                            <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                          </div>
                        </a>
                        <div className='my-2 mx-2'>
                          <div>
                            <h3 className='text-xs'>
                            Đồng Hồ Nam Dây Nhựa Casio G-SHOCK GA-2110SU-9A AP CUSTOM GOLDEN DIAMOND x BLACK ROYAL OAK (SPECIAL)
                            </h3>
                          </div>
                          
                          <div className='flex text-red-400 font-bold'>
                            <div>
                            6.698.000 ₫
                            </div>
                            <div className='text-xs'>
                              -25%
                            </div>
                          </div>
                          <div className='text-s'>
                            Tặng tới 797 ASA (178k ₫)
                            <br />
                            ≈ 2.7% hoàn tiền
                          </div>
                          <div >
                            <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                              Trả góp
                            </span>
                          </div>
                          
                          <div className='my-2'>
                            <span className='text-xs opacity-60'>
                            Giao chủ nhật, ngày 05/03
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                        <a className='relative'>
                          <img src="https://salt.tikicdn.com/cache/280x280/ts/product/36/2f/39/2d905079cfeaa9cb26c729f7c908573c.jpg" alt="" />
                          <div className='absolute bottom-0 left-0'>
                            <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                          </div>
                        </a>
                        <div className='my-2 mx-2'>
                          <div>
                            <h3 className='text-xs'>
                            Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2100SU-1A AP Custom Rose Gold x Black Royal Oak
                            </h3>
                          </div>
                          
                          <div className='flex text-red-400 font-bold'>
                            <div>
                            5.698.000 ₫
                            </div>
                            <div className='text-xs'>
                              -28%
                            </div>
                          </div>
                          <div className='text-s'>
                            Tặng tới 687 ASA (154k ₫)
                            <br />
                            ≈ 2.7% hoàn tiền
                          </div>
                          <div >
                            <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                              Trả góp
                            </span>
                          </div>
                          
                          <div className='my-2'>
                            <span className='text-xs opacity-60'>
                            Giao chủ nhật, ngày 05/03
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                        <a className='relative'>
                          <img src="https://salt.tikicdn.com/cache/280x280/ts/product/24/56/51/fcfe743b95d3fabc01673f0c1b0b0358.png" alt="" />
                          <div className='absolute bottom-0 left-0'>
                            <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                          </div>
                        </a>
                        <div className='my-2 mx-2'>
                          <div>
                            <h3 className='text-xs'>
                            Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2100SU-1A AP Custom Rose Gold x White Royal Oak
                            </h3>
                          </div>
                          
                          <div className='flex text-red-400 font-bold'>
                            <div>
                            5.698.000 ₫
                            </div>
                            <div className='text-xs'>
                              -28%
                            </div>
                          </div>
                          <div className='text-s'>
                            Tặng tới 687 ASA (154k ₫)
                            <br />
                            ≈ 2.7% hoàn tiền
                          </div>
                          <div >
                            <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                              Trả góp
                            </span>
                          </div>
                          
                          <div className='my-2'>
                            <span className='text-xs opacity-60'>
                            Giao chủ nhật, ngày 05/03
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex my-2'>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/31/c9/c1/6b51bab31ce059e63f8162c9203f4c04.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Nước hoa Johnson's Baby Cho Bé - Dung Tích 125ml
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              57.000 ₫
                              </div>
                              <div className='text-xs'>
                                -26%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 1 ASA (319 ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div className='h-4'>
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/b6/44/a4/d2d6d589d4266cc1017735c4e8269073.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Sữa Bột Abbott Ensure Gold Vani 400g
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              446.000 ₫
                              </div>
                              <div className='text-xs'>
                                -25%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 19 ASA (2k ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/2d/ef/af/ce6abb6eb0588d68b1655a11bd5de643.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Bộ 3 Hộp sữa Provital Immuna Plus 960G - Giúp tăng cường hệ miễn dịch cho người trưởng thành và người lớn tuổi
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              1.820.000 ₫
                              </div>
                              <div className='text-xs'>
                                -33%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 46 ASA (10k ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2 h-4 flex text-center'>
                              <img src="https://salt.tikicdn.com/ts/upload/9e/13/50/6d16b5e1d219857bd23572ce049e59e2.png" alt="" />
                              <span className='text-xs opacity-60'>
                              Giao siêu tốc 2h
                              </span> 
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/d1/63/65/bd9547bee3093f1daa485a1e9235bcc8.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Sữa Tắm Johnson's Baby cho Bé - Dung Tích 1000ml
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              175.000 ₫
                              </div>
                              <div className='text-xs'>
                                -26%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 4 ASA (978 ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/97/55/9f/c00c43793156e16b8bee9cd3c0bd8c84.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Bộ 2 Hộp sữa Provital Immuna Plus 960G - Giúp tăng cường hệ miễn dịch cho người trưởng thành và người lớn tuổi
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              1.218.000 ₫
                              </div>
                              <div className='text-xs'>
                                -32%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 30 ASA (7k ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/83/0a/3d/087ab425f54d85260406afbed218269c.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Dầu gội Johnson's Baby dịu nhẹ (800ml)
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              140.000 ₫
                              </div>
                              <div className='text-xs'>
                                -27%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 4 ASA (782k ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div className='flex my-2'>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/6f/37/04/d2296400d13bb5ca9a2e3e02d00a97da.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2100-1A AP Custom Silver x Black Royal Oak
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              5.598.000 ₫
                              </div>
                              <div className='text-xs'>
                                -29%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 676 ASA (151k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/98/3c/62/b6dc54ecad3eb6d73749c91b4f350240.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-SHOCK GA-2100-1A AP CUSTOM GLITTER SILVER x BLACK ROYAL OAK
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              5.698.000 ₫
                              </div>
                              <div className='text-xs'>
                                -28%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 687 ASA (154k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3a/c2/ca/50b70579187bb5c2d29eeea585e3eb90.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2110ET-8A AP Custom Grey x Blue Royal Oak
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              5.698.000 ₫
                              </div>
                              <div className='text-xs'>
                                -2%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 687 ASA (154k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/b6/59/47/0d9d6caa21c0c52ffbc9bc9bfca13d52.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2110ET-8A AP CUSTOM TIFFANY x RAINBOW ROYAL OAK (SPECIAL)
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              5.998.000 ₫
                              </div>
                              <div className='text-xs'>
                                -30%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 720 ASA (161k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/a4/61/14/185a09d41bff6317a3538a8bd5d8a465.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2110SU-3A AP Custom "The Hulk" Royal Oak
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              5.598.000 ₫
                              </div>
                              <div className='text-xs'>
                                -29%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 676 ASA (151k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/72/a8/e4/50a0a74b4543124692abe59fec32925a.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2110ET-8A AP Custom Full Grey Royal Oak
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              5.598.000 ₫
                              </div>
                              <div className='text-xs'>
                                -29%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 676 ASA (151k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div className='flex my-2'>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/fe/be/55/bd21cd6f6513302a9ddb2ae92233ef32.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Sữa Bột Abbott Ensure Gold Vani 850g
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              955.000 ₫
                              </div>
                              <div className='text-xs'>
                                
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 22 ASA (5k ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div className='h-4'>
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2 h-4 flex text-center'>
                              <img src="https://salt.tikicdn.com/ts/upload/9e/13/50/6d16b5e1d219857bd23572ce049e59e2.png" alt="" />
                              <span className='text-xs opacity-60'>
                              Giao siêu tốc 2h
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/d1/96/73/aec04561b0870a7495c81baa46f6f0ef.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Sữa Bột Abbott Ensure Gold Vani 400g
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              176.000 ₫
                              </div>
                              <div className='text-xs'>
                                -25%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 4 ASA (988 ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/8d/25/95/415ab62220428bf1e4303cc13e4e170c.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Nôi điện cho bé điều khiển từ xa và nhạc trắng ru ngủ Mastela 8104 / 8106 - Nôi cho bé sơ sinh nằm ngủ và chơi
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              1.599.000 ₫
                              </div>
                              <div className='text-xs'>
                                -33%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 40 ASA (9k ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2 h-4 flex text-center'>
                              <img src="https://salt.tikicdn.com/ts/upload/9e/13/50/6d16b5e1d219857bd23572ce049e59e2.png" alt="" />
                              <span className='text-xs opacity-60'>
                              Giao siêu tốc 2h
                              </span> 
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/c1/fc/ae/3ba5e2ddea1f9306b3f048d0688f962a.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Xe đạp trẻ em Thống Nhất Neo 20-04 (Dành cho bé từ 6 - 10 tuổi)
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              2.190.000 ₫
                              </div>
                              <div className='text-xs'>
                                
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 55 ASA (12k ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/7b/45/cd/a4b48cf886b8c379cb52b3d0c530f094.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Áo Choàng Chống Nắng CARDINA 2 Lớp Chất Thun Lạnh 1BC
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              338.000 ₫
                              </div>
                              <div className='text-xs'>
                                -60%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 57 ASA (13k ₫)
                              <br />
                              ≈ 3.8% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/1b/30/6f/b88b6fd6efbf7deaa3aa6c153e734140.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Xe đạp trẻ em Thống Nhất Kitten TE20 (Dành cho bé từ 5 đến 10 tuổi)
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              2.390.000 ₫
                              </div>
                              <div className='text-xs'>
                                
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 60 ASA (13k ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div className='flex my-2'>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/cc/fc/cd/2879405df6d64b73d0110f67125ac9cc.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2110ET-2A AP Custom Silver x Blue Royal Oak
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              5.598.000 ₫
                              </div>
                              <div className='text-xs'>
                                -29%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 676 ASA (151k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/72/a8/e4/50a0a74b4543124692abe59fec32925a.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-SHOCK GA-2100-1A AP CUSTOM GLITTER SILVER x BLACK ROYAL OAK
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              5.598.000 ₫
                              </div>
                              <div className='text-xs'>
                                -29%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 676 ASA (152k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/39/e5/13/69f02f6ec5c3ea60edef5ed5f50513c9.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2110ET-8A AP Custom Grey x Blue Royal Oak
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              5.498.000 ₫
                              </div>
                              <div className='text-xs'>
                                -29%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 665 ASA (149k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/36/2f/39/2d905079cfeaa9cb26c729f7c908573c.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2110ET-8A AP CUSTOM TIFFANY x RAINBOW ROYAL OAK (SPECIAL)
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              5.698.000 ₫
                              </div>
                              <div className='text-xs'>
                                -28%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 687 ASA (154k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/b3/20/fa/efe1fcdbf8a0d97d45003bba4c60ceb4.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2100SKE-7A AP CUSTOM SKELETON x RAINBOW ROYAL OAK (SPECIAL)
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              5.598.000 ₫
                              </div>
                              <div className='text-xs'>
                                -27%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 676 ASA (152k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/c2/e5/36/ae5ed89571efe89d5130aba0f89bc3cd.jpg" alt="" />
                            <div className='absolute bottom-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/d6/51/17/cde193f3d0f6da18147a739247c95c93.png" className='h-6' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-2110ET-8A AP Custom Full Grey Royal Oak
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              6.298.000 ₫
                              </div>
                              <div className='text-xs'>
                                -26%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 753 ASA (169k ₫)
                              <br />
                              ≈ 2.7% hoàn tiền
                            </div>
                            <div >
                              <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span>
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div className='flex my-2'>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/6f/57/1c/45857aed11e26f0250a639e26d2b4ac5.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Dầu dưỡng ẩm mát xa Johnson's Baby (200ml)
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              58.000 ₫
                              </div>
                              <div className='text-xs'>
                                
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 1 ASA (326 ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div className='h-4'>
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/2a/87/22/62055dad6166cf55be2ce1b190ad22a0.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Gối chặn cho bé vải sợi tre bamboo kháng khuẩn cho bé Comfybaby CFN02
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              389.000 ₫
                              </div>
                              <div className='text-xs'>
                                -30%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 10 ASA (2k ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/d1/96/73/aec04561b0870a7495c81baa46f6f0ef.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Sữa Tắm Johnson's Baby cho Bé - Dung Tích 1000ml
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              176.000 ₫
                              </div>
                              <div className='text-xs'>
                                -25%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 4 ASA (989 ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2 h-4 flex text-center'>
                              <img src="https://salt.tikicdn.com/ts/upload/9e/13/50/6d16b5e1d219857bd23572ce049e59e2.png" alt="" />
                              <span className='text-xs opacity-60'>
                              Giao siêu tốc 2h
                              </span> 
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/32/78/51/af8bfc1f1a061e5274d76fb44599eba4.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Xe đạp trẻ em Thống Nhất Neo 20-04 (Dành cho bé từ 6 - 10 tuổi)
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              232.000 ₫
                              </div>
                              <div className='text-xs'>
                                -25%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 6 ASA (1k ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/7b/45/cd/a4b48cf886b8c379cb52b3d0c530f094.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Áo Choàng Chống Nắng CARDINA 2 Lớp Chất Thun Lạnh 1BC
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              338.000 ₫
                              </div>
                              <div className='text-xs'>
                                -60%
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 57 ASA (13k ₫)
                              <br />
                              ≈ 3.8% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className='w-1/6 mx-1'>
                          <a className='relative'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/f9/f2/c0/936823c66c2f1c347d192671b48b42e0.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                              <img src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" className='h-4' alt="" />
                            </div>
                          </a>
                          <div className='my-2 mx-2'>
                            <div>
                              <h3 className='text-xs'>
                              Sữa tắm dưỡng ẩm dịu lành cho bé Cetaphil Baby Moisturizing Bath & Wash 230ml
                              </h3>
                            </div>
                            
                            <div className='flex text-red-400 font-bold'>
                              <div>
                              170.000 ₫
                              </div>
                              <div className='text-xs'>
                                
                              </div>
                            </div>
                            <div className='text-s'>
                              Tặng tới 4 ASA (955 ₫)
                              <br />
                              ≈ 0.6% hoàn tiền
                            </div>
                            <div >
                              {/* <span className='text-s border text-blue-500 p-0.5 border-blue-500'>
                                Trả góp
                              </span> */}
                            </div>
                            
                            <div className='my-2'>
                              <span className='text-xs opacity-60'>
                              Giao chủ nhật, ngày 05/03
                              </span>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div className='text-center my-3 h-10 w-full'>
                      <a href="#" className='border-blue-500 border px-14 text-blue-500 rounded-lg hover:bg-blue-100 py-2'>
                        Xem Thêm
                      </a> 
                    </div>          
                  </div>

                  <div className='flex py-6'>
                    <div className='w-1/5 opacity-70'>
                      <div className='my-2 font-bold'>
                        <div> Hỗ trợ khách hàng</div>          
                      </div>     
                      <div className='text-m'>
                        <div>Hotline: 
                          <a href="" className='hover:underline'>1900-6035
                          </a>
                          <br />
                          <div>
                          (1000 đ/phút, 8-21h kể cả T7, CN)
                          </div>
                        </div>
                        <a className='hover:underline' href="#">Các câu hỏi thường gặp</a><br />
                        <a className='hover:underline' href="#">Gửi yêu cầu hỗ trợ</a><br />
                        <a className='hover:underline' href="#">Hướng dẫn đặt hàng</a><br />
                        <a className='hover:underline' href="#">Phương thức vận chuyển</a><br />
                        <a className='hover:underline' href="#">Chính sách đổi trả</a><br />
                        <a className='hover:underline' href="#">Hướng dẫn trả góp</a><br />
                        <a className='hover:underline' href="#">Chính sách hàng nhập khẩu</a><br />
                        <div>Hỗ trợ khách hàng: 
                          <a href="" className='hover:underline'> hotro@tiki.vn</a>
                        </div>
                        <div>Báo lỗi bảo mật: 
                          <a href="" className='hover:underline'> security@tiki.vn</a>
                        </div>
                      </div>  
                    </div> 

                    <div className='w-1/5 opacity-70'>
                      <div>
                        <div className='my-2 font-bold'>
                          <div> Về Tiki</div>          
                        </div> 
                        <div className='text-m opacity-70'>
                          <a className='hover:underline' href="#">Giới thiệu Tiki</a><br />
                          <a className='hover:underline' href="#">Tiki Blog</a><br />
                          <a className='hover:underline' href="#">Tuyển dụng</a><br />
                          <a className='hover:underline' href="#">Chính sách bảo mật thanh toán</a><br />
                          <a className='hover:underline' href="#">Chính sách bảo mật thông tin cá nhân</a><br />
                          <a className='hover:underline' href="#">Chính sách giải quyết khiếu nại</a><br />
                          <a className='hover:underline' href="#">Điều khoản sử dụng</a><br />
                          <a className='hover:underline' href="#">Giới thiệu Tiki Xu</a><br />
                          <a className='hover:underline' href="#">Gửi Astra nhận Xu mua sắm thả ga</a><br />
                          <a className='hover:underline' href="#">Tiếp thị liên kết cùng Tiki</a><br />
                          <a className='hover:underline' href="#">Bán hàng doanh nghiệp</a><br />
                          <a className='hover:underline' href="#">Điều kiện vận chuyển</a><br />
                        </div>
                      </div>
                    </div>    

                    <div className='w-1/5 opacity-70'>
                      <div className='mb-3'>
                        <div className='my-2 font-bold'>
                          <div> Hợp tác và liên kết</div>          
                        </div> 
                        <div className='text-m opacity-70'>
                          <a className='hover:underline' href="#">Quy chế hoạt động Sàn GDTMĐT</a><br />
                          <a className='hover:underline' href="#">Bán hàng cùng Tiki</a><br />
                        </div>
                      </div>
                      <div>
                        <div className='my-2 font-bold'>Chứng nhận bởi </div>
                        <div className='flex '>
                          <a>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" className='h-8' alt="" />
                          </a>
                          <a href="">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" className='h-8' alt="" />
                          </a>
                        </div>
                      </div>

                    </div> 

                    <div className='w-1/5 '>
                      <div>
                        <div className='font-bold opacity-70'>Phương thức thanh toán</div>
                      </div>
                      <div>
                        <div className='flex'>
                          
                        </div>
                      </div>
                    </div> 

                    <div className='w-1/5'>
                      <div>
                        <div className='font-bold opacity-70'>Kết nối với chúng tôi</div>
                      </div>
                      <div className='h-16'>

                      </div>
                      <div>
                        <div className='font-bold opacity-70'>Tải ứng dụng trên điện thoại</div>
                        <div className='flex justify-between'>
                          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png" className='h-20' alt="" />
                          <div className='mr-6 '>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" className='w-28 mb-3' alt="" />
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" className='w-28' alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='opacity-70 text-xs my-6'>
                      Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh <br />

                      Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng <br />

                      Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022 <br />

                      © 2022 - Bản quyền của Công ty TNHH Ti Ki   
                    </div>
                  </div>

                  <div>
                    <div className='my-4'>
                        <div className='font-bold opacity-70'>Tiki - Thật nhanh, thật chất lượng, thật rẻ</div>
                    </div>
                    <div>
                      <div className='text-m font-bold opacity-70'>Tiki có tất cả</div>
                    </div>
                    <div>
                      <div className='text-xs opacity-60'>
                      Với hàng triệu sản phẩm từ các thương hiệu, cửa hàng uy tín, hàng nghìn loại mặt hàng từ <a href="" className='text-blue-700 hover:underline'>Điện thoại smartphone</a> tới <a className='text-blue-700 hover:underline' href="">Rau củ quả tươi</a>, kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho bạn một <br />
                      trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm vào đó, ở Tiki bạn có thể dễ dàng sử dụng vô vàn các tiện ích khác như <a className='text-blue-700 hover:underline' href="">mua thẻ cào, thanh toán hoá đơn điện nước, các dịch vụ bảo hiểm.</a>
                      </div>
                    </div>
                    <div className='my-2'>
                      <div className='text-m font-bold opacity-70'>Khuyến mãi, ưu đãi tràn ngập</div>
                    </div>
                    <div>
                      <div className='text-xs opacity-60'>
                      Bạn muốn săn giá sốc, Tiki có <a className='text-blue-700 hover:underline' href="">giá sốc mỗi ngày</a> cho bạn! Bạn là tín đồ của các thương hiệu, các <a className='text-blue-700 hover:underline' href="">cửa hàng Official chính hãng</a> đang chờ đón bạn. Không cần săn mã freeship, vì Tiki đã có hàng triệu sản phẩm <br />
                      trong <a className='text-blue-700 hover:underline' href="">chương trình Freeship+</a>, không giới hạn lượt đặt, tiết kiệm thời gian vàng bạc của bạn. Mua thêm gói <a className='text-blue-700 hover:underline' href="">TikiNOW tiết kiệm</a> để nhận 100% free ship 2h & trong ngày, hoặc mua gói TikiNOW cao cấp để nhận <br />
                      được 100% freeship, áp dụng cho 100% sản phẩm, 100% tỉnh thành Việt Nam. Bạn muốn tiết kiệm hơn nữa? Đã có TikiCARD, <a className='text-blue-700 hover:underline' href="">thẻ tín dụng Tiki hoàn tiền 15%</a> trên mọi giao dịch (tối đa hoàn 600k/tháng) <br />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </main>
      </div>
    </>
  )
}

import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

// Giảm một nửa số trang cuối của quyển sách
const cutIndex = Math.floor(pictures.length - (pictures.length / 2));
const reducedPictures = pictures.slice(0, cutIndex);

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: reducedPictures[0],
  },
];
for (let i = 1; i < reducedPictures.length - 1; i += 2) {
  pages.push({
    front: reducedPictures[i % reducedPictures.length],
    back: reducedPictures[(i + 1) % reducedPictures.length],
  });
}

pages.push({
  front: reducedPictures[reducedPictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="https://www.facebook.com/zuongzuongzuong/"
        >
          <img className="w-20" src="/images/wawasensei-white.png" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          {/* Ẩn toàn bộ hàng nút chuyển trang */}
          {false && (
            <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
              {[...pages].map((_, index) =>
                <button
                  key={index}
                  className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                    index === page
                      ? "bg-white/90 text-black"
                      : "bg-black/30 text-white"
                  }`}
                  onClick={() => setPage(index)}
                >
                  {index === 0 ? "Cover" : `Page ${index}`}
                </button>
              )}
              <button
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  page === pages.length
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(pages.length)}
              >
                Back Cover
              </button>
            </div>
          )}
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          {/* Đoạn text chạy ngang phía sau quyển sách, chỉ giữ lại nội dung bạn đã sửa */}
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">Zuöng</h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">Nguyen Binh Duong</h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">YearBook</h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">nb.zuong7</h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">nb.zuong7</h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic"></h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">2003</h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">Zuöng</h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">Nguyen Binh Duong</h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">YearBook</h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">nb.zuong7</h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">nb.zuong7</h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">2003</h2>
          </div>
        </div>
      </div>
    </>
  );
};

function ProfileCard() {
  return (
    <div className="flex flex-col justify-center items-center bg-white text-[#969696] shadow-xl rounded-2xl overflow-hidden">
      <div className="relative">
        <img src="./images/bg-pattern-card.svg" alt="" />
        <img
          src="./images/image-victor.jpg"
          alt=""
          className="absolute -bottom-[40%] left-1/2 -translate-x-1/2 rounded-full border-[6px] border-white"
        />
      </div>

      <div className="flex flex-col justify-center items-center pb-6 pt-16">
        <div className="flex gap-2">
          <h1 className="font-bold text-[#2d3248]">Victor Crest</h1>
          <p>26</p>
        </div>

        <p className=" text-base">London</p>
      </div>

      <div className="flex justify-between items-center w-full py-6 px-12 border-t">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-[#2d3248]">80K</h2>
          <p className="text-xs tracking-widest">Followers</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-[#2d3248]">803K</h2>
          <p className=" text-xs tracking-widest">Likes</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-[#2d3248]">1.4K</h2>
          <p className=" text-xs tracking-widest">Photos</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

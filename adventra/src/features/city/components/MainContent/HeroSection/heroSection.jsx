export default function HeroSection() {
  return (
    <div className="@container">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-[#f9fbfb] @[480px]:rounded-xl min-h-[218px]"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSl-8F4Sge1_5HD6Yk53xp_YrItRyHKJtxzCoSc1GlNYMC9xkj5rZmBb3F42xfBqWMicfFM2crES1kzbY7AgMXony3jPbUVDCbkjdEZEr6anJ4zybFt44lD-epueayy5cojvYFBnlBR2bqQdFoSrgNPZNpl-HWmF442MH5OPjLjGh_vQpeka0AAcg0To88VdsLW47qIy-ZstWlPcjR-EHRYA1Wm8mUIAtScsID806J9n4rrGoHy6kf16tyMd-8ut8ndOWrb-PAnu0")', 
          }}
        >
          <div className="flex p-4">
            <p className="text-white tracking-light text-[28px] font-bold leading-tight">San Francisco</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import SimilarGuidesCard from "./similarGuidesCard";
const guides = [
  {
    name: 'Ethan Harris',
    rating: '4.8',
    reviews: '150 reviews',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-iecEFWkMeDK1ydpyMRyynKazfJ314HOKtkfCpNB61XhWaPPF8uwL0r94Vn-9fJr9qTm4F_u3VDySRbILxthDuOGO23YXebBuAHaP_atu08oMm3DSqRLhpw6z_1PsBYI7OgjDcQ_j7M7ApAtCNP2cLsrJWczOEKjCG1yDtruro8J02fJOSGl8t-lLMdoKSOktsM7KLbetAMTYE77CUOstCWoWYv66rxy26cyaYN0APG6N6kReA4UVKS9F0HxYz06OCpjaOsNXZSY', 
  },
  {
    name: 'Olivia Turner',
    rating: '4.7',
    reviews: '110 reviews',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcitIVNbUkbZb1UeJOW4ePpCEqbnYq_Ds4WzbjHbYdU0M4AQ0qGfRJW_FIxzgrd2f2XQ19txP2ALdEF_8PTHfljhoZDgl-SX7v2cc62T1ftiYy3DKhIe6M-jdYEZQT6G8u62H2SLIM50KxVIoFwOFp1ACLWGUuE5tFER-8RNvNkhtcXaPL--3RMszgplKJrRM8IHjHcdoEZybXMUud1oqxcY4C-mHWAI0qcGOuoMpTMN2PWQ_DfutBVskZz5qW8Khf6wiS7onTcFs', 
  },
  {
    name: 'Liam Carter',
    rating: '4.9',
    reviews: '130 reviews',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAA7G-VZILG2_b2a7h_YvhA5eC2shUoa6OiHPEYaAo1Br8WHxLMSPohGHhg5IWPKPjR8cTU7GEbw69w7bliaQfzU8js3_PJq-A5VW0xfYJx6jKp8-qt7CaWnJi739pnjqbnY6DdWXO7QfUQ2eGSP6J-f7hhvAk5ZaMc_iiwqNtbI_V4lMwMjf4DjpjqVaIRFlQZY5-G4OLC8BUS6OH6HkxCTv7TvpEqXMdsvhzTdOqTKSOogB_JkQ_nMcWH3qstjpItZo_LEApGxBc', 
  },
];

const SimilarGuides = () => {
  return (
    <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch p-4 gap-3">
        {guides.map((guide, index) => (
          <SimilarGuidesCard key={index} {...guide} />
        ))}
      </div>
    </div>
  );
};

export default SimilarGuides;
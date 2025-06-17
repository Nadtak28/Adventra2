import GuideCard from './guideCard';

export default function GuideCardList() {
  const guides = [
    {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC8T663_rSNCgRfUZkuPdIDzThD9M-LE37BZafTa5Q7L3eI0JiyxJaBCXmk8k9hZR4AMupn40EnAz_Eq76U1mrcnXowwPWP8EaNczkMg5MVm4EzLavIyImQ3tu3M9ZtcK7xGYT7GUiVXWfa_rS-QoLorM_OInZy3A8RPTsJdgrF2BmWA5lkdFcCmx9kojZKte2UO657NmA2PsgEwvruUPxVgTVfVmJ2Z4ICpbfEctrtN3dlLqd_bqTrCjSSkGd1yeSmh4zKSax-SR8', 
      name: 'Sophia',
      role: 'Expert in city tours',
    },
    {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAPwQvMVIBDytAurCPWKjvb54gm3XtltG17qXUPY78p7p-eFbilNB0qELyqgYcYmYoB-4MN2XJI6tqTR3LtsXSCiIfOfjL-xjPsggdpZG1S6-l66NwovHgVy8bkX42RBNMwGBRr3w5-B2UvP5nqnMprCP_1dzrSJlAUEzElpDh1Mus2LddO2QUr_W31w1D6HdWSvBTk4zKB6xLSbCza5ox_RsTPF6P_W88-0NFze9Z55wPa3gX6KdoET3Bdhb4x5z-Ha3MDCyU6kT8', 
      name: 'Ethan',
      role: 'Specialist in outdoor activities',
    },
    {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBeXiDF2CSGGBVDOvd6lTA1AiPbvc7PB-4USX16Xyn7gGLLBkzoLD26dxbxI_Irg0zWmAtLsMklcA8r44SVbo0Ffh1wARacENdLd6N-J4LloeyddXcoo_4MRXmFOKuKm0wns809eg31xY1Lq9SyciU5jV35i3N7THrpD2ScV306PM-Zxk72qSC9L4K3yMsxHhrA-SXBAixyUe6PeeIg_3Hf2cQGZMCe1E63qhUwXYaweMi9ageMXlAMHK--MTjGCurH-SdF8un-3V4', 
      name: 'Olivia',
      role: 'Knowledgeable about local cuisine',
    },
  ];

  return (
    <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch p-4 gap-8">
        {guides.map((guide, index) => (
          <GuideCard key={index} {...guide} />
        ))}
      </div>
    </div>
  );
}
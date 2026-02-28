import imgAgent from "figma:asset/3b8975c3083a4f50cc49f33720b016754cc5164e.png";
import imgAgent1 from "figma:asset/7be3d644fff0583902e166bc79c979aee6a7e4e7.png";
import imgAgent2 from "figma:asset/3a68b138e7eb3c82de9ea23bc675b2813de35a9a.png";

export default function Agent() {
  return (
    <div className="relative size-full" data-name="Agent">
      <div className="absolute inset-0 rounded-[26250px]" data-name="Agent">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[26250px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[26250px] size-full" src={imgAgent} />
          <div className="absolute inset-0 overflow-hidden rounded-[26250px]">
            <img alt="" className="absolute h-[102.71%] left-[-2.98%] max-w-none top-[-2.71%] w-[105.96%]" src={imgAgent1} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[26250px]">
            <img alt="" className="absolute h-[176.67%] left-[-8.89%] max-w-none top-[-0.15%] w-[117.78%]" src={imgAgent2} />
          </div>
        </div>
      </div>
    </div>
  );
}
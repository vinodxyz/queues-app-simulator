import imgSupervisor from "figma:asset/3b8975c3083a4f50cc49f33720b016754cc5164e.png";
import imgSupervisor1 from "figma:asset/7be3d644fff0583902e166bc79c979aee6a7e4e7.png";

export default function Supervisor() {
  return (
    <div className="relative size-full" data-name="Supervisor">
      <div className="absolute inset-0 rounded-[26250px]" data-name="Supervisor">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[26250px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[26250px] size-full" src={imgSupervisor} />
          <div className="absolute inset-0 overflow-hidden rounded-[26250px]">
            <img alt="" className="absolute h-[102.71%] left-[-2.98%] max-w-none top-[-2.71%] w-[105.96%]" src={imgSupervisor1} />
          </div>
        </div>
      </div>
    </div>
  );
}
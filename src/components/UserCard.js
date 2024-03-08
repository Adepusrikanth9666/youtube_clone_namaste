import React from "react";

const UserCard = () => {
  return (
    <div className="bg-white h-60 w-48 shadow-md  ">
      <ul>
        <li className="flex align-middle justify-items-center p-2">
          <img
            src="https://yt3.ggpht.com/yti/ANjgQV_SnJokVxKWBCGrzZed96yXS_kLVxXRcooiKSPxsQ=s88-c-k-c0x00ffffff-no-rj"
            className="h-12 w-12 rounded-[50%]"
          />
          <div className="font-semibold text-lg px-2">Srikanth</div>{" "}
        </li>
        <li className="p-2 shadow-sm hover:bg-slate-50 cursor-pointer">
          @srikanthadepu
        </li>
        <li className="p-2 shadow-sm hover:bg-slate-50 cursor-pointer">
          Switch Account
        </li>
        <li className="p-2 shadow-sm hover:bg-slate-50 cursor-pointer">
          Settings
        </li>
        <li className="p-2 shadow-sm hover:bg-slate-50 cursor-pointer">
          SignOut
        </li>
      </ul>
    </div>
  );
};

export default UserCard;

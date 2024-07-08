import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { card_data } from "../../../data";
import { NftCard } from "../ui/nft-card";
import Profile from "../Layout/Profile";

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full m-10 border border-gray-500 rounded-lg bg-black p-5">
      <Button
        className="mb-4 flex items-center w-20"
        onClick={() => navigate("/")}
      >
        <img src="left-arrow.svg" alt="" className="h-6 w-6" />
        Home
      </Button>
      <Profile name="John Doe" email="johndoe@email.com" username="johndoe" />
      <hr className="border-t border-gray-500 mb-4" />
      <div className="flex justify-center gap-10 overflow-x-scroll space-x-4">
        {card_data.length ? (
          card_data.map((card, index) => {
            if (card.owned) {
              return <NftCard key={index} {...card} />;
            }
          })
        ) : (
          <p className="text-2xl font-bold text-center">No NFTs found</p>
        )}
      </div>
    </div>
  );
}

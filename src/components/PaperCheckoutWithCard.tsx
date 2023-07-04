import { paperXyzContractId } from "../consts/parameters";
import { CheckoutWithCard } from "@paperxyz/react-client-sdk";
import { useAddress } from "@thirdweb-dev/react";

export default function PaperCheckoutWithCard({
  mintQty,
}: {
  mintQty: number;
}) {
  const address = useAddress();
  if (!address) return null;
  return (
    <div className="mt-10 flex w-full flex-col gap-4 lg:items-center lg:gap-4">
      <div className="text-center">Mint with credit card</div>
      {/* <button className="ml-auto rounded-lg bg-white px-2 py-2 text-black">
        Mint with credit card
      </button> */}
      <CheckoutWithCard
        key={mintQty}
        configs={{
          walletAddress: address,
          quantity: mintQty,
          contractId: paperXyzContractId,
        }}
        onPaymentSuccess={() => {
          console.log("onPaymentSuccess");
        }}
        onError={(e) => {
          console.error(e);
        }}
        options={{
            // custom stylings
        }}
      />
    </div>
  );
}

import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-full h-[90vh] flex text-primary items-center justify-center bg-white">
      <Spinner
        className="text-primary"
        label="Loading..."
        color="primary"
        labelColor="primary"
        size="lg"
      />
    </div>
  );
}

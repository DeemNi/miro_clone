import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div className="flex gap-y-4 flex-col">
        This screen only for authenticated users only
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}

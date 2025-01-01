import AIChatInput from "@/components/app/AIChatInput";
import ChatList from "@/components/app/ChatList";

export default function page() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <ChatList />
      <div className="flex flex-col items-center justify-between min-h-[95vh]">
        <h1 className="text-3xl font-medium text-stone-700">
          Need a brand name for your SaaS!
        </h1>

        <div className="flex flex-col items-center justify-center">
          {/* Ideas card */}

          {/* Bottom input box */}
          <AIChatInput />
        </div>
      </div>
    </div>
  );
}

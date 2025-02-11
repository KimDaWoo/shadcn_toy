import { Calendar } from "../components/ui/calendar";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-regular mb-4">Welcome to Dashboard</h2>
      <div className="max-w-sm">
        <Calendar />
      </div>
      {/* 추가 대시보드 컨텐츠를 여기에 넣을 수 있습니다 */}
    </div>
  );
}

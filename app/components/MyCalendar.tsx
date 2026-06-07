"use client";

import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Task = {
  id: number;
  title: string;
  status: "Completed" | "Pending" | "In Progress";
};

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const tasks = useMemo(() => {
    return Array.from({ length: 8 }, (_, index) => {
      const rand = Math.floor(Math.random() * 3) + 1; // 1-3

      let status: "Completed" | "In Progress" | "Pending";

      switch (rand) {
        case 1:
          status = "Completed";
          break;
        case 2:
          status = "In Progress";
          break;
        default:
          status = "Pending";
      }

      return {
        id: index + 1,
        title: `Task ${index + 1} for ${date.toLocaleDateString()}`,
        status,
      };
    });
  }, [date]);

  const unixTimestamp = Math.floor(Date.now() / 1000);

  return (
    <div className="flex flex-col gap-6 lg:flex-row text-black text-sm mt-5">
      {/* Calendar Section */}
      <div className="lg:w-1/3">
        <div className="rounded-sm bg-white p-4 shadow">
          <h2 className="mb-4 text-lg font-semibold">Calendar</h2>

          <Calendar onChange={(value) => setDate(value as Date)} value={date} />

          <div className="mt-4 rounded-lg bg-slate-100 p-3">
            <p className="text-sm text-gray-500">Selected Date</p>
            <p className="font-semibold">{date.toString()}</p>
            <p className="text-sm text-gray-500">Unix Timestamp</p>
            <p className="font-semibold text-red-600">{unixTimestamp}</p>
          </div>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="lg:w-2/3">
        <div className="rounded-sm bg-white shadow">
          <div className="border-b p-4">
            <h2 className="text-xl font-semibold">Tasks</h2>

            <p className="text-sm text-gray-500">
              12 tasks for {date.toDateString()}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Task</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left" colSpan={2}>
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((task) => (
                  <tr
                    key={task.id}
                    className="border-t hover:bg-slate-50 text-xs"
                  >
                    <td className="px-4 py-3">{task.id}</td>

                    <td className="px-4 py-3">{task.title}</td>

                    <td className="px-4 py-3 ">
                      <span
                        className={` px-3 py-1 text-xs font-bold ${
                          task.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : task.status === "Pending"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td className="px-4 py-3" colSpan={2}>
                      <button className=" bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 cursor-pointer">
                        Edit
                      </button>
                      <button className="ml-2 bg-red-500 px-3 py-1 text-white hover:bg-red-600 cursor-pointer">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Statistic } from "@/types/interfaces";

export function getStatistics() {
  const statistics: Statistic[] = [
    {
      label: "Years experience",
      value: new Date().getFullYear() - 2022,
    },
    {
      label: "Completed projects",
      value: 4,
    },
  ];

  return { statistics };
}
